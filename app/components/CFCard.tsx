"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  seedRound?: string;
  saleToken?: string;
  hardCap?: string;
  startSale?: string;
  progressBar?: boolean;
  border?: boolean; // New prop for border
  progress?: number; // New optional prop for progress
}

export default function CFCard({
  seedRound = "Pre-seed Round",
  saleToken = "200 million $Fair",
  hardCap = "2M $USDT",
  startSale = "2024-10-08 18:00",
  border = true, // Default to true for backwards compatibility
  progressBar = true,
  progress = 10, // Default progress is now 66%
  className,
  ...props
}: Props) {
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    setShowProgress(true);
  }, []);

  return (
    <Card 
      className={cn(
        "bg-[var(--card-background)] text-white",
        border ? "border border-solid border-white" : "border-none",
        !progressBar && "pb-[30px]",
        className
      )}
      {...props}
    >
      <CardHeader className="py-6 pl-6 text-center sm:text-left">
        <CardTitle className="text-[var(--card-title)]">{seedRound}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 pt-[20px] flex flex-col items-center sm:items-start">
        <p className="text-sm text-[var(--card-text-2)] flex flex-col sm:flex-row items-center sm:items-start">
          <span className="text-[var(--card-text-1)] mb-2 sm:mb-0 sm:mr-3">Sale Token:</span>
          {saleToken}
        </p>
        <p className="text-sm text-[var(--card-text-2)] flex flex-col sm:flex-row items-center sm:items-start">
          <span className="text-[var(--card-text-1)] mb-2 sm:mb-0 sm:mr-5">Hard Cap:</span>
          {hardCap}
        </p>
        <p className="text-sm text-[var(--card-text-2)] flex flex-col sm:flex-row items-center sm:items-start">
          <span className="text-[var(--card-text-1)] mb-2 sm:mb-0 sm:mr-5">Start Sale:</span>
          {startSale}
        </p>
      </CardContent>
      {progressBar && (
        <CardFooter className="px-3">
          <div className="w-full space-y-2 pb-4">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-black">
                <div
                  style={{ 
                    width: showProgress ? `${progress}%` : '0%'
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap
                   text-white justify-center bg-[#FFE2FF] transition-all duration-1000 ease-out
                   origin-left transform-gpu"
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-right">
              {progress}% Complete
            </p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
