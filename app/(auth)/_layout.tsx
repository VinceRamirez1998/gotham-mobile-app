import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <Slot />
    </ActionSheetProvider>
  );
}
