import React, { useState } from 'react';
import { Sun, Moon, Mail, Linkedin, MapPin, Award, Book, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Robert-Andrei Damian</h1>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Contact Info */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:damian.robert.andrei@gmail.com" className="flex items-center gap-2">
              <Mail size={16} />
              hej@damiro.se
            </a>
            <a href="https://www.linkedin.com/in/damianr13" className="flex items-center gap-2">
              <Linkedin size={16} />
              linkedin.com/in/damianr13
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Stockholm, Sweden
            </span>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Briefcase size={24} />
            Work Experience
          </h2>
          
          
          <div className="space-y-8">

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Founding Machine Learning Engineer | Minimist</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sep. 2024 – Present | Stockholm</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Developed a second hand pricing engine based on PyMC</li>
                <li>Implemented MLOps best practices through tracing, logging and fine-tuning</li>
                <li>Created a flexible prompt management system</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Senior Software Engineer | Panprices AB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jul. 2022 – Aug. 2024 | Stockholm</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Led the creation of Loupe, used by design brands like Hay, Gubi and Flos</li>
                <li>Automated 70% of manual product matching using PyTorch and Visual Language Models</li>
                <li>Reduced scraping costs by 60% through Kubernetes migration</li>
                <li>Architected data workflow using Google Cloud services</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Tech Lead | Exenne Technologies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mar. 2018 – Sep. 2020 | Bucharest</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Led a team of 4 developers, providing mentorship and guidance</li>
                <li>Architected modern tech stack with Spring Boot and Angular</li>
                <li>Drove 4x growth in Annual Recurring Revenue (ARR)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold">KTH Royal Institute of Technology</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MSc. Computer Science, AI Focus | GPA: 4.7/5.0</p>
              <p className="text-sm">Aug. 2021 – Jun. 2022 | Stockholm, Sweden</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold">Sorbonne University</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MSc. Computer Science, Cloud Computing Focus | GPA: 16.9/20</p>
              <p className="text-sm">Aug. 2020 – Jun. 2021 | Paris, France</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold">Politehnica University of Bucharest</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">BSc. Systems Engineering | GPA: 8.6/10</p>
              <p className="text-sm">Sep. 2015 – Jun. 2019 | Bucharest, Romania</p>
            </div>
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award size={24} />
            Skills & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">Certifications</h3>
              <ul className="list-disc list-inside">
                <li>Professional Data Engineer on Google Cloud</li>
                <li>Sample based Learning Methods (RL)</li>
                <li>Leaders Experience, Aspire Academy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Languages</h3>
              <ul className="list-disc list-inside">
                <li>Romanian (C2 - native)</li>
                <li>English (C1 - advanced)</li>
                <li>French & Swedish (B1 - intermediary)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
