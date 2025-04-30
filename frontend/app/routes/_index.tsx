import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { Link, redirect, Form } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'URL Shortener' },
    { name: 'description', content: 'URL shortener with Remix' },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const url = formData.get('url');

  if (!url || typeof url !== 'string') {
    throw new Error('URL is missing or invalid.');
  }

  await fetch('http://localhost:3000/api/encode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  return redirect(`/listing`);
};

export default function Index() {
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center">
      <Link className="underline" to="/listing">
        All Urls &rarr;
      </Link>

      <Form
        className="flex flex-col items-center justify-start gap-2 p-10 bg-gray-700 rounded shadow-md"
        id="url-form"
        method="post"
        action='/encode'
      >
        <h1 className="font-bold text-lg my-2">URL Shortener</h1>
        <input
          type="text"
          aria-label="url"
          name="url"
          id="url"
          className="p-2 border rounded"
          placeholder="paste long url here"
        />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-300">
          Shorten Url
        </button>
      </Form>
    </div>
  );
}