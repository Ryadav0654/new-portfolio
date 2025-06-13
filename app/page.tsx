import About from "./about/page";
import Skill from "./skills/page";
import Contact from "./contact/page";
import Project from "./projects/page";
import Service from "./service/page";
import { Toaster } from "react-hot-toast";
import LandingPage from "@/components/LandingPage";
import ScrollbarStatus from "@/components/ScrollbarStatus";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollbarStatus />
      <LandingPage />
      <About />
      <Project />
      <Skill />
      <Service />
      <Contact />
    </>
  );
}
