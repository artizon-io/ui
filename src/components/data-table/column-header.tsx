"use client";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";

import { Button } from "@@/components/primitives/button";
import { DropdownMenu } from "@@/components/primitives/dropdown-menu";
import { DropdownMenuSeparator } from "../primitives/dropdown-menu/separator";
import { DropdownMenuItem } from "../primitives/dropdown-menu/items";
import { DropdownMenuContent } from "../primitives/dropdown-menu/contents";
import { DropdownMenuTrigger } from "../primitives/dropdown-menu/triggers";
import { tw } from "@@/utils/tailwind";

const iconStyles = tw`mr-2 h-3.5 w-3.5 dark:text-neutral-400/70`;

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: {
  title: string;
  column: Column<TData, TValue>;
}) {
  if (!column.getCanSort()) {
    return <span>{title}</span>;
  }

  const SortIndicatorIcon =
    column.getIsSorted() === "desc"
      ? ArrowDownIcon
      : column.getIsSorted() === "asc"
      ? ArrowUpIcon
      : CaretSortIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          styles="ghost"
          size="sm"
          className="data-[state=open]:dark:bg-neutral-800"
        >
          {title}
          <SortIndicatorIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <ArrowUpIcon className={iconStyles} />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <ArrowDownIcon className={iconStyles} />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
          <EyeNoneIcon className={iconStyles} />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
