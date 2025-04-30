import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'URL Shortener' },
    { name: 'description', content: 'URL shortener with Remix' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center">
      <Link className='underline' to="/listing">All Urls &rarr;</Link>

      <form
        className="flex flex-col items-center justify-start gap-2 p-10 bg-gray-700 rounded shadow-md"
        action=""
      >
        <h1 className='font-bold text-lg my-2'>URL Shortener</h1>
        <input
          type="text"
          className="p-2 border rounded"
          placeholder="pastelong url here"
        />
        <button className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-300'> Shorten Url </button>
      </form>
    </div>
  );
}
