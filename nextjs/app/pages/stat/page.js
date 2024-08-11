// Frontend Code
'use client';
import { useEffect, useState } from 'react';
import { maxSalary,minSalary,minAge,maxAge} from '@/app/lib/api';
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Tuple from '@/app/component/tuple';
import styles from './page.css';

export default function Stat() {
    const [employees, setEmployees] = useState([]);
    const [minemployees, setminEmployees] = useState([]);
    const [ageemployees, setageEmployees] = useState([]);
    const [minageEmployees, setminageEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const data = await maxSalary();
                setEmployees(data);
                const data2=await minSalary();
                setminEmployees(data2)
                const data3 = await maxAge();
                setageEmployees(data3);
                const data4=await minAge();
                setminageEmployees(data4)
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        getEmployees(); 
    }, []); 

    return (
        <div>
            <Nav l />
            <div className='content'>
                <div className='salary'>
                    <div>
                        <h1>Employees with Max Salary .. </h1>
                            {employees.length > 0 ? (
                            employees.map((employee) => (
                            <Tuple className="tuple" key={employee.id} {...employee}/>
                        ))
                    ) : (
                        <p className="message">There are no employees , please add some employees</p>
                    )}
                   </div>
                   <div>
                   <h1>Employees with Min Salary .. </h1>
                            {minemployees.length > 0 ? (
                            minemployees.map((e) => (
                            <Tuple className="tuple" key={e.id} {...e}/>
                        ))
                    ) : (
                        <p className="message">There are no employees , please add some employees</p>
                    )}
                   </div>
                </div>
                <div className='age'>
                <div>
                        <h1> Older employee .. </h1>
                            {ageemployees.length > 0 ? (
                            ageemployees.map((employee) => (
                            <Tuple className="tuple" key={employee.id} {...employee}/>
                        ))
                    ) : (
                        <p className="message">There are no employees , please add some employees</p>
                    )}
                   </div>
                   <div>
                   <h1> Younger employee .. </h1>
                            {minageEmployees.length > 0 ? (
                            minageEmployees.map((e) => (
                            <Tuple className="tuple" key={e.id} {...e}/>
                        ))
                    ) : (
                        <p className="message">There are no employees , please add some employees</p>
                    )}
                   </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
