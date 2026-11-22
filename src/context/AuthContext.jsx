import React, { createContext, useState } from 'react';

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {

  // Get logged-in user from localStorage
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  // Register User
  const registerUser = (newUser) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExist = users.find((user) => {
      return user.email === newUser.email;
    });

    if (alreadyExist) {
      return {
        success: false,
        message: "User already exists"
      };
    }

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return {
      success: true,
      message: "User registered successfully"
    };
  };


  // Login User
  const loginUser = (email, password) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExist = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!alreadyExist) {
      return {
        success: false,
        message: "Invalid email or password"
      };
    }

    setUser(alreadyExist);

    // Save correct user in localStorage
    localStorage.setItem("currentUser", JSON.stringify(alreadyExist));

    return {
      success: true,
      message: "User logged in successfully",
      user: alreadyExist
    };
  };


  // Logout User
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };


  return (
    <AuthContextData.Provider
      value={{
        registerUser,
        loginUser,
        logoutUser,
        user
      }}
    >
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;