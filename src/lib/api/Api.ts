import ResponseError from 'lib/utils/ResponseError';
import { GraphQLClient } from 'graphql-request';

function isJsonResponse(contentType?: string | null) {
  if (!contentType) return false;
  return contentType.includes('application/json');
}

export interface Transformer<In, Out> {
  (data: In): Out;
}

export async function customGraphlRequest<T, R = T>(
  query: string,
  variables?: Record<string, any>,
  options?: RequestInit,
  transform?: Transformer<R, any>,
) {
  const graphQLClient = new GraphQLClient(process.env.REACT_APP_GITHUB_GRAPHQL_ENDPOINT || '', options);
  const res = await graphQLClient.request(query, variables);
  if (transform) {
    return transform(res);
  }
  return res;
}

export async function customFetchRequest<T, R = T>(
  path: string,
  options?: RequestInit,
  transform?: Transformer<R, any>,
): Promise<R> {
  try {
    const res = await fetch(path, options);

    if (!res.ok) {
      let errorMessage = '';

      if (res.headers.get('content-type')?.includes('json')) {
        const resBody = await res.json();
        errorMessage = resBody.errors || resBody.message;
      } else {
        errorMessage = await res.text();
      }

      throw new ResponseError(errorMessage || 'invalid response from server', String(res.status));
    }

    if (isJsonResponse(res.headers.get('content-type'))) {
      if (transform) {
        return transform(await res.json());
      }

      return res.json();
    }
    return Promise.resolve('' as any);
  } catch (err) {
    if (err instanceof ResponseError) {
      console.error('api error: ', err);
      throw err;
    }
    throw err;
  }
}

type ApiOptions = Omit<RequestInit, 'body' | 'method'>;

class Api {
  url: string;

  private readonly defaultHeaders: { Authorization: string; 'Content-Type': string };

  constructor(url: string) {
    this.url = url;
    this.defaultHeaders = {
      Authorization: '',
      'Content-Type': 'application/json',
    };

    this.setAuth = this.setAuth.bind(this);
  }

  setAuth(accessToken: string) {
    this.defaultHeaders.Authorization = `bearer ${accessToken}`;
  }

  post<T, R = T>(
    query: string,
    variables?: Record<string, any>,
    options?: ApiOptions,
    transform?: Transformer<R, any>,
  ) {
    return this.graphqlRequest(
      query,
      variables,
      {
        method: 'POST',
        ...(options || {}),
      },
      transform,
    );
  }

  fetchPost<T, R = T>(
    path: string,
    body: Record<string, unknown>,
    options?: ApiOptions,
    transform?: Transformer<R, any>,
  ) {
    return this.request<T, R>(
      path,
      {
        method: 'POST',
        body: JSON.stringify(body),
        ...options,
      },
      transform,
    );
  }

  private request: typeof customFetchRequest = (path, options, transform) =>
    customFetchRequest(
      path,
      {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...(options?.headers || {}),
        },
      },
      transform,
    );

  private graphqlRequest: typeof customGraphlRequest = (query, variables, options, transform) =>
    customGraphlRequest(
      query,
      variables,
      {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...(options?.headers || {}),
        },
      },
      transform,
    );
}

export default Api;
