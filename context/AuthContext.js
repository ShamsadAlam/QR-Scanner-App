import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");

  const OtpVerification = async (mobileNumber, Otp) => {
    try {
      // Implement your OTP verification logic here

      // Assuming successful OTP verification, set the access token
      const newAccessToken = "your_generated_access_token"; // Replace with your actual access token
      setAccessToken(newAccessToken);

      // Store the access token securely
      await SecureStore.setItemAsync("accessToken", newAccessToken);
    } catch (error) {
      console.error("Error during OTP verification:", error);
      throw error; // Propagate the error for handling in the component
    }
  };

  const LogOut = async () => {
    try {
      setAccessToken("");
      await SecureStore.deleteItemAsync("accessToken");
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  };
  return (
    <AuthContext.Provider value={{ accessToken, OtpVerification, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
