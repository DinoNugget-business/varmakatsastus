export default function DemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="max-w-lg">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display, sans-serif)", color: "#1A1A1A" }}
        >
          Tekno-Rengas
        </h1>
        <p className="text-lg mb-2" style={{ color: "#E8751A", fontWeight: 600 }}>
          BestDrive &middot; Espoo
        </p>
        <p className="text-base mb-8" style={{ color: "#666" }}>
          Chatbot-demo &mdash; klikkaa oikeassa alakulmassa olevaa chat-kuplaa aloittaaksesi.
        </p>
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
          style={{
            backgroundColor: "rgba(232,117,26,0.1)",
            color: "#E8751A",
            border: "1px solid rgba(232,117,26,0.3)",
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#E8751A" }} />
          Chat-avustaja valmiina
        </div>
      </div>
    </div>
  );
}
