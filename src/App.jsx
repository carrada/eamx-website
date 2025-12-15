import { MaskContainer } from './components/svg-mask-effect'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="h-[40rem] w-full">
        <MaskContainer
          revealText={
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
              Bienvenido a EAMX. Donde la innovación se encuentra con la excelencia. 
              Descubre todo lo que podemos hacer por ti.
            </p>
          }
          className="h-[40rem] rounded-md border border-slate-800/50 text-white dark:text-black"
        >
          Descubre el poder de{" "}
          <span className="text-blue-500">EAMX</span> con soluciones innovadoras y 
          tecnología de punta para{" "}
          <span className="text-blue-500">transformar tu negocio</span>.
        </MaskContainer>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-slate-900 dark:text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Ofrecemos soluciones integrales para llevar tu proyecto al siguiente nivel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800">
              <h3 className="text-2xl font-bold mb-4">Desarrollo Web</h3>
              <p>Creamos sitios web modernos y responsivos con las últimas tecnologías</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800">
              <h3 className="text-2xl font-bold mb-4">Consultoría</h3>
              <p>Te asesoramos en la mejor estrategia digital para tu negocio</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800">
              <h3 className="text-2xl font-bold mb-4">Diseño UI/UX</h3>
              <p>Diseñamos experiencias de usuario intuitivas y atractivas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
