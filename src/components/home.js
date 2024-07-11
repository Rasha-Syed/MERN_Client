import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name.trim() !== "") {
      setNames([...names, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Text"
            value={name}
            onChange={handleChange}
            className="border border-black p-2 mr-2"
          />
          <button
            id="submit"
            className="bg-black text-white border border-black w-20 p-2"
            onClick={handleButton}
          >
            Click
          </button>
        </div>
        <table className="mt-4 border-collapse border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black p-2">Serial Number</th>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index}>
                <td className="border border-black p-2 text-center">{index + 1}</td>
                <td className="border border-black p-2 text-center">{name}</td>
                <td className="border border-black p-2 text-center">
                  <button
                    className="bg-red-500 text-white p-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
