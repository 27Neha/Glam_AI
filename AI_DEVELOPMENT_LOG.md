# AI Development Log: GLAMORA AI

## Overview
This log details the architectural decisions, AI integration strategies, and iterative process used during the development of **GLAMORA AI** – an ultra-premium AI photo and video editing studio.

## Architecture Decisions

### 1. The "Cinematic UI" Strategy
**Goal**: Make the app feel like a high-end luxury product immediately upon launch.
**Approach**:
- Dropped standard React Native components in favor of custom-built `GlassCard` and `NeonButton` primitives.
- Integrated `expo-blur` heavily to create true depth (parallax layers).
- Implemented `expo-linear-gradient` for sleek, futuristic dark-mode coloring.
- Handled styling with **NativeWind** (Tailwind CSS) to keep component markup clean while maintaining high customization.

### 2. State & Navigation
- **Expo Router**: Chosen for file-based routing which scales perfectly for complex apps with deep linking.
- **Zustand**: Selected over Redux for minimal boilerplate and superior performance, particularly important when storing complex local image states.

### 3. AI Service Abstraction
**Challenge**: Tying UI directly to OpenAI or Replicate endpoints makes the app brittle and hard to mock during development.
**Solution**: Created `src/services/ai.service.ts`.
- This layer defines a strict contract (`enhancePortrait`, `removeBackground`).
- Allowed us to build the entire UI with realistic delay simulations (mocking) before hooking up actual billing-incurring APIs.

## Optimization Decisions

- **Reanimated Animations**: Used `react-native-reanimated` instead of standard Animated API to push all animation calculations to the UI thread. This is critical for achieving 60fps on particle effects during the Onboarding flow.
- **Image Caching**: Minimized expensive network requests by mocking heavy assets with optimized Unsplash URLs, structured for caching.

## Failed Approaches & Iterations
- *Initial Attempt*: Tried to use standard React Navigation.
- *Pivot*: Switched to Expo Router for better integration with Expo SDK 50/51 and easier deep linking for exported content.
- *Initial Attempt*: Putting complex gradient logic directly inside screens.
- *Pivot*: Abstracted `LinearGradient` into the `NeonButton` and `GlassCard` to avoid repeated logic and ensure UI consistency.

## Conclusion
The architecture is now modular, highly performant, and heavily abstracted. Replacing mock AI services with real endpoints requires zero changes to the UI components.
