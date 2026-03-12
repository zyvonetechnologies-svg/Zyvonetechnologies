import { useState } from "react";
import { NAV_LINKS, SERVICES } from "../../constants/data";

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleNav = (id) => { scrollTo(id); setMenuOpen(false); setServicesOpen(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(251,251,251,0.93)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(111,45,189,0.08)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
          onClick={() => handleNav("hero")}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: "linear-gradient(135deg, #6F2DBD, #A663CC)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>Z</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.3px" }}>Zyvone</span>
        </div>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ alignItems: "center", gap: 32 }}>
          {/* Services dropdown */}
          <div style={{ position: "relative" }}>
            <span className="nav-link"
              style={{ display: "flex", alignItems: "center", gap: 4 }}
              onClick={() => setServicesOpen(!servicesOpen)}>
              Services
              <span style={{
                fontSize: 10, display: "inline-block", transition: "transform 0.2s",
                transform: servicesOpen ? "rotate(180deg)" : "none",
              }}>▼</span>
            </span>
            {servicesOpen && (
              <div style={{
                position: "absolute", top: 32, left: 0, background: "#fff",
                borderRadius: 16, boxShadow: "0 8px 40px rgba(111,45,189,0.15)",
                border: "1px solid rgba(111,45,189,0.1)", padding: 8, minWidth: 180, zIndex: 200,
              }}>
                {SERVICES.map((s) => (
                  <div key={s.title} onClick={() => handleNav("services")}
                    style={{ padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 500, transition: "background 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(111,45,189,0.06)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                    {s.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <span key={l} className="nav-link" onClick={() => handleNav(l.toLowerCase())}>{l}</span>
          ))}
        </div>

        {/* Right: CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="zv-btn" style={{ padding: "10px 22px", fontSize: 13 }}
            onClick={() => handleNav("contact")}>
            Let's Talk 💬
          </button>

          {/* Hamburger */}
          <button className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 22, height: 2, background: "#171123", borderRadius: 2,
                transition: "all 0.3s",
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform:
                  i === 0 && menuOpen ? "rotate(45deg) translateY(7px)" :
                  i === 2 && menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet drawer */}
      {menuOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid rgba(111,45,189,0.08)",
          padding: "16px 24px 28px",
        }}>
          {["Services", ...NAV_LINKS].map((l) => (
            <div key={l} onClick={() => handleNav(l.toLowerCase())}
              style={{
                padding: "14px 0", borderBottom: "1px solid rgba(111,45,189,0.06)",
                fontSize: 15, fontWeight: 500, cursor: "pointer", color: "#171123",
              }}>
              {l}
            </div>
          ))}
          <button className="zv-btn" style={{ marginTop: 20, width: "100%" }}
            onClick={() => { handleNav("contact"); setMenuOpen(false); }}>
            Let's Talk 💬
          </button>
        </div>
      )}
    </nav>
  );
}
