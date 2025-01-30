import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        { id: 1, text: "Comprare il latte", details: "Prendere il latte intero al supermercato", completed: false },
        { id: 2, text: "Studiare React", details: "Ripassare useState e useEffect", completed: false },
        { id: 3, text: "Allenamento", details: "Fare esercizi con gli elastici per 30 minuti", completed: true },
        { id: 4, text: "Preparare la cena", details: "Cucinare la pizza fatta in casa", completed: false },
        { id: 5, text: "Registrare un video", details: "Montare e caricare il video per TikTok", completed: true }
      ]
}

const toolSlice = createSlice({
    name : 'tool',
    initialState:initialState,
    reducers: {
        toolsId : (state, {payload}) => {
            state.id = payload;
        },
        toolsText : (state, {payload}) => {
            state.text = payload;
        },
        toolsComplete : (state , {payload}) => {
            const toDo = state.todos.find((todo) => todo.id === payload)
            toDo.completed = true;
        }

    },
})

export const {toolsId,toolsText,toolsComplete} = toolSlice.actions;

export default toolSlice.reducer;