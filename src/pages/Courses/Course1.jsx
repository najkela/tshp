import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Importuj Markdown fajl kao string
import markdownContent from "../../markdowns/course1.md";

const MarkdownViewer = () => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
