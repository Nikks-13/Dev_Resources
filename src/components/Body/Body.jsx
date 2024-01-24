import React from "react";
import "./Body.css";
import { tools } from "../../data/tools";
import ToolCard from "../ToolCard.jsx/toolCard"; // Corrected the import statement

const Body = () => {
  // Group tools by category
  const toolsByCategory = tools.reduce((acc, tool) => {
    acc[tool.category] = [...(acc[tool.category] || []), tool];
    return acc;
  }, {});

  return (
    <div className="container">
      {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
        <div className="catbox"
        key={category}>
          <h1 className="CatTitle">{category}</h1>
          <div class="line"></div>
          
            {categoryTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          
        </div>
      ))}
    </div>
  );
};

export default Body;

