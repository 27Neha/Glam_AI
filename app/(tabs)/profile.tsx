import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import {
  ChevronRight,
  Settings,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  Crown,
  Camera,
  Pencil,
} from 'lucide-react-native';

import { GlassCard } from '../../src/components/GlassCard';

const SettingsItem = ({
  icon: Icon,
  title,
  value,
  onPress,
  danger,
}: any) => (
  <TouchableOpacity
    style={styles.settingsItem}
    activeOpacity={0.85}
    onPress={onPress}
  >
    <View style={styles.settingsItemLeft}>
      <View
        style={[
          styles.iconContainer,

          danger && {
            backgroundColor:
              'rgba(255,75,75,0.12)',
          },
        ]}
      >
        <Icon
          color={
            danger ? '#FF4B4B' : '#d08cf8'
          }
          size={20}
        />
      </View>

      <Text
        style={[
          styles.settingsItemTitle,

          danger && {
            color: '#FF4B4B',
          },
        ]}
      >
        {title}
      </Text>
    </View>

    <View style={styles.settingsItemRight}>
      {value && (
        <Text
          style={styles.settingsItemValue}
        >
          {value}
        </Text>
      )}

      <ChevronRight
        color="#666"
        size={20}
      />
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const [profileImage, setProfileImage] =
    useState(
      'https://i.pravatar.cc/150?img=5'
    );

  const pickProfileImage = async () => {
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

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
        showsVerticalScrollIndicator={false}
      >
        {/* PROFILE HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={pickProfileImage}
            style={styles.avatarWrapper}
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
                size={14}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>
                Neha Mahajan
              </Text>

              {/* EDIT BUTTON */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  Alert.alert(
                    'Edit Profile',
                    'Profile editing opened.'
                  )
                }
              >
                <Pencil
                  color="#C084FC"
                  size={16}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.email}>
              creator@glamora.ai
            </Text>

            <View style={styles.proBadge}>
              <Crown
                color="#FFD700"
                size={12}
              />

              <Text style={styles.proBadgeText}>
                PRO MEMBER
              </Text>
            </View>
          </View>
        </View>

        {/* CREDITS */}
        <GlassCard
          intensity={40}
          style={styles.creditsCard}
        >
          <View>
            <Text style={styles.creditsTitle}>
              AI Credits Remaining
            </Text>

            <Text style={styles.creditsValue}>
              4,850
            </Text>
          </View>

          <TouchableOpacity
            style={styles.topUpButton}
            activeOpacity={0.9}
            onPress={() =>
              Alert.alert(
                'Subscription',
                'Upgrade to PRO to unlock unlimited AI generations.'
              )
            }
          >
            <Text style={styles.topUpText}>
              Upgrade
            </Text>
          </TouchableOpacity>
        </GlassCard>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <GlassCard
          intensity={25}
          style={styles.settingsGroup}
        >
          <SettingsItem
            icon={Settings}
            title="General Settings"
            onPress={() =>
              Alert.alert(
                'Settings',
                'General settings opened.'
              )
            }
          />

          <SettingsItem
            icon={CreditCard}
            title="Subscription"
            value="Pro Plan"
            onPress={() =>
              Alert.alert(
                'Subscription',
                'Manage your subscription.'
              )
            }
          />

          <SettingsItem
            icon={Bell}
            title="Notifications"
            onPress={() =>
              Alert.alert(
                'Notifications',
                'Notification settings opened.'
              )
            }
          />
        </GlassCard>

        {/* SUPPORT */}
        <Text style={styles.sectionTitle}>
          Support
        </Text>

        <GlassCard
          intensity={25}
          style={styles.settingsGroup}
        >
          <SettingsItem
            icon={Shield}
            title="Privacy Policy"
            onPress={() =>
              Alert.alert(
                'Privacy',
                'Privacy policy opened.'
              )
            }
          />

          <SettingsItem
            icon={HelpCircle}
            title="Help Center"
            onPress={() =>
              Alert.alert(
                'Help',
                'Help center opened.'
              )
            }
          />
        </GlassCard>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.85}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Logged out successfully.'
            )
          }
        >
          <LogOut
            color="#FF4B4B"
            size={20}
          />

          <Text style={styles.logoutText}>
            Log Out
          </Text>
        </TouchableOpacity>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B12',
  },

  scrollContent: {
    padding: 24,
    paddingTop: 70,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 3,
    borderColor: '#9333EA',
  },

  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    width: 30,
    height: 30,

    borderRadius: 15,

    backgroundColor: '#9333EA',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 2,
    borderColor: '#0B0B12',
  },

  profileInfo: {
    marginLeft: 20,
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFF',
  },

  email: {
    color: '#9CA3AF',
    marginTop: 6,
    marginBottom: 12,
  },

  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'flex-start',

    backgroundColor:
      'rgba(255,215,0,0.12)',

    borderWidth: 1,
    borderColor:
      'rgba(255,215,0,0.25)',

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 30,

    gap: 6,
  },

  proBadgeText: {
    color: '#FFD700',
    fontWeight: '800',
    fontSize: 11,
  },

  creditsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 32,
  },

  creditsTitle: {
    color: '#9CA3AF',
    marginBottom: 8,
  },

  creditsValue: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: '900',
  },

  topUpButton: {
    backgroundColor: '#FFF',

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 20,
  },

  topUpText: {
    color: '#111',
    fontWeight: '700',
  },

  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',

    marginBottom: 16,
  },

  settingsGroup: {
    padding: 0,
    marginBottom: 28,
  },

  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 18,

    borderBottomWidth: 1,
    borderBottomColor:
      'rgba(255,255,255,0.05)',
  },

  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor:
      'rgba(155,81,224,0.12)',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 16,
  },

  settingsItemTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  settingsItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingsItemValue: {
    color: '#9CA3AF',
    marginRight: 8,
  },

  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:
      'rgba(255,75,75,0.12)',

    borderWidth: 1,
    borderColor:
      'rgba(255,75,75,0.25)',

    padding: 18,

    borderRadius: 22,
  },

  logoutText: {
    color: '#FF4B4B',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
}); 