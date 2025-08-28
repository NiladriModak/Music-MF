import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import RemoteLoader from "./components/Remote_Loader";
import { useAuth } from "./Auth/AuthProvider";

export default function App() {
  const { token } = useAuth();
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="w-full bg-blue-200 min-h-screen flex justify-center items-center">
        {!localStorage.getItem("token") && <Login />}
        {localStorage.getItem("token") && <RemoteLoader />}
      </main>
    </div>
  );
}
