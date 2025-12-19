/* eslint-disable @next/next/no-img-element */
"use client";

import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { LampContainer } from "@/components/ui/lamp";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Fernanda Romero",
    designation: "Arquitecta",
    image: "/FerRomeroeamx.jpeg",
  },
  {
    id: 2,
    name: "Miguel Duarte",
    designation: "Chief Operating Officer",
    image: "/marioduarteeamx.jpeg",
  },
  {
    id: 3,
    name: "Miguel Hernández",
    designation: "Arquitecto Sr",
    image: "/migueleamx.jpeg",
  },
  {
    id: 4,
    name: "Alma Yaneli",
    designation: "Arquitecta",
    image: "/almayanelieamx.jpeg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Logo visible desde el inicio */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
        <img 
          src="/logo.png" 
          alt="EAMX Logo" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>
      
      <MaskContainer
        revealText={
          <p className="w-full text-center text-4xl md:text-6xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'var(--font-league-spartan), sans-serif' }}>
            Arquitectura contemporánea + precisión estructural

          </p>
        }
        className="h-screen w-full text-white dark:text-black text-4xl md:text-6xl text-center"
        style={{ fontFamily: 'var(--font-league-spartan), sans-serif' }}
      >
        <span style={{ fontFamily: 'var(--font-league-spartan), sans-serif' }}>
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

      {/* Sección Quiénes Somos */}
      <section className="min-h-screen bg-black py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center mb-16"
            style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}
          >
            ¿Quiénes somos EAMX?
          </h2>
          
          {/* Equipo con Animated Tooltips */}
          <div className="grid grid-cols-2 md:flex md:flex-row items-start md:items-center justify-center gap-6 md:gap-0 mb-20 w-full">
            <AnimatedTooltip items={teamMembers} />
          </div>

          {/* Descripción del Estudio */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-normal" style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
              Estudio Arquitectura MX, somos un <span className="font-bold">despacho integral</span> de arquitectura y construcción con experiencia en <span className="font-bold">restauración de edificios históricos</span> y ejecución de <span className="font-bold">proyectos constructivos innovadores</span>. No solo diseñamos espacios, los materializamos con precisión, respetando el <span className="font-bold">patrimonio arquitectónico</span> y adaptándolo a las necesidades contemporáneas.
            </p>
          </div>

          {/* Equipo Multidisciplinario */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-normal" style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
              Contamos con un <span className="font-bold">equipo multidisciplinario</span>: <span className="font-bold">Arquitectos especializados en restauración</span>, con formación en <span className="font-bold">conservación del patrimonio</span>. <span className="font-bold">Ingenieros civiles y estructurales</span> expertos en soluciones constructivas y reforzamiento de edificaciones. <span className="font-bold">Project Managers</span> que trabajando en <span className="font-bold">metodologías PMP</span> (Project Management Professional), asegurando eficiencia en plazos, costos y calidad.
            </p>
          </div>

          {/* Metodología y Estándares de Calidad */}
          <div className="max-w-5xl mx-auto">
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12"
              style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}
            >
              Metodología y Estándares de Calidad
            </h3>
            <div className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-normal space-y-6" style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
              <div style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
                Trabajamos bajo los principios del{" "}
                <LinkPreview
                  url="https://www.pmi.org/certifications/project-management-pmp"
                  className="font-bold text-white hover:text-gray-300"
                >
                  Project Management Professional (PMP)
                </LinkPreview>
                , garantizando una gestión estructurada y resultados predecibles.
              </div>
              <div style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
                Estandarizamos procesos con{" "}
                <LinkPreview
                  url="https://www.iso.org/iso-9001-quality-management.html"
                  className="font-bold text-white hover:text-gray-300"
                >
                  sistemas de gestión de calidad tipo ISO 9000
                </LinkPreview>
                , implementando controles en cada fase del proyecto.
              </div>
              <div style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
                En restauración, seguimos protocolos del INBA para preservar la autenticidad de los inmuebles.
              </div>
            </div>
          </div>

          {/* Alcance Geográfico */}
          <div className="max-w-5xl mx-auto mt-16">
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12"
              style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}
            >
              Alcance Geográfico
            </h3>
            <div className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-normal" style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
              <div style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}>
                Ofrecemos nuestros servicios en:{" "}
                <LinkPreview
                  url="/cdmx.jpeg"
                  imageSrc="/cdmx.jpeg"
                  isStatic={true}
                  width={250}
                  height={180}
                  className="font-bold text-white hover:text-gray-300"
                >
                  CDMX
                </LinkPreview>
                ,{" "}
                <LinkPreview
                  url="/Tepoztlan, Morelos.jpeg"
                  imageSrc="/Tepoztlan, Morelos.jpeg"
                  isStatic={true}
                  width={250}
                  height={180}
                  className="font-bold text-white hover:text-gray-300"
                >
                  Morelos
                </LinkPreview>
                ,{" "}
                <LinkPreview
                  url="/queretaro.jpeg"
                  imageSrc="/queretaro.jpeg"
                  isStatic={true}
                  width={250}
                  height={180}
                  className="font-bold text-white hover:text-gray-300"
                >
                  Querétaro
                </LinkPreview>
                {" "}y{" "}
                <LinkPreview
                  url="/sonora.jpeg"
                  imageSrc="/sonora.jpeg"
                  isStatic={true}
                  width={250}
                  height={180}
                  className="font-bold text-white hover:text-gray-300"
                >
                  Sonora
                </LinkPreview>
                , adaptándonos a las normativas y contextos regionales con soluciones personalizadas.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section className="w-full py-20 px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-16 text-center text-slate-900 dark:text-white"
            style={{ fontFamily: 'var(--font-league-spartan), sans-serif !important' } as React.CSSProperties}
          >
            Galería
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_0249-scaled.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 1"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_0251-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 2"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_0252-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 3"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_0266-scaled.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 4"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_0276-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 5"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_1345-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 6"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_2148-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 7"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_3675-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 8"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_3677-768x576.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 9"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_3678-768x576.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 10"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_3680-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 11"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_3690-1-768x576.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 12"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_3692-768x576.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 13"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_7024-768x576.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 14"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/IMG_7335-768x1024.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 15"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/galeria-proyectos-eamx/05d84694-6d39-4713-b1ab-ec4a35e6fb49.jpg"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Proyecto EAMX 16"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Lamp Section */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 py-4 text-center text-5xl font-bold tracking-tight md:text-6xl lg:text-8xl px-4"
          style={{ fontFamily: 'var(--font-league-spartan)' }}
        >
          <span className="text-black block">¿Listo para tu</span>
          <span className="text-white block">próximo proyecto?</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-16"
        >
          <a href="mailto:info@eamx.mx">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="text-white text-lg md:text-xl font-bold px-8 py-4"
            >
              Conversemos sobre tu proyecto →
            </HoverBorderGradient>
          </a>
        </motion.div>
      </LampContainer>

      {/* Footer Section */}
      <section className="bg-black py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src="/logoEAMX-seccionFinal.png"
              alt="EAMX Logo"
              className="w-24 h-auto mx-auto opacity-80"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-8 mb-8"
          >
            {/* Email */}
            <a
              href="mailto:info@eamx.mx"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+525558299881"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/eamx/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 EAMX. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                Sitio web hecho y diseñado por
                <a
                  href="https://chiiko.design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/chiiko-fondoNegro.png"
                    alt="Chiiko"
                    className="h-8 w-auto"
                  />
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
