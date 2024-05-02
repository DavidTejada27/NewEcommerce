import Button from "./app/components/Button";
import NavBar from "./app/components/NavBar";
import Carousel from "./app/components/Carousel";
import Features from "./app/components/Features";
import Footer from "./app/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex w-full h-80 sm:h-[22rem] md:h-[26rem] lg:h-[30rem] 2xl:h-[40rem] justify-center mt-1.5 p-3.5 ">
        <div className="flex flex-col justify-end items-center w-full pt-10 bg-[url('/images/assets/Background.jpg')] bg-cover rounded-xl">
          <h2 className="text-base font-extrabold sm:text-2xl md:text-3xl 2xl:text-4xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Your favorites anime statues in
          </h2>
          <h1 className="text-4xl font-black sm:text-6xl md:text-7xl 2xl:text-8xl border-b-4 border-b-green-400 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            animestatuaria
          </h1>
          <Button className="w-56 sm:btn-wide md:w-72 2xl:w-96 bg-gradient-to-b from-green-400 to-blue-400 m-3">
            <a href="#Statues">Let's Explore</a>
          </Button>
          
        </div>
      </div>

      <Features></Features>
      <Carousel></Carousel>
      <Footer></Footer>
    </main>
  );
}
