"use client";

import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@radix-ui/react-label";

type Props = {};

export default function ControlMenu({}: Props) {
  // Function to change the --background variable
  const mutateStyles = useCallback((variable: string, value: string) => {
    document.documentElement.style.setProperty(variable, value);
  }, []);

  const toggleDarkMode = useCallback(() => {
    document.documentElement.classList.toggle("dark");
  }, []);

  return (
    <div className="p-4 border border-border rounded-lg gap-4 flex">
      <Button onClick={toggleDarkMode}>
        <span className="text-sm">Toggle Dark Mode</span>
      </Button>

      <div className="w-[200px]">
        <Label className="text-base font-medium">Content Text Size</Label>
        <Slider
          defaultValue={[100]}
          min={50}
          max={200}
          onValueChange={(value) => {
            mutateStyles("--content-text-size", `${value[0]}`);
          }}
          step={1}
          className="mt-2"
        />
      </div>
    </div>
  );
}
