import Link from "next/link";
import styles from './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="info">
                <p>© 2024 Nassar Abdelhamed. All rights reserved.</p>
            </div>
            <div className="links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </div>
    );
}
