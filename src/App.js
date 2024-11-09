import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProfileDetail from './ProfileDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching data using fetch().then()
        fetch('https://randomuser.me/api/?results=5')
            .then((response) => response.json()) // Convert the response to JSON
            .then((data) => {
                setUsers(data.results); // Set the users data
            })
            .catch((error) => {
                console.error("Error fetching data: ", error); // Handle errors
            });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home users={users} />} />
                <Route path="/profile/:uuid" element={<ProfileDetail users={users} />} />
            </Routes>
        </Router>
    );
}

export default App;
