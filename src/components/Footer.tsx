import { name } from "../constants/index";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 p-10 text-center text-sm text-white">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </footer>
    )
}