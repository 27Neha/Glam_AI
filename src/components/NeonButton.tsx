import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface NeonButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  style,
  ...props
}) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'primary':
        return ['#9b51e0', '#56287c']; // Purple gradient
      case 'secondary':
        return ['#2f80ed', '#1c4e8e']; // Blue gradient
      case 'outline':
        return ['transparent', 'transparent'];
      default:
        return ['#9b51e0', '#56287c'];
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'sm': return { paddingVertical: 8, paddingHorizontal: 16 };
      case 'lg': return { paddingVertical: 18, paddingHorizontal: 32 };
      case 'md':
      default: return { paddingVertical: 14, paddingHorizontal: 24 };
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        variant === 'outline' && styles.outline,
        style
      ]}
      {...props}
    >
      <LinearGradient
        colors={getGradientColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, getPadding()]}
      >
        <Text style={[styles.text, variant === 'outline' && styles.textOutline]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#9b51e0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  outline: {
    borderWidth: 1,
    borderColor: '#9b51e0',
    shadowOpacity: 0,
    elevation: 0,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  textOutline: {
    color: '#9b51e0',
  },
});
