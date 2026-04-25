import { AuroraBg } from './components/aurora-bg';
import { Nav } from './components/nav';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Experience } from './components/experience';
import { Contact } from './components/contact';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AuroraBg />
      <Nav />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
