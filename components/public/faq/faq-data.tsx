import { FAQ } from "@/lib/public/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Is myCare a real hospital management system?",
    ans: "myCare is a fully functional demo built to production standards. Core workflows like patient records, appointments, billing, and role-based dashboards work end-to-end, while sensitive data is mocked for safety.",
  },
  {
    id: 2,
    quest: "Can this scale to a real hospital environment?",
    ans: "Yes. The architecture is designed to scale. Modules are isolated, roles are enforced, and the system can be connected to a real backend, database, and authentication provider with minimal changes.",
  },
  {
    id: 3,
    quest: "Is patient data stored or processed?",
    ans: "No real patient data is used in the public demo. All records are sample data. This ensures privacy compliance while still demonstrating full system functionality.",
  },
];

export default faqData;