import AnimSection from "../ui/AnimSection";
import { TEAM } from "../../constants/data";

const SOCIALS = ["in", "tw", "gh"];

export default function Team() {
  return (
    <section id="team" className="section-pad" style={{ background: "#FBFBFB" }}>
      <div className="section-inner">

        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Our People</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 14 }}>
            Meet the Minds Behind <span className="gradient-text">Zyvone</span>
          </h2>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            A passionate crew of creators, coders, and strategists—united by vision and driven by results.
          </p>
        </AnimSection>

        <div className="grid-4">
          {TEAM.map((member, i) => (
            <AnimSection key={member.name} delay={i * 80}>
              <div className="card" style={{ padding: 28, textAlign: "center", height: "100%", transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(111,45,189,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none";             e.currentTarget.style.boxShadow = "0 4px 24px rgba(111,45,189,0.07)"; }}>
                <div className="team-avatar">{member.initials}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{member.name}</div>
                <div style={{ color: "#6F2DBD", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>{member.role}</div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  {SOCIALS.map((s) => (
                    <div key={s} style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: "rgba(111,45,189,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: "#6F2DBD", cursor: "pointer",
                      transition: "background 0.2s, color 0.2s",
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#6F2DBD"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(111,45,189,0.08)"; e.currentTarget.style.color = "#6F2DBD"; }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

      </div>
    </section>
  );
}
