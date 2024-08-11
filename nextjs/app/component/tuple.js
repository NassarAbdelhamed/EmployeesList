'use client';
import Link from "next/link";
import { removeEmployee } from "../lib/api";
import styles from './tuple.css'

export default function Tuple({
    id,firstName,lastName,jobTitle,hireDate,salary,age,l}){

      const handleClick = async (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
        if (confirmDelete) {
            try {
                await removeEmployee(id);
                alert('Employee removed successfully!');
                window.location.reload(); 
            } catch (error) {
                alert('Failed to remove employee.');
            }
        }
    };

    return(
        <div className="tuple">
          <div className='p'> <h3>Name:- </h3> {firstName} {lastName} <b>({age} </b> years old <b>)</b> </div>
          <div className='p'> <h3>Jop Tittle:- </h3> {jobTitle} </div>
          <div className='p'> <h3>Employee since:- </h3> {hireDate.slice(0, 10)} </div>
          <div className='p'> <h3>Salary:- </h3> {salary}$ </div>
          <div className="buttons">
           {l &&<Link className="but2" href={`/pages/edit?id=${id}&firstName=${firstName}&lastName=${lastName}&jobTitle=${jobTitle}&salary=${salary}&age=${age}`}><p>Edit</p></Link>}
           {l&&<button className="but3" onClick={handleClick}> <b> Delete</b></button>}
          </div>
        </div>
    )
}