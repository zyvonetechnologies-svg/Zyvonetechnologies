import { FOOTER_SERVICES, FOOTER_LINKS } from "../../constants/data";

const SOCIALS = ["in", "tw", "ig"];

export default function Footer() {
  return (
    <footer style={{ background: "#171123", color: "#fff", padding: "clamp(40px,6vw,60px) clamp(16px,4vw,24px) 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: "linear-gradient(135deg, #6F2DBD, #A663CC)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>Z</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 18 }}>Zyvone</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Your partner in digital growth. Crafting experiences that inspire and convert.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <div key={s} style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)",
                  cursor: "pointer", transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#6F2DBD")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 18, color: "#A663CC", letterSpacing: "0.5px" }}>Services</div>
            {FOOTER_SERVICES.map((l) => (
              <div key={l} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                {l}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 18, color: "#A663CC", letterSpacing: "0.5px" }}>Quick Links</div>
            {FOOTER_LINKS.map((l) => (
              <div key={l} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                {l}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>Copyright © 2025 Zyvone. All rights reserved.</p>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>Made with</span>
            <span style={{ color: "#6F2DBD" }}>💜</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>by Zyvone</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
