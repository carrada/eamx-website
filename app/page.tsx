import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
              Bienvenido a EAMX. Donde la innovación se encuentra con la excelencia. 
              Descubre todo lo que podemos hacer por ti.
            </p>
          }
          className="h-[40rem] rounded-md border text-white dark:text-black"
        >
          Descubre el poder de{" "}
          <span className="text-blue-500">EAMX</span> con soluciones innovadoras y
          tecnología de punta para{" "}
          <span className="text-blue-500">transformar tu negocio</span>.
        </MaskContainer>
      </div>
    </main>
  );
}
