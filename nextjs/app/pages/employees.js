import { useEffect, useState } from 'react';
import { fetchEmployees } from '../lib/api';
import Tuple from '../component/tuple';
import Nav from '../component/nav';
import Link from 'next/link';
import Footer from '../component/footer';
import styles from './employees.css'

export default function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        getEmployees();
    }, []);

    return (
        <div className="page">
            <Nav s/>
            <div className="container">
                {employees.length > 0 ? (
                    employees.map((employee) => (
                    <Tuple className="tuple" key={employee.id} {...employee} l />
                ))
            ) : (
                <p className="message">There are no employees , please add some employees</p>
            )}
            </div>
            <div className="but">
                <Link href="/pages/add">Add Employee</Link>
            </div>
            <Footer/>
        </div>
    );
}
