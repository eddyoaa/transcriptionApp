import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/app/navigation/RootNavigator';
import { initDatabase } from './src/db/migrations/init';

export default function App(): React.JSX.Element {
  useEffect(() => {
    initDatabase().catch((error) => {
      console.warn('DB init failed', error);
    });
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
