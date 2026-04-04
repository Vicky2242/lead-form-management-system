import ContactForm from "./components/ContactForm";
import LeadsList from "./components/LeadsList";
import dummyLeads from "./data/dummyLeads";

function App() {
  return (
    <div style={styles.appContainer}>
      <ContactForm />
      <LeadsList leads={dummyLeads} />
      {/* <LeadsList leads={dummyLeads} /> */}
    </div>
  );
}

const styles = {
  appContainer: {
    padding: "20px",
  },
};

export default App;