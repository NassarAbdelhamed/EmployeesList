import Link from "next/link";
import styles from './nav.css'
export default function Nav({l,s}){
    return(
        <div className="nav">
            <div className="tittle">
                <h1>Employees List</h1>
            </div>
            <div className="links">
                {l&&<Link href="/">List</Link>}
                {s&&<Link href="/pages/stat">Stat</Link>}
            </div>
        </div>
    )
}