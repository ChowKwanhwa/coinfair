import Image from "next/image";
import Marquee from "./components/Marquee";
import CFCard from "./components/CFCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto">
      <div className="headerContainer relative max-w-[1100px] m-auto">
        <div className="header absolute top-7 flex justify-between items-center w-full">
          <div className="z-20 sm:block">
            <Image
              src="/coinfairLogo.png"
              alt="coinetLogo"
              width={120}
              height={27}
            />
          </div>
        </div>
      </div>
      <div className="heroContainer w-full h-[500px] sm:h-[900px] relative overflow-hidden">
        <div className="absolute inset-0 z-[-10] overflow-hidden rounded-[40px] sm:rounded-[80px]">
          <Image
            src="/Background.png"
            alt="backgroundImage"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className="hidden sm:block"
          />
          <div className="sm:hidden">
            <Image
              src="/CroppedBackground.png"
              alt="Cropped Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
            />
          </div>
          {/* Horizontal fade effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          {/* Vertical fade effect (optional, for top and bottom edges) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        </div>

        <div className="title absolute top-40 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[80px] text-center whitespace-normal sm:whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] gradient-text mb-4 sm:mb-[22px]">
            A new Generation DEX
          </h1>
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[80px] text-center whitespace-normal sm:whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] text-[color:var(--title-text-2)]">
            Leading Crypto Trading
          </h1>
        </div>
      </div>
      <Marquee />
      <div className="cards flex flex-col max-w-[1100px] m-auto w-full gap-[50px] py-20 px-4 sm:px-0">
        <div className="firstTwo flex flex-col sm:flex-row justify-between items-center w-full gap-[50px]">
          <CFCard className="w-full sm:w-1/2" progress={10} />
          <CFCard
            className="w-full sm:w-1/2"
            seedRound="Seed Round"
            saleToken="500 million $Fair"
            hardCap="5M $USDT"
            startSale="Coming Soon"
            border={false}
            progress={0}
          />
        </div>
        <div className="buttonTwo flex flex-col sm:flex-row justify-between items-center w-full gap-[50px]">
          <CFCard
            className="w-full sm:w-1/2"
            seedRound="Series A Funding"
            saleToken="500 million $Fair"
            hardCap="10M $USDT"
            startSale="Coming Soon"
            border={false}
            progressBar={false}
          />
          <CFCard
            className="w-full sm:w-1/2"
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
        <Footer />
      </div>
    </main>
  );
}
