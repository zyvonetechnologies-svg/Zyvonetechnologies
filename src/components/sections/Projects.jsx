import AnimSection from "../ui/AnimSection";
import { PROJECTS } from "../../constants/data";

function ProjectImage({ project }) {
  return (
    <div className="project-img">
      <div style={{ textAlign: "center", color: "rgba(255,255,255,0.92)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          {project.tag}
        </div>
        <div style={{ fontSize: 28, fontWeight: 800 }}>{project.name}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="works" className="section-pad" style={{ background: "#fff" }}>
      <div className="section-inner">

        <AnimSection style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Our Work</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 14 }}>
            Projects We're <span className="gradient-text">Proud Of</span>
          </h2>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            We team up with startups and businesses to build products that make an impact.
          </p>
        </AnimSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {PROJECTS.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimSection key={project.name} delay={i * 100}>
                {/* On mobile/tablet grid collapses to 1-col via CSS, image always renders first */}
                <div className="card" style={{ padding: "clamp(20px, 4vw, 40px)", overflow: "hidden" }}>
                  <div className={isEven ? "project-grid-even" : "project-grid-odd"}>

                    {/* Mobile: image always on top (order trick) */}
                    <div style={{ order: isEven ? 2 : 1 }}>
                      <ProjectImage project={project} />
                    </div>

                    <div style={{ order: isEven ? 1 : 2 }}>
                      <span className="tag" style={{ marginBottom: 14 }}>{project.tag}</span>
                      <h3 style={{ fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 24px)", letterSpacing: "-0.5px", marginBottom: 8 }}>
                        {project.name}
                      </h3>
                      <p style={{ color: "#6F2DBD", fontWeight: 600, fontSize: 14, marginBottom: 14 }}>{project.sub}</p>
                      <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{project.desc}</p>
                      <button className="zv-btn" style={{ padding: "10px 22px", fontSize: 13 }}>View Live ↗</button>
                    </div>

                  </div>
                </div>
              </AnimSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
