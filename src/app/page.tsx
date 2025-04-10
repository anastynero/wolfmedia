import Hero from "@/components/Hero/Hero";
import RootLayout from "./layout";
import About from "@/components/About/About";
import Communities from "@/components/Сommunities/Сommunities";
import Info from "@/components/Info/Info";


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
