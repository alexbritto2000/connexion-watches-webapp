"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Input, Checkbox } from "@heroui/react";

import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        index < rating ? (
          <IoStar key={index} className="w-3" />
        ) : (
          <IoIosStarOutline key={index} className="w-3" />
        )
      ))}
    </div>
  );
};

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-[#057A55] focus-within:ring-0 focus-within:border-theme-color flex rounded-md";

  // Set client-side flag and clear localStorage when component mounts
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }, []);
  const items = [
    {
      name: "Aurielle & Co",
      type: "Retailer",
      rating: 5,
      quote:
        "The platform makes it easy to compare suppliers, check real-time inventory, and place orders with confidence. We've expanded our product range without increasing our workload!",
    },
    {
      name: "Glow Cosmetics",
      type: "Vendor",
      rating: 4,
      quote:
        "Effortless ordering and inventory tracking! Our team saves hours every week using this platform.",
    },
    {
      name: "Beauty Nation",
      type: "Retailer",
      rating: 4.5,
      quote:
        "Reliable suppliers and smooth integration with our system. It’s a game-changer for scaling operations.",
    },
  ];

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  // Initial form values
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  // Form submission handler
  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log('Login form submitted:', values);
    setSubmitting(false);
    // Add your navigation or authentication logic here
    if (typeof window !== 'undefined') {
      localStorage.setItem('role', 'retailer');
    }
    router.push('/retailer'); // Redirect to dashboard after login
  };

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < items.length - 1) setCurrent(current + 1);
  };
  
  return (
    <div className="bg-[#F3F6FA] flex flex-col flex-1 text-[#1C1F25]" suppressHydrationWarning>
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md flex max-w-full py-5 px-5 gap-[5.125rem]">
          {/* Login Form */}
          <div className="flex-1 flex flex-col justify-center w-[50vw] max-w-[24.063rem] pl-16">
            <div className="text-[1.25rem] font-medium mb-1 text-center">
              Get Started Now
            </div>

            <div className="text-[#4B5563] text-center mb-6 text-[0.82rem]">
              Enter your credentials to access your account
            </div>

            {!isClient ? (
              <div className="flex flex-col gap-4">
                <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className="flex flex-col gap-4">
                  {/* Email Field */}
                  <Field name="email">
                    {({ field }: { field: any }) => (
                      <div>
                        <Input
                          {...field}
                          variant="bordered"
                          placeholder="Email"
                          classNames={{
                            inputWrapper: `${inputWrapperStyle} ${touched.email && errors.email ? 'border-red-500' : ''
                              }`,
                            input: "focus:outline-none focus:ring-0 focus:border-transparent",
                            base: "focus:outline-none focus:ring-0",
                          }}
                        />
                        {touched.email && errors.email && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>

                  {/* Password Field */}
                  <Field name="password">
                    {({ field }: { field: any }) => (
                      <div>
                        <div className="relative">
                          <Input
                            {...field}
                            variant="bordered"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            classNames={{
                              inputWrapper: `${inputWrapperStyle} ${touched.password && errors.password ? 'border-red-500' : ''
                                }`,
                              input: "focus:outline-none focus:ring-0 focus:border-transparent",
                              base: "focus:outline-none focus:ring-0",
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            tabIndex={-1}
                          >
                            {showPassword ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                              </svg>
                            )}
                          </button>
                        </div>
                        {touched.password && errors.password && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.password}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center cursor-pointer">
                      <Field name="rememberMe">
                        {({ field }: { field: any }) => (
                          <Checkbox
                            {...field}
                            checked={field.value}
                            className="accent-black"
                          />
                        )}
                      </Field>
                      Remember me
                    </label>

                    <a href="#" className="text-[#9CA3AF] cursor-pointer text-[0.75rem] underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="bg-black text-white rounded py-2 font-medium mt-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging in...' : 'Log in'}
                  </Button>
                </Form>
              )}
            </Formik>
            )}

            <div className="flex items-center my-5">
              <hr className="flex-1 border-gray-200" />
              <span className="mx-4 text-gray-400 text-xs">Or login with</span>
              <hr className="flex-1 border-gray-200" />
            </div>

            <div className="flex gap-4 space-between">
              <Button className="rounded flex items-center justify-center bg-[#F9FAFB] flex-1">
                <img src="/auth/google.svg" alt="Google" className="cursor-pointer" />
              </Button>

              <Button className="rounded flex items-center justify-center bg-[#F9FAFB] flex-1">
                <img src="/auth/fb.svg" alt="Facebook" className="cursor-pointer" />
              </Button>

              <Button className="rounded flex items-center justify-center bg-[#F9FAFB] flex-1">
                <img src="/auth/apple.svg" alt="Apple" className="cursor-pointer" />
              </Button>
            </div>

            <p className="text-center text-[0.82rem] mt-4 text-[#333333]">
              Don't have an account?{" "}
              <Link className="text-[#333333] text-[0.82rem] underline cursor-pointer" href="/register">
                Sign up
              </Link>
            </p>
          </div>

          {/* Image & Testimonial */}
          <div className="flex-1 flex flex-col justify-center items-center relative">
            <img
              src="/auth/login-banner.jpg"
              alt="Handshake"
              className="rounded-lg object-cover w-[30vw] h-[33.188rem] max-w-[550px]"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/70 rounded p-4 w-[90%] shadow-[0px_12px_25px_0px_#0000000D] backdrop-blur-[14.8px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <div className="text-black text-sm mb-2">
                    {items[current].quote}
                  </div>

                  <div className="flex justify-between items-end w-full">
                    {/* SLIDE CONTENT */}
                    <div className="flex items-start gap-2">
                      <div>
                        <span className="font-semibold text-xs leading-none">
                          {items[current].name}
                        </span>
                        <span className="block text-[#4B5563] text-xs">
                          {items[current].type}
                        </span>
                      </div>

                      {/* <div className="flex items-center gap-1 mt-[6px]">
                        <StarRating rating={items[current].rating} />
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2 absolute right-4 bottom-4">
                {/* LEFT ARROW */}
                <div
                  onClick={handlePrev}
                  className={`p-0 h-fit w-4 cursor-pointer transition-opacity duration-200 ${current === 0 ? "opacity-50 pointer-events-none" : "opacity-100"
                    }`}
                >
                  <img
                    src="/auth/jam_arrow-up.svg"
                    alt="Left Arrow"
                    className="w-4 h-4 transform rotate-180"
                  />
                </div>

                {/* RIGHT ARROW */}
                <div
                  onClick={handleNext}
                  className={`p-0 h-fit w-4 cursor-pointer transition-opacity duration-200 ${current === items.length - 1
                    ? "opacity-50 pointer-events-none"
                    : "opacity-100"
                    }`}
                >
                  <img src="/auth/jam_arrow-up.svg" alt="Right Arrow" className="w-4 h-4" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
