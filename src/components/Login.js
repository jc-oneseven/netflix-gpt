import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const toggleLoginForm = () => setIsLoginPage(!isLoginPage);

  return (
    <div className="bg-hero-background h-[100vh] bg-cover bg-[#000000ad] bg-blend-overlay">
      <Header />
      <div className="flex items-center justify-center absolute w-full h-full top-0 ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="text-white w-[500px] max-w-full bg-black bg-opacity-90 py-14 px-10 flex flex-col gap-6">
          <h2 className="text-3xl mb-4 font-light">
            {isLoginPage ? "Sign In" : "Create New Account"}
          </h2>
          {!isLoginPage && (
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-sm text-lg h-14 bg-gray-800"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 rounded-sm text-lg h-14 bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-sm text-lg h-14 bg-gray-800"
          />
          <button className="mt-2 p-2 text-lg bg-red-700 text-white rounded-sm h-14">
            {isLoginPage ? "Login" : "Sign Up "}
          </button>
          <button onClick={toggleLoginForm}>
            {isLoginPage
              ? "New to netflix? Sign Up now "
              : "Already have an account? Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
