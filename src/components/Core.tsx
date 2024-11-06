import { Link } from "react-router-dom";
interface CoreProps {
  header: string;
}

export const Core = ({ header }: CoreProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-6 mt-8 shadow-md">
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-6">
        {header}
      </h1>
      <div className="flex justify-around mx-auto">
        <Link to={"/user"}>
          <button
            type="button"
            className="py-2 px-9 bg-lime-600 text-white font-semibold rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            user
          </button>
        </Link>
        <Link to={"/admin"}>
          <button
            type="button"
            className="py-2 px-9 bg-lime-600 text-white font-semibold rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            admin
          </button>
        </Link>
      </div>
    </div>
  );
};
