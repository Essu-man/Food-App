import React from 'react';
import { Button, Text, View } from 'react-native';

export default function splashScreen({ navigation }) {
  return (
    <View>
      <Text>Food</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}