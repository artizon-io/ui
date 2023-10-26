"use client";

import { Button } from "@@/components/primitives/button";
import usePersistedStore from "@@/hooks/use-persisted-store";
import { SettingsStore } from "@@/types/settings";
import { cn } from "@@/utils/tailwind";
import { LuCommand } from "react-icons/lu";
import { useCommandMenuVisibility } from "./store";

export const generateCommandMenuTriggerComp =
  (
    useSettings: SettingsStore<{
      toggleCommandMenuHotkey: string;
    }>
  ) =>
  // eslint-disable-next-line react/display-name
  ({ className }: { className?: string }) => {
    const open = useCommandMenuVisibility((state) => state.open);
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleCommandMenuHotkey
    );

    return (
      <Button
        styles="ghost"
        size="icon"
        className={cn(className)}
        onClick={open}
        tooltipChildren="Command menu"
      >
        <LuCommand className="w-5 h-5 stroke-[1.5]" />
      </Button>
    );
  };
