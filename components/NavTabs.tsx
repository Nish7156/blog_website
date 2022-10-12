import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavTabs({ navtabs }: any) {
  const router = useRouter();

  // console.log(router.pathname, "paht");

  const isActiveLink = (ele: any) => {
    return ele.attributes.slug === router.query.categore;
  };

  return (
    <>
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="py-2 mr-2">
            <Link href={"/"}>
              <a
                href="#"
                className={
                  `pb-4 mr-4  border-b-4 rounded-sm` +
                  `${
                    router.pathname === "/"
                      ? "border-b-green-700 font-bold text-green-700"
                      : " border-white"
                  }`
                }
              >
                Recent
              </a>
            </Link>
          </li>
          {navtabs.map((ele: any) => {
            return (
              <li key={ele.id} className="py-2 mr-2">
                <Link href={`/category/${ele.attributes.slug}`}>
                  <a
                    className={
                      `pb-4 mr-4  border-b-4 rounded-sm` +
                      `${
                        isActiveLink(ele)
                          ? "border-b-green-700 font-bold text-green-700"
                          : " border-white"
                      }`
                    }
                  >
                    {ele.attributes.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavTabs;
