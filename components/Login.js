import React, {useState} from 'react';
import { Text, ScrollView, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#ffffff',
            marginTop: 60,
            paddingHorizontal: 30,
            alignContent: 'center',
            width: 300,
        },
        title:{
            fontWeight: '500',
            fontSize: 20,
            letterSpacing: 0.1,
            color: '#2E2E2E',
        },
        form:{
            marginVertical: 35,
        },
        label:{
            fontSize: 16,
            lineHeight: 18,
            color: '#666666',
            marginBottom: 3,
            fontWeight: 500,
        },
        inputField: {
            fontSize: 14,
            borderBottomWidth: 1,
            borderBottomColor: '#BFBFBF',
            paddingVertical: 6,
        },
        divider: {
            paddingVertical: 12,
        },
        buttonText: {
            fontSize: 18,
            color: '#FFFFFF',
            textAlign: "center",
        },
        buttonContainer: {
            backgroundColor: '#2B35E0',
            borderRadius: 8,
            padding: 10,
        },
        line: {
            height: 1,
            width: '45%',
            backgroundColor: '#E3E3E3'
        },
        text: {
            alignItems: 'center',

        }
    })

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType='email-address'
                    placeholder='Enter registered email'
                    value={email}
                    onChangeText={(val) => {setEmail(val)}}
                />
                <View style={styles.divider}></View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    secureTextEntry
                    placeholder='Enter password'
                    value={password}
                    onChangeText={(val) => {setPassword(val)}}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonText}>Log In</TouchableOpacity>
            </View>
            <View>
                <View style={styles.divider}></View>
                <View style={styles.text}>OR</View>
                <View style={styles.divider}></View>
            </View>
        </ScrollView>
    )
}