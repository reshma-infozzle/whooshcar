import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-3",
        caption: "flex justify-center pt-1 relative items-center pb-4",
        caption_label: "text-base font-comic font-medium",
        caption_dropdowns: "flex justify-center gap-2 flex-1",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-9 w-9 bg-white p-0 opacity-70 hover:opacity-100 border-2 border-black hover:bg-secondary/20 transition-all"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex mb-2",
        head_cell:
          "text-muted-foreground rounded-md w-10 font-comic text-sm uppercase",
        row: "flex w-full mt-1",
        cell: "relative p-0 text-center focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-body font-normal aria-selected:opacity-100 hover:bg-secondary/30 transition-all"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground font-bold border-2 border-black",
        day_today: "bg-accent text-accent-foreground font-semibold border border-primary",
        day_outside:
          "day-outside text-muted-foreground/40 opacity-50",
        day_disabled: "text-muted-foreground/30 opacity-30 line-through",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        dropdown: "font-body text-sm p-2 border-2 border-black rounded bg-white hover:bg-secondary/10 transition-all cursor-pointer",
        dropdown_month: "mr-1",
        dropdown_year: "ml-1",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-5 w-5" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-5 w-5" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
