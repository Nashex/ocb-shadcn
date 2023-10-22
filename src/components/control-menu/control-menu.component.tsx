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

type Props = {};

export default function ControlMenu({}: Props) {
  // Function to change the --background variable
  const mutateStyles = useCallback((variable: string, value: string) => {
    // TODO: Middleware to persist the variable in local storage
    document.documentElement.style.setProperty(variable, value);
  }, []);

  const toggleDarkMode = useCallback(() => {
    document.documentElement.classList.toggle("dark");
  }, []);

  const toggleHighContrast = useCallback(() => {
    document.documentElement.classList.toggle("high-contrast");
  }, []);

  const mutateFontFamily = useCallback((value: string) => {
    mutateStyles("--content-font-family", value);
  }, []);

  return (
    <div className="p-4 border border-border rounded-lg gap-8 flex sm:flex-row flex-col items-stretch">
      <div className="flex flex-col items-start">
        <Label className="text-sm font-medium" htmlFor="background">
          Background
        </Label>
        <Button onClick={toggleDarkMode} className="mt-2" id="background">
          <span className="text-sm">Toggle Dark Mode</span>
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
          max={200}
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
    </div>
  );
}
