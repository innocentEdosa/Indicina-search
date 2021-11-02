import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import Login from 'modules/auth';
import queryClient from 'lib/api/queryClient';
import AuthContextProvider from 'context/Auth/Auth';
import * as routes from 'lib/routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path={routes.Root}>
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
