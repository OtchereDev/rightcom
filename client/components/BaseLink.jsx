import React from "react";
import Link from "next/link";

const BaseLink = ({ route, text }) => {
  return (
    <Link href={route} passHref>
      <div className="card mt-2 cursor">
        <div className="card-body">{text}</div>
      </div>
    </Link>
  );
};

export default BaseLink;
