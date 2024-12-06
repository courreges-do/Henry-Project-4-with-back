import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
      <p className="mt-2 text-gray-600 text-lg">
        Oops! Looks like the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-quaternary text-white font-medium rounded-lg hover:bg-tertiary transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
