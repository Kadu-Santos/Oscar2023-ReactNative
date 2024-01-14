import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Michroma_400Regular } from '@expo-google-fonts/michroma';
import * as Font from 'expo-font';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Michroma_400Regular': Michroma_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!isReady){
    return <Loading/>
  }

  return (
    <Routes />
  );
}
