'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config'

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>
            {children}
        </span>
    );
}

export default function SkillsAndCertificates() {
    const [skills, setSkills] = useState<{ name: string; color: string }[]>([])
    const [certificates, setCertificates] = useState<{ name: string }[]>([])

    const colorList = [
        "bg-blue-500",
        "bg-gray-700",
        "bg-purple-500",
        "bg-orange-500",
        "bg-yellow-500",
        "bg-blue-600",
        "bg-cyan-500",
        "bg-teal-500",
        "bg-black",
        "bg-green-600",
        "bg-indigo-500",
        "bg-blue-400",
        "bg-blue-700",
        "bg-red-500",
        "bg-pink-500",
        "bg-violet-500",
        "bg-emerald-500",
        "bg-lime-500",
        "bg-amber-500",
        "bg-sky-500",
        "bg-rose-500",
        "bg-fuchsia-500",
        "bg-slate-500"
    ]
    
    useEffect(() => {
        const skillsWithColor = Config.skills.map((skill, index) => ({
            ...skill,
            color: colorList[index % colorList.length]
        }))
        setCertificates(Config.certificates)
        setSkills(skillsWithColor)
    }, [])

    return (
        <div className="space-y-5 print:space-y-3">
            <div className="p-3 print:p-3">
                <h3 className="text-sm font-medium text-gray-800 mb-3 print:mb-2">技术栈</h3>
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {skills.map((skill, index) => (
                        <Badge key={index} className={`${skill.color} text-white`}>
                            {skill.name}
                        </Badge>
                    ))}
                </div>
                {certificates.map((certificate, index) => (
                    <div key={index} className="flex items-center space-x-1.5 mt-3 print:mt-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-xs">{certificate.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
