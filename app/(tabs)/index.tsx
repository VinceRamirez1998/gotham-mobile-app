import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/login.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.loginBox}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/gothamlogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Welcome To Gotham Auto</Text>
          <Text style={styles.subtitle}>
            Start by entering your email or phone number to log in.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email or phone number"
            placeholderTextColor="#aaa"
          />

          <Pressable
            style={styles.button}
            onPress={() => router.push("/verification")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Text style={styles.footer}>
            We’ll send you a one-time code to verify your identity.{"\n"}No
            password needed.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 40, // Adjust as needed
  },

  logo: {
    width: 180,
    height: 40,
  },

  safeArea: {
    flex: 1,
  },

  form: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },
  loginBox: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === "ios" ? 48 : 32,
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
    fontFamily: "Open Sans", // Ensure this font is loaded
    color: "#ffffff",
    lineHeight: 22.4,
    marginBottom: 42,
  },
  button: {
    backgroundColor: "#f9f9f9",
    opacity: 0.5,
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
});
