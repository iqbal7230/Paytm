import { BottomWarning } from "../components/ButtomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username: email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store token in local storage
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        setError(error.response.data.message || "An error occurred");
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("Error: " + error.message);
      }
      console.error("Sign in error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          {error && <p className="text-red-500">{error}</p>}
          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignin} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
