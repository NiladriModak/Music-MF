import React, { Suspense, useMemo } from "react";
import { useAuth } from "../Auth/AuthProvider";

const RemoteMusic = React.lazy(() => import("music_remote/MusicLibrary"));

export default function RemoteLoader() {
  const { getRole } = useAuth();
  const role = getRole();

  return (
    <div className="p-4">
      <Suspense fallback={<div>Loading music library remote...</div>}>
        <RemoteMusic role={localStorage.getItem("role") || role} />
      </Suspense>
    </div>
  );
}
