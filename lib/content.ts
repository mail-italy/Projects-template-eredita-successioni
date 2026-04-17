export const siteConfig = {
  brand: "Eredità e Successioni",
  studio: "Studio Legale Del Monte",
  domain: "https://www.ereditaesuccessioni.it",
  baseTitle: "Eredità e Successioni | Assistenza legale in materia ereditaria",
  titleTemplate: "%s | Eredità e Successioni",
  description:
    "Assistenza legale dedicata a successioni, testamenti, divisioni ereditarie, legittima, donazioni, mediazione ereditaria e successioni internazionali.",
  locale: "it_IT",
};

export const contacts = {
  phoneDisplay: "+39 06 97615122",
  phoneHref: "tel:+390697615122",
  whatsappHref: "https://wa.me/390697615122",
  email: "info@delmontestudiolegale.it",
  emailHref: "mailto:info@delmontestudiolegale.it",
  address: "Via Costanza Baudana Vaccolini, 5 – 00153 Roma",
  city: "Roma",
  officeHours: "Lunedì–Venerdì, 09:00–19:30",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Via+Costanza+Baudana+Vaccolini+5+00153+Roma",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Via%20Costanza%20Baudana%20Vaccolini%205%2C%2000153%20Roma&z=15&output=embed",
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
};

export type ArticleEntry = {
  slug: string;
  title: string;
  excerpt: string;
  answerFirst: string;
  category: string;
  relatedServiceSlugs: string[];
  faq: FaqItem[];
  sections: ArticleSection[];
};

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroTitle: string;
  heroIntro: string;
  problemList: string[];
  whenToCall: string[];
  checks: string[];
  errors: string[];
  documents: string[];
  trust: string;
  relatedArticles: string[];
  faq: FaqItem[];
};

export type HubPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: {
    title: string;
    items: string[];
  }[];
  featuredArticles: string[];
  connectedServices: string[];
  faq: FaqItem[];
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
  whyItMatters: string;
  relatedSlugs: string[];
};

export type LinkItem = {
  href: string;
  label: string;
  description: string;
};

export const trustSignals = [
  "Competenza dedicata a successioni, testamenti, legittima e divisioni",
  "Esperienza ultraventennale dello Studio Legale Del Monte",
  "Assistenza in fase stragiudiziale, giudiziale e di mediazione",
  "Approccio tecnico ma leggibile, orientato a prevenire errori e contenziosi",
];

export const mainProblems = [
  "Testamento contestato o sospetto di invalidità",
  "Divisione ereditaria bloccata tra coeredi",
  "Lesione della quota di legittima",
  "Donazioni da ricostruire in sede successoria",
  "Conti correnti e somme del de cuius da recuperare",
  "Successioni internazionali con patrimoni in più Paesi",
];

export const workSteps = [
  {
    title: "Inquadramento del caso",
    text: "Ricostruiamo la vicenda familiare, patrimoniale e documentale per capire subito se il nodo è testamentario, divisorio, di legittima o di donazioni pregresse.",
  },
  {
    title: "Verifica tecnica e strategia",
    text: "Valutiamo titoli, quote, beni, movimenti bancari, tempistiche e rischi processuali per impostare una linea di azione chiara e sostenibile.",
  },
  {
    title: "Negoziazione, mediazione o giudizio",
    text: "Privilegiamo le soluzioni efficaci quando sono realistiche, ma prepariamo il contenzioso con metodo quando l’accordo non tutela davvero il cliente.",
  },
];

