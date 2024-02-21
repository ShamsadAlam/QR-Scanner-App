import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { StatusBar } from "react-native";
import OTPVerification from "./OTPVerification";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    setOtp("");
  }, [showOTPVerification]);

  const handleNext = () => {
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      setShowOTPVerification(true);
    } else {
      alert("Invalid mobile number. Please enter a valid 10-digit number.");
    }
  };

  const handleOTPVerification = () => {
    // Validate OTP (You may want to implement proper OTP validation logic here)
    if (otp.length === 6 && /^\d+$/.test(otp)) {
      // Navigate to HomeScreen upon successful OTP verification
      navigation.replace("Home");
    } else {
      // Handle invalid OTP
      alert("Invalid OTP. Please enter a valid 6-digit OTP.");
    }
  };

  return showOTPVerification ? (
    <OTPVerification
      otp={otp}
      setOtp={setOtp}
      handleOTPVerification={handleOTPVerification}
    />
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>Enter Mobile Number</Text>
      <TextInput
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
        style={{
          borderWidth: 1,
          width: 250,
          height: 40,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      />
      <Pressable
        style={{
          width: 250,
          height: 40,
          borderWidth: 0.2,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1189d9",
          borderColor: "#fff",
        }}
        onPress={handleNext}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600" }}>
          Next
        </Text>
      </Pressable>
      <StatusBar />
    </View>
  );
};

export default LoginScreen;
