import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import image from "../assets/images/office.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Image Section */}
      <div className="hidden lg:flex flex-col mr-30 items-center text-center text-white bg-green-900 p-8 rounded-lg shadow-lg ml-8 max-w-sm">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-sm mt-4">Access your workspace and continue your journey with us.</p>
      </div>

      {/* Form Section */}
      <div className="bg-gray-50 p-8 shadow-lg rounded-lg w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleLogin} className="w-full">
          {/* Email Input */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-xl p-2 w-full bg-white"
            />
          </div>

          {/* Password Input */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-xl p-2 w-full bg-white"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="w-full text-right mb-4">
            <Link to="/forgot-password" className="text-green-900 hover:underline text-sm">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-900 text-white px-4 py-2 rounded-xl w-full hover:bg-green-800 transition"
          >
            Sign in
          </button>
        </form>
      </div>

      {/* Welcome Message Section */}
      
    </div>
  );
};

export default Login;