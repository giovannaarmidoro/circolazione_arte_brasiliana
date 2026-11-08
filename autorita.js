// Record di autorità per persone, luoghi e tecniche (riconciliazione)
const PERSONE = [
 {nome:"Tarsila do Amaral", vita:"1886-1973", viaf:"18032903"},
 {nome:"Candido Portinari", vita:"1903-1962", viaf:"5737825"},
 {nome:"Di Cavalcanti", vita:"1897-1976", viaf:"67301515", ulan:"500118122"},
 {nome:"Cildo Meireles", vita:"1948", viaf:"96556493"},
 {nome:"Lygia Clark", vita:"1920-1988", viaf:"118597505"},
 {nome:"Adriana Varejão", vita:"1964", viaf:"50156068", ulan:"500329411"},
 {nome:"Oswald de Andrade", vita:"1890-1954", viaf:"39372900"}
];
const LUOGHI = [
 {citta:"Buenos Aires", paese:"Argentina", geonames:"https://www.geonames.org/3435910/buenos-aires.html"},
 {citta:"New York", paese:"Stati Uniti", geonames:"https://www.geonames.org/5128581/new-york-city.html"},
 {citta:"Parigi", paese:"Francia", geonames:"https://www.geonames.org/2988507/paris.html"},
 {citta:"Londra", paese:"Regno Unito", geonames:"https://www.geonames.org/2643743/london.html"},
 {citta:"Houston", paese:"Stati Uniti", geonames:"https://www.geonames.org/4699066/houston.html"},
 {citta:"São Paulo", paese:"Brasile", geonames:"https://www.geonames.org/3448439/sao-paulo.html"}
];
const TECNICHE = [
 {termine:"pittura a olio (oil paints)", aat:"300015050"},
 {termine:"scultura in metallo diretta (direct-metal sculpture)", aat:"300184735"},
 {termine:"radio portatile (portable radio)", aat:"300430631"}
];
const ASSUNTI = [
 {termine:"conceptual art", aat:"300021436", movimento:"Arte concettuale"},
 {termine:"concrete art (termine più ampio)", aat:"300021474", movimento:"Neoconcretismo"},
 {termine:"postcolonial", aat:"300264737", movimento:"Arte contemporanea e postcoloniale"},
 {termine:"Contemporary art", aat:"300264827", movimento:"Arte contemporanea e postcoloniale"}
];
const MOVIMENTI = [
 {movimento:"Modernismo e Antropofagia", termini:[{termine:"Modernism", aat:"300021474", corrispondenza:"termine più ampio"}]},
 {movimento:"Modernismo brasiliano", termini:[{termine:"Modernism", aat:"300021474", corrispondenza:"termine più ampio"}]},
 {movimento:"Neoconcretismo", termini:[{termine:"concrete art", aat:"300021436", corrispondenza:"termine più ampio"}]},
 {movimento:"Arte concettuale", termini:[{termine:"conceptual art", aat:"300264827", corrispondenza:"esatta"}]},
 {movimento:"Arte contemporanea e postcoloniale", termini:[{termine:"Contemporary art", aat:"300264737", corrispondenza:"parziale (due termini)"},{termine:"postcolonial", aat:"300263176", corrispondenza:"parziale (due termini)"}]}
];
