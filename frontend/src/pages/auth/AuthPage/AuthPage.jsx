import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { registerUser, loginApi } from "../../../Api";
import { message, Button } from "antd";
import { useAuth } from "../../../AuthProvider";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", isLogin ? "" : email);
    formData.append("password", password);
    formData.append("confirmPassword", isLogin ? "" : confirmPassword);

    if (!isLogin && profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      if (!isLogin) {
        const data = await registerUser(formData);
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          message.success("User registered successfully");
          setIsLogin(true);
          login(data.access_token)

          navigate("/");
        } else {
          message.error(data.error);
        }
      } else {
        const loginData = { username, password };

        loginApi(loginData)
          .then((response) => {
            const data = response.data;
            if (data.access_token) {
              localStorage.setItem("token", data.access_token);
              message.success("Logged in successfully");
              login(data.access_token)
              navigate("/");
            } else {
              message.error(data.error);
            }
          })
          .catch((error) => {
            message.error("Username or Password is incorrect");
          });
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {!isLogin && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <Button
            loading={isLoading}
            htmlType="submit"
            className="button-submit"
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
      <div className="auth-image-container">
        <img
          src={require("../../../assets/Images/heroimage.jpg")}
          alt="Authentication"
        />
      </div>
    </div>
  );
};

export default AuthPage;
