import { MaskContainer } from './components/svg-mask-effect'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <MaskContainer
        revealText={
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              EAMX Website
            </h1>
            <p className="text-xl md:text-2xl">
              Bienvenido a nuestra plataforma
            </p>
          </div>
        }
        className="h-screen"
      >
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Descubre EAMX
          </h1>
          <p className="text-xl md:text-2xl text-purple-400">
            Mueve el cursor para revelar el contenido
          </p>
        </div>
      </MaskContainer>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Contenido adicional</h2>
          <p className="text-lg">Aquí puedes agregar más secciones a tu sitio web</p>
        </div>
      </div>
    </div>
  )
}

export default App
