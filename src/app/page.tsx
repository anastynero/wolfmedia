import Hero from "@/components/Hero/Hero";
import RootLayout from "./layout";
import About from "@/components/About/About";
import Communities from "@/components/Сommunities/Сommunities";
import Info from "@/components/Info/Info";
import BrandCommunication from "@/components/BrandCommunication/BrandCommunication";


export default function Home() {
  return (
  <div>
    <Hero/>
    <About/>
    <Communities/>
    <Info/>
  </div>
  );
}
