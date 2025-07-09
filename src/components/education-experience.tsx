'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config';

export default function EducationExperience() {
    const [educationList, setEducationList] = useState<{ school: string; degree: string; startDate: string; endDate: string }[]>([])

    useEffect(() => {
        setEducationList(Config.educationExperience)
    }, [])

    return (
        <div className="bg-white print:bg-white rounded-lg p-3 print:p-1">
            <h2 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">教育经历</h2>
            <div className="space-y-1">
                {educationList.map((education, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex flex-row items-center space-x-3">
                                <h3 className="text-sm font-medium text-gray-900">{education.school}</h3>
                                <p className="text-xs text-gray-700">{education.degree}</p>
                            </div>
                            <p className="text-xs text-gray-600">{education.startDate} - {education.endDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
