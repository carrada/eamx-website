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
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0251-768x1024.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0252-768x1024.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0266-scaled.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_0276-768x1024.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_1345-768x1024.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_2148-768x1024.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3677-768x576.jpg",
      className: "absolute top-48 left-[60%] rotate-[-3deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3678-768x576.jpg",
      className: "absolute top-12 right-[20%] rotate-[6deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3680-768x1024.jpg",
      className: "absolute top-56 right-[30%] rotate-[-4deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_3692-768x576.jpg",
      className: "absolute top-32 right-[15%] rotate-[7deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_7024-768x576.jpg",
      className: "absolute top-40 left-[50%] rotate-[-2deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/IMG_7335-768x1024.jpg",
      className: "absolute top-20 right-[40%] rotate-[5deg]",
    },
    {
      title: "",
      image: "/galeria-proyectos-eamx/05d84694-6d39-4713-b1ab-ec4a35e6fb49.jpg",
      className: "absolute top-44 left-[35%] rotate-[-6deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
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
