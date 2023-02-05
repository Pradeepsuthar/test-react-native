import React from 'react';
import {Provider} from 'react-redux';
import IndexNavigator from './src/navigators';
import store from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import Theme from './src/theme';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Theme />
        <IndexNavigator />
        {/* <LoginScreen /> */}
        {/* <OnBoardScreen /> */}
        {/* <RegisterScreen /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
