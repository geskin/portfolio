import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import NavBarTW from './Navigation/NavBarTW';
import React, { useState } from 'react';
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/solid";
import portrait from "./assets/portrait.jpeg";
import { FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaNodeJs, FaGithub, FaBootstrap, FaFlask, FaGit } from "react-icons/fa";
import { SiJquery, SiMui, SiTailwindcss, SiExpress, SiPostgresql, SiFlask, SiPrisma, SiJest, SiVitest, SiJasmine, SiSqlalchemy } from "react-icons/si";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [messageSent, setMessageSent] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://portfolio-backend-nlke.onrender.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok && formData.name !== "") {
      setMessageSent("Message sent!");
      setTimeout(() => setMessageSent(false), 20000);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setMessageSent("Failed to send message");
    }
  };

  return (
    <BrowserRouter>
      <NavBarTW />
      <div className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Container sx={{ mt: 4 }}>
          {/* Intro Section */}
          <section id="intro" className="text-white dark:text-white h-screen snap-start flex justify-center items-center px-4 sm:px-6 bg-white dark:bg-gray-900">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 max-w-5xl w-full">
              <img
                src={portrait}
                alt="My Portrait"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-cover rounded-2xl shadow-lg"
              />
              <div className="text-center md:text-left text-black dark:text-white">
                <h2 className="text-lg sm:text-xl font-medium">Hello! I'm</h2>
                <h1 className="text-2xl sm:text-4xl font-bold mt-1 sm:mt-2">Ehretz Geskin</h1>
                <h3 className="text-lg sm:text-2xl font-semibold mt-1 sm:mt-2">Full-Stack Software Developer</h3>
                <p className="mt-1 sm:mt-2">Brooklyn, NY</p>
                <p className="italic">he/him/his, they/them/theirs</p>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="text-white dark:text-white min-h-screen snap-start flex flex-col justify-center items-center px-4 sm:px-6 py-8">
            <Typography variant="h4" className='sm:pt-2' gutterBottom>About Me</Typography>
            <Typography className="max-w-3xl text-center sm:text-left">
              I’m a junior software engineer with a background in neuroscience and behavior commited to building accessible, inclusive full-stack applications. My journey into software development was born out of a desire to merge creativity, science, and empathy—to make a tangible impact in the lives of individuals, especially those who face stigma and financial barriers.
            </Typography>
            <br />
            <Typography className="max-w-3xl text-center sm:text-left">
              Throughout my experience with full-stack development, I’ve gained the skills to build the tools I wish existed—platforms that promote emotional well-being, foster community, and center the needs of marginalized populations. I bring a unique blend of technical skill, scientific training, artistic sensibility, and empathy to everything I build. My goal is to leave behind a legacy of technology that uplifts, connects, and cares.
            </Typography>
          </section>

          {/* Projects Section */}
          <section id="projects" className="text-white dark:text-white min-h-screen snap-start flex flex-col justify-center items-center px-4 sm:px-6 py-4">
            <Typography variant="h4" className='pt-10 sm:pt-0' gutterBottom>Projects</Typography>
            <div className="max-w-3xl text-sm sm:text-base">
              <ul className="space-y-4">
                <li>
                  <strong><a href="https://transconnect.onrender.com/" target="_blank" rel="noopener noreferrer" className='!underline'>TransConnect</a></strong>
                  {' '}| <small><a href="https://github.com/geskin/transconnect-frontend/tree/master/transconnect" target="_blank" rel="noopener noreferrer">GitHub Frontend</a></small> | <small><a href="https://github.com/geskin/transconnect-backend" target="_blank" rel="noopener noreferrer">GitHub Backend</a></small>
                  <p className="italic mt-1">Full-stack application that allows users to find and submit resources for transgender individuals (such as hotlines, therapists, shelters, public restrooms, etc), make posts, and comment on posts to engage with the community!</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li><b>Frontend:</b> React, JavaScript, Vite, mui</li>
                    <li><b>Backend:</b> Prisma, Node.js, Express.js, PostgreSQL, JSON web token, Bcrypt, Morgan</li>
                  </ul>
                </li>
                <li>
                  <strong><a href="https://mentalgaming.onrender.com/" target="_blank" rel="noopener noreferrer" className='!underline'>MentalGaming</a></strong> | <small><a href="https://github.com/geskin/MentalGaming" target="_blank" rel="noopener noreferrer">GitHub</a></small>
                  <p className="italic mt-1">Python/Flask-driven full-stack application that surveys users’ mental states before and after playing various browser games.</p>
                  <ul className="list-disc ml-5 mt-1">
                    <li><b>Frontend:</b> HTML, WTForms</li>
                    <li><b>Backend:</b> Python, Flask, SQLAlchemy</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="text-white dark:text-white min-h-screen snap-start flex flex-col justify-center items-center px-4 sm:px-6 py-4">
            <Typography variant="h4" className='pt-10 sm:pt-2' gutterBottom>Skills</Typography>

            <Box mt={4} className="text-center">
              <Typography variant="h6">Frontend</Typography>
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 text-3xl sm:text-4xl">
                <li><FaReact title="React" /></li>
                <li><FaJsSquare title="JavaScript" /></li>
                <li><FaHtml5 title="HTML" /></li>
                <li><FaCss3Alt title="CSS" /></li>
                <li><SiJquery title="jQuery" /></li>
                <li><SiMui title="Material UI" /></li>
                <li><FaBootstrap title="Bootstrap" /></li>
                <li><SiTailwindcss title="Tailwind" /></li>
              </ul>
            </Box>

            <Box mt={4} className="text-center">
              <Typography variant="h6">Backend</Typography>
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 text-3xl sm:text-4xl">
                <li><FaNodeJs title="Node.js" /></li>
                <li><SiExpress title="Express.js" /></li>
                <li><SiPrisma title="Prisma" /></li>
                <li><SiSqlalchemy title="SQLAlchemy" /></li>
                <li><FaFlask title="Flask" /></li>
                <li><FaPython title="Python" /></li>
                <li><SiPostgresql title="PostgreSQL" /></li>
              </ul>
            </Box>

            <Box mt={4} className="text-center">
              <Typography variant="h6">Others</Typography>
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 text-3xl sm:text-4xl">
                <li>VSCode</li>
                <li><FaGithub title="GitHub" /></li>
                <li><SiVitest title="Vitest" /></li>
                <li><SiJest title="Jest" /></li>
                <li><FaGit title="Git" /></li>
                <li><SiJasmine title="Jasmine" /></li>
                <li>MATLAB</li>
              </ul>
            </Box>
          </section>

          {/* Education Section */}
          <section id="education" className="text-white dark:text-white min-h-screen snap-start flex flex-col justify-center items-center px-4 sm:px-6 py-4">
            <Typography variant="h4" gutterBottom>Education</Typography>
            <ul className="text-center sm:text-left space-y-2 text-sm sm:text-base">
              <li><strong>Barnard College, Columbia University</strong> - BA in Neuroscience and Behavior (2023)</li>
              <li><strong>Springboard</strong> - Software Engineering Certificate (2025)</li>
              <li><strong>Indie Game Academy</strong> - Level 1 Graduate (2023)</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen snap-start flex flex-col justify-center items-center text-black px-4 sm:px-6 py-4 bg-[whitesmoke]">
            <div className="!text-black max-w-sm w-full text-center">
              <Typography variant="h4" className='sm:pt-0 md:pt-6' gutterBottom>Contact Me!</Typography>

              <div className="text-black mb-4 text-left space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 text-blue-500" />
                  <a href="mailto:sg3584@alum.barnard.edu" className="!text-black hover:!text-blue-500" target="_blank" rel="noopener noreferrer">sg3584@alum.barnard.edu</a>
                </div>

                <div className="flex items-center space-x-2">
                  <FaLinkedin className="w-4 h-4 text-blue-500" />
                  <a href="https://www.linkedin.com/in/ehretz-geskin/" className="!text-black hover:!text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div className="flex items-center space-x-2">
                  <FaGithub className="w-4 h-4 text-blue-500" />
                  <a href="https://github.com/geskin" className="!text-black hover:!text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="flex items-center space-x-2">
                  <LinkIcon className="w-4 h-4 text-blue-500" />
                  <a href="https://www.dropbox.com/scl/fi/uaawg9dbgb795pziyh055/EhretzGeskinResume_tech-1.pdf?rlkey=pynjx2legbghbkjcltq3kr3xn&st=7jas08r7&dl=0" className="!text-black hover:!text-blue-500" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
              </div>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  width: '100%',
                  bgcolor: 'transparent',
                  mt: 1
                }}
              >
                {messageSent && (
                  <p className="text-blue-600 text-sm font-medium mb-2">{messageSent}</p>
                )}

                <TextField
                  fullWidth
                  required
                  label="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  size="small"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="small"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  required
                  label="Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  size="small"
                  margin="dense"
                  placeholder="Your message"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="mt-3 bg-gray-800 text-white"
                  size="small"
                  fullWidth
                >
                  Send
                </Button>
              </Box>
            </div>
          </section>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
