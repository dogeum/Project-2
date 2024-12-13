const API_URL = 'https://mwu1.notion.edu-api.programmers.co.kr/documents';

// 루트 문서 목록을 가져오는 함수
export async function fetchRootDocuments() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'x-username': 'doeun',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching root documents');
  }

  return await response.json();
}

// 문서 세부 내용을 가져오는 함수
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
