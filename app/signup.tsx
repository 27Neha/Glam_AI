import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { router } from 'expo-router';

import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen() {
  const [username, setUsername] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [confirmPassword, setConfirmPassword] =
    useState('');

  const handleSignup = () => {
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert(
        'Missing Fields',
        'Please fill all fields.'
      );

      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        'Password Error',
        'Passwords do not match.'
      );

      return;
    }

    router.push('/create-profile');
  };

  return (
    <LinearGradient
      colors={['#050510', '#141427']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Join GLAMORA AI and create
          cinematic AI content.
        </Text>

        {/* USERNAME */}
        <TextInput
          placeholder="Username"
          placeholderTextColor="#777"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        {/* EMAIL */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* CONFIRM */}
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#777"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={
            setConfirmPassword
          }
        />

        {/* BUTTON */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleSignup}
        >
          <LinearGradient
            colors={[
              '#9333EA',
              '#2563EB',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.signupButton}
          >
            <Text style={styles.signupText}>
              Create Account
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* LOGIN */}
        <TouchableOpacity
          onPress={() =>
            router.push('/login')
          }
        >
          <Text style={styles.loginText}>
            Already have an account?
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  title: {
    color: '#FFF',
    fontSize: 38,
    fontWeight: '900',
    marginBottom: 12,
  },

  subtitle: {
    color: '#9CA3AF',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 42,
  },

  input: {
    height: 60,

    backgroundColor:
      'rgba(255,255,255,0.06)',

    borderWidth: 1,

    borderColor:
      'rgba(255,255,255,0.08)',

    borderRadius: 22,

    paddingHorizontal: 20,

    color: '#FFF',

    fontSize: 16,

    marginBottom: 18,
  },

  signupButton: {
    height: 60,

    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 12,
  },

  signupText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },

  loginText: {
    color: '#C084FC',

    textAlign: 'center',

    marginTop: 28,

    fontSize: 14,

    fontWeight: '600',
  },
});