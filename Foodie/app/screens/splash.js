import React from 'react';
import { Dimensions, Image, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function splashScreen({ navigation }) {
  return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: width * 0.3, height: width * 0.3 }}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/Bg Asset.png')}
          style={{ width: width * 0.1, height: width * 0.1, position: 'absolute', bottom: 10, right: 10 }}
          resizeMode="contain"
        />
      </View>
  );
}