import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Logo visible desde el inicio */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
        <img 
          src="/icon.png" 
          alt="EAMX Logo" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>
      
      <MaskContainer
        revealText={
          <p className="w-full text-center text-4xl md:text-6xl font-bold text-slate-800 dark:text-white px-4" style={{ fontFamily: 'var(--font-league-spartan)' }}>
            Arquitectura contemporánea + precisión estructural

          </p>
        }
        className="h-screen w-full text-white dark:text-black text-4xl md:text-6xl text-center px-4"
        style={{ fontFamily: 'var(--font-league-spartan)' }}
      >
        <span style={{ fontFamily: 'var(--font-league-spartan)' }}>
          Diseñamos espacios que combinan estética, funcionalidad y durabilidad.
        </span>
      </MaskContainer>
      
      <section className="w-full py-20 px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-16 text-center text-slate-900 dark:text-white">
            Nuestros servicios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Proyecto Ejecutivo
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Proyectos ejecutivos completos con planos, cálculos, permisos, presupuestos y cumplimiento normativo.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/arquitectura-contemporanea.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto Ejecutivo"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Construcción
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Soluciones integrales de construcción para proyectos residenciales, comerciales e industriales, bajo estándares PMP®.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/construccion.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Construcción"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Restauración de Monumentos
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Restauración y conservación de inmuebles históricos protegidos por el INBA, con técnicas especializadas.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/restauracion-monumentos.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Restauración de Monumentos"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Smart Home
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Automatización inteligente para iluminación, seguridad y confort, controlada desde tu smartphone.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/ingenieria-estructural.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Smart Home"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Arquitectura Industrial
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Diseño y construcción de espacios industriales eficientes, durables y optimizados en costos.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/arquitectura-industrial.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Arquitectura Industrial"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
    </main>
  );
}
