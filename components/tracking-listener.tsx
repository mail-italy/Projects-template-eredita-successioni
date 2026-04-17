"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function TrackingListener() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-track-event]");

    const handleClick = (event: Event) => {
      const currentTarget = event.currentTarget as HTMLElement | null;

      if (!currentTarget) {
        return;
      }

      const trackEvent = currentTarget.dataset.trackEvent;
      const trackLabel = currentTarget.dataset.trackLabel;

      if (!trackEvent) {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: trackEvent,
        event_category: "engagement",
        event_label: trackLabel,
      });
    };

    elements.forEach((element) => element.addEventListener("click", handleClick));

    return () => {
      elements.forEach((element) => element.removeEventListener("click", handleClick));
    };
  }, []);

  return null;
}
