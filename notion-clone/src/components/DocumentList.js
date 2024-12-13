import React from 'react';
import { Link } from 'react-router-dom';

function DocumentList({ documents }) {
  return (
    <div>
      <h2>Documents</h2>
      <ul>
        {documents.length === 0 ? (
          <li>No documents available</li> 
        ) : (
          documents.map(doc => (
            <li key={doc.id}>
              <Link to={`/document/${doc.id}`}>
                {doc.title || 'Untitled Document'}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default DocumentList;
