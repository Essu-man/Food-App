import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function splashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.heading}>Free Delivery Offers</Text>
      <Text style={styles.description}>
      Get all your loved foods in one once place,
      you just place the orer we do the rest
      </Text>

      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>


      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.nextButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 300,
    backgroundColor: '#A3BFFA',
    borderRadius: 20,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#1A202C',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#F56565',
  },
  nextButton: {
    backgroundColor: '#F6AD55',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skipText: {
    color: '#A0AEC0',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});