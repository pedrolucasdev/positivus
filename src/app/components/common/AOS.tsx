"use client";

import { useEffect } from "react";
import AOS from "aos";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      disable: function () {
        const maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
      offset: 100,
      duration: 600,
      delay: 0,
      once: true,
      mirror: false,
    });
  }, []);

  return null;
};
