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
import { FaLinkedin, FaGithub } from "react-icons/fa";
import portrait from "./assets/portrait.jpg";

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
              Motivated software engineer and Barnard graduate currently shifting their career from research to software development.
              Committed to advancing knowledge and contributing to the success of research initiatives.
            </Typography>
          </section>

          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* Projects */}
          <section id="projects" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>Projects</Typography>
            <ul>
              <li><strong>TransConnect</strong> | GitHub Frontend | GitHub Backend</li>
              <i>Prisma/React-driven full-stack application that allows users to find and submit resources for transgender individuals (such as hotlines, therapists, shelters, public restrooms, etc).</i>
              <br />
              <li><strong>MentalGaming</strong> | GitHub</li>
              <i>Python/Flask-driven full-stack application that surveys users’ mental states before and after
                playing various browser games.
              </i>
            </ul>
          </section>

          {/* <hr style={{ margin: '40px 0' }} /> */}

          {/* Skills */}
          <section id="skills" className="h-screen snap-start flex flex-col justify-center items-center px-8">
            <Typography variant="h4" gutterBottom>Skills</Typography>

            {/* Frontend Skills */}
            <Box mt={4} className="text-center">
              <Typography variant="h6">Frontend</Typography>
              <ul className="flex flex-wrap justify-center gap-4 mt-2">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>Mui</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
              </ul>
            </Box>

            {/* Backend Skills */}
            <Box mt={4} className="text-center">
              <Typography variant="h6">Backend</Typography>
              <ul className="flex flex-wrap justify-center gap-4 mt-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Prisma</li>
                <li>SQLAlchemy</li>
                <li>Node-pg</li>
                <li>SQL</li>
                <li>Flask</li>
                <li>Python</li>
                <li>PostgreSQL</li>
              </ul>
            </Box>

            {/* Other Skills */}
            <Box mt={4} className="text-center">
              <Typography variant="h6">Others</Typography>
              <ul className="flex flex-wrap justify-center gap-4 mt-2">
                <li>VisualStudioCode</li>
                <li>GitHub</li>
                <li>WSL</li>
                <li>Vitest</li>
                <li>Jest</li>
                <li>Git</li>
                <li>Jasmine</li>
                <li>MATLAB</li>
                <li>C#</li>
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
          <section id="contact" className="h-screen snap-start flex flex-col justify-center items-center px-8 text-white">
            <Typography variant="h4" gutterBottom>Contact Me!</Typography>

            <div className="mb-6 flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-blue-300" />
                <a href="mailto:sg3584@alum.barnard.edu" className="text-blue-300">sg3584@alum.barnard.edu</a>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <FaLinkedin className="w-5 h-5 text-blue-300" />
                <a href="https://www.linkedin.com/in/ehretz-geskin/" className="text-blue-300">LinkedIn</a>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <FaGithub className="w-5 h-5 text-blue-300" />
                <a href="https://github.com/YOUR_GITHUB_USERNAME" className="text-blue-300">GitHub</a>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <LinkIcon className="w-5 h-5 text-blue-300" />
                <a href="YOUR_RESUME_LINK" className="text-blue-300">Resume</a>
              </div>
            </div>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: '100%',
                maxWidth: '500px',
                maxHeight: '200px',
                bgcolor: 'transparent',
                mt: 2
              }}
            >
              <TextField
                fullWidth
                required
                label="Name"
                id="name"
                name="name"
                margin="normal"
                className="text-white-300"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                id="email"
                name="user-email"
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              {/* <FormControl fullWidth margin="normal" required>
                <InputLabel id="contact-reason-label" style={{ color: 'white' }}>Reason for contact</InputLabel>
                <Select
                  labelId="contact-reason-label"
                  id="contact-reason"
                  name="contact-reason"
                  label="Reason for contact"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Job offer">Job Offer</MenuItem>
                  <MenuItem value="Collaboration">Collaboration</MenuItem>
                  <MenuItem value="Inquiry">Inquiry</MenuItem>
                  <MenuItem value="Other">Other (specify in message)</MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                fullWidth
                required
                labelId="message-label"
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
                margin="normal"
                placeholder="Please type your message here"
                sx={{ color: 'white', borderColor: 'white' }}
                InputLabel={{ style: { color: 'white' } }}
                Input={{ style: { color: 'white' } }}
              />
              <Button
                type="submit"
                variant="contained"
                // color="primary"
                className='flex items-center bg-gray-800'
              // sx={{ mt: 2, mb: 6 }}
              >
                Send Message
              </Button>
            </Box>
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
