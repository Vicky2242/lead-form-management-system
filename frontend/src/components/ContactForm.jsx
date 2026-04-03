import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Frontend ready! API integration on Day 3.");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Lead / Contact Form</h1>
      <p style={styles.subText}>Submit your details and upload a document.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Upload File</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            style={styles.fileInput}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit Lead
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "8px",
    color: "#111827",
  },
  subText: {
    textAlign: "center",
    marginBottom: "24px",
    color: "#6b7280",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "600",
    color: "#374151",
    fontSize: "14px",
  },
  input: {
    padding: "12px",
    fontSize: "15px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
  },
  fileInput: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#f9fafb",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },
};

export default ContactForm;