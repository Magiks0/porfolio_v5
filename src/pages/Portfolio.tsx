import Sidebar from "../components/layout/Sidebar";
import ProjectsSection from "../features/sections/projects/ProjectsSection";
import ExpertiseSection from "../features/sections/expertise/ExpertiseSection";
import FormationSection from "../features/sections/formation/FormationSection";
import Contact from "../features/sections/contact/components/Contact";

export default function Portfolio() {
  return (
    <div className="lg:flex lg:h-screen">
      <Sidebar className="lg:w-[40%] lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto" />
      <div className="lg:w-[60%] lg:h-screen lg:overflow-y-auto">
        <ProjectsSection />
        <ExpertiseSection />
        <FormationSection />
        <Contact />
      </div>
    </div>
  );
}
