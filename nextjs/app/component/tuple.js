import Link from "next/link";

export default function Tuple({
    id,firstName,lastName,jobTitle,hireDate,salary,age}){
    return(
        <div>
        {id}  employee name {firstName} {lastName}
          <Link href={`/pages/edit?id=${id}&firstName=${firstName}&lastName=${lastName}&jobTitle=${jobTitle}&salary=${salary}&age=${age}`}>Edit</Link>
        </div>
    )
}