export const moneyPages: ServicePage[] = [
  {
    slug: "avvocato-successioni",
    title: "Avvocato per successioni ereditarie",
    shortTitle: "Avvocato successioni",
    description:
      "Assistenza legale in materia di successioni, testamenti, divisioni ereditarie, legittima, conti correnti, immobili e conflitti tra coeredi.",
    heroTitle: "Avvocato per successioni, eredità e contenziosi ereditari",
    heroIntro:
      "Assistiamo clienti e famiglie nei passaggi più delicati della successione: apertura della pratica, verifica delle quote, gestione dei conflitti, impugnazioni, divisioni e patrimoni complessi.",
    problemList: [
      "Eredità con più coeredi e interessi divergenti",
      "Dubbi su validità del testamento o ricostruzione delle quote",
      "Beni immobili, denaro e donazioni da coordinare nella divisione",
      "Successioni ferme per contrasti, inerzia o documentazione incompleta",
    ],
    whenToCall: [
      "Quando vuoi capire subito diritti, quote e rischi prima di firmare o accettare",
      "Quando il patrimonio comprende immobili, somme bancarie, donazioni o beni indivisi",
      "Quando emergono tensioni tra fratelli, coniuge, figli o altri legittimari",
      "Quando serve impostare mediazione o giudizio con una base tecnica ordinata",
    ],
    checks: [
      "Titolo successorio applicabile: testamento o successione legittima",
      "Composizione dell’asse ereditario e presenza di debiti o pesi",
      "Quote di legittima, collazione, riduzione e possibili azioni giudiziali",
      "Documenti notarili, catastali, bancari e fiscali necessari",
    ],
    errors: [
      "Accettare informalmente l’eredità senza aver misurato debiti e responsabilità",
      "Pensare che il conflitto tra coeredi sia solo un tema relazionale e non probatorio",
      "Trascurare donazioni pregresse, prelievi bancari o intestazioni apparenti",
      "Arrivare alla mediazione o al giudizio senza una ricostruzione patrimoniale solida",
    ],
    documents: [
      "Certificato di morte e stato di famiglia storico",
      "Testamento, atti notarili, donazioni, visure catastali e ipotecarie",
      "Estratti conto, comunicazioni bancarie, documentazione su polizze e investimenti",
      "Eventuali diffide, convocazioni in mediazione o atti giudiziari già notificati",
    ],
    trust:
      "Lo Studio Legale Del Monte opera da oltre vent’anni nel diritto ereditario e successorio, con attenzione specifica a controversie familiari, patrimoni articolati e coordinamento tra fase negoziale e giudiziale.",
    relatedArticles: [
      "quota-di-legittima-come-si-calcola",
      "successione-legittima-con-coniuge-e-figli",
      "divisione-gioielli-eredita",
    ],
    faq: [
      {
        question: "Quando serve davvero un avvocato per successioni?",
        answer:
          "Serve appena il caso supera la semplice voltura documentale: più coeredi, dubbi sulle quote, testamento controverso, immobili indivisi, somme bancarie bloccate o donazioni pregresse richiedono una verifica legale prima di assumere decisioni irreversibili.",
      },
      {
        question: "Trattate solo casi su Roma?",
        answer:
          "Lo studio ha sede a Roma, ma assiste anche su questioni successorie di rilievo nazionale e, quando necessario, su pratiche con elementi internazionali.",
      },
      {
        question: "Posso avere un primo inquadramento del caso senza aver raccolto tutti i documenti?",
        answer:
          "Sì. Una prima analisi serve anche a capire quali documenti mancano, dove recuperarli e quali verifiche hanno priorità.",
      },
    ],
  },
  {
    slug: "impugnazione-testamento",
    title: "Impugnazione del testamento",
    shortTitle: "Impugnazione testamento",
    description:
      "Valutazione della validità del testamento, vizi formali, incapacità, pressione indebita, lesione di legittima e strategia per impugnare.",
    heroTitle: "Impugnazione del testamento: quando è fondata e come si prepara",
    heroIntro:
      "Non tutti i testamenti contestati sono davvero impugnabili. Il punto decisivo è capire se esistono vizi concreti, prove utilizzabili e un interesse giuridico attuale.",
    problemList: [
      "Testamento olografo con dubbi su autenticità, data o sottoscrizione",
      "Sospetti di condizionamento, captazione o incapacità del testatore",
      "Clausole che sembrano ledere la quota di legittima",
      "Conflitti familiari già esplosi prima dell’apertura della successione",
    ],
    whenToCall: [
      "Quando il testamento appare incoerente rispetto alla storia familiare o patrimoniale",
      "Quando hai elementi clinici, documentali o testimoniali su fragilità del testatore",
      "Quando il testamento distribuisce beni in modo apparentemente squilibrato",
      "Quando vuoi capire se conviene un’azione di annullamento, nullità o riduzione",
    ],
    checks: [
      "Tipo di testamento e requisiti formali rispettati",
      "Capacità del testatore al momento della redazione",
      "Eventuali condotte di influenza indebita o abuso di dipendenza",
      "Rapporto tra disposizioni testamentarie, donazioni pregresse e quota disponibile",
    ],
    errors: [
      "Confondere un testamento sgradito con un testamento invalido",
      "Agire senza aver fissato il quadro probatorio prima della causa",
      "Trascurare il termine e il tipo di azione corretta",
      "Limitarsi alla parte formale senza ricostruire anche patrimonio e legittima",
    ],
    documents: [
      "Copia del testamento e verbali di pubblicazione",
      "Documentazione medica o sanitaria utile sulla capacità del testatore",
      "Messaggi, lettere, email o testimonianze sui rapporti familiari e sulle pressioni subite",
      "Documentazione patrimoniale per misurare eventuali lesioni della legittima",
    ],
    trust:
      "L’impugnazione richiede rigore probatorio e una lettura integrata tra validità formale, capacità, relazioni familiari e ricostruzione patrimoniale. È qui che una difesa specialistica fa la differenza.",
    relatedArticles: [
      "come-funziona-successione-legittima",
      "quota-di-legittima-come-si-calcola",
      "testamento-quando-si-puo-contestare",
    ],
    faq: [
      {
        question: "Posso impugnare un testamento solo perché mi ha escluso?",
        answer:
          "No. L’esclusione, da sola, non basta. Occorre capire se vi è una lesione di legittima oppure un vizio del testamento che consenta un’azione fondata.",
      },
      {
        question: "Un testamento scritto a mano è sempre valido?",
        answer:
          "No. Il testamento olografo richiede requisiti precisi e può essere contestato se mancano elementi formali o se vi sono seri dubbi su autenticità e capacità del testatore.",
      },
      {
        question: "Conviene partire subito con una causa?",
        answer:
          "Non sempre. In molti casi è utile prima cristallizzare prove, patrimonio e posizioni dei coeredi, anche per capire se una trattativa o mediazione possa rafforzare la strategia complessiva.",
      },
    ],
  },
  {
    slug: "divisione-ereditaria",
    title: "Divisione ereditaria e scioglimento della comunione",
    shortTitle: "Divisione ereditaria",
    description:
      "Assistenza nella divisione ereditaria: immobili, denaro, quote, beni mobili, gioielli, conflitti tra coeredi e scioglimento della comunione ereditaria.",
    heroTitle: "Divisione ereditaria: come uscire dalla comunione senza errori",
    heroIntro:
      "Quando l’eredità resta indivisa, il conflitto si trascina su immobili, denaro, spese, utilizzo dei beni e decisioni bloccate. La divisione ereditaria serve a trasformare quote astratte in attribuzioni concrete e difendibili.",
    problemList: [
      "Immobili cointestati che nessuno riesce a vendere o gestire",
      "Beni mobili, gioielli, arredi o somme di denaro contesi",
      "Coeredi che usano in esclusiva beni comuni o non rendono conto delle spese",
      "Mancata trasparenza su prelievi, canoni, conti correnti o frutti dei beni",
    ],
    whenToCall: [
      "Quando la comunione ereditaria blocca il patrimonio da mesi o anni",
      "Quando occorre valutare quote, collazione, conguagli e divisibilità dei beni",
      "Quando un coerede occupa l’immobile o trattiene somme senza accordo",
      "Quando serve preparare mediazione obbligatoria o giudizio divisorio",
    ],
    checks: [
      "Composizione esatta dell’asse: immobili, denaro, titoli, crediti, beni mobili",
      "Quote ereditarie effettive e possibili incidenze di donazioni o legittima",
      "Comodità divisoria, indivisibilità o opportunità di vendita del bene",
      "Spese sostenute, frutti percepiti, indennità di occupazione e conguagli",
    ],
    errors: [
      "Dividere i beni senza aver prima ricostruito l’intero asse ereditario",
      "Ignorare il tema dei frutti, dei canoni o dell’uso esclusivo dell’immobile",
      "Sottovalutare il ruolo delle perizie e delle valutazioni economiche",
      "Pensare che la divisione giudiziale risolva da sola un dossier documentale debole",
    ],
    documents: [
      "Titoli di proprietà, visure catastali e ipotecarie, eventuali perizie",
      "Estratti conto, rendiconti, prova di spese e pagamenti effettuati",
      "Elenco dei beni mobili rilevanti, fotografie, inventari o stime",
      "Testamento, dichiarazione di successione e atti di donazione pregressi",
    ],
    trust:
      "Nelle divisioni ereditarie il risultato non dipende solo dal diritto astratto, ma da come vengono ricostruiti beni, valori, utilizzi e compensazioni. Lavoriamo per trasformare il conflitto in una mappa chiara di opzioni concrete.",
    relatedArticles: [
      "divisione-gioielli-eredita",
      "conti-correnti-del-de-cuius-cosa-sapere",
      "mediazione-ereditaria-quando-conviene",
    ],
    faq: [
      {
        question: "Se un coerede non vuole firmare, la divisione si ferma?",
        answer:
          "No. L’inerzia o il rifiuto di uno dei coeredi non impediscono in assoluto lo scioglimento della comunione. Cambia però il percorso: trattativa, mediazione e, se necessario, giudizio divisorio.",
      },
      {
        question: "Come si dividono beni mobili, gioielli o arredi di valore?",
        answer:
          "Si parte dall’individuazione e dalla prova della loro esistenza, poi si valutano stima, assegnazione, vendita o conguaglio. Nei beni mobili la criticità è spesso probatoria prima ancora che giuridica.",
      },
      {
        question: "Un coerede che usa da solo l’immobile deve qualcosa agli altri?",
        answer:
          "Può emergere un tema di indennità o di compensazione, ma va valutato sul caso concreto insieme a spese sostenute, utilità ricavate e periodo di utilizzo esclusivo.",
      },
    ],
  },
  {
    slug: "lesione-di-legittima",
    title: "Lesione di legittima",
    shortTitle: "Lesione di legittima",
    description:
      "Verifica della quota di legittima, riduzione delle disposizioni lesive, calcolo della massa ereditaria e tutela dei legittimari.",
    heroTitle: "Lesione di legittima: verifica quote, donazioni e azioni di riduzione",
    heroIntro:
      "Quando le disposizioni del defunto comprimono la quota riservata ai legittimari, occorre ricostruire il patrimonio, calcolare la massa e valutare l’azione più efficace.",
    problemList: [
      "Quote apparentemente sbilanciate a favore di un solo erede o terzo",
      "Donazioni pregresse che incidono sulla quota riservata",
      "Patrimonio poco trasparente o frammentato",
      "Conflitto tra testamento, liberalità e successione legittima",
    ],
    whenToCall: [
      "Quando sospetti che coniuge, figli o ascendenti siano stati penalizzati",
      "Quando servono calcoli tecnici su quota disponibile e quota di riserva",
      "Quando devi capire se agire prima contro disposizioni testamentarie o donazioni",
      "Quando il patrimonio comprende immobili, quote societarie o disponibilità bancarie",
    ],
    checks: [
      "Composizione della massa di calcolo",
      "Beni relitti, debiti e donatum",
      "Posizione dei legittimari e misura della quota lesa",
      "Ordine delle azioni e recuperabilità concreta dei beni",
    ],
    errors: [
      "Calcolare la legittima senza includere correttamente le donazioni",
      "Agire senza aver distinto riduzione e restituzione",
      "Sottovalutare il profilo probatorio sulle liberalità indirette",
      "Trascurare tempi e sostenibilità dell’azione",
    ],
    documents: [
      "Testamento e atti di donazione",
      "Titoli di proprietà e documentazione patrimoniale",
      "Estratti bancari e prova di movimenti rilevanti",
      "Stati di famiglia e documenti che provano la qualità di legittimario",
    ],
    trust:
      "La tutela della legittima richiede precisione: un errore nel perimetro del patrimonio o nel trattamento delle donazioni altera l’intera strategia.",
    relatedArticles: [
      "quota-di-legittima-come-si-calcola",
      "come-funziona-successione-legittima",
    ],
    faq: [
      {
        question: "La quota di legittima si calcola solo sui beni rimasti al momento della morte?",
        answer:
          "No. In molti casi vanno considerate anche donazioni e liberalità rilevanti, perché incidono sulla massa di calcolo e sulla quota riservata.",
      },
      {
        question: "Se il testamento mi esclude, sono automaticamente leso?",
        answer:
          "Non automaticamente. Va verificato se sei un legittimario e se, calcolando correttamente il patrimonio, la tua quota riservata risulta compressa.",
      },
    ],
  },
  {
    slug: "collazione-e-donazioni",
    title: "Collazione e donazioni in successione",
    shortTitle: "Collazione e donazioni",
    description:
      "Analisi di donazioni, anticipazioni, liberalità indirette e collazione nell’ambito della successione e delle quote ereditarie.",
    heroTitle: "Collazione e donazioni: cosa rientra davvero nella successione",
    heroIntro:
      "Le donazioni fatte in vita possono cambiare radicalmente quote, equilibri e contenzioso tra coeredi. Serve capire cosa va conferito, cosa incide sulla legittima e come provarlo.",
    problemList: [
      "Donazioni immobiliari o somme di denaro fatte a uno solo degli eredi",
      "Pagamenti indiretti o intestazioni a favore di terzi",
      "Disaccordo su valore, epoca e natura della liberalità",
      "Confusione tra collazione, imputazione e riduzione",
    ],
    whenToCall: [
      "Quando il patrimonio apparente non spiega il reale squilibrio tra coeredi",
      "Quando un bene è stato donato anni prima e ora incide sulla divisione",
      "Quando occorre distinguere liberalità indirette da aiuti familiari ordinari",
      "Quando serve coordinare collazione e lesione di legittima",
    ],
    checks: [
      "Esistenza e tipologia delle donazioni",
      "Soggetti obbligati alla collazione",
      "Valore dei beni da conferire o imputare",
      "Effetti sulla divisione e sulle quote di riserva",
    ],
    errors: [
      "Trattare ogni aiuto economico come donazione giuridicamente rilevante",
      "Ignorare la prova bancaria o notarile disponibile",
      "Confondere il piano successorio con quello fiscale",
      "Valutare il bene senza un criterio coerente con l’azione proposta",
    ],
    documents: [
      "Atti notarili di donazione",
      "Bonifici, assegni, quietanze e documentazione bancaria",
      "Documenti su acquisti immobiliari o intestazioni sospette",
      "Testamento e dichiarazione di successione",
    ],
    trust:
      "Le donazioni sono uno dei punti più litigiosi del diritto successorio perché incidono insieme su patrimonio, quote, prova e rapporti familiari.",
    relatedArticles: [
      "quota-di-legittima-come-si-calcola",
      "conti-correnti-del-de-cuius-cosa-sapere",
    ],
    faq: [
      {
        question: "Ogni somma data a un figlio è una donazione da collazionare?",
        answer:
          "No. Serve qualificare il trasferimento e verificare contesto, causa e prova. Non ogni supporto familiare integra una liberalità rilevante in successione.",
      },
    ],
  },
  {
    slug: "successioni-internazionali",
    title: "Successioni internazionali",
    shortTitle: "Successioni internazionali",
    description:
      "Assistenza in successioni con elementi esteri: residenza, beni in più Paesi, legge applicabile, regolamento europeo e coordinamento documentale.",
    heroTitle: "Successioni internazionali: legge applicabile, beni esteri e coordinamento",
    heroIntro:
      "Quando il patrimonio, i familiari o la residenza toccano più ordinamenti, la successione richiede una regia tecnica precisa su legge applicabile, giurisdizione e circolazione dei documenti.",
    problemList: [
      "Defunto residente all’estero o con beni in più Stati",
      "Conflitti sulla legge applicabile alla successione",
      "Immobili esteri, conti esteri o eredi residenti fuori dall’Italia",
      "Necessità di coordinare professionisti e documenti internazionali",
    ],
    whenToCall: [
      "Quando esiste qualsiasi elemento transfrontaliero rilevante",
      "Quando servono verifiche su residenza abituale e scelta di legge",
      "Quando la successione coinvolge immobili o banche estere",
      "Quando il caso impatta su quote, testamento o certificazione successoria europea",
    ],
    checks: [
      "Elemento internazionale realmente decisivo",
      "Legge applicabile e foro competente",
      "Titoli, traduzioni, apostille e documentazione estera",
      "Compatibilità tra disciplina italiana e straniera",
    ],
    errors: [
      "Applicare automaticamente la legge italiana a ogni caso",
      "Trascurare la nozione di residenza abituale",
      "Sottovalutare tempi e forma dei documenti esteri",
      "Separare patrimonio italiano ed estero senza una visione unitaria",
    ],
    documents: [
      "Atti anagrafici e certificati esteri",
      "Testamenti, atti di proprietà e documentazione bancaria",
      "Documenti su residenza, cittadinanza e rapporti familiari",
      "Traduzioni asseverate e legalizzazioni ove necessarie",
    ],
    trust:
      "Le successioni internazionali premiano un’impostazione ordinata fin dall’inizio: una scelta sbagliata sulla legge applicabile compromette tutto il percorso successivo.",
    relatedArticles: [
      "successioni-internazionali-cosa-cambia",
      "testamento-quando-si-puo-contestare",
    ],
    faq: [
      {
        question: "Se il defunto era italiano ma viveva all’estero si applica sempre la legge italiana?",
        answer:
          "No. Va verificata la residenza abituale e l’eventuale scelta di legge. Nei casi internazionali non si può ragionare per automatismi.",
      },
    ],
  },
  {
    slug: "mediazione-ereditaria",
    title: "Mediazione ereditaria",
    shortTitle: "Mediazione ereditaria",
    description:
      "Preparazione tecnica della mediazione in materia ereditaria, divisioni, legittima, impugnazioni e conflitti tra coeredi.",
    heroTitle: "Mediazione ereditaria: quando conviene e come prepararla bene",
    heroIntro:
      "La mediazione è utile solo se arriva con numeri, documenti e opzioni reali sul tavolo. Senza preparazione, diventa un passaggio formale che non risolve nulla.",
    problemList: [
      "Mediazione obbligatoria in vista di una causa ereditaria",
      "Coeredi già conflittuali e diffidenza reciproca",
      "Immobili e somme da ripartire con conguagli",
      "Necessità di misurare rapidamente il punto di equilibrio",
    ],
    whenToCall: [
      "Quando vuoi arrivare alla mediazione con una posizione tecnica solida",
      "Quando la controparte usa la mediazione solo per rinviare",
      "Quando serve capire cosa è negoziabile e cosa no",
      "Quando una buona mediazione può evitare una divisione giudiziale lunga e costosa",
    ],
    checks: [
      "Dossier documentale e patrimoniale",
      "Quote, pretese, punti cedibili e punti indisponibili",
      "Valore economico dell’accordo rispetto all’alternativa giudiziale",
      "Rischi probatori e tempi del contenzioso",
    ],
    errors: [
      "Andare in mediazione senza dati e valori affidabili",
      "Confondere disponibilità al dialogo con debolezza",
      "Trascurare verbalizzazione e struttura dell’accordo",
      "Usare la mediazione prima di aver ricostruito il patrimonio",
    ],
    documents: [
      "Convocazione in mediazione e atti già scambiati",
      "Documenti patrimoniali e familiari essenziali",
      "Perizie, stime o bozze di riparto",
      "Elementi probatori su uso dei beni, spese o donazioni",
    ],
    trust:
      "La mediazione ereditaria funziona quando il lavoro tecnico è già stato fatto: è su questa preparazione che costruiamo il vantaggio negoziale.",
    relatedArticles: [
      "mediazione-ereditaria-quando-conviene",
      "divisione-gioielli-eredita",
    ],
    faq: [
      {
        question: "La mediazione ereditaria è sempre obbligatoria?",
        answer:
          "Dipende dal tipo di domanda e dal percorso processuale. In molte controversie ereditarie è un passaggio rilevante, ma va inquadrato correttamente sul caso concreto.",
      },
    ],
  },
  {
    slug: "eredita-giacente",
    title: "Eredità giacente",
    shortTitle: "Eredità giacente",
    description:
      "Assistenza su eredità giacente, nomina del curatore, amministrazione dell’asse e gestione dei beni in assenza di accettazione.",
    heroTitle: "Eredità giacente: gestione dei beni quando l’eredità non viene accettata",
    heroIntro:
      "Quando nessuno accetta l’eredità o la situazione è bloccata, l’eredità giacente consente di amministrare e proteggere il patrimonio secondo regole specifiche.",
    problemList: [
      "Eredi incerti, inattivi o indecisi",
      "Beni da conservare o amministrare con urgenza",
      "Creditori interessati alla gestione dell’asse",
      "Necessità di capire ruoli e limiti del curatore",
    ],
    whenToCall: [
      "Quando l’eredità è ferma e i beni rischiano di deteriorarsi",
      "Quando servono chiarimenti sulla nomina del curatore",
      "Quando ci sono debiti o creditori da gestire",
      "Quando un potenziale erede vuole valutare senza esporsi a rischi inutili",
    ],
    checks: [
      "Presupposti della giacenza",
      "Beni e passività da amministrare",
      "Atti urgenti e conservativi necessari",
      "Interesse concreto dei soggetti coinvolti",
    ],
    errors: [
      "Agire sui beni prima di aver chiarito la posizione ereditaria",
      "Confondere giacenza con rinuncia",
      "Trascurare il ruolo dei creditori",
      "Sottovalutare la necessità di una gestione documentata",
    ],
    documents: [
      "Certificato di morte e documenti anagrafici",
      "Titoli di proprietà e visure",
      "Documentazione bancaria e fiscale",
      "Atti o comunicazioni di creditori",
    ],
    trust:
      "La fase di giacenza richiede prudenza tecnica: ogni iniziativa sui beni deve essere compatibile con la posizione ereditaria e con la tutela dell’asse.",
    relatedArticles: [
      "eredita-giacente-significato-e-rischi",
      "rinuncia-eredita-costi-e-conseguenze",
    ],
    faq: [
      {
        question: "L’eredità giacente significa che l’eredità è stata rinunciata?",
        answer:
          "No. La giacenza riguarda una fase in cui l’eredità non è ancora stata accettata e necessita di amministrazione. Non coincide automaticamente con la rinuncia.",
      },
    ],
  },
  {
    slug: "rinuncia-eredita",
    title: "Rinuncia all’eredità",
    shortTitle: "Rinuncia eredità",
    description:
      "Valutazione di rinuncia, accettazione espressa o tacita, benefici d’inventario, debiti ereditari e rischi operativi prima della scelta.",
    heroTitle: "Rinuncia all’eredità: quando conviene e quali rischi evitare",
    heroIntro:
      "La rinuncia non è una formalità neutra. Va valutata insieme a debiti, beni, possibili atti di accettazione tacita e alternative come il beneficio d’inventario.",
    problemList: [
      "Timore di ereditare debiti o passività occulte",
      "Incertezza su atti già compiuti che potrebbero valere come accettazione",
      "Presenza di minori o incapaci nella linea ereditaria",
      "Beni di modesto valore ma con oneri rilevanti",
    ],
    whenToCall: [
      "Quando non conosci ancora l’esatto perimetro di beni e debiti",
      "Quando temi di aver compiuto atti incompatibili con la rinuncia",
      "Quando devi scegliere tra rinuncia e beneficio d’inventario",
      "Quando la decisione può incidere su figli, rappresentazione o creditori",
    ],
    checks: [
      "Presenza di debiti, garanzie o contenziosi pendenti",
      "Atti già compiuti dopo il decesso",
      "Termini e procedura corretta",
      "Effetti della scelta sugli altri chiamati all’eredità",
    ],
    errors: [
      "Rinunciare senza aver verificato beni attivi recuperabili",
      "Compiere atti dispositivi sui beni del defunto",
      "Confondere la mancata presentazione della successione con una rinuncia valida",
      "Decidere senza valutare alternative protettive",
    ],
    documents: [
      "Documenti anagrafici e certificato di morte",
      "Informazioni su debiti, mutui, cartelle o contenziosi",
      "Documentazione su immobili, conti e beni conosciuti",
      "Eventuali atti già compiuti dal chiamato",
    ],
    trust:
      "Prima di rinunciare serve un controllo rigoroso: una scelta fatta male può essere inefficace o economicamente dannosa.",
    relatedArticles: [
      "rinuncia-eredita-costi-e-conseguenze",
      "conti-correnti-del-de-cuius-cosa-sapere",
    ],
    faq: [
      {
        question: "Se non faccio nulla ho rinunciato automaticamente?",
        answer:
          "No. L’inerzia non equivale di per sé a rinuncia formale. Inoltre alcuni comportamenti possono integrare accettazione tacita con effetti molto rilevanti.",
      },
    ],
  },
  {
    slug: "recupero-somme-ereditarie",
    title: "Recupero di somme ereditarie e conti correnti",
    shortTitle: "Recupero somme ereditarie",
    description:
      "Recupero di somme del de cuius, verifica di conti correnti, prelievi, investimenti, polizze e tracciamento di disponibilità patrimoniali.",
    heroTitle: "Recupero di somme ereditarie, conti correnti e disponibilità del de cuius",
    heroIntro:
      "Le somme bancarie sono spesso il punto più sensibile della successione: conti bloccati, prelievi sospetti, cointestazioni, deleghe e movimenti da ricostruire richiedono metodo probatorio.",
    problemList: [
      "Conti correnti bloccati o non pienamente conosciuti",
      "Prelievi sospetti prima del decesso",
      "Difficoltà a ricostruire investimenti, polizze o cassette di sicurezza",
      "Conflitti su somme detenute da uno dei familiari",
    ],
    whenToCall: [
      "Quando mancano trasparenza e documentazione bancaria completa",
      "Quando sospetti svuotamenti o operazioni anomale",
      "Quando la banca richiede titoli o integrazioni per sbloccare posizioni",
      "Quando le somme incidono su divisione, legittima o donazioni indirette",
    ],
    checks: [
      "Rapporti bancari esistenti e soggetti delegati o cointestatari",
      "Movimenti rilevanti in prossimità del decesso",
      "Titolarità effettiva delle somme e trattamento successorio",
      "Collegamento con divisione ereditaria o azioni di riduzione",
    ],
    errors: [
      "Pensare che la cointestazione risolva automaticamente il problema della titolarità",
      "Trascurare la cronologia dei movimenti e la prova documentale",
      "Separare il tema bancario dal resto del patrimonio ereditario",
      "Agire contro la banca senza una ricostruzione preliminare robusta",
    ],
    documents: [
      "Estratti conto, documentazione bancaria e contratti di investimento",
      "Comunicazioni di blocco o richieste della banca",
      "Testamento, dichiarazione di successione e documenti anagrafici",
      "Prova di deleghe, cointestazioni o operazioni sospette",
    ],
    trust:
      "Il recupero delle somme ereditarie richiede precisione documentale e una lettura coordinata con quote, legittima, donazioni e divisione.",
    relatedArticles: [
      "conti-correnti-del-de-cuius-cosa-sapere",
      "quota-di-legittima-come-si-calcola",
    ],
    faq: [
      {
        question: "Un conto cointestato appartiene automaticamente per metà al superstite?",
        answer:
          "Non sempre in termini sostanziali e successori. La cointestazione bancaria non esaurisce da sola la verifica della provenienza e della spettanza effettiva delle somme.",
      },
    ],
  },
];

