import AnimSection from "../ui/AnimSection";
import { WHY_US } from "../../constants/data";

export default function WhyUs() {
  return (
    <section id="about" className="section-pad" style={{ background: "#fff" }}>
      <div className="section-inner">

        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Why Zyvone</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 14 }}>
            Why Teams Choose <span className="gradient-text">Zyvone</span>
          </h2>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            We blend creativity, tech, and hustle to deliver solutions that actually move the needle.
          </p>
        </AnimSection>

        <div className="grid-3">
          {WHY_US.map((item, i) => (
            <AnimSection key={item.title} delay={i * 100}>
              <div className="card" style={{ padding: 32, height: "100%", transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(111,45,189,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none";             e.currentTarget.style.boxShadow = "0 4px 24px rgba(111,45,189,0.07)"; }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, letterSpacing: "-0.3px" }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>

      </div>
    </section>
  );
}
