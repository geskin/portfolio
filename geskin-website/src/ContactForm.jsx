import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Box
} from "@mui/material";

/** NewResourceForm: form for submitting a new resource 
 * 
 * Auth required: logged in
 */
const ContactForm = ({ submitForm }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        linkedIn: "",
        email: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = (e) => {
        e.preventDefault();
        submitForm({ ...formData });
        setFormData({ name: "", company: "", linkedIn: "", email: "" });
        navigate("/thank-you");
    };

    return (
        <Box display="flex" justifyContent="center" mt={5}>
            <Card sx={{ width: 500, padding: 3 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Contact Form
                    </Typography>
                    <form onSubmit={gatherInput}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="LinkedIn (optional)"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactForm;
