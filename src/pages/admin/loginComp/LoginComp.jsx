import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginComp = () => {
  let navigasi = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerLogin = (e) => {
    e.preventDefault();
    if (email === "erickfutura@gmail.com" && password === "admin") {
      alert("login berhasil");
      navigasi.push("/admin/dashboard");
    } else {
      alert("data salah");
    }
  };
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <div className="py-[8rem]">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form
            onSubmit={handlerLogin}
            className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="john@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
