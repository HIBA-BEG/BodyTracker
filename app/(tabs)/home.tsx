import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useUserData } from '../../hooks/useUserData';
import { calculateBMI } from '../../utils/bmiCalculator';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { profile } = useUserData();

  const bmi = profile ? calculateBMI(profile.weight, profile.height) : null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome, {profile?.firstName}</Text>
      {bmi && <Text style={styles.bmi}>Your BMI: {bmi.toFixed(2)}</Text>}
      <Button
        title="Update Profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <Button
        title="Body Fat Calculator"
        onPress={() => navigation.navigate('BodyFatCalculator')}
      />
      <Button
        title="Photo Gallery"
        onPress={() => navigation.navigate('PhotoGallery')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  bmi: {
    fontSize: 18,
    marginBottom: 20,
  },
});
