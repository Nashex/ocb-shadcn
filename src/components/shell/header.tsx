import React from "react";
import { BookType, CaseSensitive, PanelLeftClose } from "lucide-react";
import ControlPopover from "../controls/control-popover";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky bg-background z-[10] top-0 h-20 flex flex-row items-center sm:w-fit w-full justify-start p-4 px-9 gap-x-2">
      <button className="h-10 w-10 border border-border rounded-sm flex items-center justify-center hover:bg-foreground/5">
        <PanelLeftClose size={24} strokeWidth={1.5} />
      </button>

      <ControlPopover
        trigger={
          <button className="h-10 w-10 border border-border rounded-sm flex items-center justify-center hover:bg-foreground/5">
            <CaseSensitive size={24} strokeWidth={1.5} />
          </button>
        }
      />
    </header>
  );
}
