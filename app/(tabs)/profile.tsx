// app/(tabs)/profile.tsx

import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import FooterNav from "../../components/FooterNav";

const screenWidth = Dimensions.get("window").width;
const FOOTER_HEIGHT = 64;

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const personalInfo = [
    { label: "First Name",    value: "John" },
    { label: "Last Name",     value: "Smith" },
    { label: "Email",         value: "johnsmith@gmail.com" },
    { label: "Phone Number",  value: "(555) 123-4567" },
    { label: "Address",       value: "123 Main St, Brooklyn, NY 11201" },
  ];

  return (
    <SafeAreaView style={[styles.page, { paddingBottom: insets.bottom }]}>
      <ImageBackground
        source={require("@/assets/images/profile-bg.webp")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <Pressable onPress={() => router.back()} style={styles.headerButton}>
            <Image
              source={require("@/assets/icons/signout.png")}
              style={styles.headerIcon}
            />
          </Pressable>
        </View>


        {/* This wrapper pushes its children to the bottom */}
        <View
          style={[
            styles.contentWrapper,
            {
              paddingBottom: FOOTER_HEIGHT + insets.bottom + 16,
            },
          ]}
        >
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Personal Information</Text>
              <Pressable
                onPress={() => router.push("/profile/edit")}
                style={styles.editButton}
              >
                <Text style={styles.editText}>Edit</Text>
                <Image
                  source={require("@/assets/icons/edit-icon.png")}
                  style={styles.editIcon}
                />
              </Pressable>
            </View>

            {personalInfo.map((f) => (
              <View key={f.label} style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>{f.label}</Text>
                <Text style={styles.fieldValue}>{f.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sticky footer */}
        <View
          style={[
            styles.footer,
            {
              bottom: insets.bottom,
              height: FOOTER_HEIGHT,
            },
          ]}
        >
          <FooterNav />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  headerButton: {
    width: 50,
    height: 50,
    borderRadius: 30,         
    backgroundColor: "#191919",
    justifyContent: "center",  
    alignItems: "center",     
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "rgba(34,34,34,0.8)",
    borderRadius: 12,
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontSize: 14,
    color: "#888",
    marginRight: 4,
  },
  editIcon: {
    width: 16,
    height: 16,
    tintColor: "#888",
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  fieldLabel: {
    width: 130,     
    fontSize: 14,
    color: "#aaa",
  },
  fieldValue: {
    flex: 1,  
    fontSize: 14,
    color: "#fff",
    textAlign: "left",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
