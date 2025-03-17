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
    <div>
    <div className="flex items-center justify-center h-screen bg-gray-50 ">
      <form
        onSubmit={handleLogin}
        className="bg-gray-50 p-8 shadow-lg rounded-lg w-96 flex flex-col items-center ml-160 "
      >
        <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        {/* Email Input */}
        <div className="w-full">
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
        <div className="w-full mt-4">
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
        <div className="w-full text-right mt-2">
          <Link to="/forgot-password" className="text-green-900 hover:underline text-sm">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-900 text-white px-4 py-2 rounded-xl mt-5 w-full hover:bg-green-800 transition"
        >
          Sign in
        </button>
      </form>
    
    </div>
    <div className="flex justify-center items-center h-screen -mt-180">
      <img src={image} alt="office" className="w-180 h-145 shadow-lg mt-60 mr-140 " />
     
    </div>
    <div>
    <h1 className="ml-15 text-2xl text-white font-bold">Welcome Back!</h1>
    <p className="ml-15 text-sm text-white mt-5">Access you workspace and continue your journey with us.</p>
    </div>
    </div>
  );
};

export default Login;
