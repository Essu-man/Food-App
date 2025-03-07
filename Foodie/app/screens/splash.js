import React from 'react';
import { Image, View } from 'react-native';

export default function splashScreen({ navigation }) {
  return (
      <View className="flex-1 justify-center items-center bg-white">
        <Image
          source={require('../assets/Logo.png')}
          className="w-32 h-32"
        />
      </View>
  );
}