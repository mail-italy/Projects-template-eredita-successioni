import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell stack">
        <p className="eyebrow">Pagina non trovata</p>
        <h1 className="display-sm">Il contenuto richiesto non è disponibile</h1>
        <p className="lead">
          La pagina che stai cercando non è disponibile. Puoi tornare alla homepage
          oppure consultare i servizi e gli approfondimenti principali.
        </p>
        <div className="cluster">
          <Link href="/" className="button">
            Torna alla homepage
          </Link>
          <Link href="/approfondimenti" className="button-ghost">
            Vai agli approfondimenti
          </Link>
        </div>
      </div>
    </section>
  );
}
