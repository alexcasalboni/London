module.exports = [
  {
    key: "simon-wardley",
    bio: ``,
    photoUrl: "simon-wardley.jpg",
    title: "What the fuss about serverless",
    speaker: "Simon Wardley",
    abstract: ``,
    workshop: false
  },
  {
    key: "paolo-ferretti",
    bio: ``,
    photoUrl: "paolo-ferretti.jpg",
    title: "Microservizi serverless estensibili, segmentabili e scalabili",
    speaker: "Paolo Ferretti",
    abstract: `In questo talk parleremo di come abbiamo sviluppato una infrastruttura a microservizi interamente serverless con una particolarità: il sistema deve interagire con un database legacy on premises. Vedremo anche come lo abbiamo esteso per renderlo adatto ad interagire con qualsiasi tipo di servizio esterno.
Con questi mattoni fondamentali e questo vincoli abbiamo rilasciato una applicazione solida e sicura per fare test di routing su reti GSM, con la possibilità di scalare da 0 a un milione di test senza sovraccaricare il database on-premises e senza richiedere un intervento manuale per lo scaling dell'infrastruttura.
Condividendo questa esperienza, analizzeremo l’architettura e l’organizzazione del nostro stack per poter gestire velocemente il deploy delle risorse. Parleremo inoltre delle difficoltà incontrate e di come le abbiamo risolte.
    `,
    workshop: false
  },
  {
    key: "max-gallo",
    bio: ``,
    photoUrl: "max-gallo.jpg",
    title: "Micro-frontends on the edge: una storia di persone, migrazioni e serverless",
    speaker: "Max Gallo",
    abstract: `In DAZN abbiamo recentemente migrato il nostro Frontend da un Monolita a Micro-frontend. Lo abbiamo fatto su scala globale, gradualmente e senza downtime.
    L'uso di AWS Lambda @ Edge function ha consentito a più di cento sviluppatori coinvolti nella migrazione di lavorare indipendentemente e di rilasciare seguendo le best practise di blue/green e canary deployment.
    Usare la CDN come componente attiva nella architettura di un servizio offre molte opportunità che fino a qualche anno fa ci sembravano impensabili, ma che ora stanno diventando sempre di più indispensabili e diffuse.
    `,
    workshop: false
  },
  {
    key: "tommaso-doninelli",
    bio: ``,
    photoUrl: "tommaso-doninelli.jpg",
    title: `Come abbiamo migrato da “on-premise” a serverless senza cambiare una riga di codice`,
    speaker: "Tommaso Doninelli",
    abstract: `I vantaggi di standardizzare con JSON-RPC i microservices.
    Come integrate una Lambda JSON-RPC come backend di un HTTP API.
    `,
    workshop: false
  },
  {
    key: "mariano-calandra",
    bio: ``,
    photoUrl: "mariano-calandra.jpg",
    title: "Possiamo ancora fidarci dei nostri unit test?",
    speaker: "Mariano Calandra",
    abstract: `Un vantaggio del paradigma FaaS è la possibilità di immaginare un sistema come cooperazione di funzioni indipendenti, coordinate da contratti ben definiti: romperne anche solo uno potrebbe compromettere l'intero sistema, oltre a minarne l'agilità di evoluzione. Basteranno degli unit test a salvarci?`,
    workshop: false
  },
  {
    key: "matteo-moroni",
    bio: ``,
    photoUrl: "matteo-moroni.jpg",
    title: "Infrastruttura serverless auto-evolutiva con Python",
    speaker: "Matteo Moroni",
    abstract: `Come comportarsi in quelle situazioni nelle quali un applicativo richieda di modificare dinamicamente la propria infrastruttura AWS sulla base di operazioni eseguite dai propri utenti?
    Proponiamo una soluzione di Infrastructure as Code per la gestione dinamica di CloudFormation tramite Python e Troposphere, una libreria che consente una più semplice creazione di template AWS CloudFormation in JSON utilizzando codice Python per descrivere le risorse AWS.`,
    workshop: false
  },
  {
    key: "ferdinando-gorga",
    bio: ``,
    photoUrl: "ferdinando-gorga.jpg",
    title: "Sui compensi del programmatore: una dissertazione sul valore del software ed il suo TCO (Total Cost of Ownership) di esercizio",
    speaker: "Ferdinando Gorga",
    abstract: `La tecnologia condiziona il valore del lavoro e può renderlo più evidente?
    Le Serverless Functions si!
    Ogni prodotto che acquistiamo ha un prezzo che in generale viene calcolato a partire dal suo costo di produzione e commercializzazione.
    Anche il software ha un costo di realizzazione. Sia esso un software verticale fatto su specifiche del cliente sia esso un prodotto commerciale.
    Una domanda che ci poniamo in questo speech riguarda la relazione tra il costo di realizzazione/gestione di sistemi software e i compensi dovuti a chi il software lo realizza.
    C'è sempre stata un'area grigia nel correlare i costi di gestione del software e il contributo di un programmatore che abbia realizzato una qualche parte del sistema.
    Si, perché in genere chi può sapere quanto costa esercire un sistema nelle sue parti? Quanto costa al proprietario di - mettiamo - un social, un singolo click che un utente fa per mettere il like ad un post o ad una foto?
    Conoscere il costo del sistema nelle sue parti più semplici rende possibile una serie di attività di ingegneria economica e porta alla corretta valutazione del lavoro dei programmatori.
    Il segreto per ottenere finalmente tutto questo è il ricorso massivo alle Serverless Function in Cloud.
    `,
    workshop: false
  },
  {
    key: "luca-maraschi",
    bio: ``,
    photoUrl: "luca-maraschi.jpg",
    title: "Serverless Side Rendering alla conquista del Web di scala planetaria",
    speaker: "Luca Maraschi",
    abstract: `Dai principi di Single Page Applications ai concetti di Search Engine Optimization tramite l’analisi delle tecniche di Server Side Rendering nella ricerca di progettare un’architettura di scala planetaria basata su micro-frontends e su tecnologie serverless e functions distribuite “at the edge”.
    `,
    workshop: false
  },
  {
    key: "danilo-poccia",
    bio: ``,
    photoUrl: "danilo-poccia.jpg",
    title: "La gestione dei dati in un ambiente serverless",
    speaker: "Danilo Poccia",
    abstract: ``,
    workshop: false
  }
];