export const hubPages: HubPage[] = [
  {
    slug: "testamento",
    title: "Testamento",
    description:
      "Guida ai testamenti: validità, pubblicazione, contestazione, tutela dei legittimari e ricadute sulla successione.",
    intro:
      "Il testamento è spesso il centro del conflitto successorio. In questa sezione trovi le questioni chiave: forme, validità, prova, rapporti con la legittima e strategie in caso di contestazione.",
    sections: [
      {
        title: "Nodi da capire subito",
        items: [
          "Differenza tra testamento olografo, pubblico e segreto",
          "Requisiti formali e profili di invalidità",
          "Capacità del testatore e influenza indebita",
          "Rapporto tra disposizioni testamentarie e quota di legittima",
        ],
      },
      {
        title: "Quando il tema diventa contenzioso",
        items: [
          "Autenticità della scheda testamentaria",
          "Interpretazione delle clausole",
          "Annullamento, nullità o riduzione",
          "Effetti sui beni e sulla divisione ereditaria",
        ],
      },
    ],
    featuredArticles: ["testamento-quando-si-puo-contestare"],
    connectedServices: ["impugnazione-testamento", "lesione-di-legittima"],
    faq: [
      {
        question: "Un testamento può escludere totalmente i figli?",
        answer:
          "Può contenerne l’esclusione sul piano formale, ma va poi verificato se la disposizione lede la quota riservata ai legittimari e quali azioni siano esperibili.",
      },
    ],
  },
  {
    slug: "legittima",
    title: "Legittima",
    description:
      "Approfondimenti su quota di legittima, riduzione, donazioni e tutela dei legittimari nella successione.",
    intro:
      "La legittima è uno dei temi più cercati e più fraintesi. Qui trovi i contenuti che aiutano a capire quota di riserva, massa di calcolo, donazioni e rimedi contro le disposizioni lesive.",
    sections: [
      {
        title: "Questioni essenziali",
        items: [
          "Chi sono i legittimari",
          "Come si calcola la quota di riserva",
          "Cosa entra nella massa di calcolo",
          "Differenza tra lesione, riduzione e restituzione",
        ],
      },
    ],
    featuredArticles: ["quota-di-legittima-come-si-calcola"],
    connectedServices: ["lesione-di-legittima", "collazione-e-donazioni"],
    faq: [
      {
        question: "Le donazioni in vita incidono sempre sulla legittima?",
        answer:
          "Incidono quando, per natura e prova, devono essere considerate nella ricostruzione della massa. È una verifica tecnica, non automatica.",
      },
    ],
  },
  {
    slug: "divisione-ereditaria",
    title: "Divisione ereditaria",
    description:
      "Guide su scioglimento della comunione ereditaria, immobili, beni mobili, conguagli, mediazione e contenzioso tra coeredi.",
    intro:
      "La divisione ereditaria è il punto in cui il diritto incontra il patrimonio reale: immobili, denaro, beni mobili, rendiconti, spese e conguagli devono essere coordinati in modo rigoroso.",
    sections: [
      {
        title: "Questioni da presidiare",
        items: [
          "Comodità divisoria e indivisibilità dei beni",
          "Uso esclusivo dell’immobile ereditato",
          "Beni mobili, gioielli e arredi",
          "Mediazione e giudizio divisorio",
        ],
      },
    ],
    featuredArticles: ["divisione-gioielli-eredita", "mediazione-ereditaria-quando-conviene"],
    connectedServices: ["divisione-ereditaria", "mediazione-ereditaria"],
    faq: [
      {
        question: "La divisione ereditaria riguarda solo gli immobili?",
        answer:
          "No. Coinvolge l’intero asse: denaro, mobili, crediti, gioielli, spese, frutti e ogni altro valore che deve essere attribuito o compensato.",
      },
    ],
  },
  {
    slug: "donazioni",
    title: "Donazioni",
    description:
      "Approfondimenti su donazioni, collazione, liberalità indirette e impatto delle attribuzioni fatte in vita sulla successione.",
    intro:
      "Le donazioni sono spesso il vero terreno dello scontro tra coeredi. In questa sezione trovi i criteri per distinguere liberalità rilevanti, prova e impatto sulle quote ereditarie.",
    sections: [
      {
        title: "Aree di analisi",
        items: [
          "Donazione diretta e indiretta",
          "Tracciabilità bancaria e prova",
          "Collazione e imputazione",
          "Interferenze con la legittima",
        ],
      },
    ],
    featuredArticles: ["conti-correnti-del-de-cuius-cosa-sapere"],
    connectedServices: ["collazione-e-donazioni", "lesione-di-legittima"],
    faq: [
      {
        question: "Un immobile comprato dai genitori ma intestato al figlio conta in successione?",
        answer:
          "Può contare eccome, ma bisogna qualificare correttamente l’operazione e ricostruirne la prova.",
      },
    ],
  },
  {
    slug: "successione-legittima",
    title: "Successione legittima",
    description:
      "Guida alla successione legittima: quote, coniuge, figli, ascendenti e criteri di ripartizione quando manca il testamento.",
    intro:
      "Quando non esiste un testamento valido, opera la successione legittima. In questa sezione trovi chi eredita, in che misura e quali nodi operativi emergono nei casi più frequenti.",
    sections: [
      {
        title: "Casi più ricorrenti",
        items: [
          "Coniuge e figli",
          "Solo figli o solo coniuge",
          "Presenza di ascendenti o collaterali",
          "Rapporto con donazioni e beni indivisi",
        ],
      },
    ],
    featuredArticles: [
      "come-funziona-successione-legittima",
      "successione-legittima-con-coniuge-e-figli",
    ],
    connectedServices: ["avvocato-successioni", "divisione-ereditaria"],
    faq: [
      {
        question: "Se non c’è testamento ereditano sempre in parti uguali?",
        answer:
          "No. La ripartizione dipende dai chiamati presenti e dalle regole della successione legittima, che variano in base a coniuge, figli, ascendenti e altri parenti.",
      },
    ],
  },
  {
    slug: "successioni-internazionali",
    title: "Successioni internazionali",
    description:
      "Guida alle successioni con elementi esteri: residenza abituale, beni in più Paesi, legge applicabile e documentazione.",
    intro:
      "Quando la successione supera i confini nazionali, la prima domanda non è cosa spetta, ma quale legge si applica e quale autorità è competente.",
    sections: [
      {
        title: "Punti da verificare",
        items: [
          "Residenza abituale del defunto",
          "Eventuale professio iuris",
          "Beni e conti in Stati diversi",
          "Certificazioni, traduzioni e atti esteri",
        ],
      },
    ],
    featuredArticles: ["successioni-internazionali-cosa-cambia"],
    connectedServices: ["successioni-internazionali"],
    faq: [
      {
        question: "Un immobile all’estero segue sempre le regole del Paese in cui si trova?",
        answer:
          "Non basta una risposta astratta: nei casi internazionali vanno coordinati legge applicabile, beni, foro e forme di circolazione degli atti.",
      },
    ],
  },
  {
    slug: "conflitti-tra-coeredi",
    title: "Conflitti tra coeredi",
    description:
      "Contenuti dedicati ai conflitti tra coeredi: strategie, mediazione, divisione, uso dei beni, rendiconti e tutela patrimoniale.",
    intro:
      "Nei conflitti ereditari il problema non è solo giuridico. Servono struttura, prova e capacità di distinguere ciò che è negoziabile da ciò che richiede una tutela più incisiva.",
    sections: [
      {
        title: "Snodi ricorrenti",
        items: [
          "Uso esclusivo di immobili o somme",
          "Mancata trasparenza nella gestione dei beni",
          "Conflitti su testamento o legittima",
          "Mediazione preparata male o troppo tardi",
        ],
      },
    ],
    featuredArticles: ["mediazione-ereditaria-quando-conviene", "divisione-gioielli-eredita"],
    connectedServices: ["divisione-ereditaria", "mediazione-ereditaria", "avvocato-successioni"],
    faq: [
      {
        question: "Conviene tentare subito un accordo?",
        answer:
          "Conviene solo se arriva dopo una ricostruzione seria di beni, quote e punti di attrito. Altrimenti si rischia di perdere tempo e posizioni utili.",
      },
    ],
  },
];

