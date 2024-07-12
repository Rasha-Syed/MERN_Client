import React, { useState } from 'react';
import axios from "axios";

export default function Register() {
    const [formData, setForm] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
       
        try {
            const response = await axios.post("http://localhost:3001/users/register", formData);
            console.log("Form data submitted successfully!", response.data);
           
            // Optionally, reset the form after submission
            setForm({
                name: "",
                email: "",
                password: ""
            });
            //setRes("User registered successfully");
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error, e.g., show error message to user
        }
    };

    return (
        
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 bg-gray-500 rounded-lg shadow-lg max-w-lg w-full">
                <div className="form-group w-full mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name:</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded-md bg-white-200 text-gray-900"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group w-full mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email:</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded-md bg-white-200 text-gray-900"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group w-full mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password:</label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded-md bg-white-200 text-gray-900"
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md">Submit</button>
            </form>
        </div>
    );
}
