function ContactForm() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Lead / Contact Form</h1>

      <form style={styles.form}>
        <input type="text" placeholder="Enter Name" style={styles.input} />
        <input type="email" placeholder="Enter Email" style={styles.input} />
        <input type="tel" placeholder="Enter Phone" style={styles.input} />
        <input type="file" style={styles.input} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ContactForm;