export const articles: ArticleEntry[] = [
  {
    slug: "quota-di-legittima-come-si-calcola",
    title: "Quota di legittima: come si calcola davvero e quali errori evitare",
    excerpt:
      "Guida answer-first alla quota di legittima: chi ne ha diritto, come si ricostruisce la massa e perché le donazioni cambiano il risultato.",
    answerFirst:
      "La quota di legittima non si calcola guardando solo ai beni rimasti al momento della morte. Bisogna ricostruire la massa ereditaria tenendo conto anche di debiti e donazioni rilevanti, per poi distinguere tra quota disponibile e quota riservata ai legittimari.",
    category: "Legittima",
    relatedServiceSlugs: ["lesione-di-legittima", "collazione-e-donazioni"],
    faq: [
      {
        question: "Chi sono i legittimari?",
        answer:
          "Coniuge, figli e, in alcuni casi, ascendenti. Sono i soggetti cui la legge riserva una quota minima del patrimonio.",
      },
      {
        question: "Le donazioni incidono sempre sul calcolo?",
        answer:
          "Incidono quando devono essere considerate nella massa di calcolo. La verifica va fatta caso per caso in base alla natura della liberalità e alla prova disponibile.",
      },
    ],
    sections: [
      {
        title: "Perché il calcolo intuitivo è spesso sbagliato",
        paragraphs: [
          "Molti immaginano la legittima come una semplice frazione del patrimonio residuo. In realtà il calcolo richiede un passaggio tecnico: si ricostruisce la massa di riferimento, si sottraggono i debiti e si tiene conto delle attribuzioni fatte in vita che rilevano nella vicenda successoria.",
          "Questo significa che una successione apparentemente lineare può nascondere una lesione significativa se esistono donazioni immobiliari, bonifici, liberalità indirette o trasferimenti patrimoniali da qualificare correttamente.",
        ],
      },
      {
        title: "Cosa entra nella massa di calcolo",
        paragraphs: [
          "Entrano anzitutto i beni relitti, cioè quelli ancora presenti nel patrimonio al momento della morte, insieme ai debiti ereditari da considerare nel saldo complessivo.",
          "A questi elementi possono aggiungersi donazioni e attribuzioni fatte in vita, quando il loro trattamento è giuridicamente rilevante ai fini della tutela dei legittimari.",
        ],
      },
      {
        title: "Perché la prova è decisiva",
        paragraphs: [
          "Nel contenzioso la differenza non la fa solo la norma, ma la capacità di documentare valori, trasferimenti, titoli e rapporti familiari. Senza prova, anche una lesione teoricamente evidente può diventare difficile da far valere.",
        ],
      },
    ],
  },
  {
    slug: "come-funziona-successione-legittima",
    title: "Successione legittima: come funziona quando manca il testamento",
    excerpt:
      "Chi eredita se non c’è testamento? Una guida chiara alle regole della successione legittima e ai casi più frequenti.",
    answerFirst:
      "La successione legittima si applica quando manca un testamento valido o quando il testamento non disciplina tutto il patrimonio. In quel caso la legge stabilisce chi eredita e in quale misura, in base ai rapporti di parentela esistenti.",
    category: "Successione legittima",
    relatedServiceSlugs: ["avvocato-successioni", "divisione-ereditaria"],
    faq: [
      {
        question: "Se non c’è testamento ereditano sempre i figli?",
        answer:
          "Dipende da chi è presente nella successione. La presenza del coniuge, di più figli o di altri parenti cambia la ripartizione delle quote.",
      },
    ],
    sections: [
      {
        title: "Quando si apre la successione legittima",
        paragraphs: [
          "La successione legittima interviene quando non esiste un testamento valido oppure quando il testamento non dispone dell’intero asse. È quindi una disciplina residuale, ma di frequente applicazione pratica.",
        ],
      },
      {
        title: "Perché non basta conoscere la regola generale",
        paragraphs: [
          "Anche quando la chiamata è definita dalla legge, restano da chiarire beni, quote, eventuali donazioni, debiti e rapporti tra coeredi. È qui che nasce la gran parte dei conflitti successori.",
        ],
      },
    ],
  },
  {
    slug: "successione-legittima-con-coniuge-e-figli",
    title: "Successione legittima con coniuge e figli: quote e casi pratici",
    excerpt:
      "Le quote cambiano in base al numero dei figli e alla composizione della famiglia. Ecco cosa verificare davvero.",
    answerFirst:
      "Nella successione legittima con coniuge e figli le quote non sono sempre identiche: cambiano in base al numero dei figli e alla struttura familiare. Per applicarle bene bisogna però considerare anche patrimonio, eventuali donazioni e successiva divisione dei beni.",
    category: "Successione legittima",
    relatedServiceSlugs: ["avvocato-successioni", "divisione-ereditaria"],
    faq: [
      {
        question: "Coniuge e un figlio ereditano allo stesso modo di coniuge e più figli?",
        answer:
          "No. La legge prevede ripartizioni differenti, e su queste poi incidono i beni concreti da dividere.",
      },
    ],
    sections: [
      {
        title: "Le quote sono solo il punto di partenza",
        paragraphs: [
          "Sapere la percentuale astratta di spettanza non basta. Il vero problema pratico emerge quando il patrimonio è composto da immobili indivisi, denaro, donazioni pregresse o beni che non si ripartiscono automaticamente.",
        ],
      },
    ],
  },
  {
    slug: "divisione-gioielli-eredita",
    title: "Divisione dei gioielli in eredità: prova, valore e criteri pratici",
    excerpt:
      "I gioielli ereditari generano conflitti frequenti perché il problema è spesso provare esistenza, disponibilità e valore prima ancora della divisione.",
    answerFirst:
      "La divisione dei gioielli in eredità non si risolve con una regola astratta sulla quota. Prima bisogna dimostrare quali beni esistono, dove si trovano, chi li detiene e quale valore hanno.",
    category: "Divisione ereditaria",
    relatedServiceSlugs: ["divisione-ereditaria", "mediazione-ereditaria"],
    faq: [
      {
        question: "I gioielli si dividono come il denaro?",
        answer:
          "No. Nei beni mobili di pregio conta molto la prova della consistenza e la scelta del criterio di attribuzione o conguaglio.",
      },
    ],
    sections: [
      {
        title: "Perché i beni mobili sono tra i più difficili da trattare",
        paragraphs: [
          "A differenza degli immobili, i gioielli non hanno un registro pubblico e spesso non esiste un inventario completo. Il conflitto nasce quindi già sulla loro individuazione.",
          "Una buona strategia parte da elenco, fotografie, stime e prova della detenzione attuale, prima ancora di discutere la ripartizione finale.",
        ],
      },
    ],
  },
  {
    slug: "testamento-quando-si-puo-contestare",
    title: "Quando si può contestare un testamento",
    excerpt:
      "Contestare un testamento è possibile solo in presenza di vizi o lesioni giuridicamente rilevanti. Ecco i criteri da usare prima di iniziare una causa.",
    answerFirst:
      "Un testamento si può contestare quando esistono motivi giuridicamente fondati, come vizi formali, incapacità del testatore, autenticità dubbia o lesione della quota di legittima. Il semplice dissenso familiare non basta.",
    category: "Testamento",
    relatedServiceSlugs: ["impugnazione-testamento", "lesione-di-legittima"],
    faq: [
      {
        question: "Se il testamento mi sembra ingiusto posso contestarlo?",
        answer:
          "L’ingiustizia percepita non basta. Serve un motivo giuridico serio e una base probatoria adeguata.",
      },
    ],
    sections: [
      {
        title: "Le quattro verifiche da fare prima di agire",
        paragraphs: [
          "Prima di contestare un testamento occorre verificare tipo di azione, interesse concreto, prove disponibili e impatto patrimoniale dell’eventuale vittoria.",
        ],
      },
    ],
  },
  {
    slug: "conti-correnti-del-de-cuius-cosa-sapere",
    title: "Conti correnti del de cuius: cosa sapere su blocco, prelievi e recupero somme",
    excerpt:
      "Come affrontare conti bloccati, cointestazioni e movimenti sospetti nella successione.",
    answerFirst:
      "I conti correnti del de cuius non sono solo un adempimento bancario. Possono incidere su ricostruzione del patrimonio, divisione, legittima, donazioni indirette e recupero di somme contestate.",
    category: "Patrimonio ereditario",
    relatedServiceSlugs: ["recupero-somme-ereditarie", "collazione-e-donazioni"],
    faq: [
      {
        question: "La banca consegna subito le somme agli eredi?",
        answer:
          "No. Di regola richiede documentazione specifica e la situazione può complicarsi in presenza di conflitti o dubbi sulla titolarità.",
      },
    ],
    sections: [
      {
        title: "Il nodo dei movimenti prima del decesso",
        paragraphs: [
          "Bonifici, prelievi e spostamenti di somme in prossimità del decesso possono diventare decisivi. Per questo serve una ricostruzione cronologica precisa, non impressionistica.",
        ],
      },
    ],
  },
  {
    slug: "mediazione-ereditaria-quando-conviene",
    title: "Mediazione ereditaria: quando conviene davvero",
    excerpt:
      "Una mediazione ereditaria funziona solo se arriva con un dossier preparato. Altrimenti diventa un rinvio costoso.",
    answerFirst:
      "La mediazione ereditaria conviene quando il caso è già stato messo in ordine: patrimonio, quote, beni, donazioni, valori e punti di conflitto devono essere chiari prima dell’incontro.",
    category: "Mediazione",
    relatedServiceSlugs: ["mediazione-ereditaria", "divisione-ereditaria"],
    faq: [
      {
        question: "La mediazione è utile anche quando i rapporti sono ormai rotti?",
        answer:
          "Può esserlo, ma solo se la trattativa si fonda su dati tecnici e non sulla sola disponibilità emotiva delle parti.",
      },
    ],
    sections: [
      {
        title: "La mediazione non sostituisce il lavoro tecnico",
        paragraphs: [
          "Molte mediazioni falliscono perché vengono affrontate come un passaggio formale. In realtà la qualità del risultato dipende dalla preparazione giuridica e patrimoniale fatta prima.",
        ],
      },
    ],
  },
  {
    slug: "eredita-giacente-significato-e-rischi",
    title: "Eredità giacente: significato, nomina del curatore e rischi da conoscere",
    excerpt:
      "Cos’è l’eredità giacente, quando si apre e quali conseguenze pratiche comporta per beni, debiti ed eredi.",
    answerFirst:
      "L’eredità giacente è una fase in cui l’eredità non è ancora stata accettata e necessita di amministrazione. Serve a evitare vuoti di gestione su beni e rapporti patrimoniali del defunto.",
    category: "Eredità giacente",
    relatedServiceSlugs: ["eredita-giacente", "rinuncia-eredita"],
    faq: [
      {
        question: "L’eredità giacente equivale a dire che nessuno erediterà?",
        answer:
          "No. Significa che, in quel momento, l’eredità non è stata ancora accettata e richiede gestione secondo regole specifiche.",
      },
    ],
    sections: [
      {
        title: "Perché la giacenza non è un dettaglio tecnico",
        paragraphs: [
          "La gestione dell’eredità in questa fase incide sulla conservazione dei beni, sui rapporti con i creditori e sulle scelte future dei chiamati. Per questo va impostata correttamente fin dall’inizio.",
        ],
      },
    ],
  },
  {
    slug: "rinuncia-eredita-costi-e-conseguenze",
    title: "Rinuncia all’eredità: costi, conseguenze e errori da evitare",
    excerpt:
      "Quando rinunciare, cosa succede dopo e perché l’accettazione tacita è il rischio più sottovalutato.",
    answerFirst:
      "Rinunciare all’eredità può essere opportuno, ma solo dopo aver verificato beni, debiti e comportamenti già tenuti. Il rischio maggiore è credere di poter rinunciare dopo aver compiuto atti che valgono come accettazione tacita.",
    category: "Rinuncia",
    relatedServiceSlugs: ["rinuncia-eredita", "eredita-giacente"],
    faq: [
      {
        question: "Posso rinunciare se ho già iniziato a usare i beni del defunto?",
        answer:
          "Dipende dal tipo di atti compiuti. Alcuni comportamenti possono essere incompatibili con la rinuncia e vanno valutati con estrema cautela.",
      },
    ],
    sections: [
      {
        title: "La vera domanda non è solo quanto costa",
        paragraphs: [
          "Il costo formale della rinuncia è spesso il tema meno importante. Il punto è se la scelta sia davvero coerente con il patrimonio, i debiti e gli atti già compiuti dal chiamato.",
        ],
      },
    ],
  },
  {
    slug: "successioni-internazionali-cosa-cambia",
    title: "Successioni internazionali: cosa cambia davvero quando c’è un elemento estero",
    excerpt:
      "Residenza, legge applicabile, immobili esteri e documenti: la guida per non affrontare una successione internazionale con schemi solo italiani.",
    answerFirst:
      "Nelle successioni internazionali cambia prima di tutto il metodo: bisogna identificare l’elemento estero rilevante, la legge applicabile e l’autorità competente, prima ancora di discutere quote e ripartizioni.",
    category: "Successioni internazionali",
    relatedServiceSlugs: ["successioni-internazionali"],
    faq: [
      {
        question: "Basta che un erede viva all’estero per parlare di successione internazionale?",
        answer:
          "Non sempre. L’elemento internazionale va qualificato con precisione per capire se incide davvero sulla disciplina applicabile.",
      },
    ],
    sections: [
      {
        title: "Perché la domanda iniziale è quasi sempre sbagliata",
        paragraphs: [
          "Spesso si chiede subito chi eredita e quanto. Nei casi internazionali la prima domanda corretta è un’altra: quale legge governa la successione e con quali effetti sui beni coinvolti.",
        ],
      },
    ],
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "legittima",
    term: "Legittima",
    definition:
      "Quota del patrimonio che la legge riserva a determinati soggetti, detti legittimari, anche contro eventuali disposizioni contrarie del defunto.",
    whyItMatters:
      "È il concetto centrale per valutare esclusioni, squilibri testamentari, donazioni e possibili azioni di riduzione.",
    relatedSlugs: ["lesione-di-legittima", "quota-di-legittima-come-si-calcola"],
  },
  {
    slug: "collazione",
    term: "Collazione",
    definition:
      "Meccanismo con cui determinate donazioni fatte in vita a figli o coniuge vengono considerate nella ripartizione ereditaria.",
    whyItMatters:
      "Incide direttamente sulla divisione e sull’equilibrio tra coeredi quando vi sono attribuzioni patrimoniali pregresse.",
    relatedSlugs: ["collazione-e-donazioni", "quota-di-legittima-come-si-calcola"],
  },
  {
    slug: "eredita-giacente",
    term: "Eredità giacente",
    definition:
      "Situazione in cui l’eredità non è stata ancora accettata e necessita di una gestione dedicata per la tutela del patrimonio.",
    whyItMatters:
      "Aiuta a capire come si amministrano beni, debiti e urgenze quando la posizione degli eredi non è ancora definita.",
    relatedSlugs: ["eredita-giacente", "eredita-giacente-significato-e-rischi"],
  },
  {
    slug: "accettazione-tacita",
    term: "Accettazione tacita",
    definition:
      "Accettazione dell’eredità che deriva da comportamenti incompatibili con la volontà di rinunciare.",
    whyItMatters:
      "È il rischio principale per chi vuole rinunciare ma compie atti dispositivi o gestori sui beni del defunto.",
    relatedSlugs: ["rinuncia-eredita", "rinuncia-eredita-costi-e-conseguenze"],
  },
];

