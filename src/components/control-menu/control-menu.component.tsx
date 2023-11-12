"use client";

import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlignJustify } from "lucide-react";

type Props = {};

export default function ControlMenu({}: Props) {
  // Function to change the --background variable
  const mutateStyles = useCallback((variable: string, value: string) => {
    // TODO: Middleware to persist the variable in local storage
    document.documentElement.style.setProperty(variable, value);
  }, []);

  const toggleDarkMode = useCallback(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("day");
    document.documentElement.classList.remove("night");
  }, []);

  const toggleDayMode = useCallback(() => {
    document.documentElement.classList.add("day");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("night");
  }, []);

  const toggleNightMode = useCallback(() => {
    document.documentElement.classList.add("night");
    document.documentElement.classList.remove("day");
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleLightMode = useCallback(() => {
    document.documentElement.classList.remove("night");
    document.documentElement.classList.remove("day");
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleHighContrast = useCallback(() => {
    document.documentElement.classList.toggle("high-contrast");
  }, []);

  const mutateFontFamily = useCallback((value: string) => {
    mutateStyles("--content-font-family", value);
  }, []);

  const mutateWidth = useCallback((value: string) => {
    mutateStyles("--max-element-width", value);
    console.log(value);
  }, []);

  return (
    <div className="p-4 border border-border rounded-lg gap-8 flex sm:flex-row flex-col items-stretch">
      <div className="flex flex-col items-start">
        <Label className="text-sm font-medium" htmlFor="theme">
          Theme
        </Label>
        <Button
          onClick={toggleDarkMode}
          style={{
            borderRadius: "100%",
            backgroundColor: "#000000",
            color: "#f1f1f1",
            border: "solid 1px white",
          }}
        >
          A
        </Button>
        <Button
          onClick={toggleNightMode}
          style={{
            borderRadius: "50%",
            backgroundColor: "#181b20",
            color: "#dfe2e7",
            border: "solid 1px white",
          }}
        >
          A
        </Button>
        <Button
          onClick={toggleLightMode}
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            color: "#0e0e0e",
            border: "solid 1px black",
          }}
        >
          A
        </Button>
        <Button
          onClick={toggleDayMode}
          style={{
            borderRadius: "50%",
            backgroundColor: "#e7e3df",
            color: "#201c18",
            border: "solid 1px black",
          }}
        >
          A
        </Button>
      </div>

      <div className="flex flex-col items-start">
        <Label className="text-sm font-medium" htmlFor="font-family">
          Font Family
        </Label>
        <Select onValueChange={mutateFontFamily}>
          <SelectTrigger className="w-[180px] mt-2">
            <SelectValue placeholder="Inter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inherit">Default</SelectItem>
            <SelectItem value="Public Sans, sans-serif">Public Sans</SelectItem>
            <SelectItem value="Libre Baskerville, serif">
              Libre Baskerville
            </SelectItem>
            <SelectItem value="Roboto Mono, monospace">Roboto Mono</SelectItem>
            <SelectItem value="Caudex, serif">Caudex</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Content Text Size</Label>
        <Slider
          className="mt-2 sm:w-[200px]"
          defaultValue={[100]}
          min={75}
          max={125}
          onValueChange={(value) => {
            mutateStyles("--content-text-size", `${value[0]}`);
          }}
          step={1}
        />
      </div>

      <div className="flex flex-col items-start">
        <Label className="text-sm font-medium" htmlFor="high-contrast">
          Toggle High Contrast
        </Label>
        <Switch
          onCheckedChange={toggleHighContrast}
          id="high-contrast"
          className="mt-2"
        />
      </div>
      <div className="flex flex-col items-start">
        <Label className="text-sm font-medium" htmlFor="font-family">
          Width
        </Label>
        <Button
          variant="outline"
          size="icon"
          onClick={() => mutateWidth("36rem")}
        >
          <AlignJustify className="h-5 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => mutateWidth("48rem")}
        >
          <AlignJustify className="h-8 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => mutateWidth("64rem")}
        >
          <AlignJustify className="h-8 w-8" />
        </Button>
      </div>
      {/** 55, 70, 90 ch */}
    </div>
  );
}
