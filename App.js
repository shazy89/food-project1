import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import PracticeScreen from './src/screens/PracticeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Practice: PracticeScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

export default createAppContainer(navigator);
