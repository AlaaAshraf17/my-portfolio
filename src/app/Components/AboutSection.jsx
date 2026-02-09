'use client'
import React from 'react'
import {useTransition, useState } from 'react'
import TabButton from './TabButton'

const Tab_Data=[
    {
        title:"Skills",
        id:"skills",
        content:(
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            Programming Languages
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>JavaScript</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Python</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>SQL</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            Web Development
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>React.js</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>HTML5</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>CSS3</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>JavaScript (ES6+)</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Node.js</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>REST APIs</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            State Management
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>React Hooks</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>useState</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>useEffect</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>useContext</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Component Architecture</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            Networking & APIs
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>REST APIs</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Axios</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Fetch API</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            Databases & Tools
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>MongoDB</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Git</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>GitHub</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Postman</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>VS Code</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            Soft Skills
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Communication</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Problem Solving</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Team Collaboration</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Mentoring</li>
                            <li className="flex items-center"><span className="text-green-400 mr-2">•</span>Time Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
        <div className="space-y-4">
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50">
        
        <div className="flex items-start justify-between gap-4">
        <div>
            <h4 className="text-green-400 font-semibold text-lg">
            Cairo University
            </h4>
            <p className="text-gray-300 mt-1">
            Bachelor of Science in Computer Science
            </p>
        </div>
        <div className="text-right text-sm text-gray-400 whitespace-nowrap">
            <p>Egypt</p>
            <p className="text-green-400">Expected 2026</p>
        </div>
        </div>

    </div>
    </div>

        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content:(
            <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-green-400 font-semibold text-lg mb-2">Training & Certifications</h4>
                    <p className="text-gray-300">Add your certifications and training details here...</p>
                </div>
            </div>
        )
    }
]

const AboutSection = () => {
    const [tab,setTab]=useState("skills")
    const [isPending,startTransation]=useTransition()

    const handleTabChange=(id)=>{
        startTransation(()=>{
            setTab(id)
        })
    }

    return (
        <section className='text-white py-16' id="about">
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
                    <p className='text-base lg:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                        I am a Frontend Developer specializing in React.js and modern frontend technologies, with a strong focus on clean code, performance, and attention to detail. I also have hands-on experience with the MERN stack, giving me a solid understanding of how frontend and backend systems work together to build complete, real-world applications.
                        I'm continuously learning and refining my skills, aiming to build practical, user-centered solutions that solve real problems and deliver real value.
                    </p>
                </div>
                
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
                    <TabButton selectTab={()=>handleTabChange("education")} active={tab==="education"}>Education</TabButton>
                    <TabButton selectTab={()=>handleTabChange("certifications")} active={tab==="certifications"}>Training & Certifications</TabButton>
                </div>

                <div className='min-h-[400px]'>
                    {Tab_Data.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </section>
    )
    }

export default AboutSection