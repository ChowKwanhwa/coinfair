import Image from "next/image";
import Marquee from "./components/Marquee";
import CFCard from "./components/CFCard";
import { ShadcnPieChart } from "./components/PieChart";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto">
      <div className="headerContainer relative max-w-[1100px] m-auto">
        <div className="header absolute top-7 flex justify-between items-center">
          <Image
            src={"/coinfairLogo.png"}
            alt="coinfairLogo"
            width={120}
            height={27}
          />
        </div>
      </div>
      <div className="heroContainer w-full h-[900px] relative overflow-hidden">
        <Image
          src={"/Background.png"}
          alt="backgroundImage"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          className="absolute top-0 left-0 w-full h-[900px] z-[-10]"
        />

        <div className="title absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[80px] text-center whitespace-normal sm:whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] gradient-text mb-4 sm:mb-[22px]">
            A new Generation DEX
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[80px] text-center whitespace-normal sm:whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] text-[color:var(--title-text-2)]">
            Leading Crypto Trading
          </h1>
        </div>
      </div>
      <Marquee />
      <div className="cards flex flex-col max-w-[1100px] m-auto w-full gap-[50px] py-20">
        <div className="firstTwo flex justify-between items-center w-full gap-[50px]">
          <CFCard className="flex-grow" progress={10} />
          <CFCard
            className="flex-grow"
            seedRound="Seed Round"
            saleToken="500 million $Fair"
            hardCap="5M $USDT"
            startSale="Coming Soon"
            border={false}
            progress={0}
          />
        </div>
        <div className="buttonTwo flex justify-between items-center w-full gap-[50px]">
          <CFCard
            className="flex-grow"
            seedRound="Series A Funding"
            saleToken="500 million $Fair"
            hardCap="10M $USDT"
            startSale="Coming Soon"
            border={false}
            progressBar={false}
          />
          <CFCard
            className="flex-grow"
            seedRound="Series B Funding"
            saleToken="300 million $Fair"
            hardCap="9M $USDT"
            startSale="Coming Soon"
            border={false}
            progressBar={false}
          />
        </div>
      </div>
      <div className="footer max-w-[1100px] m-auto">
      <Footer/>
      </div>

    </main>
  );
}
