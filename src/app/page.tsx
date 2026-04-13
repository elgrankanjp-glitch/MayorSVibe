import Image from "next/image";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <main style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:32,background:"linear-gradient(180deg,#071021 0%, #0b1020 60%)"}}>
      <section style={{maxWidth:1100,display:"grid",gridTemplateColumns:"1fr 420px",gap:32,alignItems:"center",background:"rgba(255,255,255,0.02)",padding:36,borderRadius:18}}>
        <div>
          <h1 style={{fontSize:44,margin:0}}>TheVibeSound Records</h1>
          <p style={{color:"#9aa4b2",marginTop:8}}>Beats, grooves y producciones que marcan la diferencia. Nuevo lanzamiento — escucha ahora.</p>
        </div>
        <aside style={{display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,0.06)",borderRadius:12,padding:18}}>
          <Image src="/assets/cover.jpg" alt="Portada" width={380} height={380} style={{borderRadius:8,objectFit:"cover"}} />
        </aside>
      </section>
    </main>
  );
}
