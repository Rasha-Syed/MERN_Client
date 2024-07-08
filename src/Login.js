import { useState, useContext } from "react";
import { Mycontext } from "./Mycontext";
import './index.css';


export default function Login() {
  const [formData, setFormData] = useState({ user: "", pd: "" });
  const { table } = useContext(Mycontext);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    const isValid = checkCredentials(formData.user, formData.pd);
    if (isValid) {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
    setFormData({ user: "", pd: "" });
  }

  function handleReset() {
    setFormData({ user: "", pd: "" });
  }

  function checkCredentials(username, password) {
    if (!Array.isArray(table) || table.length === 0) {
      return false;
    }
    for (let entry of table) {
      if (entry.uname === username && entry.pwd === password) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="min-h-screen bg-purple-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input 
          type="text" 
          name="user" 
          value={formData.user} 
          onChange={handleChange} 
          placeholder="Username:" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input 
          type="password" 
          name="pd" 
          value={formData.pd} 
          onChange={handleChange} 
          placeholder="Password:" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex space-x-4">
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button 
            onClick={handleReset} 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
