import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDocumentContent } from './api';

function DocumentDetail() {
  const { id } = useParams(); // URL에서 문서 ID를 가져옵니다.
  const [document, setDocument] = useState(null);

  useEffect(() => {
    async function getDocumentContent() {
      try {
        const data = await fetchDocumentContent(id);
        setDocument(data);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    }

    getDocumentContent();
  }, [id]); // ID가 변경될 때마다 세부 내용 갱신

  if (!document) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{document.title}</h2>
      <p>{document.content}</p>
    </div>
  );
}

export default DocumentDetail;
