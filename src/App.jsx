import { MaskContainer } from './components/svg-mask-effect'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <MaskContainer
        revealText={
          <div className="text-center px-4 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              EAMX Website
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Bienvenido a nuestra plataforma
            </p>
          </div>
        }
        size={10}
        revealSize={600}
        className="h-screen"
      >
        <div className="text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Descubre el Poder de EAMX
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Innovación y excelencia en cada proyecto. 
            Mueve el cursor para revelar más contenido.
          </p>
        </div>
      </MaskContainer>
      
      <div className="container mx-auto px-4 py-16 bg-slate-50 dark:bg-slate-900">
        <div className="text-slate-900 dark:text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Aquí puedes agregar más secciones sobre tus productos, servicios o información de contacto
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
