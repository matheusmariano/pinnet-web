import { render } from 'react-dom';
import screens from './screens/';

const root = document.getElementById('root');

const load = () => render(screens, root);

if (module.hot) {
  module.hot.accept('./screens/Root/', load);
}

load();
