import AnimSection from "../ui/AnimSection";

export default function Testimonial() {
  return (
    <section className="section-pad" style={{
      background: "linear-gradient(135deg, #6F2DBD 0%, #171123 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -60, left: -60,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(166,99,204,0.15)", pointerEvents: "none",
      }} />

      <AnimSection style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{
          fontSize: 64, color: "rgba(255,255,255,0.2)",
          fontFamily: "Georgia", lineHeight: 0.7, marginBottom: 24,
        }}>"</div>

        <p style={{
          fontSize: "clamp(15px, 2.5vw, 22px)", fontWeight: 500,
          color: "#fff", lineHeight: 1.65, marginBottom: 32, fontStyle: "italic",
        }}>
          I had the pleasure of experiencing the next generation of digital solutions with this
          incredible team. It's refreshing to see such innovation and genuine care for client success.
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, color: "#fff", fontWeight: 700,
          }}>NB</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Nick Babich</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>UX/UI Designer</div>
          </div>
        </div>
      </AnimSection>
    </section>
  );
}
