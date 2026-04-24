'use client';

import Script from 'next/script';
import { useRef, useEffect } from 'react';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Akuiw2Qtzas5_grNT4vLyN0gUuLbZFgMuAH1Jtf7F2v3HVO45YiRstzZBdSvOpTH-3pZMkO-W?gv=true';

function initButton(target: HTMLElement) {
  (window as any).calendar?.schedulingButton?.load({
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
    if (targetRef.current && (window as any).calendar?.schedulingButton) {
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
