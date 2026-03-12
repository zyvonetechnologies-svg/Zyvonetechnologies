import { useState } from "react";
import AnimSection from "../ui/AnimSection";
import { CONTACT_INFO } from "../../constants/data";

const INITIAL = { first: "", last: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value });
  const handleSubmit = () => { alert("Thanks! We'll be in touch soon."); setForm(INITIAL); };

  return (
    <section id="contact" className="section-pad" style={{ background: "#FBFBFB" }}>
      <div className="section-inner">
        <div className="contact-grid">

          {/* Left: info */}
          <AnimSection>
            <div className="tag" style={{ marginBottom: 20 }}>Get In Touch</div>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 16 }}>
              Start Your Project <span className="gradient-text">With Us</span>
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Whether you're launching a startup or scaling up, we're here to bring your vision to life. Let's chat.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CONTACT_INFO.map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: "rgba(111,45,189,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                    flexShrink: 0,
                  }}>{icon}</div>
                  <span style={{ fontSize: 14, color: "#555", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </AnimSection>

          {/* Right: form */}
          <AnimSection delay={150}>
            <div className="card" style={{ padding: "clamp(24px,4vw,40px)" }}>

              {/* Name row */}
              <div className="form-row">
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#888", display: "block", marginBottom: 6 }}>First Name</label>
                  <input className="input-field" placeholder="Alex" value={form.first} onChange={update("first")} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#888", display: "block", marginBottom: 6 }}>Last Name</label>
                  <input className="input-field" placeholder="Mercer" value={form.last} onChange={update("last")} />
                </div>
              </div>

              {/* Contact row */}
              <div className="form-row">
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#888", display: "block", marginBottom: 6 }}>Email Address</label>
                  <input className="input-field" placeholder="alex@email.com" value={form.email} onChange={update("email")} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#888", display: "block", marginBottom: 6 }}>Phone Number</label>
                  <input className="input-field" placeholder="+1 555 000 0000" value={form.phone} onChange={update("phone")} />
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#888", display: "block", marginBottom: 6 }}>Message</label>
                <textarea className="input-field" placeholder="Tell us about your project..."
                  rows={4} style={{ resize: "vertical" }} value={form.message} onChange={update("message")} />
              </div>

              <button className="zv-btn" style={{ width: "100%", padding: "15px", fontSize: 15 }} onClick={handleSubmit}>
                Submit ✦
              </button>
            </div>
          </AnimSection>

        </div>
      </div>
    </section>
  );
}
