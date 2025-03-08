import React from 'react';
import { Dimensions, Image, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function splashScreen({ navigation }) {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: width * 0.5, height: width * 0.5, resizeMode: 'contain' }}
        />
      </View>
  );
}