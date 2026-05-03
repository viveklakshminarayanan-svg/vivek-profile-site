import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

      <p className="mt-4 text-gray-700 max-w-2xl">
        If you’d like to connect regarding product leadership, enterprise data platforms,
        analytics strategy, or AI enablement, feel free to reach out.
      </p>

      <div className="mt-10 rounded-2xl border border-gray-200 p-6 space-y-3">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Location:</span> Älmhult, Sweden
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          <a className="underline" href="mailto:lvivek@hotmail.com">
            lvivek@hotmail.com
          </a>
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/vivek-lakshminarayanan/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/vivek-lakshminarayanan
          </a>
        </p>
      </div>
    </Container>
  );
}