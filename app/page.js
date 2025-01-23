import HeroSection from "./component/hero";
import NavBar from "./component/navbar";
import DisplayAnimals from "./component/animal-display";



export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <p className="message">Over 4,000,000 animals are adopted every year. Find animals from shelters and rescues all over the country just using your zipcode. You'll also see just how far they are from your home too! Millions of dogs,
         cats, and hamsters are available at a location near you. Check out the form below. Your future new family member is waiting for you!</p>
      <DisplayAnimals></DisplayAnimals>
    </div>
  );
}
