import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 space-y-5 text-gray-700 leading-relaxed max-w-3xl">
        <p>
          I’m a Digital Product Leader based in Älmhult, Sweden, with extensive experience
          across IKEA and global supply chain organisations. My work focuses on building
          enterprise-grade data and analytics products that enable faster and better decisions.
        </p>

        <p>
          I specialise in turning complex business needs into governed and reusable data products
          supported by scalable platforms, strong information models, and measurable adoption.
          My experience spans range planning, commercial decision-making, supply chain optimisation,
          and enterprise integration.
        </p>

        <p>
          I work at the intersection of business, engineering, and architecture, ensuring solutions
          are not only technically sound but also trusted, adopted, and sustainable.
        </p>

        <p>
          My leadership style is built around clarity, empowerment, and strong collaboration,
          enabling teams to deliver meaningful outcomes while continuously improving ways of working.
        </p>
      </div>
    </Container>
  );
}