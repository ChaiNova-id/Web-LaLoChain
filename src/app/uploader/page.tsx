"use client";
import { useState } from 'react';

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/verifDocument', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    alert(JSON.stringify(result, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button type="submit">Upload</button>
    </form>
  );
}
