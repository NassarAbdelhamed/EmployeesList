'use client';
import { useState } from 'react';
import { addEmployee } from '../../lib/api';

export default function AddEmployee() {
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        hireDate: '',
        salary: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addEmployee(employeeData);
            alert('Employee added successfully!');
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Employee</h1>
            <input
                name="firstName"
                value={employeeData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
            />
            <input
                name="lastName"
                value={employeeData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
            <input
                name="jobTitle"
                value={employeeData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                required
            />
            <input
                name="hireDate"
                type="date"
                value={employeeData.hireDate}
                onChange={handleChange}
                required
            />
            <input
                name="salary"
                type="number"
                value={employeeData.salary}
                onChange={handleChange}
                placeholder="Salary"
            />
            <input
                name="age"
                type="number"
                value={employeeData.age}
                onChange={handleChange}
                placeholder="Age"
            />
            <button type="submit">Add Employee</button>
        </form>
    );
}
