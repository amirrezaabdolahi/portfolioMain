"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function DownloadCvBtn() {
  const portfolios = [
    {
      label: "English",
      href: "/assets/resume/portfolio_en.pdf",
    },
    {
      label: "فارسی (Persian)",
      href: "/assets/resume/portfolio_fa.pdf",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 uppercase"
        >
          <span>Download CV</span>
          <FiDownload />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Choose your language</DialogTitle>
          <DialogDescription>
            Select the language of the portfolio you want to download.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 pt-4">
          {portfolios.map((portfolio) => (
            <Button
              key={portfolio.href}
              variant="outline"
              className="flex w-full items-center justify-between"
              asChild
            >
              <a href={portfolio.href} download>
                <span>{portfolio.label}</span>
                <FiDownload />
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}