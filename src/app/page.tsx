import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Communities from "@/components/Сommunities/Сommunities";
import Info from "@/components/Info/Info";
import BrandCommunication from "@/components/BrandCommunication/BrandCommunication";
import CommunityAutomation from "@/components/CommunityAutomation/CommunityAutomation";
import Contacts from "@/components/Contacts/Contacts";
import FavoriteIcon from "@/components/FavoriteIcon/FavoriteIcon";
import SuccessForm from "@/components/SuccessForm/SuccessForm";


export default function Home() {
  return (
  <div>
    <Hero/>
    <About/>
    <Communities/>
    <Info/>
    <BrandCommunication/>
    <CommunityAutomation/>
    <Contacts/>
    <SuccessForm/>
  </div>
  );
}
