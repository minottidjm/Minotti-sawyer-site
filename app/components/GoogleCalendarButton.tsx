'use client';

import Script from 'next/script';
import { useRef, useEffect } from 'react';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Akuiw2Qtzas5_grNT4vLyN0gUuLbZFgMuAH1Jtf7F2v3HVO45YiRstzZBdSvOpTH-3pZMkO-W?gv=true';

type CalendarWindow = Window & {
  calendar?: {
    schedulingButton?: {
      load: (options: { url: string; color: string; label: string; target: HTMLElement }) => void;
    };
  };
};

function initButton(target: HTMLElement) {
  // Guard against adding a second button when the effect and onLoad both run.
  if (target.childElementCount > 0) return;
  (window as CalendarWindow).calendar?.schedulingButton?.load({
    url: CALENDAR_URL,
    color: '#19273E',
    label: 'Schedule a Confidential 30-Minute Discussion',
    target,
  });
}

export default function GoogleCalendarButton() {
  const targetRef = useRef<HTMLDivElement>(null);

  // If the script is already loaded (e.g. navigating between pages), init immediately
  useEffect(() => {
    if (targetRef.current && (window as CalendarWindow).calendar?.schedulingButton) {
      initButton(targetRef.current);
    }
  }, []);

  return (
    <>
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (targetRef.current) initButton(targetRef.current);
        }}
      />
      <div ref={targetRef} />
    </>
  );
}
