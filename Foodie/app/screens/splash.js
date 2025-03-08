import React from 'react';
import { Dimensions, Image, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function splashScreen({ navigation }) {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: width * 0.3, height: width * 0.3, resizeMode: 'contain' }}
        />
        <Image
          source={require('../assets/Bg Asset.png')}
          style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', position: 'absolute', bottom: 10, right: 10 }}
        />
      </View>
  );
}