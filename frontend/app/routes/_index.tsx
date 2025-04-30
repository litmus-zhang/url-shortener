import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { Link, redirect } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'URL Shortener' },
    { name: 'description', content: 'URL shortener with Remix' },
  ];
};

export const action = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return redirect(`/listing`);
};

export default function Index() {
  // const urls = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center">
      <Link className='underline' to="/listing">All Urls &rarr;</Link>

      <form
        className="flex flex-col items-center justify-start gap-2 p-10 bg-gray-700 rounded shadow-md"
        action=""
        id="url-form"
        method='post'
      >
        <h1 className='font-bold text-lg my-2'>URL Shortener</h1>
        <input
          type="text"
          aria-label="url"
          name="url"
          id="url"
          className="p-2 border rounded"
          placeholder="pastelong url here"
        />
        <button type='submit' className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-300'> Shorten Url </button>
      </form>
    </div>
  );
}
