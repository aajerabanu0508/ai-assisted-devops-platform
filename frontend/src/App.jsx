import { useEffect, useState } from "react";

function App() {

  const [status, setStatus] = useState(null);

  useEffect(() => {

    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => console.error(err));

  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Assisted DevOps Platform</h1>

      {status ? (
        <div>
          <h2>Backend Status</h2>

          <p>Status: {status.status}</p>
          <p>Service: {status.service}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;