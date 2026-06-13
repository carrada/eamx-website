import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0249-scaled.jpg",
      className: "absolute top-10 md:top-20 left-[20%] md:left-[10%] rotate-[-5deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0251-768x1024.jpg",
      className: "absolute top-40 md:top-80 left-[25%] md:left-[15%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0252-768x1024.jpg",
      className: "absolute top-5 md:top-20 left-[40%] md:left-[35%] rotate-[8deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0266-scaled.jpg",
      className: "absolute top-32 md:top-96 left-[55%] md:left-[50%] rotate-[10deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0276-768x1024.jpg",
      className: "absolute top-20 md:top-40 right-[35%] md:right-[40%] rotate-[2deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_1345-768x1024.jpg",
      className: "absolute top-24 md:top-80 left-[45%] md:left-[45%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_2148-768x1024.jpg",
      className: "absolute top-8 md:top-64 left-[30%] md:left-[25%] rotate-[4deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3677-768x576.jpg",
      className: "absolute top-48 md:top-screen left-[60%] md:left-[60%] rotate-[-3deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3678-768x576.jpg",
      className: "absolute top-12 md:top-96 right-[20%] md:right-[15%] rotate-[6deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3680-768x1024.jpg",
      className: "absolute top-56 md:top-screen right-[30%] md:right-[35%] rotate-[-4deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3692-768x576.jpg",
      className: "absolute top-32 md:top-80 right-[15%] md:right-[10%] rotate-[7deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_7024-768x576.jpg",
      className: "absolute top-40 md:top-96 left-[50%] md:left-[55%] rotate-[-2deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_7335-768x1024.jpg",
      className: "absolute top-20 md:top-72 right-[40%] md:right-[30%] rotate-[5deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/05d84694-6d39-4713-b1ab-ec4a35e6fb49.jpg",
      className: "absolute top-44 md:top-screen left-[35%] md:left-[30%] rotate-[-6deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen md:min-h-[200vh] w-full items-center justify-center overflow-clip">
      {items.map((item, index) => (
        <DraggableCardBody key={`gallery-${index}`} className={item.className}>
          <div className="flex items-center justify-center h-full w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-64 h-64 object-cover rounded-md"
            />
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
