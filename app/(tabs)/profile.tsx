import React, { useState, useEffect } from 'react';
import { ScrollView, Alert, View, Text, Image, TouchableOpacity } from 'react-native';
import { loadProfile, saveProfile } from '@/utils/profileService';
import ProfileForm from '@/components/profile/ProfileForm';
import BMIDisplay from '@/components/profile/BMIDisplay';
import { calculateBMI } from '@/utils/bmiCalculator';
import { StyleSheet } from 'react-native';

export const UserProfile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        age: '',
        nationality: '',
        weight: '',
        height: '',
        address: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [bmi, setBmi] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const savedProfile = await loadProfile();
            if (savedProfile) {
                setProfile(savedProfile);
                setBmi(savedProfile.bmi);
            }
        };
        fetchProfile();
    }, []);

    const handleSave = async () => {
        try {
            if (!profile.firstName || !profile.lastName) {
                Alert.alert('Error', 'Please fill in required fields');
                return;
            }

            const bmiValue = calculateBMI(Number(profile.weight), Number(profile.height));
            const profileWithBMI = {
                ...profile,
                bmi: bmiValue,
                lastUpdated: new Date().toISOString(),
            };

            await saveProfile(profileWithBMI);
            Alert.alert('Success', 'Profile saved successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to save profile');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.viewprofile} >
            {!isEditing ? (

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.titleContainer}>My Profile</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
                            <Text style={styles.buttonText}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.displayInfo}>
                        <Image
                            source={require('@/assets/images/profile.jpg')}
                            style={styles.imgProfile}
                        />
                        <Text style={styles.text}>First Name:
                            <Text style={styles.textInput}>{profile.firstName}</Text>
                        </Text>
                        <Text style={styles.text}>Last Name:
                            <Text style={styles.textInput}>{profile.lastName}</Text>
                        </Text>
                        <Text style={styles.text}>Weight:
                            <Text style={styles.textInput}>{profile.weight} kg
                            </Text>
                        </Text>
                        <Text style={styles.text}>Height:
                            <Text style={styles.textInput}>{profile.height} cm
                            </Text>
                        </Text>
                        <Text style={styles.text}>Address:
                            <Text style={styles.textInput}>{profile.address}
                            </Text>
                        </Text>
                    </View>

                    {bmi && <BMIDisplay bmi={bmi} />}
                </View>
            ) : (
                <View>
                    <View style={styles.header}>
                        <Text style={styles.titleContainer}>Update my Infos</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setIsEditing(false)} >
                            <Text style={styles.buttonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <ProfileForm profile={profile} setProfile={setProfile} onSave={handleSave} />
                </View>

            )}
        </ScrollView>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    viewprofile: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2C2C35',
        padding: 12,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    displayInfo: {
        flex: 1,
        justifyContent: 'center',
        gap: 8,
        padding: 20,
    },
    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        margin: 20,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3C3C46',
        padding: 20,
        borderRadius: 18,
        width: '100%',
    },
    button: {
        backgroundColor: '#D5FE5E',
        padding: 10,
        borderRadius: 18,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#D5FE5E',
        fontSize: 16,
        // fontWeight: 'bold',
    },
    textInput: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    }
});
