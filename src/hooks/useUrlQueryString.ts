import { useLocation, useHistory } from 'react-router-dom';
import queryStringParser from 'query-string';
import history from 'history';

function getUrlSearchParams(location: history.Location) {
  return new URLSearchParams(location.search);
}

const useUrlQueryString = () => {
  const { replace } = useHistory();
  const location = useLocation();

  const updateUrl = (urlSearchParams: URLSearchParams) => {
    const currentUrl = `${location.pathname}${location.search}`;

    const stringifiedUrlSearchParams = urlSearchParams.toString();
    const queryString = stringifiedUrlSearchParams ? `?${stringifiedUrlSearchParams}` : '';
    const newUrl = `${location.pathname}${queryString}`;

    if (newUrl !== currentUrl) {
      replace(newUrl);
    }
  };

  const addUrlSearchParam = (param: string, value: string) => {
    const urlSearchParams = getUrlSearchParams(location);
    urlSearchParams.set(param, value);
    updateUrl(urlSearchParams);
  };

  const getUrlSearchParamValue = (param: string) => {
    const urlSearchParams = getUrlSearchParams(location);
    return urlSearchParams.get(param);
  };

  const parseUrlSearchParamsToObj = <T extends Record<string, any>>(): T => {
    const params = getUrlSearchParams(location);
    const obj = queryStringParser.parse(params.toString(), { arrayFormat: 'comma' });
    return obj as T;
  };

  return {
    addUrlSearchParam,
    getUrlSearchParamValue,
    parseUrlSearchParamsToObj,
  };
};

export default useUrlQueryString;
