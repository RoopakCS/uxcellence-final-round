import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      navigate("/form");
    }
  }, [navigate]);

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const isDark = data.theme === "dark";
  const bgColor = isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-900" : "bg-gradient-to-br from-gray-100 via-white to-gray-100";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const secondaryTextColor = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark ? "bg-gray-800 bg-opacity-50" : "bg-white bg-opacity-80";
  const borderColor = isDark ? "border-opacity-30" : "border-opacity-20";

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b" style={{ borderColor: data.primaryColor + "30" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: data.primaryColor }}>
            {data.fullName}
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:opacity-80 transition">About</a>
            <a href="#skills" className="hover:opacity-80 transition">Skills</a>
            <a href="#projects" className="hover:opacity-80 transition">Projects</a>
            <a href="#experience" className="hover:opacity-80 transition">Experience</a>
            <a href="#education" className="hover:opacity-80 transition">Education</a>
            <a href="#contact" className="hover:opacity-80 transition">Contact</a>
          </div>
          <button
            onClick={() => navigate("/form")}
            className="px-4 py-2 rounded-lg font-semibold transition hover:opacity-80"
            style={{ backgroundColor: data.primaryColor, color: isDark ? "#000" : "#fff" }}
          >
            Edit
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              Hi, I'm <span style={{ color: data.primaryColor }}>{data.fullName}</span>
            </h1>
            <p className="text-3xl font-semibold" style={{ color: data.primaryColor }}>
              {data.tagline}
            </p>
            <p className={`text-lg ${secondaryTextColor} leading-relaxed`}>
              {data.bio}
            </p>
            <div className="flex gap-4 pt-4">
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold transition hover:opacity-80"
                  style={{ backgroundColor: data.primaryColor, color: isDark ? "#000" : "#fff" }}
                >
                  GitHub
                </a>
              )}
              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg font-semibold transition border-2 hover:opacity-80`}
                  style={{ borderColor: data.primaryColor, color: data.primaryColor }}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            {data.profileImage ? (
              <img
                src={data.profileImage}
                alt={data.fullName}
                className="w-96 h-96 rounded-full object-cover border-4 shadow-2xl"
                style={{ borderColor: data.primaryColor }}
              />
            ) : (
              <div
                className="w-96 h-96 rounded-full flex items-center justify-center text-9xl font-bold border-4 shadow-2xl"
                style={{ borderColor: data.primaryColor, backgroundColor: data.primaryColor + "20" }}
              >
                {data.fullName.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <section id="skills" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: data.primaryColor }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold border-2 ${borderColor} transition hover:scale-105`}
                  style={{ borderColor: data.primaryColor, color: data.primaryColor }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {data.projects.some(p => p.title) && (
        <section id="projects" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: data.primaryColor }}>
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.filter(p => p.title).map((project, index) => (
                <div
                  key={index}
                  className={`${cardBg} rounded-lg overflow-hidden border border-${borderColor} hover:shadow-2xl transition transform hover:scale-105`}
                  style={{ borderColor: data.primaryColor + "30" }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: data.primaryColor }}>
                      {project.title}
                    </h3>
                    <p className={`${secondaryTextColor} mb-4`}>
                      {project.description}
                    </p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.split(',').map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-sm rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg font-semibold transition hover:opacity-80"
                          style={{ backgroundColor: data.primaryColor, color: isDark ? "#000" : "#fff" }}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-lg font-semibold border-2 transition hover:opacity-80`}
                          style={{ borderColor: data.primaryColor, color: data.primaryColor }}
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {data.experience.some(e => e.company) && (
        <section id="experience" className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: data.primaryColor }}>
              Experience
            </h2>
            <div className="space-y-8">
              {data.experience.filter(e => e.company).map((exp, index) => (
                <div
                  key={index}
                  className={`${cardBg} p-8 rounded-lg border ${borderColor}`}
                  style={{ borderColor: data.primaryColor + "30" }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: data.primaryColor }}>
                        {exp.position}
                      </h3>
                      <p className="text-xl font-semibold mt-1">{exp.company}</p>
                    </div>
                    <span className={`${secondaryTextColor} font-medium`}>
                      {exp.duration}
                    </span>
                  </div>
                  <p className={secondaryTextColor}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {data.education.some(e => e.institution) && (
        <section id="education" className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: data.primaryColor }}>
              Education
            </h2>
            <div className="space-y-8">
              {data.education.filter(e => e.institution).map((edu, index) => (
                <div
                  key={index}
                  className={`${cardBg} p-8 rounded-lg border ${borderColor}`}
                  style={{ borderColor: data.primaryColor + "30" }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: data.primaryColor }}>
                        {edu.degree}
                      </h3>
                      <p className="text-xl font-semibold mt-1">{edu.institution}</p>
                    </div>
                    <span className={`${secondaryTextColor} font-medium`}>
                      {edu.duration}
                    </span>
                  </div>
                  {edu.description && (
                    <p className={secondaryTextColor}>{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: data.primaryColor }}>
            Get In Touch
          </h2>
          <div className={`${cardBg} p-12 rounded-lg border ${borderColor} text-center`} style={{ borderColor: data.primaryColor + "30" }}>
            <p className="text-xl mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {data.email && (
                <div>
                  <span className={secondaryTextColor}>Email: </span>
                  <a href={`mailto:${data.email}`} className="font-semibold" style={{ color: data.primaryColor }}>
                    {data.email}
                  </a>
                </div>
              )}
              {data.phone && (
                <div>
                  <span className={secondaryTextColor}>Phone: </span>
                  <a href={`tel:${data.phone}`} className="font-semibold" style={{ color: data.primaryColor }}>
                    {data.phone}
                  </a>
                </div>
              )}
              {data.location && (
                <div>
                  <span className={secondaryTextColor}>Location: </span>
                  <span className="font-semibold">{data.location}</span>
                </div>
              )}
            </div>
            <div className="flex gap-6 justify-center mt-8">
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  style={{ color: data.primaryColor }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  style={{ color: data.primaryColor }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {data.twitter && (
                <a
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  style={{ color: data.primaryColor }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              )}
              {data.website && (
                <a
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  style={{ color: data.primaryColor }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${secondaryTextColor} border-t`} style={{ borderColor: data.primaryColor + "30" }}>
        <p>&copy; {new Date().getFullYear()} {data.fullName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
