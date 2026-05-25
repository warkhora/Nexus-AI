export async function askAI(message: string) {
  const apiKey = import.meta.env.VITE_API_KEY;

  // Liste over GRATIS modeller du tillater
  const allowedModels = [
    "qwen/qwen3-next-80b-a3b-instruct",
    "google/gemma-4-26b-a4b",
    "meta-llama/llama-3.3-70b-instruct",
    "nousresearch/hermes-3-405b",
    "liquid/lfm2.5-1.2b-thinking",
    "liquid/lfm2.5-1.2b-instruct",
    "venice/uncensored",
    "meta-llama/llama-3.2-3b-instruct",
    "qwen/qwen3-coder-480b-a35b"
  ];

  // Standardmodell (den smarteste gratis)
  const model = "qwen/qwen3-next-80b-a3b-instruct";

  // Sikkerhet: blokker alt som ikke er gratis
  if (!allowedModels.includes(model)) {
    return "⚠️ Missing License: This model is not available in the free tier.";
  }

  const response = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model,
    messages: [
      { role: "user", content: message }
    ]
  })
});

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No response";
}
