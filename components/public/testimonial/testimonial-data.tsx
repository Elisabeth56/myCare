import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/lib/public/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Anonymous",
    designation: "Hospital Administrator",
    image: image1,
    content:
      "“myCare feels like software we would actually deploy. The role-based dashboards and clean workflows stood out immediately.”",
  },
  {
    id: 2,
    name: "Anonymous",
    designation: "Medical Director",
    image: image2,
    content:
      "The patient flow and appointment management are well thought out. It’s clear this wasn’t built as a toy project.",
  },
  {
    id: 3,
    name: "Anonymous",
    designation: "Operations Manager",
    image: image1,
    content:
      "What impressed me most was the modular design. Each department gets exactly what they need, nothing more.",
  },
  {
    id: 4,
    name: "Anonymous",
    designation: "Health Tech Consultant",
    image: image2,
    content:
      "This is the kind of demo that shows real product thinking — not just UI, but system design.",
  },
];