import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Expo icon library

export default function VerificationScreen() {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(15);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (timer === 0) return;
    const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer]);

  const handlePress = () => {
    inputRef.current?.focus();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </Pressable>
            <Text style={styles.headerTitle}>Verification</Text>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.title}>Enter Your Code</Text>
            <Text style={styles.description}>
              We’ve sent a 6-digit code to johnmyers@gmail.com.{"\n"}Enter it
              below to continue.
            </Text>

            <Pressable
              style={styles.codeContainer}
              onPress={() => inputRef.current?.focus()}
            >
              {[...Array(6)].map((_, index) => (
                <View key={index} style={styles.codeBox}>
                  <Text style={styles.codeDigit}>{code[index] || ""}</Text>
                </View>
              ))}
            </Pressable>

            <TextInput
              ref={inputRef}
              style={styles.hiddenInput}
              keyboardType="numeric"
              value={code}
              onChangeText={(val) => {
                if (val.length <= 6) setCode(val);
              }}
              autoFocus
            />

            <Text style={styles.timerText}>
              Didn't receive the code we sent you?{"\n"}RESEND CODE:{" "}
              {timer.toString().padStart(2, "0")}
            </Text>
          </View>

          {/* Bottom Button */}
          <View style={styles.footer}>
            <Pressable
              style={[styles.button, { opacity: code.length === 6 ? 1 : 0.5 }]}
              disabled={code.length !== 6}
              onPress={() => router.push("/register")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#000", // match your bg
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 32,
    lineHeight: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  codeBox: {
    width: 48,
    height: 58,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  codeDigit: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
  },
  timerText: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "left",
    lineHeight: 18,
  },
  footer: {
    paddingVertical: 24,
    paddingBottom: Platform.OS === "ios" ? 64 : 32,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
  },
});
