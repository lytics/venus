"use client";

import { useState, useCallback } from "react";

export function useTableBuilder() {
  const [isOpen, setIsOpen] = useState(false);

  const openBuilder = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeBuilder = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openBuilder,
    closeBuilder,
  };
}