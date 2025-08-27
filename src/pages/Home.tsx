import Container from "../components/Container";

export default function Home() {
  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto h-[900px] bg-white" />
        {/* ↑ adjust the height to match your grid (e.g., h-[880px], h-[920px], etc.) */}
      </Container>
    </section>
  );
}
