"use client";
import queryClient from "@/lib/react-query";
import React from "react";
import { QueryClientProvider } from "react-query";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
