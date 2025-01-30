import { createSlice } from "@reduxjs/toolkit";

const toolSlice = createSlice({
    name : 'tool',
    initialState:{
        id: '1', text: 'Scrivere gli obiettivi principali.', details: 'Dettaglio: Pianifica i tuoi obiettivi principali per la settimana.' ,
        id: '2', text: 'Assegnare priorità.', details: 'Dettaglio: Ordina le attività per importanza e urgenza.',
        id: '3', text: 'Rispondere alle email/messaggi importanti.', details: 'Dettaglio: Controlla le email e rispondi alle più urgenti.',
        id: '4', text: 'Fare la spesa o una lista per gli acquisti.', details: 'Dettaglio: Prepara una lista completa degli acquisti necessari.',
    },
    reducers: {
        toolsId : (state, {payload}) => {
            state.id = payload;
        }
    },
        toolsText : (state, {payload}) => {
            state.text = payload;
    }
})

export const {toolsId,toolsText} = toolSlice.actions;

export default toolSlice.reducer;