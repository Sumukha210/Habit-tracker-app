# Getting Started with Habit Tracker

Follow these steps to set up and run the project:

## 1. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

## 2. Configure Network Settings (Optional)

If you are using a mobile device to test the app, ensure that both your computer and mobile device are connected to the same Wi-Fi network. This is crucial for the development server to communicate with your mobile device.

1. **Find Your Computer's IP Address:**

   - Open Command Prompt and run the following command:

     ```bash
     ipconfig
     ```

   - Look for the `IPv4 Address` under the active network connection (usually `Wi-Fi`).
   - It should look something like `192.168.1.100`.

2. **Set the Packager Hostname:**

   To ensure your mobile device can connect to the development server:

   ```bash
   setx REACT_NATIVE_PACKAGER_HOSTNAME "localhost"
   ```

   > **Note:** Replace `192.168.1.100` with your computer's actual IP address. Restart your terminal after running this command.

## 3. Start the App

Use the command below to start the development server:

```bash
npx expo start
```

## 4. Test the App on Your Device

1. Install the Expo Go app on your mobile device from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) or [Apple App Store](https://apps.apple.com/app/expo-go/id982107779).
2. Open the Expo Go app and scan the QR code displayed in your terminal after running `npx expo start`.
3. The app should load on your mobile device.

## Troubleshooting

If the app does not load:

- Ensure your computer and mobile device are on the same Wi-Fi network
- Check that the packager hostname is correctly set
- Try clearing the Metro cache: `npx expo start --clear`

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [NativeWind Documentation](https://www.nativewind.dev/)
