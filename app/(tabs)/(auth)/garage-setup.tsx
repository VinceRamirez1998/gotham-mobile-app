import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GarageSetupScreen() {
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    plate: "",
  });
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isComplete = form.make && form.model && form.year && form.color;

  const handleImageAction = () => {
    showActionSheetWithOptions(
      {
        title: "Upload Photo",
        options: ["Take photo", "Select photo", "Cancel"],
        cancelButtonIndex: 2,
      },
      async (selectedIndex) => {
        if (selectedIndex === 0) {
          await handleTakePhoto();
        } else if (selectedIndex === 1) {
          await handleSelectPhoto();
        }
      }
    );
  };

  const handleTakePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;

    setLoading(true);
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    setLoading(false);
  };

  const handleSelectPhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    setLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </Pressable>
          <Text style={styles.headerTitle}>Garage Setup</Text>
        </View>

        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.title}>Next, Let’s Add Your Vehicle</Text>
          <Text style={styles.subtitle}>
            This will be the first car in your virtual garage. You can always
            add more later.
          </Text>

          <Pressable style={styles.imageBox} onPress={handleImageAction}>
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : image ? (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Ionicons name="cloud-upload-outline" size={32} color="#888" />
                <Text style={styles.imageLabel}>
                  Upload a Photo of Your Vehicle
                </Text>
                <Text style={styles.imageNote}>jpeg, png, jpg</Text>
                <Text style={styles.imageAction}>Select photo</Text>
              </View>
            )}
          </Pressable>

          {(["make", "model", "year", "color", "plate"] as const).map(
            (field) => (
              <View key={field}>
                <Text style={styles.label}>
                  {field === "plate"
                    ? "License Plate (Optional)"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={
                    field === "make"
                      ? "e.g. Toyota"
                      : field === "model"
                      ? "e.g. Camry"
                      : field === "year"
                      ? "e.g. 2021"
                      : field === "color"
                      ? "e.g. Midnight Blue"
                      : "e.g. ABC-1234"
                  }
                  placeholderTextColor="#aaa"
                  keyboardType={field === "year" ? "numeric" : "default"}
                  value={form[field]}
                  onChangeText={(val) => handleChange(field, val)}
                />
              </View>
            )
          )}
        </ScrollView>

        <View style={styles.footer}>
          <Pressable
            style={[styles.button, { opacity: isComplete ? 1 : 0.5 }]}
            disabled={!isComplete}
            onPress={() => router.push("/success")}
          >
            <Text style={styles.buttonText}>Add Vehicle</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  container: { flex: 1, backgroundColor: "#000" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    marginBottom: 24,
  },
  headerTitle: { fontSize: 16, fontWeight: "500", color: "#fff" },
  form: { paddingHorizontal: 24 },
  title: {
    fontSize: 24,
    fontFamily: "Raleway",
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#ccc",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22.4,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 16,
  },
  imageBox: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    overflow: "hidden",
  },
  imagePlaceholder: { alignItems: "center" },
  imageLabel: { color: "#ccc", fontSize: 12, marginTop: 4 },
  imageNote: { fontSize: 10, color: "#888", marginTop: 2 },
  imageAction: { marginTop: 6, fontSize: 12, color: "#ccc", fontWeight: "500" },
  imagePreview: { width: "100%", height: "100%", resizeMode: "cover" },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: Platform.OS === "ios" ? 32 : 24,
  },
  button: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: { color: "#000", fontWeight: "600" },
});
