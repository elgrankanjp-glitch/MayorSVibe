import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{padding:'24px 20px',textAlign:'center',color:'#94a3b8'}}>
      <small>© {new Date().getFullYear()} ThevibeSound records — All rights reserved</small>
    </footer>
  );
};
