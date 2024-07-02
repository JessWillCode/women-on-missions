import About from "./about/page";
import Missions from "./missions/page";
import Volunteer from "./volunteer/page";
import Contact from "./contact/page";

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
        <About />
      </section>
      <section id="missions">
        <Missions />
      </section>
      <section id="volunteer">
        <Volunteer />
      </section>
      <section id="Contact us">
        <Contact />
      </section>
    </main>
  );
}
