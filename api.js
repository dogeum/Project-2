export const API_URL = 'https://mwu1.notion.edu-api.programmers.co.kr/documents';

export async function fetchRootDocuments() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'x-username': 'doeun',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching documents');
  }

  return await response.json();
}

export async function fetchDocumentContent(documentId) {
  const response = await fetch(`${API_URL}/${documentId}`, {
    method: 'GET',
    headers: {
      'x-username': 'doeun',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching document content');
  }

  return await response.json();
}

export async function createDocument(title) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'x-username': 'doeun',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, parent: null }),
  });

  if (!response.ok) {
    throw new Error('Error creating document');
  }

  return await response.json();
}

export async function updateDocument(documentId, title, content) {
  const response = await fetch(`${API_URL}/${documentId}`, {
    method: 'PUT',
    headers: {
      'x-username': 'doeun',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  if (!response.ok) {
    throw new Error('Error updating document');
  }

  return await response.json();
}

export async function deleteDocument(documentId) {
  const response = await fetch(`${API_URL}/${documentId}`, {
    method: 'DELETE',
    headers: {
      'x-username': 'doeun',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error deleting document');
  }

  return await response.json();
}
