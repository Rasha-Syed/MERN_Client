import { useState , useContext } from "react";
import { Mycontext } from "./Mycontext";
import Login from "./Login";
import './index.css';

export default function Register() {
  const [formData, setFormData] = useState({ name: "", age: "", uname: "", pwd: "" });
  const { table, setTable } = useContext(Mycontext);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    setTable([...table, formData]);
    setFormData({ name: "", age: "", uname: "", pwd: "" });
  }

  function handleReset() {
    setFormData({ name: "", age: "", uname: "", pwd: "" });
  }

  return (
    <div className="min-h-screen bg-purple-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name:" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          placeholder="Age:" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input 
          type="text" 
          name="uname" 
          value={formData.uname} 
          onChange={handleChange} 
          placeholder="Username:" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input 
          type="password" 
          name="pwd" 
          value={formData.pwd} 
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
