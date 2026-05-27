export type ExperienceType = "work" | "education";

export type Experience = {
  title: string;
  org: string;
  type: ExperienceType;
  start: string; // "MM-YYYY"
  end?: string;  // "MM-YYYY" | undefined = present
  description?: string;
};
