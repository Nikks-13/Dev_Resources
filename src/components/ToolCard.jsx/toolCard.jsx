import React from 'react';
import './card.css'
const ToolCard = ({ tool }) => {
  return (
   <div className='containercard' >
    <div className='card'>
      <a className="link" href={tool.web_link}>
      <h1 className='title'>{tool.name} :</h1>
      <h2 className='Desc'> {tool.desc}</h2></a>
    </div>

   </div>
  );
};

export default ToolCard;
