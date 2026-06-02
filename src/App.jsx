import { useState } from "react";

export default function App() {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Mockup de Produto - Ipóméia</h2>

        <input type="file" accept="image/*" onChange={handleUpload} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{
              width: "100%",
              marginTop: "16px",
              borderRadius: "12px",
            }}
          />
        )}

        <button
          style={{
            marginTop: "16px",
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Gerar Cenário
        </button>
      </div>
    </div>
  );
}
