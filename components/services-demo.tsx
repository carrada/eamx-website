import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function ServicesDemo() {
  const services = [
    {
      quote:
        "Proyectos ejecutivos completos con planos, cálculos, permisos, presupuestos y cumplimiento normativo.",
      name: "Proyecto Ejecutivo",
      designation: "Soluciones integrales de diseño",
      src: "/arquitectura-contemporanea.jpg",
    },
    {
      quote:
        "Soluciones integrales de construcción para proyectos residenciales, comerciales e industriales, bajo estándares PMP®.",
      name: "Construcción",
      designation: "Gestión y ejecución de obras",
      src: "/construccion.jpg",
    },
    {
      quote:
        "Restauración y conservación de inmuebles históricos protegidos por el INBA, con técnicas especializadas.",
      name: "Restauración de Monumentos",
      designation: "Preservación del patrimonio",
      src: "/restauracion-monumentos.jpg",
    },
    {
      quote:
        "Automatización inteligente para iluminación, seguridad y confort, controlada desde tu smartphone.",
      name: "Smart Home",
      designation: "Tecnología e innovación",
      src: "/ingenieria-estructural.jpg",
    },
    {
      quote:
        "Diseño y construcción de espacios industriales eficientes, durables y optimizados en costos.",
      name: "Arquitectura Industrial",
      designation: "Espacios funcionales y sostenibles",
      src: "/arquitectura-industrial.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={services} />;
}
