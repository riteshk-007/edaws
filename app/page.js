import Cta from "./components/Cta";
import IndiaStatesTable from "./components/Data";
import Hero from "./components/Hero";
import { ImgCard } from "./components/ImgCard";
import Mission from "./components/Mission";
// import IndiaMap from "./components/IndiaMap";
import Providing from "./components/Providing";

export default function Home() {
  return (
    <>
      <Hero />
      <ImgCard />
      <Providing />
      <IndiaStatesTable />
      {/* <IndiaMap /> */}
      <Mission />
      <Cta />
    </>
  );
}
