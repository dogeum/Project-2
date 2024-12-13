import { 
    fetchRootDocuments, 
    fetchDocumentContent, 
    createDocument, 
    updateDocument, 
    deleteDocument 
  } from './api.js';
  
  async function renderDocumentList() {
    const documentListContainer = document.getElementById('document-list');
    documentListContainer.innerHTML = '';
  
    try {
      const documents = await fetchRootDocuments();
      const ul = document.createElement('ul');
      
      documents.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = doc.title || 'Untitled Document';
        li.addEventListener('click', () => renderDocumentDetail(doc.id));  
        ul.appendChild(li);
      });
  
      documentListContainer.appendChild(ul);
    } catch (error) {
      console.error("Error fetching documents:", error);
      documentListContainer.innerHTML = `<p>Error fetching documents: ${error.message}</p>`;
    }
  }
  
  document.getElementById('add-document-btn').onclick = async () => {
    const newDocumentTitle = prompt('Enter the title for the new document:');
    
    if (newDocumentTitle) {
      try {
        const newDoc = await createDocument(newDocumentTitle);
        alert("New document created!");
        renderDocumentList();
      } catch (error) {
        alert(`Error creating new document: ${error.message}`);
      }
    } else {
      alert("Document title is required.");
    }
  };
  
  export async function renderDocumentDetail(documentId) {
    const documentDetailContainer = document.getElementById('document-detail');
    const documentContentTextarea = document.getElementById('document-content');
    const saveButton = document.getElementById('save-document-btn');
    const deleteButton = document.getElementById('delete-document-btn');
  
    try {
      const document = await fetchDocumentContent(documentId);
      documentDetailContainer.innerHTML = `
        <h2>${document.title}</h2>
        <textarea id="document-content">${document.content}</textarea>
      `;
  
      saveButton.onclick = async () => {
        const updatedTitle = document.title;
        const updatedContent = documentContentTextarea.value;
  
        try {
          await updateDocument(documentId, updatedTitle, updatedContent);
          alert("Document saved successfully!");
          renderDocumentList();
        } catch (error) {
          alert(`Error saving document: ${error.message}`);
        }
      };
  
      deleteButton.onclick = async () => {
        try {
          await deleteDocument(documentId);
          alert("Document deleted successfully!");
          renderDocumentList();
        } catch (error) {
          alert(`Error deleting document: ${error.message}`);
        }
      };
    } catch (error) {
      console.error("Error fetching document content:", error);
      documentDetailContainer.innerHTML = `<p>Error fetching document content: ${error.message}</p>`;
    }
  }
  
  window.onload = renderDocumentList;
  