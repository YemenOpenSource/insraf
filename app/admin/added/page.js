import React from "react";
import { Container, Department, Level } from "@/components";

export default function page() {
  return (
    <Container sm={1} md={1} lg={1} gap={0}>
      <Department />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <Level />
    </Container>
  );
}
