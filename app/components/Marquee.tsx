import Image from "next/image";
import { LandingMarquee } from "@/components/landing/LandingMarquee";

const Marquee: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <LandingMarquee animationDirection="left">
        <Image src="/Ton.svg" alt="Ton" width={48} height={48} className="mx-8" />
        <Image src="/Circle.png" alt="Circle" width={48} height={48} className="mx-8" />
        <Image src="/Binance.png" alt="Binance" width={48} height={48} className="mx-8" />
        <Image src="/Jump.png" alt="Jump" width={48} height={48} className="mx-8" />
        <Image src="/Magic-Eden.png" alt="Magic Eden" width={48} height={48} className="mx-8" />
        <Image src="/Meta.png" alt="Meta" width={48} height={48} className="mx-8" />
        <Image src="/Stripe.png" alt="Stripe" width={48} height={48} className="mx-8" />
        <Image src="/Arbitrum.svg" alt="Arbitrum" width={48} height={48} className="mx-8" />
      </LandingMarquee>
    </div>
  );
};

export default Marquee;
