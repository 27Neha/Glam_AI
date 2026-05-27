import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { GlassCard } from '../../src/components/GlassCard';

import {
  SlidersHorizontal,
  Image as ImageIcon,
  Sparkles,
  Wand2,
  ArrowLeft,
  Download,
} from 'lucide-react-native';

import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const EditorTool = ({
  icon: Icon,
  title,
  isActive,
  onPress,
}: any) => (
  <TouchableOpacity
    style={styles.toolButton}
    onPress={onPress}
    activeOpacity={0.85}
  >
    <View
      style={[
        styles.toolIconContainer,
        isActive && styles.toolIconActive,
      ]}
    >
      <Icon
        color={isActive ? '#FFF' : '#A0A0A0'}
        size={24}
      />
    </View>

    <Text
      style={[
        styles.toolText,
        isActive && styles.toolTextActive,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default function EditorScreen() {
  const [activeTab, setActiveTab] =
    useState('Beauty');

  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80'
  );

  const [processing, setProcessing] =
    useState(false);

  const pickImage = async () => {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setProcessing(true);

      setTimeout(() => {
        setImage(result.assets[0].uri);
        setProcessing(false);
      }, 2500);
    }
  };

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.85}
        >
          <ArrowLeft
            color="#FFF"
            size={24}
          />
        </TouchableOpacity>

        <Text style={styles.topTitle}>
          AI Studio
        </Text>

        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.85}
        >
          <Download
            color="#FFF"
            size={24}
          />
        </TouchableOpacity>
      </View>

      {/* EDITOR IMAGE */}
      <View style={styles.canvasContainer}>
        <TouchableOpacity
          activeOpacity={0.95}
          onPress={pickImage}
        >
          <Image
            source={{ uri: image }}
            style={styles.canvasImage}
            resizeMode="cover"
          />

          <LinearGradient
            colors={[
              'transparent',
              'rgba(0,0,0,0.75)',
            ]}
            style={styles.imageOverlay}
          />
        </TouchableOpacity>

        {/* AI PROCESSING */}
        {processing && (
          <View style={styles.processingOverlay}>
            <GlassCard
              intensity={70}
              style={styles.processingCard}
            >
              <Sparkles
                color="#C084FC"
                size={36}
              />

              <Text
                style={styles.processingText}
              >
                AI Processing...
              </Text>

              <Text
                style={
                  styles.processingSubtext
                }
              >
                Enhancing cinematic beauty
              </Text>
            </GlassCard>
          </View>
        )}
      </View>

      {/* CONTROLS */}
      <GlassCard
        intensity={50}
        style={styles.controlsCard}
      >
        {/* SLIDER */}
        <View style={styles.sliderContainer}>
          <View style={styles.sliderHeader}>
            <Text style={styles.sliderLabel}>
              Intensity
            </Text>

            <Text style={styles.sliderValue}>
              85%
            </Text>
          </View>

          <View style={styles.sliderTrack}>
            <LinearGradient
              colors={['#9b51e0', '#2f80ed']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.sliderFill,
                { width: '85%' },
              ]}
            />

            <View
              style={[
                styles.sliderThumb,
                { left: '85%' },
              ]}
            />
          </View>
        </View>

        {/* TOOL TABS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          style={styles.toolsScroll}
        >
          <EditorTool
            icon={Sparkles}
            title="Beauty"
            isActive={
              activeTab === 'Beauty'
            }
            onPress={() =>
              setActiveTab('Beauty')
            }
          />

          <EditorTool
            icon={Wand2}
            title="AI Tools"
            isActive={
              activeTab === 'AI Tools'
            }
            onPress={() =>
              setActiveTab('AI Tools')
            }
          />

          <EditorTool
            icon={ImageIcon}
            title="Background"
            isActive={
              activeTab === 'Background'
            }
            onPress={() =>
              setActiveTab('Background')
            }
          />

          <EditorTool
            icon={SlidersHorizontal}
            title="Adjust"
            isActive={
              activeTab === 'Adjust'
            }
            onPress={() =>
              setActiveTab('Adjust')
            }
          />
        </ScrollView>

        {/* SUB TOOLS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          style={styles.subToolsScroll}
        >
          {[
            'Smooth',
            'Jawline',
            'Eyes',
            'Teeth',
            'Makeup',
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.subToolCard}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={[
                  '#9333EA',
                  '#2563EB',
                ]}
                style={styles.subToolImageMock}
              >
                <Sparkles
                  color="#FFF"
                  size={20}
                />
              </LinearGradient>

              <Text
                style={styles.subToolText}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ACTION BUTTONS */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.9}
            onPress={pickImage}
          >
            <ImageIcon
              color="#FFF"
              size={20}
            />

            <Text
              style={styles.actionButtonText}
            >
              Upload
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.exportButton}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={[
                '#9333EA',
                '#2563EB',
              ]}
              style={
                styles.exportGradient
              }
            >
              <Download
                color="#FFF"
                size={20}
              />

              <Text
                style={
                  styles.exportButtonText
                }
              >
                Export
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,

    zIndex: 10,
  },

  iconButton: {
    width: 46,
    height: 46,

    borderRadius: 23,

    backgroundColor:
      'rgba(255,255,255,0.08)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  topTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
  },

  canvasContainer: {
    flex: 1,
    marginTop: -100,
    zIndex: 1,
  },

  canvasImage: {
    width: width,
    height: height * 0.75,
  },

  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },

  controlsCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    height: height * 0.43,

    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    padding: 24,
    paddingTop: 30,

    zIndex: 20,
  },

  sliderContainer: {
    marginBottom: 24,
  },

  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 14,
  },

  sliderLabel: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },

  sliderValue: {
    color: '#C084FC',
    fontWeight: '700',
  },

  sliderTrack: {
    height: 8,

    backgroundColor:
      'rgba(255,255,255,0.12)',

    borderRadius: 10,

    position: 'relative',
  },

  sliderFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,

    borderRadius: 10,
  },

  sliderThumb: {
    position: 'absolute',

    width: 22,
    height: 22,

    borderRadius: 12,

    backgroundColor: '#FFF',

    top: -7,

    marginLeft: -11,
  },

  toolsScroll: {
    marginBottom: 26,
    maxHeight: 72,
  },

  toolButton: {
    alignItems: 'center',
    marginRight: 26,
  },

  toolIconContainer: {
    width: 54,
    height: 54,

    borderRadius: 27,

    backgroundColor:
      'rgba(255,255,255,0.05)',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 8,
  },

  toolIconActive: {
    backgroundColor: '#9333EA',
  },

  toolText: {
    color: '#A0A0A0',
    fontSize: 12,
    fontWeight: '600',
  },

  toolTextActive: {
    color: '#FFF',
  },

  subToolsScroll: {
    maxHeight: 100,
  },

  subToolCard: {
    alignItems: 'center',
    marginRight: 16,
  },

  subToolImageMock: {
    width: 66,
    height: 66,

    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 8,
  },

  subToolText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },

  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 24,
  },

  actionButton: {
    width: '47%',

    height: 56,

    borderRadius: 18,

    backgroundColor:
      'rgba(255,255,255,0.08)',

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
    gap: 8,
  },

  actionButtonText: {
    color: '#FFF',
    fontWeight: '700',
  },

  exportButton: {
    width: '47%',
    borderRadius: 18,
    overflow: 'hidden',
  },

  exportGradient: {
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
    gap: 8,
  },

  exportButtonText: {
    color: '#FFF',
    fontWeight: '800',
  },

  processingOverlay: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:
      'rgba(0,0,0,0.45)',
  },

  processingCard: {
    width: 250,

    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },

  processingText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',

    marginTop: 18,
  },

  processingSubtext: {
    color: '#A1A1AA',
    marginTop: 10,
  },
});