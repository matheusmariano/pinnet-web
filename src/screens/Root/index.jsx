import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from '../Home/';

export default function () {
  return (
    <AppContainer>
      <BrowserRouter>
        <Route
          path="/"
          component={HomeScreen}
        />
      </BrowserRouter>
    </AppContainer>
  );
}
