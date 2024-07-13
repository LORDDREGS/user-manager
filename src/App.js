import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import UserForm from './components/UserForm';
import Plants from './components/Plants';
import PlantForm from './components/PlantForm';
import Positions from './components/Positions';
import PositionForm from './components/PositionForm';
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [users, setUsers] = useState([]);
  const [plants, setPlants] = useState([]);
  const [positions, setPositions] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Authorization': `Bearer ${token}` };

      const [usersRes, plantsRes, positionsRes, departmentsRes] = await Promise.all([
        fetch('/api/users', { headers }),
        fetch('/api/plants', { headers }),
        fetch('/api/positions', { headers }),
        fetch('/api/departments', { headers })
      ]);

      if (!usersRes.ok || !plantsRes.ok || !positionsRes.ok || !departmentsRes.ok) {
        console.error('Failed to fetch data:', {
          usersStatus: usersRes.status,
          plantsStatus: plantsRes.status,
          positionsStatus: positionsRes.status,
          departmentsStatus: departmentsRes.status
        });
        return;
      }

      const [usersData, plantsData, positionsData, departmentsData] = await Promise.all([
        usersRes.json(),
        plantsRes.json(),
        positionsRes.json(),
        departmentsRes.json()
      ]);

      setUsers(usersData);
      setPlants(plantsData);
      setPositions(positionsData);
      setDepartments(departmentsData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSaveUser = async (user) => {
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

      const response = user._id
        ? await fetch(`/api/users/${user._id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(user)
          })
        : await fetch('/api/users', {
            method: 'POST',
            headers,
            body: JSON.stringify(user)
          });

      if (!response.ok) {
        console.error('Failed to save user:', response.statusText);
        return;
      }

      const updatedUser = await response.json();
      setUsers((prevUsers) =>
        user._id
          ? prevUsers.map((u) => (u._id === user._id ? updatedUser : u))
          : [...prevUsers, updatedUser]
      );
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleSavePlant = async (plant) => {
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

      const response = plant._id
        ? await fetch(`/api/plants/${plant._id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(plant)
          })
        : await fetch('/api/plants', {
            method: 'POST',
            headers,
            body: JSON.stringify(plant)
          });

      if (!response.ok) {
        console.error('Failed to save plant:', response.statusText);
        return;
      }

      const updatedPlant = await response.json();
      setPlants((prevPlants) =>
        plant._id
          ? prevPlants.map((p) => (p._id === plant._id ? updatedPlant : p))
          : [...prevPlants, updatedPlant]
      );
    } catch (error) {
      console.error('Error saving plant:', error);
    }
  };

  const handleSavePosition = async (position) => {
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

      const response = position._id
        ? await fetch(`/api/positions/${position._id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(position)
          })
        : await fetch('/api/positions', {
            method: 'POST',
            headers,
            body: JSON.stringify(position)
          });

      if (!response.ok) {
        console.error('Failed to save position:', response.statusText);
        return;
      }

      const updatedPosition = await response.json();
      setPositions((prevPositions) =>
        position._id
          ? prevPositions.map((p) => (p._id === position._id ? updatedPosition : p))
          : [...prevPositions, updatedPosition]
      );
    } catch (error) {
      console.error('Error saving position:', error);
    }
  };

  const handleSaveDepartment = async (department) => {
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

      const response = department._id
        ? await fetch(`/api/departments/${department._id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(department)
          })
        : await fetch('/api/departments', {
            method: 'POST',
            headers,
            body: JSON.stringify(department)
          });

      if (!response.ok) {
        console.error('Failed to save department:', response.statusText);
        return;
      }

      const updatedDepartment = await response.json();
      setDepartments((prevDepartments) =>
        department._id
          ? prevDepartments.map((d) => (d._id === department._id ? updatedDepartment : d))
          : [...prevDepartments, updatedDepartment]
      );
    } catch (error) {
      console.error('Error saving department:', error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<PrivateRoute isAuthenticated={true}><Users users={users} /></PrivateRoute>} />
          <Route path="/users/new" element={<PrivateRoute isAuthenticated={true}><UserForm onSave={handleSaveUser} /></PrivateRoute>} />
          <Route path="/plants" element={<PrivateRoute isAuthenticated={true}><Plants plants={plants} /></PrivateRoute>} />
          <Route path="/plants/new" element={<PrivateRoute isAuthenticated={true}><PlantForm onSave={handleSavePlant} /></PrivateRoute>} />
          <Route path="/positions" element={<PrivateRoute isAuthenticated={true}><Positions positions={positions} /></PrivateRoute>} />
          <Route path="/positions/new" element={<PrivateRoute isAuthenticated={true}><PositionForm onSave={handleSavePosition} /></PrivateRoute>} />
          <Route path="/departments" element={<PrivateRoute isAuthenticated={true}><Departments departments={departments} /></PrivateRoute>} />
          <Route path="/departments/new" element={<PrivateRoute isAuthenticated={true}><DepartmentForm onSave={handleSaveDepartment} /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
