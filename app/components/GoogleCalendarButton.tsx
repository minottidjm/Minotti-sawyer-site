'use client';

import Script from 'next/script';
import { useRef, useState } from 'react';

export default function GoogleCalendarButton() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  function init() {
    if (loaded && targetRef.current && (window as any).calendar) {
      (window as any).calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Akuiw2Qtzas5_grNT4vLyN0gUuLbZFgMuAH1Jtf7F2v3HVO45YiRstzZBdSvOpTH-3pZMkO-W?gv=true',
        color: '#19273E',
        label: 'Schedule a Confidential 30-Minute Discussion',
        target: targetRef.current,
      });
    }
  }

  return (
    <>
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={() => {
          setLoaded(true);
          if (targetRef.current && (window as any).calendar) {
            (window as any).calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Akuiw2Qtzas5_grNT4vLyN0gUuLbZFgMuAH1Jtf7F2v3HVO45YiRstzZBdSvOpTH-3pZMkO-W?gv=true',
              color: '#19273E',
              label: 'Schedule a Confidential 30-Minute Discussion',
              target: targetRef.current,
            });
          }
        }}
      />
      <div ref={targetRef} />
    </>
  );
}
