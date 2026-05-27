import { StatusBar } from 'expo-status-bar';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Sparkles,
  Crown,
  User,
  ArrowRight,
} from 'lucide-react-native';

import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const tools = [
  {
    title: 'AI Beauty',
    subtitle:
      'One tap cinematic face retouch',
    color1: '#9333EA',
    color2: '#4F46E5',
    pro: false,
  },

  {
    title: 'Magic Retouch',
    subtitle:
      'Remove acne & imperfections',
    color1: '#2563EB',
    color2: '#7C3AED',
    pro: true,
  },

  {
    title: 'Background AI',
    subtitle:
      'AI generated futuristic scenes',
    color1: '#EC4899',
    color2: '#7C3AED',
    pro: true,
  },

  {
    title: 'Video Editor',
    subtitle:
      'Create viral cinematic reels',
    color1: '#06B6D4',
    color2: '#2563EB',
    pro: false,
  },
];

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#030308',
      }}
    >
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >
        {/* HERO */}
        <LinearGradient
          colors={[
            '#050510',
            '#111827',
            '#1E1B4B',
          ]}
          style={{
            paddingTop: 80,
            paddingHorizontal: 24,
            paddingBottom: 44,
            borderBottomLeftRadius: 42,
            borderBottomRightRadius: 42,
          }}
        >
          {/* TOP ROW */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent:
                'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 42,
                  fontWeight: '900',
                  letterSpacing: 1,
                }}
              >
                GLAMORA AI
              </Text>

              <Text
                style={{
                  color:
                    'rgba(255,255,255,0.65)',
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                AI Creator Studio
              </Text>
            </View>

            {/* PROFILE */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                router.push(
                  '/(tabs)/profile'
                )
              }
              style={{
                width: 54,
                height: 54,
                borderRadius: 27,

                backgroundColor:
                  'rgba(255,255,255,0.08)',

                justifyContent:
                  'center',

                alignItems: 'center',

                borderWidth: 1,

                borderColor:
                  'rgba(255,255,255,0.08)',
              }}
            >
              <User
                color="#FFF"
                size={24}
              />
            </TouchableOpacity>
          </View>

          {/* HERO CARD */}
          <TouchableOpacity
            activeOpacity={0.92}
            onPress={() =>
              router.push(
                '/(tabs)/editor'
              )
            }
            style={{
              marginTop: 34,
            }}
          >
            <LinearGradient
              colors={[
                '#9333EA',
                '#2563EB',
              ]}
              style={{
                borderRadius: 34,

                paddingVertical: 24,
                paddingHorizontal: 24,

                shadowColor: '#7C3AED',

                shadowOpacity: 0.7,

                shadowRadius: 30,

                elevation: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent:
                    'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 26,
                      fontWeight: '900',
                    }}
                  >
                    Start Creating
                  </Text>

                  <Text
                    style={{
                      color:
                        'rgba(255,255,255,0.82)',

                      marginTop: 8,

                      lineHeight: 22,

                      width: 220,
                    }}
                  >
                    AI-powered beauty edits
                    and viral cinematic reels.
                  </Text>
                </View>

                <ArrowRight
                  color="#FFF"
                  size={28}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        {/* TOOLS */}
        <View
          style={{
            paddingHorizontal: 22,
            marginTop: 34,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: '900',
              marginBottom: 22,
            }}
          >
            AI Creative Tools
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent:
                'space-between',
            }}
          >
            {tools.map((tool) => (
              <TouchableOpacity
                key={tool.title}
                activeOpacity={0.9}
                onPress={() =>
                  router.push(
                    '/(tabs)/editor'
                  )
                }
                style={{
                  width: width * 0.43,
                  marginBottom: 20,
                }}
              >
                <LinearGradient
                  colors={[
                    tool.color1,
                    tool.color2,
                  ]}
                  style={{
                    borderRadius: 32,
                    padding: 20,
                    height: 220,

                    justifyContent:
                      'space-between',

                    shadowColor: tool.color1,

                    shadowOpacity: 0.5,

                    shadowRadius: 24,

                    elevation: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent:
                        'space-between',
                    }}
                  >
                    <View
                      style={{
                        width: 64,
                        height: 64,

                        borderRadius: 22,

                        backgroundColor:
                          'rgba(255,255,255,0.18)',

                        justifyContent:
                          'center',

                        alignItems: 'center',
                      }}
                    >
                      <Sparkles
                        color="#FFF"
                        size={28}
                      />
                    </View>

                    {tool.pro && (
                      <View
                        style={{
                          flexDirection:
                            'row',

                          alignItems:
                            'center',

                          backgroundColor:
                            'rgba(0,0,0,0.25)',

                          paddingHorizontal: 10,

                          paddingVertical: 6,

                          borderRadius: 20,

                          gap: 6,
                        }}
                      >
                        <Crown
                          color="#FFD700"
                          size={12}
                        />

                        <Text
                          style={{
                            color:
                              '#FFD700',

                            fontSize: 11,

                            fontWeight:
                              '800',
                          }}
                        >
                          PRO
                        </Text>
                      </View>
                    )}
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 21,
                        fontWeight: '900',
                      }}
                    >
                      {tool.title}
                    </Text>

                    <Text
                      style={{
                        color:
                          'rgba(255,255,255,0.82)',

                        marginTop: 8,

                        lineHeight: 20,
                      }}
                    >
                      {tool.subtitle}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}