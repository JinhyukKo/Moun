import React from "react";
import Cards from "../../components/cards";
import SmallBanner from "../../components/smallbanner";
import PageNav from "../../components/pagenav";
export default function released() {
  return (
    <>
      <h2 className="H2 lg:text-3xl self-center lg:py-10 py-4">Our Aritsts</h2>
      <PageNav />
      <SmallBanner />
    </>
  );
}
