"use client";

import { useEffect, useRef } from "react";

const ConversionTracker = ({ value = 35.0, currency = "USD" }) => {
  const hasFired = useRef(false);

  useEffect(() => {
    // Prevent duplicate firing
    if (hasFired.current) {
      console.log("⚠️ Conversion already fired, skipping duplicate");
      return;
    }

    // Check sessionStorage to prevent firing on page refresh
    const sessionKey = "gtag_conversion_fired";
    if (sessionStorage.getItem(sessionKey)) {
      console.log("⚠️ Conversion already fired in this session");
      return;
    }

    // Wait for gtag to be ready
    const fireConversion = () => {
      if (typeof window === "undefined" || !window.gtag) {
        console.log("⏳ gtag not ready yet, retrying...");
        setTimeout(fireConversion, 100);
        return;
      }

      // Generate unique transaction ID
      const transactionId = `TM-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

      try {
        // Fire the conversion event
        window.gtag("event", "conversion", {
          send_to: "AW-16979187198/cYc6CMq_-90bEP6rp6A_",
          value: value,
          currency: currency,
          transaction_id: transactionId,
        });

        // Mark as fired
        hasFired.current = true;
        sessionStorage.setItem(sessionKey, "true");
        sessionStorage.setItem("transaction_id", transactionId);

        console.log("✅ Conversion tracked successfully");
        console.log("📋 Transaction ID:", transactionId);
        console.log("💰 Value:", value, currency);
      } catch (error) {
        console.error("❌ Conversion tracking error:", error);
      }
    };

    // Start the conversion firing process
    fireConversion();

    // Cleanup: Don't clear sessionStorage on unmount
    // (we want it to persist to prevent duplicates)
  }, [value, currency]);

  return null;
};

export default ConversionTracker;
