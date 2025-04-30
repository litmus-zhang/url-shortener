import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';


export const meta: MetaFunction = () => {
    return [
        { title: 'URL Shortener - List Page' },
        { name: 'description', content: 'URL shortener with Remix' },
    ];
};
export default function Listing() {
    return (
        <div className="flex  flex-col  gap-3 h-screen items-center justify-center">
            <div className="flex gap-2 items-end">

            <label htmlFor="Search">
                <span className="text-sm font-medium text-gray-700"> Search </span>

                <div className="relative">
                    <input
                        type="text"
                        id="Search"
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
            <Link to={"/"} className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-300'> Create New </Link>

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

                    <tbody
                        className="divide-y divide-gray-200 *:even:bg-gray-50 dark:divide-gray-700 dark:*:even:bg-gray-800"
                    >
                        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                            <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
                            <td className="px-3 py-2 whitespace-nowrap">04/06/1262</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                            <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
                            <td className="px-3 py-2 whitespace-nowrap">19/10/1678</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                            <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                            <td className="px-3 py-2 whitespace-nowrap">15/03/1593</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                            <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
                            <td className="px-3 py-2 whitespace-nowrap">01/09/1971</td>
                            <td className="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
                            <td className="px-3 py-2 whitespace-nowrap">$53,000</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                            <td className="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
                            <td className="px-3 py-2 whitespace-nowrap">18/11/1991</td>
                            <td className="px-3 py-2 whitespace-nowrap">Familiar/Vampire Hunter</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul className="flex justify-center gap-1 text-gray-900">
                <li>
                    <a
                        href="#"
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                        aria-label="Previous page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
                    >
                        1
                    </a>
                </li>

                <li
                    className="block size-8 rounded border border-indigo-600 bg-indigo-600 text-center text-sm/8 font-medium text-white"
                >
                    2
                </li>

                <li>
                    <a
                        href="#"
                        className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
                    >
                        3
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
                    >
                        4
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                        aria-label="Next page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}