import React from "react";
import { View, Text, TextInput, Button, Image, Pressable } from "react-native";
import { StatusBar } from "react-native";

const OTPVerification = ({
  otp,
  setOtp,
  handleOTPVerification,
  navigation,
}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        position: "relative",
      }}
    >
      <Pressable
        onPress={handleBack}
        style={{ position: "absolute", top: 15, left: 15 }}
      >
        <Image
          source={require("../assets/back.png")}
          style={{
            width: 30,
            height: 30,
          }}
          resizeMode="contain"
        />
      </Pressable>
      <Text style={{ fontSize: 18 }}>Enter OTP</Text>
      <TextInput
        placeholder="OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => setOtp(text)}
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
        onPress={handleOTPVerification}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600" }}>
          Verify OTP
        </Text>
      </Pressable>
      <StatusBar />
    </View>
  );
};

export default OTPVerification;
