import React, { useState } from 'react';
import { Dialog, Portal, Button, PaperProvider } from 'react-native-paper';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileForm = ({ profile, setProfile, onSave }) => {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(profile);
        showDialog();
        // navigation.goBack(); 
        navigation.navigate('profile');
        
        setTimeout(() => {
            hideDialog();
        }, 2000);
    };

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.inputText}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#888"
                    value={profile.firstName}
                    onChangeText={(text) => setProfile({ ...profile, firstName: text })}
                />
                <Text style={styles.inputText}>Last Name:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#888"
                    value={profile.lastName}
                    onChangeText={(text) => setProfile({ ...profile, lastName: text })}
                />
                <Text style={styles.inputText}>Age:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={profile.age}
                    onChangeText={(text) => setProfile({ ...profile, age: text })}
                />
                <Text style={styles.inputText}>Weight (kg):</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Weight (kg)"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={profile.weight}
                    onChangeText={(text) => setProfile({ ...profile, weight: text })}
                />
                <Text style={styles.inputText}>Height (cm):</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Height (cm)"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={profile.height}
                    onChangeText={(text) => setProfile({ ...profile, height: text })}
                />
                <Text style={styles.inputText}>Address:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="#888"
                    multiline
                    numberOfLines={3}
                    value={profile.address}
                    onChangeText={(text) => setProfile({ ...profile, address: text })}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Save Profile</Text>
                </TouchableOpacity>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}  style={styles.dialog}>
                        <Dialog.Title style={styles.dialogTitle}>Profile Updated</Dialog.Title>
                        <Dialog.Content>
                            <Text style={styles.dialogContent}>Your profile has been successfully updated!</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>OK</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </PaperProvider>

    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#3C3C46',
        marginVertical: 8,
        padding: 20,
    },
    input: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#D5FE5E',
        borderRadius: 18,
        padding: 10,
        fontSize: 16,
        marginBottom: 8,
    },
    inputText: {
        margin: 4,
        color: '#D5FE5E',
        fontSize: 20,
        // fontWeight: 'bold',
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
    dialog: {
        backgroundColor: '#3C3C46',
    },
    dialogTitle: {
        color: '#D5FE5E',
    },
    dialogContent: {
        color: '#fff',
    },
});

export default ProfileForm;