//import Container from "../components/Container";
//
//export default function Home() {
//  return (
//    <section className="py-12">
//      <Container>
//        <div className="mx-auto h-[900px] bg-white" />
//        {/* ↑ adjust the height to match your grid (e.g., h-[880px], h-[920px], etc.) */}
//      </Container>
//    </section>
//  );
//}

export default function Home() {
  return (
    <main className="pt-24">
      {/* push content below fixed navbar */}
      {/* hero */}
      <section className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="relative rounded-xl overflow-hidden">
          <video
            src="/video/beach.webm"
            autoPlay
            loop
            muted
            playsInline // <— smoother on mobile
            preload="auto" // <— buffer early to avoid stutter
            poster="/images/beach-poster.jpg" // <— optional placeholder
            className="w-full h-[420px] md:h-[520px] object-cover"
          >
            <source src="/video/beach.webm" type="video/webm" />
            <source src="/video/beach.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* overlay text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute left-6 md:left-8 bottom-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Design Archive
            </h1>
            <p className="mt-2 text-sm md:text-base tracking-wide text-white/80">
              DESIGNED BY VICTOR P | NODE
            </p>
          </div>
        </div>
      </section>

      {/* placeholder spacing before next sections */}
      <div className="h-16 md:h-24" />
    </main>
  );
}
