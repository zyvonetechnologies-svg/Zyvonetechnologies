import AnimSection from "../ui/AnimSection";
import { SERVICES } from "../../constants/data";

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: "#FBFBFB" }}>
      <div className="section-inner">

        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>What We Do</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 14 }}>
            What We Do <span className="gradient-text">Best</span>
          </h2>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            We design, build, and launch digital experiences that help businesses grow fast.
          </p>
        </AnimSection>

        <div className="grid-2">
          {SERVICES.map((service, i) => (
            <AnimSection key={service.title} delay={i * 80}>
              <div className="card" style={{ padding: 36, height: "100%", transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(111,45,189,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none";             e.currentTarget.style.boxShadow = "0 4px 24px rgba(111,45,189,0.07)"; }}>
                <div className="service-icon">{service.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 10, letterSpacing: "-0.3px" }}>{service.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{service.desc}</p>
                <span style={{ color: "#6F2DBD", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Learn more →</span>
              </div>
            </AnimSection>
          ))}
        </div>

      </div>
    </section>
  );
}
