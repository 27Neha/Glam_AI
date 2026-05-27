import React from 'react';
import { router } from 'expo-router';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { GlassCard } from '../../src/components/GlassCard';

import {
  Camera,
  Wand2,
  Scissors,
  UserCircle2,
  ChevronRight,
} from 'lucide-react-native';

const QuickTool = ({
  title,
  icon: Icon,
  color,
  onPress,
}: {
  title: string;
  icon: any;
  color: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={styles.quickToolContainer}
    activeOpacity={0.82}
    onPress={onPress}
  >
    <GlassCard intensity={40} style={styles.quickToolCard}>
      <Icon color={color} size={28} />
    </GlassCard>

    <Text style={styles.quickToolText}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function HomeDashboard() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>
              Welcome Back
            </Text>

            <Text style={styles.greeting}>
              Creator Studio
            </Text>
          </View>

          <Image
            source={{
              uri: 'https://i.pravatar.cc/100?img=5',
            }}
            style={styles.avatar}
          />
        </View>

        {/* Hero Banner */}
        <TouchableOpacity
          activeOpacity={0.92}
          style={styles.heroContainer}
          onPress={() => router.push('/editor')}
        >
          <LinearGradient
            colors={['#9333EA', '#2563EB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradient}
          >
            <View style={styles.heroContent}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroBadge}>
                  NEW AI MODEL
                </Text>

                <Text style={styles.heroTitle}>
                  Cinematic Portrait v2
                </Text>

                <Text style={styles.heroSubtitle}>
                  Create viral AI edits with futuristic lighting and premium beauty effects.
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.heroButton}
                  onPress={() => router.push('/editor')}
                >
                  <Text style={styles.heroButtonText}>
                    Start Editing
                  </Text>

                  <ChevronRight
                    color="white"
                    size={18}
                  />
                </TouchableOpacity>
              </View>

              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80',
                }}
                style={styles.heroImage}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* AI Tools */}
        <Text style={styles.sectionTitle}>
          AI Creative Tools
        </Text>

        <View style={styles.quickToolsRow}>
          <QuickTool
            title="Photo AI"
            icon={Camera}
            color="#C084FC"
            onPress={() => router.push('/editor')}
          />

          <QuickTool
            title="Video FX"
            icon={Scissors}
            color="#60A5FA"
            onPress={() =>
              alert('Video Editor Coming Soon')
            }
          />

          <QuickTool
            title="Enhance"
            icon={Wand2}
            color="#22D3EE"
            onPress={() => router.push('/editor')}
          />

          <QuickTool
            title="Avatars"
            icon={UserCircle2}
            color="#F9A8D4"
            onPress={() =>
              alert('AI Avatar Studio')
            }
          />
        </View>

        {/* Trending */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Trending Presets
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.presetScroll}
        >
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity
              key={item}
              activeOpacity={0.9}
              style={styles.presetCard}
              onPress={() => router.push('/editor')}
            >
              <Image
                source={{
                  uri: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80&sig=${item}`,
                }}
                style={styles.presetImage}
              />

              <LinearGradient
                colors={[
                  'transparent',
                  'rgba(0,0,0,0.88)',
                ]}
                style={styles.presetGradient}
              >
                <Text style={styles.presetTitle}>
                  Cyberpunk Glow
                </Text>

                <Text style={styles.presetUses}>
                  1.2M uses
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080811',
  },

  scrollContent: {
    padding: 24,
    paddingTop: 64,
  },

  smallText: {
    color: '#A1A1AA',
    fontSize: 14,
    marginBottom: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 34,
  },

  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFF',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#9333EA',
  },

  heroContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 34,

    shadowColor: '#9333EA',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 24,

    elevation: 12,
  },

  heroGradient: {
    padding: 26,
  },

  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heroBadge: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,

    backgroundColor: 'rgba(255,255,255,0.2)',

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 20,

    alignSelf: 'flex-start',
    marginBottom: 16,

    overflow: 'hidden',
  },

  heroTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 10,
    maxWidth: 190,
  },

  heroSubtitle: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 13,
    lineHeight: 20,
    maxWidth: 180,
  },

  heroButton: {
    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    backgroundColor: 'rgba(255,255,255,0.18)',

    paddingVertical: 12,
    paddingHorizontal: 16,

    borderRadius: 18,

    alignSelf: 'flex-start',
  },

  heroButtonText: {
    color: 'white',
    fontWeight: '700',
  },

  heroImage: {
    width: 110,
    height: 110,
    borderRadius: 60,

    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 16,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 18,
  },

  seeAll: {
    color: '#D8B4FE',
    fontSize: 14,
    fontWeight: '700',
  },

  quickToolsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
  },

  quickToolContainer: {
    alignItems: 'center',
    width: '22%',
  },

  quickToolCard: {
    width: 68,
    height: 68,
    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 10,
    padding: 0,
  },

  quickToolText: {
    color: '#D4D4D8',
    fontSize: 12,
    fontWeight: '600',
  },

  presetScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },

  presetCard: {
    width: 150,
    height: 220,

    borderRadius: 22,
    marginRight: 18,

    overflow: 'hidden',
  },

  presetImage: {
    width: '100%',
    height: '100%',
  },

  presetGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    padding: 14,
    paddingTop: 36,
  },

  presetTitle: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '800',
  },

  presetUses: {
    color: '#D4D4D8',
    fontSize: 12,
    marginTop: 4,
  },
});