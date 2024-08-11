'use client';
import { useState } from 'react';
import { editEmployee } from '../../lib/api';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Nav from '@/app/component/nav';
import styles from './page.css'
import Footer from '@/app/component/footer';
import Link from 'next/link';

export default function EditEmployee() {
    const router = useRouter()
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
        e.preventDefault();
        try {
            await editEmployee(id, employeeData);
            alert('Employee edited successfully!');
            router.push("/");
        } catch (error) {
            alert('Failed to edit employee. \nplease enter valid data. ');
        }
    };

    return (
        <div className='edit-page'>
            <Nav l s/>
            <form onSubmit={handleSubmit}>
                <h1>Edit Employee</h1>
                <div className='data'>
                    <label htmlFor="firstname">first name :- </label>
                    <input
                        name="firstName"
                        type='text'
                        value={employeeData.firstName}
                        onChange={handleChange}
                        placeholder={employeeData.firstName}
                        required
                    />
                </div>
                <div className='data'>
                    <label htmlFor="lastName">last name :- </label>
                    <input
                        name="lastName"
                        type='text'
                        value={employeeData.lastName}
                        onChange={handleChange}
                        placeholder={employeeData.lastName}
                        required
                    />
                </div>
                <div className='data'>
                    <label htmlFor="jobTitle">job title :- </label>
                    <input
                        name="jobTitle"
                        type='text'
                        value={employeeData.jobTitle}
                        onChange={handleChange}
                        placeholder={employeeData.jobTitle}
                        required
                    />
                </div>
                <div className='data'>
                    <label htmlFor="hireDate">hire date :- </label>
                    <input
                        name="hireDate"
                        type="date"
                        value={employeeData.hireDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='data'>
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
                <div className='data'>
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
                <div className='twobut'>
                    <button type="submit" className="but">Edit Employee</button>
                    <div className="but2">
                        <Link href="/">cancel</Link>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    );
}
