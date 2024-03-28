import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const WeatherScreen = () => {
  const [weather, setWeather] = useState({temperature: '', description: ''});


  const animatedValue = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    setWeather({
      temperature: '15°C',
      description: 'Parçalı bulutlu',
    });

    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
    ).start();
  }, [animatedValue]);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0, 171, 247, 1)', 'rgba(0, 90, 199, 1)'],
  });

  return (
    <Animated.View
      style={[styles.container, {backgroundColor: interpolatedColor}]}>
      <>
        <Text style={styles.temperature}>{weather.temperature}</Text>
        <Text style={styles.description}>{weather.description}</Text>
      </>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 24,
  },
});

export default WeatherScreen;
