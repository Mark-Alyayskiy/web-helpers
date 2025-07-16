import { ExportWallet } from "./components/ExportWallet.tsx";

import { Routes, Route } from "react-router-dom";
import { WebPreview } from "./components/WebPreview.tsx";

function App() {
  return (
    <div
      style={{
        backgroundColor: "rgba(26, 26, 26, 1)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route path="/export-wallet" element={<ExportWallet />} />
        <Route path="/sharelink" element={<WebPreview />} />
      </Routes>
    </div>
  );
}

export default App;
