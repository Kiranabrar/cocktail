import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchcocktails = createAsyncThunk(
    "cocktails/fetchcocktails",
    async () => {
    return fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(
            (res) => res.json()
        )
})

export const fetchSingleCocktails = createAsyncThunk(
    "cocktails/fetchSingleCocktails",
     async ({id}) => {
    return fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(
            (res) => res.json()
        );
});
const cocktailSlice = createSlice({
    name:"cocktails",
    initialState:{
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[],
    },
    extraReducers:{
        [fetchcocktails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchcocktails.fulfilled]:(state,action)=> {
            state.loading=false;
            state.cocktails=action.payload.drinks;
        },
        [fetchcocktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [fetchSingleCocktails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchSingleCocktails.fulfilled]:(state,action)=> {
            state.loading=false;
            state.cocktail=action.payload.drinks;
        },
        [fetchSingleCocktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
}
)
export default cocktailSlice.reducer