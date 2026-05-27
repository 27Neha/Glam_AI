import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Play } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 48 - 16) / 2; // 2 columns, padding, gap

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Projects</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Avatars</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridContainer}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <TouchableOpacity key={item} style={styles.gridItem}>
              <Image 
                source={{ uri: `https://images.unsplash.com/photo-1512413913426-304400593b4a?w=400&q=80&sig=${item}` }} 
                style={styles.itemImage}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.itemGradient}
              >
                {index % 3 === 0 && (
                  <View style={styles.videoBadge}>
                    <Play color="#FFF" size={12} fill="#FFF" />
                    <Text style={styles.videoDuration}>0:15</Text>
                  </View>
                )}
                <Text style={styles.itemDate}>Today</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '800',
  },
  scrollContent: {
    paddingHorizontal: 24,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginRight: 12,
  },
  activeTab: {
    backgroundColor: '#9b51e0',
  },
  tabText: {
    color: '#A0A0A0',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFF',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: itemWidth,
    height: itemWidth * 1.3,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  itemDate: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
  videoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
  },
  videoDuration: {
    color: '#FFF',
    fontSize: 10,
    marginLeft: 4,
    fontWeight: '600',
  },
});
