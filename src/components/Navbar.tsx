"use client"
import { useRef, useState } from "react"

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home')
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        home: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        projects: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    }

    const scrollToSection = (sectionId: string) => {
        sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionId)
    }

    return (
        <nav className="fixed left-0 top-0 h-full w-32 md:w-64 bg-neutral-900 flex flex-col items-center justify-center">
            <ul className="space-y-8">
                {Object.keys(sectionRefs).map((section) => (
                    <li key={section}>
                        <button
                            onClick={() => scrollToSection(section)}
                            className={`text-lg font-medium ${activeSection === section ? 'text-white' : 'text-slate-100 hover:text-white'
                                } transition-colors duration-500`}
                        >
                            {section.charAt(0).toLowerCase() + section.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex fixed bottom-0 mb-8 gap-2 w-8 h-8 text-white">
                <img src="./email.svg" alt="" />
                <img src="./linkedin.svg" alt="" />
            </div>
        </nav>
    )
}
