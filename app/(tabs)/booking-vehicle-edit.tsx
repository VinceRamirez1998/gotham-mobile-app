import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingVehicleEditScreen() {
  const [form, setForm] = useState({
    make: "Acure",
    model: "RDX",
    year: "2023",
    color: "Black",
    plate: "ACR-2023",
  });

  const [image, setImage] = useState<string | null>(
    "https://images.unsplash.com/photo-1617531653332-bd3c66e1c0c8"
  );

  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    setLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets?.length) {
      setImage(result.assets[0].uri);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "bottom", "left", "right"]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header */}
            <View style={styles.header}>
              <Pressable onPress={() => router.push("/booking-details")}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
              </Pressable>
              <Text style={styles.headerTitle}>Update Vehicle Details</Text>
            </View>

            {/* Content */}
            <Text style={styles.title}>Update Your Vehicle Details</Text>
            <Text style={styles.subtitle}>
              Make changes to your vehicle’s details or photo. Your updates will
              be reflected in your garage immediately.
            </Text>

            <Pressable style={styles.imageBox} onPress={handleSelectImage}>
              <View style={styles.imageContent}>
                {image ? (
                  <Image
                    source={require("@/assets/images/mclaren.png")}
                    style={styles.imagePreview}
                  />
                ) : (
                  <View style={styles.imagePlaceholder} />
                )}

                <View style={styles.overlay}>
                  <Image
                    source={require("@/assets/icons/upload-icon.png")}
                    style={styles.uploadIcon}
                  />
                  <Text style={styles.overlayText}>
                    Upload a Photo of Your Vehicle
                  </Text>
                  <Text style={styles.overlaySub}>jpg, png, jpeg</Text>
                  <Text style={styles.overlayAction}>Select a new photo</Text>
                </View>
              </View>
            </Pressable>

            <Text style={styles.label}>Vehicle Make</Text>
            <TextInput
              style={styles.input}
              value={form.make}
              editable={false}
            />

            <Text style={styles.label}>Model</Text>
            <TextInput
              style={styles.input}
              value={form.model}
              editable={false}
            />

            <Text style={styles.label}>Year</Text>
            <TextInput
              style={styles.input}
              value={form.year}
              editable={false}
            />

            <Text style={styles.label}>Color</Text>
            <TextInput
              style={styles.input}
              value={form.color}
              onChangeText={(val) => handleChange("color", val)}
            />

            <Text style={styles.label}>License Plate (Optional)</Text>
            <TextInput
              style={styles.input}
              value={form.plate}
              onChangeText={(val) => handleChange("plate", val)}
            />

            <Pressable style={styles.button} onPress={() => router.back()}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </Pressable>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  flex: { flex: 1 },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: Platform.OS === "ios" ? 12 : 0,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Raleway",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#ccc",
    marginBottom: 20,
    lineHeight: 20,
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
  imageContent: {
    width: "100%",
    height: "100%",
    position: "relative",
  },

  imagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },

  imagePlaceholder: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 8,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },

  uploadIcon: {
    width: 28,
    height: 28,
    marginBottom: 8,
    resizeMode: "contain",
  },

  overlayText: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 2,
    textAlign: "center",
  },

  overlaySub: {
    fontSize: 10,
    color: "#888",
    marginBottom: 8,
    textAlign: "center",
  },

  overlayAction: {
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },

  imageLabel: { color: "#ccc", fontSize: 12, marginTop: 4 },
  imageNote: { fontSize: 10, color: "#888", marginTop: 2 },
  imageAction: {
    marginTop: 6,
    fontSize: 12,
    color: "#ccc",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
  },
});
