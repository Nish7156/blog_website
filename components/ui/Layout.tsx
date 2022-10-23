import React from "react";
import Navbar from "../Navbar";

function Layout(props: any) {
  console.log(props);

  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </>
  );
}
{
}
export default Layout;
