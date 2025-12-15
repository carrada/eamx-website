import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <MaskContainer
        revealText={
          <p className="w-full text-center text-4xl font-bold text-slate-800 dark:text-white">
            Bienvenido a EAMX. Donde la innovación se encuentra con la excelencia. 
            Descubre todo lo que podemos hacer por ti.
          </p>
        }
        className="h-screen w-full text-white dark:text-black"
      >
        Descubre el poder de{" "}
        <span className="text-blue-500">EAMX</span> con soluciones innovadoras y
        tecnología de punta para{" "}
        <span className="text-blue-500">transformar tu negocio</span>.
      </MaskContainer>
    </main>
  );
}
