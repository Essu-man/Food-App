import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, Image, View } from 'react-native';


const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/Sign-up');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Image
        source={require('../assets/')}
        style={{ width: '30%', height: '30%' }}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/Bg Asset.png')}
        style={{ width: '90%', height: '90%', position: 'absolute', bottom: 0, right: 0 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;