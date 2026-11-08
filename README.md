# Arte brasiliana in circolazione

Sito di Digital Humanities su opere di artisti brasiliani conservate in musei fuori dal Brasile, a partire dall'idea di biografia degli oggetti (Kopytoff; Gosden e Marshall; Vogel; Clifford).

## File principali
- `index.html`: pagina iniziale, con carosello, descrizione del progetto, mappa dei musei e metadati Dublin Core nell'head
- `catalogo.html`: catalogo con elenco alfabetico per artista, ricerca libera e filtro per movimento
- `item.html`: scheda analitica di un oggetto (`item.html?id=item01` ... `item10`)
- `dati.html`: tabella dei dati con i record di autorità
- `style.css`: stile grafico
- `data/`: dati in CSV, JSON e JavaScript (`opere.csv`, `opere.json`, `opere.js`, `biografie.js`, `autorita.js`)
- `xml/`: record Dublin Core (`item01.xml` ... `item10.xml`) e testo TEI del Manifesto antropofago
- `img/`: immagini
