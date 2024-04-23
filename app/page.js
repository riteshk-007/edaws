import Cta from "./components/Cta";
import IndiaStatesTable from "./components/Data";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import { ImgCard } from "./components/ImgCard";
import Mission from "./components/Mission";
import Providing from "./components/Providing";

export default function Home() {
  return (
    <>
      <Hero />
      <ImgCard />
      <Providing />
      <IndiaStatesTable />
      <Mission />
      <Cta />
      <Faq />
    </>
  );
}
