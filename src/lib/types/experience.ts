export type ExperienceType = "work" | "education";

export type Experience = {
  title: string;
  org: string;
  type: "work" | "education";
  start: string; // "MM-YYYY"
  end?: string;  // "MM-YYYY" | undefined = present
  side: "left" | "right";
  description?: string;
};
