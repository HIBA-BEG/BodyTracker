import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadProfile = async () => {
    try {
        const savedProfile = await AsyncStorage.getItem('userProfile');
        return savedProfile ? JSON.parse(savedProfile) : null;
    } catch (error) {
        throw new Error('Failed to load profile');
    }
};

export const saveProfile = async (profile: any) => {
    try {
        await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
    } catch (error) {
        throw new Error('Failed to save profile');
    }
};