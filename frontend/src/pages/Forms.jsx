import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forms() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    tagline: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    profileImage: "",
    
    // Social Links
    github: "",
    linkedin: "",
    twitter: "",
    website: "",
    
    // Skills
    skills: [],
    
    // Projects
    projects: [
      {
        title: "",
        description: "",
        technologies: "",
        liveLink: "",
        githubLink: "",
        image: "",
      },
    ],
    
    // Experience
    experience: [
      {
        company: "",
        position: "",
        duration: "",
        description: "",
      },
    ],
    
    // Education
    education: [
      {
        institution: "",
        degree: "",
        duration: "",
        description: "",
      },
    ],
    
    // Theme
    theme: "dark",
    primaryColor: "#00ffff",
  });

  const [currentSkill, setCurrentSkill] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSkill = () => {
    if (currentSkill.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill.trim()],
      });
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index),
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = formData.projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          title: "",
          description: "",
          technologies: "",
          liveLink: "",
          githubLink: "",
          image: "",
        },
      ],
    });
  };

  const handleRemoveProject = (index) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter((_, i) => i !== index),
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = formData.experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          position: "",
          duration: "",
          description: "",
        },
      ],
    });
  };

  const handleRemoveExperience = (index) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((_, i) => i !== index),
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = formData.education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          institution: "",
          degree: "",
          duration: "",
          description: "",
        },
      ],
    });
  };

  const handleRemoveEducation = (index) => {
    setFormData({
      ...formData,
      education: formData.education.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in localStorage
    localStorage.setItem("portfolioData", JSON.stringify(formData));
    // Navigate to portfolio page
    navigate("/portfolio");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">
            Portfolio Generator
          </h1>
          <p className="text-gray-400 text-lg">
            Fill out the form below to create your stunning portfolio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tagline *
                </label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="Full Stack Developer"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Bio *
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="New York, USA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Social Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">GitHub</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="https://github.com/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Twitter
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="https://twitter.com/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Skills</h2>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                placeholder="Add a skill (e.g., React, Node.js, Python)"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-700 rounded-full flex items-center gap-2"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                    className="text-red-400 hover:text-red-300 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Projects</h2>
            {formData.projects.map((project, index) => (
              <div
                key={index}
                className="mb-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    Project {index + 1}
                  </h3>
                  {formData.projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveProject(index)}
                      className="text-red-400 hover:text-red-300 font-bold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(index, "title", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="My Awesome Project"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(index, "description", e.target.value)
                      }
                      rows="3"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Project description..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Technologies (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) =>
                        handleProjectChange(index, "technologies", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Live Link
                    </label>
                    <input
                      type="url"
                      value={project.liveLink}
                      onChange={(e) =>
                        handleProjectChange(index, "liveLink", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="https://project-demo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      GitHub Link
                    </label>
                    <input
                      type="url"
                      value={project.githubLink}
                      onChange={(e) =>
                        handleProjectChange(index, "githubLink", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Project Image URL
                    </label>
                    <input
                      type="url"
                      value={project.image}
                      onChange={(e) =>
                        handleProjectChange(index, "image", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="https://example.com/project-image.jpg"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddProject}
              className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
            >
              Add Another Project
            </button>
          </section>

          {/* Experience */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Experience</h2>
            {formData.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    Experience {index + 1}
                  </h3>
                  {formData.experience.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(index)}
                      className="text-red-400 hover:text-red-300 font-bold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) =>
                        handleExperienceChange(index, "position", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) =>
                        handleExperienceChange(index, "duration", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Jan 2020 - Present"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={exp.description}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows="3"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Describe your responsibilities..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddExperience}
              className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
            >
              Add Another Experience
            </button>
          </section>

          {/* Education */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Education</h2>
            {formData.education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    Education {index + 1}
                  </h3>
                  {formData.education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveEducation(index)}
                      className="text-red-400 hover:text-red-300 font-bold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) =>
                        handleEducationChange(index, "institution", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="University Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(index, "degree", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Bachelor of Science in Computer Science"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={edu.duration}
                      onChange={(e) =>
                        handleEducationChange(index, "duration", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="2016 - 2020"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={edu.description}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows="2"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Additional details..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddEducation}
              className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
            >
              Add Another Education
            </button>
          </section>

          {/* Theme Settings */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Theme Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Primary Color
                </label>
                <input
                  type="color"
                  name="primaryColor"
                  value={formData.primaryColor}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-xl font-bold transition transform hover:scale-105"
            >
              Generate Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