export const aboutPage = {
  title: "Chi siamo",
  intro:
    "Eredità e Successioni riunisce l’esperienza dello Studio Legale Del Monte nelle questioni ereditarie e successorie: testamenti, lesione di legittima, divisioni ereditarie, donazioni, mediazione e patrimoni con profili internazionali.",
  highlights: [
    "Esperienza ultraventennale nella gestione di controversie ereditarie e patrimoniali",
    "Approccio integrato tra consulenza, negoziazione, mediazione e tutela giudiziale",
    "Forte attenzione a patrimoni complessi, beni immobili, somme bancarie e successioni internazionali",
    "Metodo orientato a coniugare rigore tecnico, leggibilità e visione strategica",
  ],
  narrative: [
    "La materia successoria richiede una competenza che non sia solo civilistica in astratto. Ogni pratica intreccia rapporti familiari, prova documentale, patrimonio, tempi e spesso tensioni che durano da anni.",
    "Per questo il sito è stato pensato per offrire orientamento chiaro, informazioni utili e un accesso diretto all’assistenza legale nelle questioni che più spesso generano conflitti tra eredi e famiglie.",
    "Il tono dello Studio resta umano, diretto e misurato, ma con una forte base tecnica. L’obiettivo non è alimentare il conflitto: è chiarire rapidamente il terreno, proteggere la posizione del cliente e scegliere la strategia più efficace.",
  ],
};

