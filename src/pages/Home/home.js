import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/cards";
import SmallBanner from "../../components/smallbanner";

function CardContainer({ cardTitle, page }) {
  return (
    <article className="overflow-hidden my-[min(5rem,2vw)]">
      <h1 className="hidden">Home</h1>
      <div className="flex justify-between mb-6">
        <h2 className="H2 lg:text-3xl">{cardTitle}</h2>
        <Link to={page} className="text-sm self-center font-medium text-gray">
          {" "}
          Show All{" "}
        </Link>
      </div>
      <Cards></Cards>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <CardContainer page={"song"} cardTitle={`Today's Hit`} />
      <CardContainer page={"song"} cardTitle={`Time is Up`} />
      <SmallBanner />
      <CardContainer page={"released"} cardTitle={`Released`} />
    </>
  );
}
