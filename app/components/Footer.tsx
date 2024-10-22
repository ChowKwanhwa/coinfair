import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted">
      {/* White divider */}
      <div className="h-px bg-white"></div>

      <div className="py-6 md:py-8">
        <div className="container max-w-7xl flex items-center justify-between">
          <div className="flex flex-col items-start gap-2">
            <Link href="#" prefetch={false}>
              <Image
                src="/CoinetLogo.png"
                alt="footerlogo"
                width={100}
                height={1000}
              />
              <span className="sr-only">Coinet</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Coinet All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/Coineton" aria-label="X" prefetch={false} target="_blank" rel="noopener noreferrer">
              <div className="border border-white p-2 rounded">
                <Image
                  src="/XIcon.svg"
                  alt="X"
                  width={20}
                  height={20}
                  className="text-muted-foreground hover:text-primary transition-colors"
                />
              </div>
            </Link>
            <Link href="https://t.me/CoinetOfficial" aria-label="Telegram" prefetch={false} target="_blank" rel="noopener noreferrer">
              <div className="border border-white p-2 rounded">
                <TelegramIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link href="#" aria-label="Flower" prefetch={false}>
              <div className="border border-white p-2 rounded">
                <Image
                  src="/FlowerIcon.svg"
                  alt="Flower"
                  width={20}
                  height={20}
                  className="text-muted-foreground hover:text-primary transition-colors"
                />
              </div>
            </Link>
            <Link href="https://t.me/Coineton_bot/" aria-label="AI Robot" prefetch={false} target="_blank" rel="noopener noreferrer">
              <div className="border border-white p-2 rounded">
                <BotIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}
