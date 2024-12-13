import React, { useState, useEffect } from 'react';
import { fetchRootDocuments } from './api';
import DocumentList from './DocumentList';
import './styles.css'; 

function App() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function getDocuments() {
      try {
        const data = await fetchRootDocuments();
        setDocuments(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching documents:", error);
        setLoading(false);
      }
    }

    getDocuments();
  }, []);

  return (
    <div className="App">
      <h1>Notion Clone</h1>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <DocumentList documents={documents} />
      )}
    </div>
  );
}

export default App;
