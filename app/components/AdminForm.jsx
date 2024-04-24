"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.error) {
        throw new Error(res.error);
      }

      router.push("/admin-dashboard");
    } catch (error) {
      console.error("An error occurred during sign in:", error.message);
    }
  };
  return (
    <main
      className="w-full h-screen flex flex-col items-center justify-center sm:px-4"
      style={{
        backgroundImage:
          "url('https://d2lwtouoc9qh9n.cloudfront.net/wp-content/uploads/2023/01/wordpress-basics-featured-image-jpg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full space-y-6 text-gray-600 bg-white rounded-md shadow-md sm:max-w-md">
        <div className="text-center">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="logo"
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to Admin Dashboard
            </h3>
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Admin Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.email && (
                <p className="text-rose-500">This field is required</p>
              )}
            </div>
            <div>
              <label className="font-medium">Password</label>
              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-2 px-3 py-2 pr-10 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-rose-500">This field is required</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Log in to Admin Dashboard
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminForm;
