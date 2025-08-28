import React from "react";
import { useAuth } from "../Auth/AuthProvider";

export default function Header() {
  const { token, signOut, getRole } = useAuth();
  const role = getRole();
  return (
    <header className="p-4 bg-slate-800 text-white flex items-center justify-between">
      <h1 className="text-xl font-bold">Music MF — Main App</h1>
      <div>
        {localStorage.getItem("token") ? (
          <div className="flex items-center gap-4">
            <div className="text-sm">
              Role: <strong>{role || localStorage.getItem("role")}</strong>
            </div>
            <button className="px-3 py-1 bg-red-500 rounded" onClick={signOut}>
              Logout
            </button>
          </div>
        ) : (
          <div className="text-sm">Not signed in</div>
        )}
      </div>
    </header>
  );
}
