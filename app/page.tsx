"use client";

import { useState, useEffect, useCallback } from "react";

type Sentiment = "positive" | "neutral" | "negative" | "mixed";

interface FeedbackItem {
  id: string;
  name: string;
  text: string;
  sentiment: Sentiment;
  scores: { positive: number; neutral: number; negative: number };
  submittedAt: string;
}

const EMOJI: Record<Sentiment, string> = {
  positive: "😊",
  neutral: "😐",
  negative: "😞",
  mixed: "🤔",
};

const LABEL: Record<Sentiment, string> = {
  positive: "Positive",
  neutral: "Neutral",
  negative: "Negative",
  mixed: "Mixed",
};

function SentimentBadge({ sentiment }: { sentiment: Sentiment }) {
  return (
    <span
      className={`badge-${sentiment}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "2px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "capitalize",
        letterSpacing: "0.03em",
      }}
    >
      {EMOJI[sentiment]} {LABEL[sentiment]}
    </span>
  );
}

function ScoreBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div style={{ marginBottom: "6px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
        <span style={{ fontSize: "11px", color: "var(--muted)", textTransform: "capitalize" }}>{label}</span>
        <span style={{ fontSize: "11px", color, fontWeight: 600 }}>{(value * 100).toFixed(0)}%</span>
      </div>
      <div style={{ height: "4px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${value * 100}%`,
            background: color,
            borderRadius: "2px",
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "20px 24px",
        flex: 1,
        minWidth: "120px",
      }}
    >
      <div style={{ fontSize: "28px", fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>{label}</div>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ sentiment: Sentiment; scores: { positive: number; neutral: number; negative: number } } | null>(null);
  const [error, setError] = useState("");
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Sentiment | "all">("all");

  const loadFeedback = useCallback(async () => {
    try {
      const res = await fetch("/api/feedback");
      const data = await res.json();
      if (data.items) setItems(data.items);
    } catch {
      // silently fail on load
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadFeedback(); }, [loadFeedback]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, name }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Submission failed.");
      } else {
        setResult({ sentiment: data.sentiment, scores: data.scores });
        setText("");
        setName("");
        await loadFeedback();
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const counts = {
    positive: items.filter(i => i.sentiment === "positive").length,
    neutral:  items.filter(i => i.sentiment === "neutral").length,
    negative: items.filter(i => i.sentiment === "negative").length,
    mixed:    items.filter(i => i.sentiment === "mixed").length,
  };

  const filtered = filter === "all" ? items : items.filter(i => i.sentiment === filter);

  return (
    <div style={{ minHeight: "100vh", padding: "0 0 80px" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "0 24px",
          background: "var(--bg)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", height: "60px", gap: "12px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", letterSpacing: "-0.02em" }}>Feedback Pulse</span>
          <span style={{ color: "var(--muted)", fontSize: "13px", marginLeft: "4px" }}>Azure AI Sentiment Dashboard</span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--positive)", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "12px", color: "var(--muted)" }}>Live</span>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 0" }}>

        {/* Stats */}
        {items.length > 0 && (
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <StatCard label="Total Feedback" value={items.length} color="var(--accent)" />
            <StatCard label="Positive" value={counts.positive} color="var(--positive)" />
            <StatCard label="Neutral" value={counts.neutral} color="var(--neutral)" />
            <StatCard label="Negative" value={counts.negative} color="var(--negative)" />
          </div>
        )}

        {/* Submit Form */}
        <section
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "32px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: 600 }}>Submit Feedback</h2>
          <p style={{ margin: "0 0 24px", color: "var(--muted)", fontSize: "14px" }}>
            Azure AI Language will analyze the sentiment of your message.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "var(--muted)", marginBottom: "8px" }}>
                Name (optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Anonymous"
                maxLength={60}
                style={{
                  width: "100%",
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  color: "var(--text)",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "var(--muted)", marginBottom: "8px" }}>
                Feedback <span style={{ color: "var(--negative)" }}>*</span>
              </label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Tell us about your experience..."
                required
                rows={4}
                maxLength={1000}
                style={{
                  width: "100%",
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "12px 14px",
                  color: "var(--text)",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
              <div style={{ textAlign: "right", fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>
                {text.length}/1000
              </div>
            </div>

            {error && (
              <div style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderRadius: "8px", padding: "10px 14px", color: "var(--negative)", fontSize: "13px", marginBottom: "16px" }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || !text.trim()}
              style={{
                background: submitting ? "var(--accent-dim)" : "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: submitting ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              {submitting ? "Analyzing..." : "Analyze Sentiment"}
            </button>
          </form>

          {/* Result */}
          {result && (
            <div
              style={{
                marginTop: "24px",
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "24px" }}>{EMOJI[result.sentiment]}</span>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "4px" }}>Detected Sentiment</div>
                  <SentimentBadge sentiment={result.sentiment} />
                </div>
              </div>
              <ScoreBar label="Positive" value={result.scores.positive} color="var(--positive)" />
              <ScoreBar label="Neutral"  value={result.scores.neutral}  color="var(--neutral)" />
              <ScoreBar label="Negative" value={result.scores.negative} color="var(--negative)" />
            </div>
          )}
        </section>

        {/* Dashboard */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>All Feedback</h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {(["all", "positive", "neutral", "negative", "mixed"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    border: "1px solid",
                    fontSize: "12px",
                    fontWeight: 500,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    background: filter === f ? (f === "all" ? "var(--accent)" : `var(--${f})`) : "transparent",
                    borderColor: filter === f ? "transparent" : "var(--border)",
                    color: filter === f ? (f === "all" ? "#fff" : "#000") : "var(--muted)",
                  }}
                >
                  {f === "all" ? `All (${items.length})` : `${EMOJI[f as Sentiment]} ${LABEL[f as Sentiment]} (${counts[f as Sentiment]})`}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: "60px", color: "var(--muted)" }}>Loading feedback...</div>
          ) : filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px",
                color: "var(--muted)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
              }}
            >
              {items.length === 0 ? "No feedback yet. Submit the first one above." : "No feedback matches this filter."}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filtered.map(item => (
                <div
                  key={item.id}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    borderLeft: `3px solid var(--${item.sentiment})`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "var(--surface2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "var(--accent)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {(item.name || "A")[0].toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 600 }}>{item.name || "Anonymous"}</div>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                          {new Date(item.submittedAt).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <SentimentBadge sentiment={item.sentiment} />
                  </div>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "var(--text)" }}>{item.text}</p>
                  <div style={{ marginTop: "12px", display: "flex", gap: "16px" }}>
                    {[
                      { label: "Positive", value: item.scores.positive, color: "var(--positive)" },
                      { label: "Neutral",  value: item.scores.neutral,  color: "var(--neutral)" },
                      { label: "Negative", value: item.scores.negative, color: "var(--negative)" },
                    ].map(s => (
                      <div key={s.label} style={{ fontSize: "11px", color: "var(--muted)" }}>
                        {s.label}: <span style={{ color: s.color, fontWeight: 600 }}>{(s.value * 100).toFixed(0)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        input:focus, textarea:focus {
          border-color: var(--accent) !important;
        }
        * { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
      `}</style>
    </div>
  );
}
