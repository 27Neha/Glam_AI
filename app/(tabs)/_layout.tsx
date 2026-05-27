import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';

import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {
  Home,
  Sparkles,
  User,
  FolderHeart,
  ShieldCheck,
} from 'lucide-react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: true,

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginBottom: 4,
        },

        tabBarActiveTintColor: '#C084FC',

        tabBarInactiveTintColor:
          'rgba(255,255,255,0.35)',

        tabBarStyle: styles.tabBar,

        tabBarBackground: () => (
          <BlurView
            intensity={90}
            tint="dark"
            style={
              StyleSheet.absoluteFillObject
            }
          />
        ),
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          tabBarIcon: ({
            color,
            focused,
          }) => (
            <View
              style={[
                styles.iconWrapper,

                focused &&
                  styles.activeIconWrapper,
              ]}
            >
              <Home
                color={color}
                size={22}
                strokeWidth={2.4}
              />
            </View>
          ),
        }}
      />

      {/* AUTH */}
      <Tabs.Screen
        name="(auth)"
        options={{
          title: 'Auth',

          tabBarIcon: ({
            color,
            focused,
          }) => (
            <View
              style={[
                styles.iconWrapper,

                focused &&
                  styles.activeIconWrapper,
              ]}
            >
              <ShieldCheck
                color={color}
                size={22}
                strokeWidth={2.4}
              />
            </View>
          ),
        }}
      />

      {/* CREATE */}
      <Tabs.Screen
        name="editor"
        options={{
          title: 'Create',

          tabBarIcon: ({ focused }) => (
            <View style={styles.centerWrap}>
              <LinearGradient
                colors={[
                  '#9333EA',
                  '#2563EB',
                ]}
                start={{
                  x: 0,
                  y: 0,
                }}
                end={{
                  x: 1,
                  y: 1,
                }}
                style={[
                  styles.centerButton,

                  focused &&
                    styles.centerButtonFocused,
                ]}
              >
                <Sparkles
                  color="#FFF"
                  size={28}
                  strokeWidth={2.5}
                />
              </LinearGradient>
            </View>
          ),
        }}
      />

      {/* EXPLORE / TABS */}
      <Tabs.Screen
        name="(tabs)"
        options={{
          title: 'Explore',

          tabBarIcon: ({
            color,
            focused,
          }) => (
            <View
              style={[
                styles.iconWrapper,

                focused &&
                  styles.activeIconWrapper,
              ]}
            >
              <FolderHeart
                color={color}
                size={22}
                strokeWidth={2.4}
              />
            </View>
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',

          tabBarIcon: ({
            color,
            focused,
          }) => (
            <View
              style={[
                styles.iconWrapper,

                focused &&
                  styles.activeIconWrapper,
              ]}
            >
              <User
                color={color}
                size={22}
                strokeWidth={2.4}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',

    left: 18,
    right: 18,
    bottom: 18,

    height: 82,

    borderRadius: 34,

    backgroundColor:
      'rgba(10,10,15,0.75)',

    borderWidth: 1,

    borderColor:
      'rgba(255,255,255,0.08)',

    elevation: 0,

    paddingTop: 8,

    shadowColor: '#9333EA',

    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.28,

    shadowRadius: 24,

    ...(Platform.OS === 'android'
      ? {
          elevation: 14,
        }
      : {}),
  },

  iconWrapper: {
    width: 48,
    height: 48,

    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },

  activeIconWrapper: {
    backgroundColor:
      'rgba(192,132,252,0.14)',
  },

  centerWrap: {
    top: -28,

    justifyContent: 'center',
    alignItems: 'center',
  },

  centerButton: {
    width: 74,
    height: 74,

    borderRadius: 37,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#9333EA',

    shadowOffset: {
      width: 0,
      height: 12,
    },

    shadowOpacity: 0.55,

    shadowRadius: 18,

    borderWidth: 2,

    borderColor:
      'rgba(255,255,255,0.18)',
  },

  centerButtonFocused: {
    transform: [{ scale: 1.05 }],
  },
});