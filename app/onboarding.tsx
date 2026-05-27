import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { router } from 'expo-router';

import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingScreen() {
  return (
    <LinearGradient
      colors={['#050510', '#17172A']}
      style={styles.container}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
        }}
        style={styles.heroImage}
      />

      <Text style={styles.title}>
        Create Viral AI Content
      </Text>

      <Text style={styles.subtitle}>
        AI beauty retouching, cinematic reels, avatars, and premium edits.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  heroImage: {
    width: 280,
    height: 380,
    borderRadius: 36,
    marginBottom: 40,
  },

  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
  },

  subtitle: {
    color: '#AAA',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#9333EA',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 24,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 16,
  },
});