import Container from "@/components/Container";

const roles = [
  {
    title: "Digital Product Leader",
    company: "IKEA of Sweden",
    unit: "Range Operations | Product Area - Range Commercial",
    period: "Jun 2023 – Present",
    description:
      "Leading end-to-end product strategy and delivery of data-driven solutions supporting commercial decision-making. Standardised data assets and information models across domains, improving decision efficiency by 25% and reducing duplication. Enabled advanced analytics, geospatial insights, and AI/ML use cases on an Azure-based platform, ensuring models are production-ready through MLOps practices.",
  },
  {
    title: "Digital Product Leader",
    company: "IKEA of Sweden",
    unit: "Data & Analytics | Manage the Range Domain",
    period: "May 2022 – Jun 2023",
    description:
      "Owned a portfolio of data and analytics products supporting range planning and lifecycle decision-making. Established governance, quality metrics, metadata and lineage practices to build trusted reusable data assets. Led delivery using Azure Data Platform, Databricks, SQL and Power BI, integrating advanced analytics and ML to strengthen decision confidence.",
  },
  {
    title: "Product Owner",
    company: "IKEA of Sweden",
    unit: "Supply Chain Development | Modelling & Optimization Platform",
    period: "Jan 2017 – Apr 2022",
    description:
      "Led development of a hybrid-cloud platform powering digital twin and optimisation solutions for global supply network design. Built scalable domain-driven data models and reusable data assets. Introduced Agile and DevOps practices, reducing development cycles by 50% while improving platform stability and business impact.",
  },
  {
    title: "Project Leader & Solution Architect",
    company: "IKEA IT, Sweden",
    unit: "Plan and Secure Logistics",
    period: "Mar 2009 – Jan 2017",
    description:
      "Delivered enterprise-scale digital and analytics solutions for logistics and supply planning, grounded in TOGAF architecture principles and ITIL practices. Standardised integrations to improve data quality and interoperability, ensuring long-term architectural fit and compliance.",
  },
  {
    title: "Solution Architect",
    company: "Blue Yonder (JDA Software Group Inc.)",
    unit: "Supply Chain Planning & Optimization",
    period: "Jan 2008 – Jan 2013",
    description:
      "Designed and delivered global supply balancing and forecasting solutions optimising flows across suppliers, distribution centres, and stores. Improved planning accuracy and inventory performance through scalable architectures and cross-functional delivery.",
  },
  {
    title: "Production Planning & Manufacturing Roles",
    company: "Sandvik Mining / TVS / ELGI",
    unit: "",
    period: "Jun 2002 – Jan 2008",
    description:
      "Led ERP-driven production planning and control initiatives, reducing lead times by 30% and improving alignment between operations and business targets. Delivered process and system improvements strengthening efficiency, quality, and cost control.",
  },
];

export default function ExperiencePage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>

      <div className="mt-10 space-y-8">
        {roles.map((role) => (
          <div
            key={role.title + role.period}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 className="text-lg font-semibold">
                {role.title} · {role.company}
              </h2>
              <p className="text-sm text-gray-600">{role.period}</p>
            </div>

            {role.unit && (
              <p className="mt-1 text-sm text-gray-700">{role.unit}</p>
            )}

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}