import { BodyMeasurements } from '../types/Measurement';

export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

export const calculateBodyFat = (measurements: BodyMeasurements, gender: 'male' | 'female', height: number): number => {
  const { waist, neck, hip } = measurements;
  
  if (gender === 'male') {
    return 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  } else {
    return 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  }
};

