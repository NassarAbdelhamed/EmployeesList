'use client';
import { useState } from 'react';
import { editEmployee } from '../../lib/api';
import { useSearchParams } from 'next/navigation'

export default function EditEmployee() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [employeeData, setEmployeeData] = useState({
        firstName: searchParams.get('firstName'),
        lastName: searchParams.get('lastName'),
        jobTitle: searchParams.get('jobTitle'),
        hireDate: '',
        salary: searchParams.get('salary'),
        age: searchParams.get('age')
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        console.log(id)
        console.log(employeeData)
        e.preventDefault();
        try {
            await editEmployee(id, employeeData);
            alert('Employee edited successfully!');
        } catch (error) {
            console.error('Error editing employee:', error);
            alert('Failed to edit employee.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Employee</h1>
            <div>
                <label htmlFor="firstname">first name :- </label>
                <input
                    name="firstName"
                    value={employeeData.firstName}
                    onChange={handleChange}
                    placeholder={employeeData.firstName}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">last name :- </label>
                <input
                    name="lastName"
                    value={employeeData.lastName}
                    onChange={handleChange}
                    placeholder={employeeData.lastName}
                    required
                />
            </div>
            <div>
                <label htmlFor="jobTitle">job title :- </label>
                <input
                    name="jobTitle"
                    value={employeeData.jobTitle}
                    onChange={handleChange}
                    placeholder={employeeData.jobTitle}
                    required
                />
            </div>
            <div>
                <label htmlFor="hireDate">hire date :- </label>
                <input
                    name="hireDate"
                    type="date"
                    value={employeeData.hireDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="salary">salary :- </label>
                <input
                    name="salary"
                    type="number"
                    value={employeeData.salary}
                    onChange={handleChange}
                    placeholder={employeeData.salary}
                    required
                />
            </div>
            <div>
                <label htmlFor="age">age :- </label>
                <input
                    name="age"
                    type="number"
                    value={employeeData.age}
                    onChange={handleChange}
                    placeholder={employeeData.age}
                    required
                />
            </div>
            <button type="submit">Edit Employee</button>
        </form>
    );
}
