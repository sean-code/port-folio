import { Row, Col, Badge } from "react-bootstrap";
import "./education.css";

const EDU = [
  {
    degree: "M.S. in Computer Science (Artificial Intelligence)",
    school: "University of South Dakota",
    location: "Vermillion, SD, USA",
    year: "2025 — 2027 (exp.)",
    highlights: ["Machine Learning", "Information Retrieval", "Data Visualization"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqya--4ZlTUduqCupnrStRJJLr3tvtq2BZ7A&s",
  },
  {
    degree: "Bachelor of Technology",
    school: "Technical University of Kenya",
    location: "Nairobi, Kenya",
    year: "2022",
    highlights: ["Bioinformatics", "Data Analysis", "Research Methods"],
    logo: "https://pbs.twimg.com/profile_images/3188260990/e181aaf9759f66f00980ec4d461a8fff_400x400.png",
  },
  {
    degree: "Diploma in Computer Science",
    school: "PAC University",
    location: "Nairobi, Kenya",
    year: "2021",
    highlights: ["Software Engineering", "Databases", "Networks"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvenECJb7adVFE1IdADmdi43HBn9cUkaU3dw&s",
  },
  {
    degree: "Certificate in Software Engineering",
    school: "Flatiron School",
    location: "New York, USA",
    year: "2023",
    highlights: ["Full-Stack Dev", "APIs", "Testing"],
    logo: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png",
  },
  {
    degree: "Certificate in Network Fundamentals",
    school: "Cisco (CCNA Intro)",
    location: "—",
    year: "2021",
    highlights: ["Routing & Switching", "TCP/IP"],
    logo: "https://certify.cybervista.net/wp-content/uploads/2020/02/Badge_Cisco-CCNA_PT.png",
  },
  {
    degree: "Certificate in Web Design",
    school: "BitDegree",
    location: "—",
    year: "2023",
    highlights: ["HTML/CSS", "Responsive UI", "Figma"],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQE-ty4j43EPdQ/company-logo_200_200/company-logo_200_200/0/1698393171020/bitdegree_logo?e=2147483647&v=beta&t=_THU8kRWvshmsSxASSbnK1m9AC8b7KffGOQ6ERX2L6U",
  },
];

export default function Education() {
  return (
    <section className="education">
      <h2 className="education-title">Education</h2>

      <div className="timeline" role="list">
        {EDU.map((e, idx) => (
          <Row as="article" role="listitem" className="timeline-item" key={idx}>
            <Col xs="auto" className="timeline-marker-col" aria-hidden="true">
              
            </Col>

            <Col className="timeline-content">
              <div className="edu-card">
                <div className="edu-head">
                  <div className="edu-title-wrap">
                    <h3 className="edu-degree">{e.degree}</h3>
                    <div className="edu-meta">
                      <span className="edu-school">{e.school}</span>
                      {e.location && <span className="edu-dot">•</span>}
                      {e.location && <span className="edu-location">{e.location}</span>}
                    </div>
                  </div>
                  {e.logo && (
                    <img
                      className="edu-logo"
                      src={e.logo}
                      alt={`${e.school} logo`}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>

                <div className="edu-foot">
                  <span className="edu-year">{e.year}</span>
                  {e.highlights?.length > 0 && (
                    <div className="edu-badges">
                      {e.highlights.map((h, i) => (
                        <Badge key={i} bg="secondary" className="edu-badge">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}
