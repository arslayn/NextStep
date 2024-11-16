import { BotMessageSquare } from "lucide-react";
import { PersonStanding } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Smartphone } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Cable } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const gradItems = [
  { label: "Highschool", href: "High" },
  { label: "College students", href: "Uni" },
];

export const navItems = [
  { label: "Features", href: "featuresSection" },
  { label: "Workflow", href: "workflowSection" },
  { label: "Roadmaps", href: "Roadmaps" },
  { label: "Reviews", href: "reviewsSection" },
];

export const Reviews = [
  {
    user: "Aman chaudhary",
    company: "High school senior",
    image: user1,
    text: "As a high school senior applying for colleges, I had a million questions. The career guidance team helped me so much with my college applications, to helping me figure out which schools align best with my goals.",
  },
  {
    user: "Meet daruwala",
    company: "High school junior",
    image: user2,
    text: "I wasn’t sure if I even wanted to go to college at first, but after using this platform, I feel like I have a clearer idea of what my future could look like. ",
  },
  {
    user: "Zeel Sharma",
    company: "Social media influencer",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Sakshi Jaipuriya",
    company: "Freelancer",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Rajesh Agarwal",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Heeba khan",
    company: "Startup",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Personalized Profiles",
    description:
      "Students should be able to create and update their profiles, including their academic background, interests, goals, and challenges.",
  },
  {
    icon: <Cable />,
    text: "Multi-Platform Compatibility",
    description:
      "It provides a user-friendly, accessible, and secure platform that integrates resources and services tailored to individual student needs.",
  },
  {
    icon: <PersonStanding />,
    text: "Accessibility",
    description:
      " Design with accessibility features like screen readers, high-contrast modes, and easy-to-navigate interfaces for users.",
  },
  {
    icon: <BookOpenText />,
    text: "Parental Guidance",
    description:
      "Parents can choose what information they wish to see, ensuring that their child's privacy is respected while still being actively involved.",
  },
  {
    icon: <EyeOff />,
    text: "Data Anonymization",
    description:
      "We anonymize all personal data and use strong encryption to keep your information safe and secure, ensuring complete confidentiality at all times, Your privacy is our top priority.",
  },
  {
    icon: <Smartphone />,
    text: "Mobile compatible",
    description:
      "Offer a mobile version of the platform that allows students to access the website using their smart phones.",
  },
];

export const checklistItems = [
  {
    title: "College Recommendations Basis",
    description:
      " Allow students to input their marks (e.g., 12th grade, entrance exam results) and get a list of colleges they are eligible for. The tool can filter colleges based on marks, location, and preferred courses.",
  },
  {
    title: "Academic Guidance & Course Selection",
    description:
      "Help students choose subjects and activities that align with their career goals, including specialized courses and electives to build a strong foundation in their chosen fields.",
  },
  {
    title: "Defined Roadmaps",
    description:
      "Providing a set of roadmaps based on user's picked Stream and preferences.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: ["Private board", "Private Mode"],
  },
  {
    title: "Pro",
    price: "$10",
    features: ["Private board sharing", "Roadmaps", "Web Analytics"],
  },
  {
    title: "Enterprise",
    price: "$20",
    features: ["High Performance Network", "Private Mode"],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
