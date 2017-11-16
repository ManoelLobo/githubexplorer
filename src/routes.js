import React from 'react';
import { StackNavigator } from 'react-navigation';

import Issues from 'pages/issues';
import Repositories from 'pages/repositories';

const createRootNavigator = () => StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
});

export default createRootNavigator;
