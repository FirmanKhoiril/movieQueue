import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-500">{"An unexpected error happen."}</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
