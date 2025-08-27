import { Candidate, AssignedJob, Note, Tab } from "../types/candidate";

export const mockCandidate: Candidate = {
  id: "231",
  name: "William Sample",
  position: "Senior Product Manager",
  location: "United States",
  city: "Dallas",
  email: "williamsample@gmail.com",
  phone: "+91 9021232326",
  linkedinUrl: "https://linkedin.com/in/williamsample",
  profileImage: "/candidate-image.png",
  badges: ["verified", "premium", "featured"],
  // Added social accounts
  socialAccounts: {
    facebook: "https://facebook.com/williamsample",
    twitter: "https://twitter.com/williamsample",
    linkedin: "https://linkedin.com/in/williamsample",
    github: "https://github.com/williamsample",
    instagram: "", // Empty string means not available
  },
  lastActivity: {
    user: "Phyllis Yang",
    company: "Silicon Links Inc",
    date: "Jul 14, 2023, 4:04 pm",
  },
  details: {
    currentOrganization: "World Bank Group",
    skills: "HTML, CSS, Javascript",
    availableFrom: "Jul 14, 2023",
    currentSalary: "$6000",
    noticePeriod: "90 Days",
    fullAddress: "9400 Ashton Rd, Philadelphia, PA 19115, United States",
    resume: "Resume",
    totalExperience: "5 Years",
    currentEmploymentStatus: "Employed",
    dateOfBirth: "15 June 1993",
    relevantExperience: "7 Years",
    salaryExpectation: "$9000",
    status: "Submitted to Client",
    salaryType: "Annual",
    languageSkills: "English(Elementary proficiency)",
    summary: "",
  },
};

// Alternative candidate with different social links for testing
export const mockCandidate2: Candidate = {
  id: "232",
  name: "Jane Developer",
  position: "Full Stack Developer",
  location: "Canada",
  city: "Toronto",
  email: "jane.developer@gmail.com",
  phone: "+1 416-555-0123",
  linkedinUrl: "https://linkedin.com/in/janedeveloper",
  profileImage: "/candidate-image-2.png",
  badges: ["verified"],
  // Only has LinkedIn and GitHub
  socialAccounts: {
    facebook: "",
    twitter: "",
    linkedin: "https://linkedin.com/in/janedeveloper",
    github: "https://github.com/janedeveloper",
    instagram: "https://instagram.com/janedeveloper",
  },
  lastActivity: {
    user: "John Smith",
    company: "Tech Corp",
    date: "Jul 15, 2023, 2:30 pm",
  },
  details: {
    currentOrganization: "Tech Innovations Inc",
    skills: "React, Node.js, Python, Docker",
    availableFrom: "Aug 1, 2023",
    currentSalary: "$75000",
    noticePeriod: "30 Days",
    fullAddress: "123 Tech Street, Toronto, ON M5V 3A8, Canada",
    resume: "Resume",
    totalExperience: "3 Years",
    currentEmploymentStatus: "Employed",
    dateOfBirth: "22 March 1995",
    relevantExperience: "3 Years",
    salaryExpectation: "$85000",
    status: "Interview Scheduled",
    salaryType: "Annual",
    languageSkills: "English(Native), French(Intermediate)",
    summary:
      "Passionate full-stack developer with expertise in modern web technologies.",
  },
};

export const mockAssignedJobs: AssignedJob[] = [
  {
    id: 1,
    title: "Senior Product Manager",
    company: "Recruit CRM",
    assignedDate: "Jul 10, 2023",
    status: "Assigned",
    assignee: "William Sample",
  },
  {
    id: 2,
    title: "Senior Product Manager",
    company: "Recruit CRM",
    assignedDate: "Jul 10, 2023",
    status: "Assigned",
    assignee: "William Sample",
  },
  {
    id: 3,
    title: "Senior Product Manager",
    company: "Recruit CRM",
    assignedDate: "Jul 10, 2023",
    status: "Assigned",
    assignee: "William Sample",
  },
];

export const mockNotes: Note[] = [
  {
    id: 1,
    type: "Note",
    status: "To Do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    associations: "1 Association(s)",
    author: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
  },
  {
    id: 2,
    type: "Note",
    status: "To Do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    associations: "1 Association(s)",
    author: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
  },
  {
    id: 3,
    type: "Note",
    status: "To Do",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    associations: "1 Association(s)",
    author: "John Doe",
    date: "Jul 12, 2023, 11:54 am",
  },
];

export const mockDetailTabs: Tab[] = [
  { id: "all-details", label: "All Details", active: true },
  { id: "assigned-jobs", label: "Assigned Jobs", active: false },
  { id: "related-emails", label: "Related Emails", active: false },
  { id: "candidate-questions", label: "Candidate Questions", active: false },
  { id: "hotlists", label: "Hotlists", active: false },
  { id: "related-deals", label: "Related Deals", active: false },
  { id: "contacts-pitched", label: "Contact(s) Pitched", active: false },
];

export const mockActivityTabs: Tab[] = [
  { id: "all", label: "All", active: true },
  { id: "notes", label: "Notes & Calls", active: false },
  { id: "tasks", label: "Tasks", active: false },
  { id: "meeting", label: "Meeting", active: false },
  { id: "files", label: "Files", active: false },
];
