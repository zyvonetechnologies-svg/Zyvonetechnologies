import AnimSection from "../ui/AnimSection";
import { STATS } from "../../constants/data";

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="mesh-bg section-pad"
      style={{ paddingTop: "calc(64px + 56px)", position: "relative", overflow: "hidden" }}>
      <div className="hero-glow" />
      <div className="section-inner">
        <div className="hero-grid">

          {/* LEFT — copy */}
          <AnimSection>
            <div className="hero-text-center">
              <div className="tag" style={{ marginBottom: 20 }}>✦ Future Ready</div>
              <h1 style={{
                fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800,
                lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 20,
              }}>
                Crafting Digital<br />
                <span className="gradient-text">Experiences</span><br />
                That Inspire
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#555", maxWidth: 460, marginBottom: 36, fontWeight: 400 }}>
                From stunning designs to powerful development, Zyvone delivers custom digital
                solutions that elevate your brand and drive real growth.
              </p>

              <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 0 }}>
                <button className="zv-btn" onClick={() => scrollTo("contact")}>Let's Talk 💬</button>
                <button className="zv-btn-outline" onClick={() => scrollTo("works")}>See Our Works →</button>
              </div>

              <div className="hero-stats" style={{ display: "flex", gap: 32, marginTop: 40 }}>
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "#6F2DBD" }}>{value}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* RIGHT — mockup */}
          <AnimSection delay={200}>
            <div style={{ position: "relative", maxWidth: 480, margin: "0 auto" }}>
              <div style={{
                background: "linear-gradient(135deg, #6F2DBD 0%, #A663CC 50%, #171123 100%)",
                borderRadius: 24, padding: 3,
                boxShadow: "0 24px 80px rgba(111,45,189,0.3)",
              }}>
                <div style={{ background: "#fff", borderRadius: 22, padding: 24, minHeight: 300 }}>
                  {/* Window dots */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                    {["#ff5f56","#ffbd2e","#27c93f"].map((c) => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  {/* Preview */}
                  <div style={{
                    background: "linear-gradient(135deg, rgba(111,45,189,0.08), rgba(166,99,204,0.08))",
                    borderRadius: 16, height: 180,
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                  }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 40, marginBottom: 8 }}>🚀</div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#6F2DBD" }}>Building Better Society</div>
                      <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>Your Contribution, Our Commitment</div>
                    </div>
                  </div>
                  {/* Pills */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                    {[["Design","#6F2DBD,#A663CC"],["Build","#A663CC,#6F2DBD"],["Launch","#171123,#6F2DBD"]].map(([label, colors]) => (
                      <div key={label} style={{
                        background: `linear-gradient(135deg, ${colors})`,
                        borderRadius: 10, padding: "8px 0",
                        textAlign: "center", color: "#fff", fontSize: 11, fontWeight: 600,
                      }}>{label}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="badge-hidden" style={{
                position: "absolute", top: -20, right: -20,
                background: "#fff", borderRadius: 14, padding: "10px 16px",
                boxShadow: "0 8px 32px rgba(111,45,189,0.2)", fontSize: 12, fontWeight: 600, color: "#6F2DBD",
              }}>✦ 24/7 Support</div>

              <div className="badge-hidden" style={{
                position: "absolute", bottom: -20, left: -20,
                background: "#6F2DBD", borderRadius: 14, padding: "10px 16px",
                boxShadow: "0 8px 32px rgba(111,45,189,0.3)", fontSize: 12, fontWeight: 600, color: "#fff",
              }}>🎯 Results-Driven</div>
            </div>
          </AnimSection>

        </div>
      </div>
    </section>
  );
}
