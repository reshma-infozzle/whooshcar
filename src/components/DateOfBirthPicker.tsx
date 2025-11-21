import React, { useEffect, useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DateOfBirthPickerProps {
  value: string;
  onChange: (date: string) => void;
  maxDate: Date;
}

export const DateOfBirthPicker = ({ value, onChange, maxDate }: DateOfBirthPickerProps) => {
  const parseDate = (dateString: string) => {
    if (!dateString) return { day: "", month: "", year: "" };
    const [year, month, day] = dateString.split("-");
    return { day, month, year };
  };

  // Local controlled state so selections stick before full date is complete
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Sync local state when external value changes (e.g., form reset)
  useEffect(() => {
    const parsed = parseDate(value);
    setDay(parsed.day || "");
    setMonth(parsed.month || "");
    setYear(parsed.year || "");
  }, [value]);

  const getDaysInMonth = (y?: string, m?: string) => {
    const yy = Number(y);
    const mm = Number(m);
    if (!yy || !mm) return 31;
    return new Date(yy, mm, 0).getDate(); // JS months are 1-indexed here because day 0 gives last day of previous month
  };

  const daysOptions = useMemo(() => {
    const max = getDaysInMonth(year, month);
    return Array.from({ length: max }, (_, i) => {
      const d = (i + 1).toString().padStart(2, "0");
      return { value: d, label: d };
    });
  }, [year, month]);

  // Years from 1900 to maxDate year
  const currentYear = maxDate.getFullYear();
  const years = useMemo(
    () => Array.from({ length: currentYear - 1899 }, (_, i) => {
      const y = (currentYear - i).toString();
      return { value: y, label: y };
    }),
    [currentYear]
  );

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const emitIfComplete = (d: string, m: string, y: string) => {
    if (d && m && y) {
      const maxDay = getDaysInMonth(y, m);
      const dd = Math.min(Number(d), maxDay).toString().padStart(2, "0");
      onChange(`${y}-${m}-${dd}`);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      <div className="space-y-2">
        <label className="text-xs md:text-sm font-comic text-black/70">Day</label>
        <Select
          value={day}
          onValueChange={(v) => {
            setDay(v);
            emitIfComplete(v, month, year);
          }}
        >
          <SelectTrigger className="font-body text-base p-3 md:p-4 border-2 md:border-4 border-black w-full bg-white">
            <SelectValue placeholder="DD" />
          </SelectTrigger>
          <SelectContent className="max-h-[240px] bg-white z-[100] pointer-events-auto border-2 border-black">
            {daysOptions.map((d) => (
              <SelectItem key={d.value} value={d.value} className="cursor-pointer">
                {d.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs md:text-sm font-comic text-black/70">Month</label>
        <Select
          value={month}
          onValueChange={(v) => {
            setMonth(v);
            // Reset day if it exceeds new month's max days
            const max = getDaysInMonth(year, v);
            if (day && Number(day) > max) setDay("");
            emitIfComplete(day, v, year);
          }}
        >
          <SelectTrigger className="font-body text-base p-3 md:p-4 border-2 md:border-4 border-black w-full bg-white">
            <SelectValue placeholder="MM" />
          </SelectTrigger>
          <SelectContent className="max-h-[240px] bg-white z-[100] pointer-events-auto border-2 border-black">
            {months.map((m) => (
              <SelectItem key={m.value} value={m.value} className="cursor-pointer">
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs md:text-sm font-comic text-black/70">Year</label>
        <Select
          value={year}
          onValueChange={(v) => {
            setYear(v);
            // Cap at maxDate if month/day would exceed max date
            // For DoB, only the year upper bound matters as provided by options
            const max = getDaysInMonth(v, month);
            if (day && Number(day) > max) setDay("");
            emitIfComplete(day, month, v);
          }}
        >
          <SelectTrigger className="font-body text-base p-3 md:p-4 border-2 md:border-4 border-black w-full bg-white">
            <SelectValue placeholder="YYYY" />
          </SelectTrigger>
          <SelectContent className="max-h-[240px] bg-white z-[100] pointer-events-auto border-2 border-black">
            {years.map((y) => (
              <SelectItem key={y.value} value={y.value} className="cursor-pointer">
                {y.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
