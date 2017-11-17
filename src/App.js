/**
 * GoNative - Desafio 02
 * Manoel Thiago Nogueira
 */
import 'config/ReactotronConfig';

import React from 'react';
import createRootNavigator from 'routes';

const App = () => {
  const Layout = createRootNavigator();

  return <Layout />;
};

export default App;
