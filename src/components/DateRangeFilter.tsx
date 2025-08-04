'use client';

import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

interface Props {
  startDate: Date;
  endDate: Date;
  setRange: (range: { start: Date; end: Date }) => void;
}

export function DateRangeFilter({ startDate, endDate, setRange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [selectedRange, setSelectedRange] = React.useState<DateRange>({
    from: startDate,
    to: endDate,
  });

  const applyRange = () => {
    if (selectedRange.from && selectedRange.to) {
      setRange({ start: selectedRange.from, end: selectedRange.to });
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {selectedRange.from && selectedRange.to
            ? `${format(selectedRange.from, 'MMM dd')} - ${format(selectedRange.to, 'MMM dd')}`
            : 'Select date range'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 w-auto p-4">
        <Calendar
          mode="range"
          selected={selectedRange}
          onSelect={(range) => {
            if (range) {
                setSelectedRange(range);
            }
            }}
          initialFocus
          required={false} // ✅ Fix for react-day-picker types
        />
        <Button onClick={applyRange}>Apply</Button>
      </PopoverContent>
    </Popover>
  );
}
