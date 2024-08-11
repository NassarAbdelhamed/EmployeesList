'use client';
import { useState } from 'react';
import { addEmployee } from '../../lib/api';
import Nav from '@/app/component/nav';
import Footer from '@/app/component/footer';
import styles from './page.css'
import Link from 'next/link';

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
            window.location.reload();
        } catch (error) {
            alert('Failed to add employee.\nplease enter valid data. ');
        }
    };

    return (
        <div className="body">
            <Nav l s/>
            <form  className="addform" onSubmit={handleSubmit}>
                <h1>Add Employee</h1>
                
                <div className='line'>
                    <label htmlFor="firstname">first name :- </label>
                    <input
                        name="firstName"
                        value={employeeData.firstName}
                        type="text"
                        onChange={handleChange}
                        placeholder="firstName"
                        required
                    />
                </div>
                <div className='line'>
                    <label htmlFor="lastName">last name :- </label>
                    <input
                        name="lastName"
                        value={employeeData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="lastName"
                        required
                    />
                </div>
                <div className='line'>
                    <label htmlFor="jobTitle">job title :- </label>
                    <input
                        name="jobTitle"
                        value={employeeData.jobTitle}
                        type="text"
                        onChange={handleChange}
                        placeholder="jobTitle"
                        required
                    />
                </div>
                <div className='line'>
                    <label htmlFor="hireDate">hire date :- </label>
                    <input
                        name="hireDate"
                        type="date"
                        value={employeeData.hireDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='line'>
                    <label htmlFor="salary">salary :- </label>
                    <input
                        name="salary"
                        type="number"
                        value={employeeData.salary}
                        onChange={handleChange}
                        placeholder="salary"
                        required
                    />
                </div>
                <div className='line'>
                    <label htmlFor="age">age :- </label>
                    <input
                        name="age"
                        type="number"
                        value={employeeData.age}
                        onChange={handleChange}
                        placeholder="age"
                        required
                    />
                </div>
                <div className="buttons">
                <button type="submit" className="but">Add Employee</button>
                    <Link className="but2" href="/">cancel</Link>
                </div>
            </form>
            <Footer/>
        </div>
    );
}
