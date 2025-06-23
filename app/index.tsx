import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebaseConfig"; // Adjust path if needed

export default function LandingScreen() {
  const [value, setValue] = useState("");
  const [sending, setSending] = useState(false);
  const [checkingLink, setCheckingLink] = useState(true);

  // --- Handle incoming email links ---
  useEffect(() => {
    const handleDeepLink = async ({ url }: { url: string }) => {
      if (isSignInWithEmailLink(auth, url)) {
        const email = await AsyncStorage.getItem("emailForSignIn");
        if (!email) {
          Alert.alert("Error", "No email found. Please try again.");
          setCheckingLink(false);
          return;
        }
        try {
          await signInWithEmailLink(auth, email, url);
          await AsyncStorage.removeItem("emailForSignIn");
          router.replace("/garage-setup"); // or "/garage"
        } catch (err: any) {
          Alert.alert("Sign-in failed", err.message);
        }
      }
      setCheckingLink(false);
    };

    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink({ url });
      else setCheckingLink(false);
    });

    const sub = Linking.addEventListener("url", handleDeepLink);
    return () => sub.remove();
  }, []);

  // --- Submit Handler ---
  const handleContinue = async () => {
    if (!value) return Alert.alert("Please enter your email or phone.");

    if (value.includes("@")) {
      // Email flow (magic link)
      setSending(true);
      const actionCodeSettings = {
        url: "https://gotham-auto-mobile-appli-8c257.firebaseapp.com", // MUST be one of your authorized domains!
        handleCodeInApp: true,
      };
      try {
        await sendSignInLinkToEmail(auth, value, actionCodeSettings);
        await AsyncStorage.setItem("emailForSignIn", value);
        Alert.alert(
          "Check your email",
          "Tap the link we sent to complete sign in."
        );
        // Optionally navigate to a "Check your email" screen
      } catch (err: any) {
        Alert.alert("Error", err.message);
      }
      setSending(false);
    } else {
      // Phone number flow placeholder
      Alert.alert(
        "Phone Auth Not Set Up",
        "You can add Firebase phone authentication here."
      );
    }
  };

  // --- Loading state if checking magic link ---
  if (checkingLink) {
    return (
      <View style={styles.loadingWrap}>
        <ActivityIndicator color="#fff" size="large" />
        <Text style={{ color: "#fff", marginTop: 16 }}>
          Checking magic link…
        </Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("@/assets/images/login.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
          <View style={styles.logoWrapper}>
            <Image
              source={require("@/assets/images/gothamlogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollForm}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Welcome To Gotham Auto</Text>
              <Text style={styles.subtitle}>
                Enter your email or phone number to log in.
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email or phone"
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={setValue}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <Pressable
                style={[styles.button, { opacity: sending ? 0.5 : 1 }]}
                onPress={handleContinue}
                disabled={sending}
              >
                <Text style={styles.buttonText}>
                  {sending ? "Sending..." : "Continue"}
                </Text>
              </Pressable>
              <Text style={styles.footer}>
                For email: You'll get a magic link.
                <br />
                For phone: (6-digit code coming soon)
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

// --- Styles (same as before, with .loadingWrap added) ---
const styles = StyleSheet.create({
  flex: { flex: 1 },
  background: { flex: 1, width: "100%", height: "100%" },
  safeArea: { flex: 1 },
  logoWrapper: {
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 120 : 100,
    marginBottom: 26,
  },
  logo: {
    width: 226,
    height: 45,
  },
  scrollForm: {
    paddingHorizontal: 24,
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: Platform.OS === "ios" ? 48 : 32,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Raleway",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#cccccc",
    textAlign: "center",
    marginBottom: 16,
    paddingBottom: 16,
  },
  input: {
    height: 48,
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Open Sans",
    color: "#ffffff",
    lineHeight: 22.4,
    marginBottom: 42,
  },
  button: {
    backgroundColor: "#f9f9f9",
    opacity: 0.9,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontWeight: "500",
  },
  footer: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: "200",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 18,
  },
  loadingWrap: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
