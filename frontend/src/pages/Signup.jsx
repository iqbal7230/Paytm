import { useState } from "react";
import { BottomWarning } from "../components/ButtomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <Heading label="Sign up" className="text-3xl font-bold text-gray-800 mb-4" />
        <SubHeading label="Enter your information to create an account" className="text-gray-600 mb-6" />
        
        {/* First Name Input */}
        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John"
          label="First Name"
          className="mb-4"
        />
        
        {/* Last Name Input */}
        <InputBox
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Doe"
          label="Last Name"
          className="mb-4"
        />
        
        {/* Email Input */}
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          placeholder="test@gmail.com"
          label="Email"
          className="mb-4"
        />
        
        {/* Password Input */}
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          label="Password"
          className="mb-6 "
          type="password"
        />
        
        {/* Sign Up Button */}
        <Button
          onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          }}
          label="Sign up"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700  transition-colors duration-300 mb-4 mt-2"
        />
        
        {/* Bottom Warning with Redirect Link */}
        <BottomWarning
          label="Already have an account?"
          buttonText="Sign in"
          to="/signin"
          className="text-sm text-gray-600"
        />
      </div>
    </div>
  );
};
