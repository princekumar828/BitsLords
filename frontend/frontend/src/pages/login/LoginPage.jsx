import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { useForm } from "react-hook-form";
import useAuthStore from "../store/authStore.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { login, user, googleLogin } = useAuthStore();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
    } catch (error) {
      toast.error("Login failed");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      toast.success(`Logged in as ${user.name}`);
      navigate("/app");
    }
  }, [user, navigate]);

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Login
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-primary"
            >
              Forgot password?
            </Link>

            {/* ✅ Fixed Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed relative z-50"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-sm font-semibold text-[#5a7184]">
              Do not have an account?{" "}
              <Link to="/signup" className="text-primary">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
