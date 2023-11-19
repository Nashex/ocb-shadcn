"use client";

import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import {
  mutateFontFamily,
  mutateStyles,
  mutateTheme,
  mutateWidth,
  toggleHighContrast,
} from "@/lib/theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  trigger: React.ReactNode;
};

export default function ControlPopover({ trigger }: Props) {
  const [fontScale, setFontScale] = React.useState(100);

  const themes = [
    {
      name: "dark",
      className: "bg-black text-white",
    },
    {
      name: "night",
      className: "bg-[#181b20] text-white",
    },
    {
      name: "light",
      className: "bg-white text-black",
    },
    {
      name: "day",
      className: "bg-[#e7e3df] text-black",
    },
  ] as const;

  const handleFontScale = React.useCallback(
    (value: number) => {
      setFontScale((prev) => prev + value);
      mutateStyles(document, "--content-text-size", value + fontScale + "");
    },
    [fontScale]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        {trigger || <button>Open</button>}
      </PopoverTrigger>
      <PopoverContent collisionPadding={64}>
        <div className="flex flex-col gap-6">
          {/* Theme */}
          <div className="flex flex-row items-center justify-between">
            <Label htmlFor="theme" className="text-sm font-medium">
              Theme
            </Label>
            {
              <div className="flex flex-row gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => mutateTheme(document, theme.name)}
                    className={cn(
                      "w-8 h-8 rounded-full border border-border",
                      theme.className
                    )}
                  >
                    A
                  </button>
                ))}
              </div>
            }
          </div>

          {/* High Contrast */}
          <div className="flex flex-row items-center justify-between">
            <Label className="text-sm font-medium" htmlFor="font-family">
              High Contrast
            </Label>
            <Switch
              onCheckedChange={() => toggleHighContrast(document)}
              id="high-contrast"
            />
          </div>

          {/* Font Family */}
          <div className="flex flex-row items-center justify-between">
            <Label className="text-sm font-medium" htmlFor="font-family">
              Font
            </Label>
            <Select
              onValueChange={(v: string) => mutateFontFamily(document, v)}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Inter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inherit">Default</SelectItem>
                <SelectItem
                  value="Public Sans, sans-serif"
                  className="font-['Public_Sans']"
                >
                  Public Sans
                </SelectItem>
                <SelectItem
                  value="Libre Baskerville, serif"
                  className="font-['Libre_Baskerville']"
                >
                  Libre Baskerville
                </SelectItem>
                <SelectItem
                  value="Roboto Mono, monospace"
                  className="font-['Roboto_Mono,_monospace']"
                >
                  Roboto Mono
                </SelectItem>
                <SelectItem value="Caudex, serif" className="font-['Caudex']">
                  Caudex
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Font Size */}
          <div className="flex flex-row items-center justify-between">
            <Label className="text-sm font-medium" htmlFor="font-size">
              Font Size
            </Label>
            <div className="flex flex-row items-center border rounded-md gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleFontScale(-10)}
                className="border-none"
              >
                -
              </Button>
              <div className="text-sm w-10">{fontScale}%</div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleFontScale(10)}
                className="border-none"
              >
                +
              </Button>
            </div>
          </div>

          {/* Text width */}
          <div className="flex flex-row items-center justify-between">
            <Label className="text-sm font-medium" htmlFor="font-size">
              Content Width
            </Label>
            <div className="flex flex-row gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => mutateWidth(document, "28rem")}
              >
                <AlignJustify className="h-3 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => mutateWidth(document, "36rem")}
              >
                <AlignJustify className="h-4 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => mutateWidth(document, "48rem")}
              >
                <AlignJustify className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
