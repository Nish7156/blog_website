import { useRouter } from "next/router";
import qs from "qs";
import React from "react";

type Pagination = 1 | -1;

function Paginaction({ page, pageCount, redirectUrl = "/" }: any) {
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPreviousDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direaction: any) => {
    console.log(direaction);
    console.log("clixked");

    if (direaction === 1 && isNextDisabled()) {
      return;
    }

    if (direaction === -1 && isPreviousDisabled()) {
      return;
    }
    const queryString = qs.stringify({
      ...router.query,
      page: page + direaction,
    });

    router.push(`${redirectUrl}?${queryString}`);

    console.log(queryString, "queryString");
    console.log(redirectUrl, "redirectUrl");

    router.push(`${redirectUrl}?${queryString}`);
  };
  return (
    <div className="flex justify-center mt-24 ">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${"w-24 px-2 py-2 ml-8 text-white bg-red-500 rounded-sm"} ${
          isPreviousDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>

      <button
        onClick={() => handlePaginate(1)}
        className={`${"w-24 px-2 py-2 ml-8 text-white bg-green-500 rounded-sm"} ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Paginaction;
