"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    {
        name: "Meet Moradiya",
        role: "Full-Stack Developer",
        experience: "3 Years",
        image: "/members/MeetMoradiya.jpeg",
    },
    {
        name: "Pratik Talaviya",
        role: "AI Engineer",
        experience: "2.5 Years",
        image: "/members/PratikTalaviya.jpeg",
    },
    {
        name: "Vaidik Jetani",
        role: "DevOps Engineer",
        experience: "3.5 Years",
        image: "/members/VaidikJetani.jpeg",
    },
    {
        name: "Kenil Kanani",
        role: "Back-end Developer",
        experience: "2 Years",
        image: "/members/KenilKanani.jpg",
    },
    {
        name: "Hardik Nasit",
        role: "Mobile App Developer",
        experience: "2.5 Year",
        image: "/members/HardikNasit.webp",
    },
    {
        name: "Khushal Dhola",
        role: "Full-Stack Developer",
        experience: "2 Years",
        image: "/members/KhushalDhola.webp",
    },
];

export default function TeamMember() {
    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

    return (
        <>
            <div className="mil-up mt-18 flex flex-wrap gap-8 justify-center">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedMember(member)}
                        className={`rounded-full p-[3px] transition-all duration-300 ${
                            selectedMember.name === member.name ? "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600" : "bg-black/10"
                        }`}
                    >
                        <div className="cursor-pointer h-fit rounded-full bg-white p-1">
                            <div className="h-[150px] w-[150px] rounded-full overflow-hidden">
                                <Image
                                    width={150}
                                    height={150}
                                    src={member.image}
                                    alt={member.name.toLowerCase().replace(" ", "-")}
                                    className="h-full w-full object-cover hover:scale-105 duration-500 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center p-4 relative min-h-[200px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedMember.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute left-0 right-0"
                    >
                        <p className="mil-up text-4xl font-medium">{selectedMember.name}</p>
                        <p className="mil-up text-5xl text-black/70 mt-8">{selectedMember.role}</p>
                        <p className="mil-up text-2xl text-black/50 mt-4">{selectedMember.experience}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}
