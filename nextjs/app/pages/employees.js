import { useEffect, useState } from 'react';
import { fetchEmployees } from '../lib/api';
import Tuple from '../component/tuple';

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
        <div>
            <h1>Employees List</h1>
            <ul>
                {employees.map((employee) => (
                     <Tuple key={employee.id} {...employee}/>
                ))}
            </ul>
        </div>
    );
}
