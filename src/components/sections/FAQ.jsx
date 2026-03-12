import { useState } from "react";
import AnimSection from "../ui/AnimSection";
import { FAQS } from "../../constants/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 16px" }}>

        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>FAQs</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 14 }}>
            FAQs That <span className="gradient-text">Actually Help</span>
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            We know you've got questions. Let's clear up the common ones so you can move forward with confidence.
          </p>
        </AnimSection>

        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(111,45,189,0.1)" }}>
          {FAQS.map((faq, i) => (
            <AnimSection key={i} delay={i * 60}>
              <div className="faq-item" style={{ background: "#fff" }}>
                <button onClick={() => toggle(i)} style={{
                  width: "100%", padding: "clamp(16px,3vw,22px) clamp(16px,3vw,28px)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "inherit", textAlign: "left", gap: 12,
                }}>
                  <span style={{ fontWeight: 600, fontSize: "clamp(13px,2vw,15px)", color: "#171123", flex: 1 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    color: "#6F2DBD", fontSize: 20, flexShrink: 0,
                    transition: "transform 0.3s", display: "inline-block",
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: openIndex === i ? 240 : 0,
                  overflow: "hidden", transition: "max-height 0.4s ease",
                }}>
                  <p style={{ padding: "0 clamp(16px,3vw,28px) clamp(16px,3vw,22px)", color: "#666", fontSize: 14, lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

      </div>
    </section>
  );
}
