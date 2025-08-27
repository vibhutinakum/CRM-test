// Add this interface to your existing candidate types file

export interface SocialAccounts {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

// Update your existing Candidate interface to include socialAccounts
export interface Candidate {
  id: string;
  name: string;
  position: string;
  location: string;
  city: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  profileImage: string;
  badges: string[];
  socialAccounts?: SocialAccounts; // Add this line
  lastActivity: {
    user: string;
    company: string;
    date: string;
  };
  details: {
    currentOrganization: string;
    skills: string;
    availableFrom: string;
    currentSalary: string;
    noticePeriod: string;
    fullAddress: string;
    resume: string;
    totalExperience: string;
    currentEmploymentStatus: string;
    dateOfBirth: string;
    relevantExperience: string;
    salaryExpectation: string;
    status: string;
    salaryType: string;
    languageSkills: string;
    summary?: string;
  };
}

export interface AssignedJob {
  id: number;
  title: string;
  company: string;
  assignedDate: string;
  status: string;
  assignee: string;
}

export interface Note {
  id: number;
  type: string;
  status: string;
  content: string;
  associations: string;
  author: string;
  date: string;
}

export interface Tab {
  id: string;
  label: string;
  active: boolean;
}
