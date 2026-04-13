import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',background:'transparent'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/public/assets/brand/soundvibe-master.svg" alt="ThevibeSound" style={{height:40}} onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
        <strong style={{color:'#e6eef6'}}>ThevibeSound</strong>
      </div>
      <nav style={{display:'flex',gap:16}}>
        <a href="#artists" style={{color:'#cbd5e1',textDecoration:'none'}}>Artistas</a>
        <a href="#releases" style={{color:'#cbd5e1',textDecoration:'none'}}>Lanzamientos</a>
        <a href="#contact" style={{color:'#cbd5e1',textDecoration:'none'}}>Contacto</a>
      </nav>
    </header>
  );
};
