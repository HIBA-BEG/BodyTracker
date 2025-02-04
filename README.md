# User Profile Management App

This is a **React Native** application built with **Expo** for managing user profiles, tracking body metrics, and visualizing progress through photos and timelapse videos.

## Features

### User Profile Management
- Create and update user information (Name, Age, Nationality, Weight, Height, Address, etc.).
- Automatic **BMI (Body Mass Index) Calculation** based on weight and height.
- Store data using **AsyncStorage**.

### Body Fat Percentage Calculation
- Input body measurements (waist, neck, hip, etc.).
- Calculate fat percentage using the **US Navy Method**.
/* - Weekly progress tracking with **graph visualization**. */

// ### Photo Capture & Organization
- Use the **camera** to take progress photos.
- Automatically organize photos by **date and week**.
- Generate a **timelapse video** from stored photos.

### Image Filtering
- Apply **filters** (black & white, contrast, brightness) to enhance photos before generating the timelapse.

## Application Screens (Tabs)

1. **Home Screen**
   - Displays user profile & BMI.
   - Buttons for quick access to features.

2. **Body Fat Calculation Screen**
   - Form to input body measurements.
   - Displays calculated fat percentage & weekly progress chart.

3. **Photo Capture Screen**
   - Camera interface for taking photos.
   - Organized gallery for viewing past photos.

4. **Timelapse Generation Screen**
   - Preview selected photos.
   - Apply filters and generate a timelapse video.

## Technologies Used

- **React Native with Expo** - Quick setup and simplified development.
- **React Navigation** - Screen management.
- **AsyncStorage / SQLite** - Local data persistence.
- **react-native-camera / expo-camera** - Photo capture.
- **react-native-chart-kit / react-native-svg** - Graphs for tracking progress.
- **react-native-image-filter-kit** - Image filters.
- **react-native-video-processing** - Timelapse video creation.

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npx expo start
   ```
3. Open the app using:
   - Development build
   - Android emulator
   - iOS simulator
   - Expo Go

## Learn More
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Guide](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

---

This project was created using [Expo](https://expo.dev) and [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

