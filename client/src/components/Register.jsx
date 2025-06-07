import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const orbitCircles = [1000, 800, 600];
const orbitBalls = [
  { top: "15%", left: "20%", size: "w-5 h-5", color: "bg-yellow-400" },
  { top: "35%", left: "85%", size: "w-3 h-3", color: "bg-pink-400" },
  { top: "65%", left: "5%", size: "w-2.5 h-2.5", color: "bg-blue-400" },
  { top: "80%", left: "75%", size: "w-3 h-3", color: "bg-green-400" },
];

export default function Register({ setUser }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const getTransform = (mult = 0.01) => ({
    x: useTransform(mouseX, (x) => (x - window.innerWidth * 2) * mult),
    y: useTransform(mouseY, (y) => (y - window.innerHeight * 2) * mult),
  });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/register`, form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gradient-to-b from-black to-purple-950 text-white relative flex items-center justify-center px-4"
    >
      {/* Orbit Circles */}
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        {orbitCircles.map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border-4 border-purple-500/30 opacity-20"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Orbit Balls */}
      {orbitBalls.map((ball, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${ball.size} ${ball.color} z-0`}
          style={{
            top: ball.top,
            left: ball.left,
            ...getTransform(0.02),
          }}
        />
      ))}

      {/* Register Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md p-8 bg-black bg-opacity-60 rounded-xl backdrop-blur-md shadow-lg space-y-5"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-extrabold text-center text-purple-400 mb-4">
          Create <span className="text-white">Account</span>
        </h2>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full p-3 rounded bg-white/10 border border-purple-500 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-3 rounded bg-white/10 border border-purple-500 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          className="w-full p-3 rounded bg-white/10 border border-purple-500 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
