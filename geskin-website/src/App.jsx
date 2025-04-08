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
import portrait from "./assets/portrait.jpg";
import { FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaNodeJs, FaGithub, FaBootstrap, FaFlask, FaGit } from "react-icons/fa";
import { SiJquery, SiMui, SiTailwindcss, SiExpress, SiPostgresql, SiFlask, SiPrisma, SiJest, SiVitest, SiJasmine, SiSqlalchemy } from "react-icons/si";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: e.target.name.value,
      email: e.target['user-email'].value,
      reason: e.target['contact-reason'].value,
      message: e.target.message.value,
    });

    const res = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({
        name: "",
        email: "",
        reason: "",
        message: ""
      });
      alert('Message sent!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <BrowserRouter>
      {/* <AppBar position="static" style={{ backgroundColor: 'darkslateblue' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            <a href="#intro" style={{ color: 'whitesmoke', textDecoration: 'none' }}>Ehretz Geskin</a>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="whitesmoke" href="#about">About Me</Button>
            <Button color="whitesmoke" href="#Education">Education</Button>
            <Button color="whitesmoke" href="#tech">Tech & Tools</Button>
            <Button color="whitesmoke" href="#Projects">Projects</Button>
            <Button color="whitesmoke" href="#contact">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar> */}
      <NavBarTW />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Container sx={{ mt: 4 }}>
          {/* Intro Section */}
          <section id="intro" className="h-screen snap-start flex justify-center items-center px-8 bg-white dark:bg-gray-900">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
              <img
                src={portrait}
                alt="My Portrait"
                className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-2xl shadow-lg"
              />

              <div className="text-center md:text-left text-black dark:text-white">
                <h2 className="text-xl font-medium">Hello! I'm</h2>
                <h1 className="text-4xl font-bold mt-2">Ehretz Geskin</h1>
                <h3 className="text-2xl font-semibold mt-2">Full-Stack Software Developer</h3>
                <p className="mt-2">Brooklyn, NY</p>
                <p className="italic">he/him/his, they/them/theirs</p>
              </div>
            </div>
          </section>


          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* About Me */}
          <section id="about" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>About Me</Typography>
            <Typography>
              I'm a motivated software engineer and Barnard graduate currently shifting their career from research to software development.
              I'm eager to get started on my new career and committed to advancing knowledge while contributing to the success of my place of work.
            </Typography>
          </section>

          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* Projects */}
          <section id="projects" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>Projects</Typography>
            <ul>
              <li><strong><a href="https://transconnect.onrender.com/" target="_blank"
                rel="noopener noreferrer">TransConnect</a></strong> | <small><a>GitHub Frontend</a></small> | <small><a>GitHub Backend</a></small></li>
              <i>Full-stack application that allows users to find and submit resources for transgender individuals (such as hotlines, therapists, shelters, public restrooms, etc), make posts, and comment on posts to engage with the community!</i>
              <ul>
                <li><b>Frontend:</b> React, JavaScript, Vite, mui</li>
                <li><b>Backend:</b> Prisma, Node.js, Express.js, PostgreSQL, JSON web token, Bcrypt, Morgan</li>
              </ul>
              <br />
              <li><strong>MentalGaming</strong> | GitHub</li>
              <i>Python/Flask-driven full-stack application that surveys users’ mental states before and after
                playing various browser games.
              </i>
              <ul>
                <li><b>Frontend:</b> HTML, WTForms</li>
                <li><b>Backend:</b> Python, Flask, SQLAlchemy</li>
              </ul>
            </ul>
          </section>

          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* Skills */}
          <section id="skills" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>Skills</Typography>

            {/* Frontend Skills */}
            <Box mt={4} className="text-center">
              <Typography variant="h6">Frontend</Typography>
              <ul className="flex flex-wrap justify-center gap-6 mt-2 text-4xl">
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

            {/* Backend Skills */}
            <Box mt={4} className="text-center">
              <Typography variant="h6">Backend</Typography>
              <ul className="flex flex-wrap justify-center gap-6 mt-2 text-4xl">
                <li><FaNodeJs title="Node.js" /></li>
                <li><SiExpress title="Express.js" /></li>
                <li><SiPrisma title="Prisma" /></li>
                <li><SiSqlalchemy title="SQLAlchemy" /></li>
                <li><FaFlask title="Flask" /></li>
                <li><FaPython title="Python" /></li>
                <li><SiPostgresql title="PostgreSQL" /></li>
              </ul>
            </Box>

            {/* Other Skills */}
            <Box mt={4} className="text-center">
              <Typography variant="h6">Others</Typography>
              <ul className="flex flex-wrap justify-center gap-6 mt-2 text-4xl">
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


          {/* Tools Table
          <section id="Tools" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>Tools</Typography>
            <Paper sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tool</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Proficiency</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Visual Studio</TableCell>
                    <TableCell>Source-code editor by Microsoft</TableCell>
                    <TableCell>Intermediate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Visual Studio Code</TableCell>
                    <TableCell>Source-code editor by Microsoft</TableCell>
                    <TableCell>Intermediate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Postman</TableCell>
                    <TableCell>API testing and development tool</TableCell>
                    <TableCell>Beginner</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Slack</TableCell>
                    <TableCell>Collaboration and communication tool</TableCell>
                    <TableCell>Expert</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>GitHub</TableCell>
                    <TableCell>Version control and collaboration</TableCell>
                    <TableCell>Expert</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>GitBash</TableCell>
                    <TableCell>Command line interface for Git</TableCell>
                    <TableCell>Intermediate</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </section> */}

          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* Education */}
          <section id="education" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>Education</Typography>
            <ul>
              <li><strong>Barnard College, Columbia University</strong> - BA in Neuroscience and Behavior (2023)</li>
              <li><strong>Springboard</strong> - Software Engineering Certificate (2025)</li>
              <li><strong>Indie Game Academy</strong> - Level 1 Graduate (2023)</li>
            </ul>
          </section>

          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* Contact Form */}
          <section
            id="contact"
            className="h-screen snap-start flex flex-col justify-center items-center text-black px-8 bg-[whitesmoke] pt-18"
          >
            <div className="!text-black max-w-sm w-full text-center">
              <Typography variant="h4" gutterBottom>Contact Me!</Typography>

              <div className="text-black mb-4 text-left space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 text-blue-500" />
                  <a href="mailto:sg3584@alum.barnard.edu" className="!text-black hover:!text-blue-500" target="_blank"
                    rel="noopener noreferrer">sg3584@alum.barnard.edu</a>
                </div>

                <div className="flex items-center space-x-2">
                  <FaLinkedin className="w-4 h-4 text-blue-500" />
                  <a href="https://www.linkedin.com/in/ehretz-geskin/" className="!text-black hover:!text-blue-500" target="_blank"
                    rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div className="flex items-center space-x-2">
                  <FaGithub className="w-4 h-4 text-blue-500" />
                  <a href="https://github.com/geskin" className="!text-black hover:!text-blue-500" target="_blank"
                    rel="noopener noreferrer">GitHub</a>
                </div>

                <div className="flex items-center space-x-2">
                  <LinkIcon className="w-4 h-4 text-blue-500" />
                  <a href="https://github.com/geskin/resume/blob/main/EhretzGeskinResume_Engineering.pdf" className="!text-black hover:!text-blue-500" target="_blank"
                    rel="noopener noreferrer">Resume</a>
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
                <TextField
                  fullWidth
                  required
                  label="Name"
                  id="name"
                  name="name"
                  size="small"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  id="email"
                  name="user-email"
                  size="small"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  required
                  label="Message"
                  id="message"
                  name="message"
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

          <br style={{ margin: '40px 0' }} />

          {/* <Box component="footer" sx={{ mt: 10, py: 3, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
          <Typography variant="body2" color="textSecondary">
            &copy; Ehretz Geskin. All rights reserved.
          </Typography>
        </Box> */}
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
