import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function ProfileEdit() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName]   = useState('Smith');
  const [email, setEmail]         = useState('johnsmith@gmail.com');
  const [phone, setPhone]         = useState('(555) 123-4567');
  const [address, setAddress]     = useState('123 Main St, Brooklyn, NY 11201');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Update Personal Information</Text>
      </View>

      {/* Body */}
      <Text style={styles.title}>Update Your Info</Text>
      <Text style={styles.subtitle}>
        Keep your details current so we can better serve you.
      </Text>

      {/* Form Fields */}
      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="(555) 123-4567"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, styles.addressInput]}
          value={address}
          onChangeText={setAddress}
          placeholder="123 Main St, Brooklyn, NY 11201"
          placeholderTextColor="#888"
          multiline
        />
      </View>

      {/* Continue Button */}
      <Pressable
        style={styles.button}
        onPress={() => router.push('/profile/verification')}
      >
        <Text style={styles.buttonText}>Continue to Verification</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,        // 16px left/right padding for all content
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 8,
  },
  title: {
    color: '#FFF',
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: '600',
    marginTop: 24,
  },
  subtitle: {
    color: '#AAA',
    paddingHorizontal: 16,
    fontSize: 14,
    marginTop: 4,
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 16,
    flexShrink: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 16,
  },
  input: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,       // 16px inside each field
    color: '#FFF',
  },
  addressInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 'auto',            // push to bottom
    marginBottom: 20,             // leave safe-area space
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});
