export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  status: string;
}

export const educationData: EducationItem[] = [
  {
    year: "PRESENT",
    degree: "B.Voc in Artificial Intelligence & Machine Learning",
    institution: "Nexcore Institute of Technology",
    location: "Mumbai, Maharashtra",
    description: "Specializing in Artificial Intelligence, Machine Learning algorithms, and practical software engineering. Working on intelligent web integrations, data workflows, and user-centric frontend experiences.",
    status: "Active Student",
  },
  {
    year: "2023",
    degree: "Higher Secondary Certificate (12th Standard)",
    institution: "National High School & Jr. College",
    location: "Dapoli, Ratnagiri",
    description: "Completed Higher Secondary education with focus on Science, Mathematics, and Computer Fundamentals.",
    status: "Completed",
  },
  {
    year: "2021",
    degree: "Secondary School Certificate (10th Standard CBSE)",
    institution: "RPVV, Gandhi Nagar",
    location: "Delhi",
    description: "Foundational secondary education under CBSE board curriculum with strong academic performance in technical subjects.",
    status: "Completed",
  },
];
