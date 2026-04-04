function LeadsList({ leads }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Submitted Leads</h2>

      {leads.length === 0 ? (
        <p style={styles.emptyText}>No leads submitted yet.</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>S.No</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>File Name</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={lead._id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{lead.name}</td>
                  <td style={styles.td}>{lead.email}</td>
                  <td style={styles.td}>{lead.phone}</td>
                  <td style={styles.td}>{lead.fileName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#111827",
  },
  emptyText: {
    color: "#6b7280",
    fontSize: "16px",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: "14px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px",
    color: "#374151",
  },
};

export default LeadsList;