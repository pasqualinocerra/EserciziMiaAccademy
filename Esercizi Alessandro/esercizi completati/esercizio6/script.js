const buttons = document.querySelectorAll('.tab');
const texts = [
    'I faraglioni si ergevano maestosi nel mare, come sentinelle silenziose che osservavano il passaggio del tempo. La luce del tramonto dipingeva il cielo di sfumature dorate e rosate, riflettendosi sulle acque che diventavano di un colore incantevole. Un piccolo gruppo di persone passeggiava lungo la costa, godendosi il panorama e scambiandosi sorrisi, consapevoli che quel momento sarebbe rimasto impresso nella memoria per sempre. La tranquillità del luogo sembrava un rifugio ideale da ogni preoccupazione quotidiana.',
    'Il cielo sopra la città era sereno, senza nubi che potessero alterare la calma dell orizzonte. La luce del sole filtrava tra gli alberi, creando ombre morbide sul terreno. Le strade, quasi deserte, sembravano invitate a essere percorse lentamente, godendo di ogni angolo e ogni dettaglio che il paesaggio offriva. Ogni passo sembrava cadere in un ritmo naturale, come se il tempo stesso avesse rallentato, permettendo di apprezzare la bellezza di un momento tranquillo.',
    'Nel parco, il suono delle foglie mosse dal vento accompagnava il respiro profondo di chi vi si trovava. Alcuni bambini giocavano lontano, ridendo e urlando, mentre gli adulti si rilassavano sulle panchine, sorseggiando una bevanda calda. L aria fresca della mattina aveva un profumo di terra e natura, che rendeva piacevole ogni istante trascorso all aria aperta. La serenità del luogo invitava al silenzio, ma non c era nessuna paura del silenzio stesso, anzi, lo si accoglieva con piacere.',
    'Un piccolo fiume scorreva lentamente, le acque riflettevano il cielo azzurro e il verde degli alberi circostanti. Le sponde, ricoperte di muschio e piante acquatiche, sembravano protette dal mondo esterno. Alcuni uccelli cinguettavano tra i rami, creando una melodia che si intrecciava con il rumore dell acqua. Lintero paesaggio dava l impressione di un luogo intatto, dove il ritmo della natura non veniva interrotto da rumori di vita quotidiana, ma si mescolava perfettamente con l esistenza di chi vi passava accanto.'
];

buttons.forEach((tab, index) => {

    tab.addEventListener('click', () => {
        let testo = document.querySelector('.testo');
        testo.innerHTML = texts[index]; 
        tab.style.boxShadow = '0px 20px 15px 3px white';
        buttons.forEach((div)=> {
            if (div.id !== tab.id) {
                div.style.boxShadow = 'none';
                testo.style.backgroundColor = 'white';
            }            
        })
            
    });
});
