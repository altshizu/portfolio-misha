import { email, linkedin, name } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
    return (
        <section className="flex min-h-screen flex-wrap items-center text-white">
            <div className="w-full md:w-1/2">
                <h2 className="-my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem] -mb-[1.5px]">
                    hi, i'm {``}
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        {name.split(' ')[0].toLowerCase()}
                    </span>
                </h2>
                <p className="mb-8 p-2 text-xl">
                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, reiciendis blanditiis eligendi, labore iure magni
                    architecto rem beatae maxime eius, facilis velit. Cumque,
                    quod suscipit!`}
                </p>
                <div className="-mb-[10rem] lg:-mt-5 flex space-x-4 p-2">
                    <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} className="hover:text-gray-300 transition duration-300" />
                    </a>
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                        <IoIosMail size={25} className="hover:text-gray-300 transition duration-300" />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src="https://placehold.co/550x550" alt="" className="rounded-3xl" />
                </div>
            </div>
        </section>
    );
}