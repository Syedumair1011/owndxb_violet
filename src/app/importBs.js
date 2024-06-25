"use client"

import { useEffect } from "react";

export default function ImportBs() {
  useEffect(() => {
    // Check if window is defined to ensure this runs client-side
    if (typeof window !== 'undefined') {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("magnific-popup/dist/jquery.magnific-popup.js");
    }
  }, []);

  return null;
}
