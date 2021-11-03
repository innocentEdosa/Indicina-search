import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClientProvider } from 'react-query';
import Login from 'modules/auth/pages/Login';
import queryClient from 'lib/api/queryClient';
import AuthContextProvider from 'context/Auth/Auth';
import * as routes from 'lib/routes';
import Logout from 'modules/auth/pages/Logout';

const Search = lazy(() => import('modules/search/pages/Search'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Suspense fallback={null}>
          <Router>
            <Switch>
              <Route exact path={routes.Root} component={Login} />
              <Route path={routes.Search} component={Search} />
              <Route path={routes.Logout} component={Logout} />
            </Switch>
          </Router>
        </Suspense>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
