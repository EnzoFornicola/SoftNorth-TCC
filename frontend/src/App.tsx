import { Package, Users, Factory, FileText } from 'lucide-react';

export default function App() {
  return (
    <div style={{fontFamily:'Inter', minHeight:'100vh', background:'#f7f7f7'}}>
      <aside style={{background:'#5541B4', color:'#fff', width:260, minHeight:'100vh', padding:24}}>
        <h1 style={{fontSize:28}}>SoftNorth</h1>
        <p>Gestão inteligente</p>
        <hr />
        <p>Dashboard</p>
        <p>Clientes</p>
        <p>Produtos</p>
        <p>Materiais</p>
        <p>Produção</p>
        <p>Relatórios</p>
      </aside>

      <main style={{position:'absolute', left:300, top:40}}>
        <h2>Dashboard</h2>
        <div style={{display:'flex', gap:20}}>
          {[
            ['Clientes', '3', Users],
            ['Produtos', '3', Package],
            ['Pedidos ativos', '12', Factory],
            ['Orçamentos', '25', FileText]
          ].map(([title,value,Icon]: any)=>(
            <div style={{background:'#fff',padding:20,borderRadius:12,width:180}}>
              <Icon color='#FF6823'/>
              <h3>{title}</h3>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
