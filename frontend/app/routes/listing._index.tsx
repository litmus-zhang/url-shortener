import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { UrlList } from "../utils";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "URL Shortener - List Page" },
    { name: "description", content: "URL shortener with Remix" },
  ];
};

export const loader = async () => {
  const urlList = await fetch("http://localhost:3000/api/list");
  const { data } = await urlList.json();
  return data;
};

export default function Listing() {

  const urls: UrlList[] = useLoaderData<typeof loader>();
  const [search, setSearch] = useState("");

  const filteredUrls = urls.filter(
    (url) =>
      url.longUrl.toLowerCase().includes(search.toLowerCase()) ||
      url.shortUrl.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center">
    <div className="flex gap-2 items-end">
      <label htmlFor="Search">
        <span className="text-sm font-medium text-gray-700">Search</span>
        <div className="relative">
          <input
            type="text"
            id="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-0.5 w-full rounded border-gray-300 py-2 pe-10 shadow-sm sm:text-sm"
          />
          <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
            <button
              type="button"
              aria-label="Submit"
              className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </span>
        </div>
      </label>
      <Link to={"/"} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-300">
        Create New
      </Link>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
            <th className="px-3 py-2 whitespace-nowrap">Number</th>
            <th className="px-3 py-2 whitespace-nowrap">Long URL</th>
            <th className="px-3 py-2 whitespace-nowrap">ShortURL</th>
            <th className="px-3 py-2 whitespace-nowrap">Number of Visit</th>
            <th className="px-3 py-2 whitespace-nowrap">Created At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 *:even:bg-gray-50 dark:divide-gray-700 dark:*:even:bg-gray-800">
          {filteredUrls.map((url: UrlList, index: number) => (
            <tr key={index} className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">{index + 1}</td>
              <td className="px-3 py-2 whitespace-nowrap">{url.longUrl}</td>
              <td className="px-3 py-2 whitespace-nowrap">{url.shortUrl}</td>
              <td className="px-3 py-2 whitespace-nowrap">{url.NumberOfVisits}</td>
              <td className="px-3 py-2 whitespace-nowrap">{url.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
