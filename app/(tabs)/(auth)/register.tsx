import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function RegisterScreen() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isFormComplete = Object.values(form).every((v) => v.trim() !== "");

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Let's Get to Know You</Text>
      <Text style={styles.subtitle}>Please fill in the details below</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        value={form.firstName}
        onChangeText={(val) => handleChange("firstName", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        value={form.lastName}
        onChangeText={(val) => handleChange("lastName", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(val) => handleChange("email", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(val) => handleChange("phone", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#aaa"
        value={form.address}
        onChangeText={(val) => handleChange("address", val)}
      />

      <Pressable
        style={[styles.button, { opacity: isFormComplete ? 1 : 0.5 }]}
        disabled={!isFormComplete}
        onPress={() => {
          // TODO: save form data or send to backend
          router.push("/"); // go home or dashboard
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 80 : 60,
    paddingBottom: 40,
    backgroundColor: "#000",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 24,
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
  button: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
  },
});
