export default function App() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6"
      style={{
        background: "radial-gradient(circle at top, #0a0a0f 0%, #000 70%)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Glow Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "40rem",
          height: "40rem",
          background: "rgba(120,60,255,0.25)",
          filter: "blur(160px)",
          borderRadius: "50%"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "40rem",
          height: "40rem",
          background: "rgba(60,140,255,0.25)",
          filter: "blur(160px)",
          borderRadius: "50%"
        }}
      />

      {/* Floating Particles */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <div className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping left-[20%] top-[30%]" />
        <div className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping left-[70%] top-[60%]" />
        <div className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping left-[50%] top-[10%]" />
      </div>

      {/* Liquid Glass Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "40px 50px",
          borderRadius: "28px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
          position: "relative"
        }}
      >
        {/* Logo + Title */}
<div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
  <div
    style={{
      width: "48px",
      height: "48px",
      borderRadius: "999px",
      background:
        "conic-gradient(from 180deg, #7b5cff, #4f8cff, #00d4ff, #7b5cff)",
      padding: "3px",
      boxShadow: "0 0 18px rgba(120,80,255,0.45)"
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "999px",
        background: "#050509",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        color: "#7b5cff",
        fontWeight: 700
      }}
    >
      N
    </div>
  </div>

  <div>
    <div
      style={{
        fontSize: "22px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: "rgba(255,255,255,0.92)",
        textShadow: "0 0 12px rgba(140,100,255,0.4)"
      }}
    >
      Nexus AI
    </div>
    <div
      style={{
        fontSize: "12px",
        opacity: 0.8,
        color: "rgba(255,255,255,0.75)"
      }}
    >
      Premium Intelligence Platform
    </div>
  </div>
</div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "600px",
            marginBottom: "32px"
          }}
        >
          Nexus AI is built for speed, precision, and elegance. A fluid, glass‑inspired AI experience designed to feel like the future.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
          
          <a
  href="/chat"
  style={{
    padding: "14px 28px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #7b5cff, #4f8cff)",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    boxShadow: "0 10px 25px rgba(79,140,255,0.45)",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block"
  }}
>
  Start Chatting
</a>

          <button
            style={{
              padding: "14px 28px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#ddd",
              fontSize: "16px",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
              cursor: "pointer"
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
