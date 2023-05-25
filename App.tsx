import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import codePush from 'react-native-code-push';

function App() {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);
  return (
    <View>
      <Text>Hello Code Push updated to v3</Text>
    </View>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
