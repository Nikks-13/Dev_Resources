import React from 'react';
import './card.css'
const ToolCard = ({ tool }) => {
  return (
   <div className='containercard' >
    <div className='card'>
      <a className="link" href={tool.web_link} target='blank'>
      <h1 className='title'>{tool.name} : </h1>
      <h1 className='Desc'>&nbsp;{tool.desc}</h1></a>
    </div>

   </div>
  );
};

export default ToolCard;
