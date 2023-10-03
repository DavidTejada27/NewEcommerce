import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex w-full justify-center mt-1.5 p-3.5 pt">
        <div tabIndex={0} className="flex flex-col items-center w-fit pt-10 ">
          <h2 className="text-base font-normal sm:text-2xl md:text-3xl 2xl:text-4xl">
            Your favorites anime statues in
          </h2>
          <h1 className="text-4xl font-semibold sm:text-6xl md:text-7xl 2xl:text-8xl border-b-4 border-b-green-400">
            animestatuaria
          </h1>
          <Button className="w-56 sm:btn-wide md:w-72 2xl:w-96 bg-gradient-to-b from-green-400 to-blue-400 mt-3">
            Let's Explore
          </Button>
        </div>
      </div>
      
      <Carousel></Carousel>
    </main>
  );
}
