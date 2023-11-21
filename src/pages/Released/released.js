import React, { useEffect, useState } from "react";
import Cards from "../../components/cards";
import SmallBanner from "../../components/smallbanner";
import PageNav from "../../components/pagenav";
export default function Released() {
  return (
    <>
      <h2 className="H2 lg:text-3xl self-center lg:py-10 py-4">Released</h2>
      <Cards numOfCards={8} flexWrapClass={true} />
      <PageNav />
      <SmallBanner />
    </>
  );
}
