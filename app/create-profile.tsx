import React, {
  useState,
  useEffect,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { router } from 'expo-router';

import { Camera } from 'lucide-react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function CreateProfileScreen() {
  const [profileImage, setProfileImage] =
    useState(
      'https://i.pravatar.cc/300?img=12'
    );

  const [name, setName] =
    useState('');

  const [bio, setBio] =
    useState('');

  /* AUTO ASK GALLERY ACCESS */
  useEffect(() => {
    (async () => {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  /* PICK PROFILE IMAGE */
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Permission Needed',
        'Please allow gallery access.'
      );

      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync(
        {
          mediaTypes:
            ImagePicker.MediaTypeOptions.Images,

          quality: 1,

          allowsEditing: true,

          aspect: [1, 1],
        }
      );

    if (!result.canceled) {
      setProfileImage(
        result.assets[0].uri
      );
    }
  };

  /* CONTINUE */
  const continueToApp = () => {
    if (!name || !bio) {
      Alert.alert(
        'Incomplete Profile',
        'Please complete your profile.'
      );

      return;
    }

    Alert.alert(
      'Enable Notifications',
      'Get AI trends, premium drops and viral templates notifications.',
      [
        {
          text: 'Skip',
          style: 'cancel',
          onPress: () =>
            router.replace('/(tabs)'),
        },

        {
          text: 'Enable',
          onPress: () =>
            router.replace('/(tabs)'),
        },
      ]
    );
  };

  return (
    <LinearGradient
      colors={['#050510', '#17172A']}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* TITLE */}
        <Text style={styles.title}>
          Create Profile
        </Text>

        <Text style={styles.subtitle}>
          Personalize your creator identity
          and start generating viral AI
          content.
        </Text>

        {/* IMAGE */}
        <TouchableOpacity
          style={styles.avatarWrapper}
          activeOpacity={0.9}
          onPress={pickImage}
        >
          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.avatar}
          />

          <View style={styles.cameraBadge}>
            <Camera
              color="#FFF"
              size={18}
            />
          </View>
        </TouchableOpacity>

        {/* NAME */}
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#777"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* BIO */}
        <TextInput
          placeholder="Your Bio"
          placeholderTextColor="#777"
          style={[
            styles.input,
            styles.bioInput,
          ]}
          multiline
          value={bio}
          onChangeText={setBio}
        />

        {/* BUTTON */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={continueToApp}
        >
          <LinearGradient
            colors={[
              '#9333EA',
              '#2563EB',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </LinearGradient>
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
    marginBottom: 10,
  },

  subtitle: {
    color: '#9CA3AF',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 42,
  },

  avatarWrapper: {
    alignSelf: 'center',
    marginBottom: 42,
  },

  avatar: {
    width: 130,
    height: 130,

    borderRadius: 65,

    borderWidth: 3,

    borderColor: '#9333EA',
  },

  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#9333EA',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 2,

    borderColor: '#050510',
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

  bioInput: {
    height: 110,

    paddingTop: 18,

    textAlignVertical: 'top',
  },

  button: {
    height: 60,

    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 16,
  },

  buttonText: {
    color: '#FFF',

    fontSize: 16,

    fontWeight: '800',
  },
});