import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">JCFBC Women on Missions</h1>
              <p className="py-6">
              “For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.” -Ephesians 2:10
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <h1> Who are we?</h1>
      </section>
      <section id="about">
        <h1> Who are we?</h1>
      </section>
      <section id="missions">
        <h1> Our recent Missions</h1>
      </section>
      <section id="volunteer">
        <h1> Want to get Involved?</h1>
      </section>
      <section id="Contact us">
        <h1> Get in Touch!</h1>
      </section>
    </main>
  );
}
