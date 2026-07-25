import { Link } from "react-router-dom";
import { Globe, Camera, Video, Send, MessageCircle, Mail } from "lucide-react";
import { brand, socials } from "../data/content";
import { nav } from "../data/nav";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: Globe,
  Instagram: Camera,
  YouTube: Video,
  X: Send,
  WhatsApp: MessageCircle,
};

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ink text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <svg viewBox="0 0 64 64" className="h-5 w-5">
                <path d="M14 46 L28 18 L37 18 L23 46 Z" fill="#ff6a0f" />
                <path d="M31 46 L45 18 L54 18 L40 46 Z" fill="#ff6a0f" />
              </svg>
            </span>
            <span className="font-display text-base font-bold">
              {brand.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {brand.claim} Um núcleo de cidadãos a construir uma Trofa mais livre, próspera e dinâmica.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-liberal-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/40">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to ?? "#"}
                  className="text-sm text-white/70 transition-colors hover:text-liberal-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/40">
            Envolve-te
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/trofa-liberal/faz-te-membro" className="text-sm text-white/70 hover:text-liberal-400">
                Faz-te Membro
              </Link>
            </li>
            <li>
              <Link to="/ideias/sugestao" className="text-sm text-white/70 hover:text-liberal-400">
                Tens uma ideia?
              </Link>
            </li>
            <li>
              <Link to="/denuncia" className="text-sm text-white/70 hover:text-liberal-400">
                Canal de Denúncias
              </Link>
            </li>
            <li>
              <Link to="/loja" className="text-sm text-white/70 hover:text-liberal-400">
                Loja e Donativos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/40">
            Contacto
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${brand.email}`} className="text-sm text-white/70 hover:text-liberal-400">
                {brand.email}
              </a>
            </li>
            <li className="text-sm text-white/70">Trofa, Portugal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Iniciativa Liberal Trofa. Todos os direitos reservados.</p>
          <p>Núcleo territorial da Iniciativa Liberal</p>
        </div>
      </div>
    </footer>
  );
}
