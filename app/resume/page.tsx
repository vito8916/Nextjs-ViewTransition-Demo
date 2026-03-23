import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from "@/components/resume/resume-content";
import { ResumeCertifications } from "@/components/resume/resume-certifications";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeExperience } from "@/components/resume/resume-experience";
import { ResumeLanguages } from "@/components/resume/resume-languages";
import { ResumePageHeader } from "@/components/resume/resume-page-header";
import { ResumeProfile } from "@/components/resume/resume-profile";
import { ResumeProjects } from "@/components/resume/resume-projects";
import { ResumeSkills } from "@/components/resume/resume-skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonathan Doe — Senior Software Engineer",
  description:
    "Senior software engineer focused on reliable systems, clear interfaces, and thoughtful product engineering.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        <ResumePageHeader email={profile.email} />
        <ResumeProfile
          links={profile.links}
          name={profile.name}
          note={profile.note}
          summary={profile.summary}
          title={profile.title}
        />
        <ResumeExperience items={experience} />
        <ResumeEducation items={education} />
        <ResumeSkills skills={skills} />
        <ResumeProjects items={projects} />
        <ResumeLanguages items={languages} />
        <ResumeCertifications items={certifications} />
      </div>
    </div>
  );
}
