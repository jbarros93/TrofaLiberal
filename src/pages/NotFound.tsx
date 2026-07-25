import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui";

export function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-bold text-liberal-500">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">
        Página não encontrada
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink-soft/70">
        A página que procuras não existe ou foi movida.
      </p>
      <Button to="/" className="mt-8">
        Voltar ao início <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
