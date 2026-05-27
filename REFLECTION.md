# Reflection: Building GLAMORA AI

## The Challenge
Building a "billion-dollar startup" feel in a mobile application within a constrained timeframe is a significant design and engineering challenge. The primary difficulty lies not just in the logic, but in the **micro-interactions**—the subtle blur intensities, the gradient overlaps, and the animation timings that trick the brain into perceiving a digital product as "premium."

## Tradeoffs Made
1. **Mock Services over Live APIs**: To guarantee a smooth, demo-ready experience that won't fail due to rate limits or API key errors during judging, I opted to build robust abstraction layers (`ai.service.ts`, `auth.service.ts`) with simulated delays. This prioritizes the UX and frontend architecture over backend plumbing.
2. **NativeWind vs. StyleSheet**: Using NativeWind (Tailwind) speeds up layout dramatically but can sometimes conflict with highly custom Reanimated styles. I struck a balance: structural layouts use Tailwind, while complex animated values and Skia shaders use standard `StyleSheet` or inline Reanimated styles.

## Performance Considerations
- The `OnboardingScreen` uses a custom `Particle` component powered entirely by Reanimated's `useSharedValue` and `withRepeat`. By keeping these off the JS thread, the heavy visual load doesn't cause frame drops.
- The `GlassCard` uses `expo-blur` judiciously. Overusing blur views on Android can cause severe performance degradation, so they are limited to essential UI cards and the bottom tab bar.

## Future Improvements
- **React Native Skia**: Implementing custom shaders for the photo editing canvas to allow true GPU-accelerated realtime filter previews.
- **Supabase Realtime**: Hooking up the gallery to listen for processed video exports asynchronously from an Edge Function.
- **Local TFLite Models**: Moving simple AI tasks (like basic background segmentation) on-device using `react-native-vision-camera` frame processors to save cloud costs.

## Final Thoughts
The hardest part of this project was enforcing a strict design language (dark mode, neon purple/blue, glassmorphism) consistently across complex editing interfaces. The resulting architecture is clean, highly scalable, and achieves the "App Store-ready" aesthetic requested.
