import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <MaskContainer
        revealText={
          <p className="w-full text-center text-4xl font-bold text-slate-800 dark:text-white">
            Arquitectura contemporánea + precisión estructural

          </p>
        }
        className="h-screen w-full text-white dark:text-black"
      >
        Diseñamos espacios que combinan estética, funcionalidad y durabilidad.
      </MaskContainer>
    </main>
  );
}
