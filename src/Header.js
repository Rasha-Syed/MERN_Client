import { Link } from 'react-router-dom';
import './index.css';


export default function Header() {
  return (
    <div className="bg-aliceblue p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Welcome</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

