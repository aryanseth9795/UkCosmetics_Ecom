
import { useState } from "react";

export default function LandingPage() {
  const [logger, setLogger] = useState(true);
  const [passkey, setPasskey] = useState("");
  return (
    <div>
      <h1>Welcome To U K Cosmetic Admin Portal</h1>

      {logger ? (
        <button onClick={() => setLogger(false)}>Login</button>
      ) : (
        <>
          <div>
            <h3>Admin Login</h3>
            <input
              placeholder="Enter Admin Passkey"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value) }
            />
            <button>Login</button>
          </div>
        </>
      )}
    </div>
  );
}
