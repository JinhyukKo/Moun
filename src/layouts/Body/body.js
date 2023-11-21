import React from "react";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <section className="w-full mt-[4.5rem]">
      <Outlet />
    </section>
  );
}
