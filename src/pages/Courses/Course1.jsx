import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Course1 = ({ courseFile }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(courseFile)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [courseFile]);

  return (
    <div className="course-details">
      <ReactMarkdown children={markdownContent} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Course1;
