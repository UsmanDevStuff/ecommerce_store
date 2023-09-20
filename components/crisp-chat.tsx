"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("171583da-02e0-4377-8217-9b5b9755a11e");
  }, []);

  return null;
};