export const thematicFaqs: FaqItem[] = [
  {
    question: "Affrontate solo contenziosi già avviati?",
    answer:
      "No. Interveniamo anche prima del conflitto aperto, quando serve impostare correttamente analisi documentale, quote, strategia e contatti con gli altri coeredi.",
  },
  {
    question: "Le pagine del sito sono pensate solo per Roma?",
    answer:
      "No. Lo studio ha sede a Roma, ma segue anche pratiche con rilievo nazionale e questioni successorie che coinvolgono patrimoni, eredi o beni situati in contesti diversi.",
  },
  {
    question: "Posso contattarvi anche per una successione internazionale?",
    answer:
      "Sì. Le successioni internazionali richiedono un inquadramento iniziale particolarmente accurato su legge applicabile, documenti e coordinamento degli attori coinvolti.",
  },
];

export function getServiceLinks(service: ServicePage): LinkItem[] {
  return [
    {
      href: "/contatti",
      label: "Contatta lo studio",
      description: "Richiesta di inquadramento del caso con telefono, WhatsApp, email e form.",
    },
    ...service.relatedArticles.map((slug) => {
      const article = getArticle(slug);

      return {
        href: `/approfondimenti/${slug}`,
        label: article?.title ?? slug,
        description:
          "Approfondimento editoriale collegato a questa area, utile per chiarire il nodo prima dell’azione.",
      };
    }),
  ];
}

