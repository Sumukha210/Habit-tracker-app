# Setting Up NativeWind in Your Expo Project

This guide walks you through the process of setting up NativeWind with your Expo/React Native project.

## Installation Steps

1. **Install the required packages:**

   ```bash
   npm install nativewind tailwindcss@^3.4.17 react-native-reanimated react-native-safe-area-context
   ```

2. **Create a Tailwind configuration file:**

   ```bash
   npx tailwindcss init
   ```

3. **Update the Tailwind configuration:**

   Edit your `tailwind.config.js` file to include the following:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{js,ts,jsx,tsx}"],
     presets: [require("nativewind/preset")],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Create or update your Babel configuration:**

   Create a `babel.config.js` file with:

   ```js
   module.exports = function (api) {
     api.cache(true);
     return {
       presets: [
         ["babel-preset-expo", { jsxImportSource: "nativewind" }],
         "nativewind/babel",
       ],
     };
   };
   ```

5. **Configure Metro bundler:**

   ```bash
   npx expo customize metro.config.js
   ```

   Update the `metro.config.js` to include NativeWind:

   ```js
   const { getDefaultConfig } = require("expo/metro-config");
   const { withNativeWind } = require("nativewind/metro");

   const config = getDefaultConfig(__dirname);

   module.exports = withNativeWind(config, { input: "./src/app/globals.css" });
   ```

6. **Create TypeScript declaration file for NativeWind:**

   ```bash
   touch nativewind-env.d.ts
   ```

   Add the following content to the file:

   ```ts
   /// <reference types="nativewind/types" />
   ```

7. **Create a CSS file for NativeWind styles:**

   Create a `globals.css` file in your `src/app` folder with:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

8. **Import the CSS file in your app layout:**

   In your root layout file (e.g., `_layout.tsx`), import the CSS file:

   ```tsx
   import "./globals.css";
   ```

## Usage

Now you can use Tailwind classes in your components:

```tsx
<View className="bg-blue-500 p-4">
  <Text className="text-white font-bold">Styled with NativeWind!</Text>
</View>
```

## Troubleshooting

If you encounter issues after setting up NativeWind:

1. **Clear the Metro bundler cache:**

   ```bash
   npx expo start --clear
   ```

2. **Ensure all configuration files are properly set up:**

   - Check that `tailwind.config.js` correctly specifies the content paths
   - Verify that `babel.config.js` includes the NativeWind preset
   - Make sure `metro.config.js` is properly configured with the CSS input path

3. **Version compatibility:**
   - NativeWind 4+ requires Tailwind CSS version 3.3.0 or higher
   - Make sure all installed packages are compatible with your Expo version
