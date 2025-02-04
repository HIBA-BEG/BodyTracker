import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BodyMeasurements, BodyFatResult } from '../types/Measurement';
import { Profile } from '../types/Profile';

export const useUserData = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [bodyMeasurements, setBodyMeasurements] = useState<BodyMeasurements[]>([]);
  const [bodyFatResults, setBodyFatResults] = useState<BodyFatResult[]>([]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const profileData = await AsyncStorage.getItem('userProfile');
      const measurementsData = await AsyncStorage.getItem('bodyMeasurements');
      const resultsData = await AsyncStorage.getItem('bodyFatResults');

      if (profileData) setProfile(JSON.parse(profileData));
      if (measurementsData) setBodyMeasurements(JSON.parse(measurementsData));
      if (resultsData) setBodyFatResults(JSON.parse(resultsData));
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const saveUserProfile = async (profile: Profile) => {
    try {
      await AsyncStorage.setItem('profile', JSON.stringify(profile));
      setProfile(profile);
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };

  const saveBodyMeasurements = async (measurements: BodyMeasurements) => {
    try {
      const updatedMeasurements = [...bodyMeasurements, measurements];
      await AsyncStorage.setItem('bodyMeasurements', JSON.stringify(updatedMeasurements));
      setBodyMeasurements(updatedMeasurements);
    } catch (error) {
      console.error('Error saving body measurements:', error);
    }
  };

  const saveBodyFatResult = async (result: BodyFatResult) => {
    try {
      const updatedResults = [...bodyFatResults, result];
      await AsyncStorage.setItem('bodyFatResults', JSON.stringify(updatedResults));
      setBodyFatResults(updatedResults);
    } catch (error) {
      console.error('Error saving body fat result:', error);
    }
  };

  return {
    profile,
    bodyMeasurements,
    bodyFatResults,
    saveUserProfile,
    saveBodyMeasurements,
    saveBodyFatResult,
  };
};

