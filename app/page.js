import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsMatrix from "@/components/SkillsMatrix";
import JobFitAnalyzer from "@/components/JobFitAnalyzer";
import ChatBot from "@/components/ChatBot";
import CertificationsEducation from "@/components/CertificationsEducation";
import PrintResume from "@/components/PrintResume";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <FeaturedProjects />
      <SkillsMatrix />
      <JobFitAnalyzer />
      <ChatBot />
      <CertificationsEducation />
      <PrintResume />
    </>
  );
}
