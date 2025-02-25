import { MdAlternateEmail } from "react-icons/md"; 
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const togglePasswordView = () => setShowPassword(!showPassword);
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({ email: "", password: "" });
  };

  const handleSubmit = () => {
    let newErrors = { email: "", password: "" };
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log(isSignUp ? "Signing up..." : "Logging in...");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md p-5 bg-gray-900 flex flex-col items-center gap-3 rounded-xl shadow-lg">
        <img src="/logo.png" alt="logo" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl font-semibold">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span className="text-white cursor-pointer" onClick={toggleAuthMode}>
            {isSignUp ? "Login" : "Sign up"}
          </span>
        </p>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
            <MdAlternateEmail />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
            <FaFingerprint />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordView}
              />
            )}
          </div>
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>

        <button
          className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base"
          onClick={handleSubmit}
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/5 h-[2px] bg-gray-800"></div>
          <h3 className="text-xs md:text-sm px-4 text-gray-500">Or</h3>
          <div className="w-2/5 h-[2px] bg-gray-800"></div>
        </div>

        <div className="w-full flex items-center justify-evenly gap-2">
          <div className="p-2 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <BsApple className="text-lg" />
          </div>
          <div className="p-1 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <img src="/google-icon.png" alt="google-icon" className="w-6" />
          </div>
          <div className="p-2 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FaXTwitter className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
