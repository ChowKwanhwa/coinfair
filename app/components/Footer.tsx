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
              <Image src='/coinfairLogo.png' alt="footerlogo" width={100} height={1000} />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Coinfair All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="X" prefetch={false}>
              <div className="border border-white p-2 rounded">
                <Image src="/XIcon.svg" alt="X" width={20} height={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link href="#" aria-label="Telegram" prefetch={false}>
              <div className="border border-white p-2 rounded">
                <TelegramIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link href="#" aria-label="Flower" prefetch={false}>
              <div className="border border-white p-2 rounded">
                <Image src="/FlowerIcon.svg" alt="Flower" width={20} height={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link href="#" aria-label="AI Robot" prefetch={false}>
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
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

function TextIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

