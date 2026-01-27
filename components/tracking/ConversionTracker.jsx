"use client";

import { useEffect } from "react";

const ConversionTracker = () => {
  useEffect(() => {
    // Generate a unique transaction ID
    const generateTransactionId = () => {
      return `TM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };

    // Fire the conversion event
    if (typeof window !== "undefined" && window.gtag) {
      const transactionId = generateTransactionId();

      window.gtag('event', 'conversion', {
        'send_to': 'AW-16979187198/cYc6CMq_-90bEP6rp6A_',
        'value': 35.0,
        'currency': 'USD',
        'transaction_id': transactionId
      });

      console.log('Conversion tracked with transaction ID:', transactionId);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ConversionTracker;
