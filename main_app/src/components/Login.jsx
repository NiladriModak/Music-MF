import React, { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";

export default function Login() {
  const [role, setRole] = useState("user");
  const { signIn } = useAuth();

  return (
    <div className="w-1/3 p-5 bg-white rounded-2xl">
      <div className="mb-2 font-semibold text-2xl">Sign in as:</div>
      <div className="flex flex-col gap-3">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded p-2 mr-2"
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        {!localStorage.getItem("token") && (
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => signIn(role)}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
