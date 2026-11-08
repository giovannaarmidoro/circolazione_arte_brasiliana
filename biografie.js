// Biografie degli oggetti, relazioni e media
const BIOGRAFIE = {
 "item01": [
  [
   "1928",
   "Tarsila do Amaral dipinge l'Abaporu e lo regala a Oswald de Andrade per il suo compleanno; Oswald scrive il Manifesto antropofago (secondo il MALBA)."
  ],
  [
   "2003",
   "Donazione di Eduardo F. Costantini al MALBA di Buenos Aires."
  ]
 ],
 "item02": [
  [
   "1928",
   "Tarsila do Amaral dipinge A Lua."
  ],
  [
   "Ingresso al MoMA",
   "Dono di Joan H. Tisch, per scambio (inventario 1.2019)."
  ]
 ],
 "item03": [
  [
   "Anni Cinquanta",
   "Il Segretario generale Trygve Lie chiede agli Stati membri un'opera d'arte che rappresenti la loro cultura."
  ],
  [
   "",
   "Il Brasile commissiona a Candido Portinari un'opera sul tema guerra e pace; l'artista realizza i murali Guerra e Paz."
  ],
  [
   "1957",
   "I murali sono donati all'ONU il 6 settembre."
  ],
  [
   "2015",
   "Reinaugurazione dei murali dopo il restauro."
  ]
 ],
 "item04": [
  [
   "ca. 1937",
   "Di Cavalcanti dipinge l'opera a Parigi."
  ],
  [
   "1939",
   "Lo Stato francese acquista l'opera e la assegna al museo (Achat de l'Etat; Attribution)."
  ]
 ],
 "item05": [
  [
   "2001",
   "Cildo Meireles crea Babel."
  ],
  [
   "2013",
   "La Tate e la D.Daskalopoulos Collection acquistano l'opera congiuntamente, come dono promesso alla Tate."
  ]
 ],
 "item06": [
  [
   "1962",
   "Lygia Clark crea il Bicho."
  ],
  [
   "Prima del 1972",
   "L'opera passa per Ralph Camargo, a São Paulo."
  ],
  [
   "1972",
   "Adolpho Leirner, di São Paulo, acquisisce l'opera."
  ],
  [
   "2005",
   "Il MFAH acquista l'opera, che fa parte della collezione Leirner di arte costruttiva brasiliana."
  ]
 ],
 "item07": [
  [
   "2000",
   "Adriana Varejão crea l'opera."
  ],
  [
   "2026",
   "L'opera è presentata alla Tate dalla Tate Americas Foundation."
  ]
 ],
 "item08": [
  [
   "1928",
   "Pubblicato nella Revista de Antropofagia, n. 1, a maggio, a São Paulo."
  ]
 ],
 "item09": [
  [
   "",
   "Descrizione visiva approfondita di Babel, disponibile sul sito della Tate."
  ]
 ],
 "item10": [
  [
   "",
   "Documenti raccolti dal Progetto Portinari su Google Arts & Culture."
  ]
 ]
};
const RELAZIONI = {"item01": ["item08", "item02"], "item02": ["item08", "item01"], "item03": ["item10"], "item05": ["item09", "item06", "item07"], "item06": ["item05"], "item07": ["item05"], "item08": ["item01", "item02"], "item09": ["item05"], "item10": ["item03"]};
const MEDIA = {"item05": {"titolo": "Art in Focus | Babel by Cildo Meireles | Tate", "url": "https://www.youtube.com/embed/pYlRn64Cj4I"}};
