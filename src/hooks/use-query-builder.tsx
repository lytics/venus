"use client";

import { useState } from "react";

export function useQueryBuilder() {
  const [isOpen, setIsOpen] = useState(false);

  const openBuilder = () => setIsOpen(true);
  const closeBuilder = () => setIsOpen(false);

  return {
    isOpen,
    openBuilder,
    closeBuilder
  };
}