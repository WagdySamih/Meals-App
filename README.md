# Meals App

A React Native learning project built with Expo, focusing on navigation patterns and state management.

## Learning Goals

- **Navigation** — Stack navigation and Drawer navigation via React Navigation
- **State Management** — Global state with Redux Toolkit and local state with React Context

## Tech Stack

| Category | Library |
|---|---|
| Framework | React Native + Expo 56 |
| Navigation | React Navigation (Native Stack + Drawer) |
| Global State | Redux Toolkit + React Redux |
| Language | TypeScript |
| Icons | Lucide React Native |

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode (for emulators)

### Install & Run

```bash
# Install dependencies
npm install

# Start Expo dev server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Project Structure

```
meals-app/
├── index.ts              # Entry point
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Static data & constants
│   ├── models/           # TypeScript interfaces & types
│   ├── screens/          # Screen components
│   └── store/            # Redux store, slices & Context
└── package.json
```

## Key Concepts Practiced

- Nested navigators (Drawer wrapping Stack)
- Passing params between screens
- Redux slices with `createSlice`
- `useSelector` / `useDispatch` hooks
- React Context for local/shared state
