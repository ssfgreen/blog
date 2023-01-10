import React from "react";
import Image from "next/image";
import cx from "clsx";
import { FOCUS_VISIBLE_OUTLINE } from "@/styles/constants";
import Link from "next/link";

const API = `/api/links/preview`;

async function getPreivewData(url) {
  const res = await fetch(API + `?url=${url}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export const LinkPreview = ({ url }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getPreivewData(url).then((data) => setData(data));
  }, [url]);

  if (!data) {
    return null;
  }

  console.log("preview data", data);
  let domain = data.url.replace(/(https?:\/\/)?(www\.)?/, "");
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noreferrer"
      className={cx(
        "flex flex-row gap-x-4 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium",
        FOCUS_VISIBLE_OUTLINE
      )}
    >
      <div className="flex-none w-32 h-32">
        <Image
          className="w-32 h-32 rounded"
          src={data.images[0]}
          priority={true}
          alt={data.title}
          width={128}
          height={128}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-lg">{data.title}</h1>
        <p className="text-xs text-sky-100/50">{domain}</p>
        <p className="text-sm text-sky-100/80">{data.description}</p>
      </div>
    </a>
  );
};