export function getServiceSearchThemes(service: ServicePage) {
  return [
    service.shortTitle.toLowerCase(),
    `${service.shortTitle.toLowerCase()} roma`,
    `${service.shortTitle.toLowerCase()} assistenza`,
    `${service.slug.replaceAll("-", " ")}`,
    `${service.slug.replaceAll("-", " ")} avvocato`,
  ];
}

export function getServiceEntities(service: ServicePage) {
  const base = [
    "successione",
    "eredità",
    "coeredi",
    "asse ereditario",
    "testamento",
    "documentazione successoria",
  ];

  return Array.from(new Set([...base, ...service.shortTitle.toLowerCase().split(" ")]));
}

export function getArticleEntities(article: ArticleEntry) {
  return Array.from(
    new Set([
      article.category.toLowerCase(),
      "successioni",
      "eredità",
      "diritto successorio",
      ...article.title
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .split(/\s+/)
        .filter((value) => value.length > 4),
    ]),
  ).slice(0, 10);
}

export function getArticleQuestions(article: ArticleEntry) {
  return [
    `Quando ${article.title.toLowerCase()} diventa un problema legale concreto?`,
    `Quali documenti aiutano a chiarire ${article.category.toLowerCase()}?`,
    `Quali errori peggiorano il contenzioso in materia di ${article.category.toLowerCase()}?`,
  ];
}

