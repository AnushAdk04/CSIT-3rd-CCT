import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex gap-6 justify-center">
        <Link
          to="/"
          className="text-white font-medium hover:text-yellow-300 transition"
        >
          Login
        </Link>

        <Link
          to="/bmi"
          className="text-white font-medium hover:text-yellow-300 transition"
        >
          BMI
        </Link>

        <Link
          to="/joke"
          className="text-white font-medium hover:text-yellow-300 transition"
        >
          Joke
        </Link>

        <Link
          to="/temperature"
          className="text-white font-medium hover:text-yellow-300 transition"
        >
          Temperature
        </Link>
      </div>
    </nav>
  );
}

export default Header;
