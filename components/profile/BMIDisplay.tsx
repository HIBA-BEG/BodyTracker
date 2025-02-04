import { getBMICategory } from '@/utils/bmiCalculator';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BMIDisplay({ bmi }: { bmi: number }) {
   const category = getBMICategory(bmi);

  return (
    <View style={styles.BMIContainer}>
      <Text style={styles.BMIText}>BMI: {bmi}</Text>
      <Text style={styles.BMIText}>You're " {category} "</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  BMIText: {
    color: '#D5FE5E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  BMIContainer: {
    backgroundColor: '#2C2C35',
    padding: 10,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#D5FE5E',
    alignItems: 'center',
  },
});