export function getHubEntities(hub: HubPage) {
  return Array.from(
    new Set([
      hub.slug.replaceAll("-", " "),
      "successione",
      "eredità",
      ...hub.sections.flatMap((section) => section.items.slice(0, 2)),
    ]),
  );
}

export const primaryNav = [
  { href: "/", label: "Homepage" },
  { href: "/servizi", label: "Servizi" },
  { href: "/hub", label: "Aree" },
  { href: "/approfondimenti", label: "Approfondimenti" },
  { href: "/glossario-successorio", label: "Glossario" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export const navigationGroups = [
  {
    label: "Servizi",
    items: moneyPages.slice(0, 6).map((page) => ({
      href: `/${page.slug}`,
      label: page.shortTitle,
    })),
  },
  {
    label: "Aree",
    items: hubPages.map((page) => ({
      href: `/hub/${page.slug}`,
      label: page.title,
    })),
  },
  {
    label: "Approfondimenti",
    items: articles.slice(0, 6).map((article) => ({
      href: `/approfondimenti/${article.slug}`,
      label: article.title,
    })),
  },
];

export const contactRequestTopics = [
  "Avvocato successioni",
  "Impugnazione testamento",
  "Divisione ereditaria",
  "Lesione di legittima",
  "Collazione e donazioni",
  "Mediazione ereditaria",
  "Successioni internazionali",
  "Rinuncia all’eredità",
  "Recupero somme ereditarie",
  "Altro",
];

export const featuredMoneySlugs = [
  "avvocato-successioni",
  "impugnazione-testamento",
  "divisione-ereditaria",
  "lesione-di-legittima",
  "successioni-internazionali",
  "recupero-somme-ereditarie",
];

export function getService(slug: string) {
  return moneyPages.find((page) => page.slug === slug);
}

export function getHub(slug: string) {
  return hubPages.find((page) => page.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
