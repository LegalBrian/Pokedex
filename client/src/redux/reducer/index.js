const inicialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    detail: []
};

const rootReducer = (state = inicialState, action) => {
    const allPokemons = state.allPokemons;
    switch(action.type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        case "GET_TYPES":
            return{
                ...state,
                types: action.payload
            }
        case "FILTER_BY_TYPE":        
            const typeFiltered = action.payload === "all" ? allPokemons : allPokemons.filter(el => el.types.find(el => el === action.payload));
            return{
                ...state,
                pokemons: typeFiltered,
            }
        case "FILTER_CREATED":
            const createdFilter = action.payload === "created" ? allPokemons.filter(el => el.createdInDb) : allPokemons.filter(el => !el.createdInDb);
            return{
                ...state,
                pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
            }
        case "ORDER_BY":
            const sorted = action.payload === "ascendantName" ? state.pokemons.sort(function(a,b){
                if (a.name > b.name){
                    return 1
                }
                if (b.name > a.name){
                    return -1
                }
                return 0;
            }) : action.payload === "descendantName" ? state.pokemons.sort(function(a,b){
                if (a.name > b.name){
                    return -1
                }
                if (b.name > a.name){
                    return 1
                }
                return 0
            }) :  action.payload === "descendantAttack" ? state.pokemons.sort(function(a,b){
                if (a.attack > b.attack){
                    return 1
                }
                if (b.attack > a.attack){
                    return -1
                }
                return 0;
            }) :  action.payload === "ascendantAttack" ? state.pokemons.sort(function(a,b){
                if (a.attack > b.attack){
                    return -1
                }
                if (b.attack > a.attack){
                    return 1
                }
                return 0
            }) : action.payload === "ascendantId" ? state.pokemons.sort(function(a,b){
                if (a.id > b.id){
                    return 1
                }
                if (b.id > a.id){
                    return -1
                }
                return 0;
            }) : action.payload === "descendantId" ? state.pokemons.sort(function(a,b){
                if (a.id > b.id){
                    return -1
                }
                if (b.id > a.id){
                    return 1
                }
                return 0
            }) : 0
            return {
                ...state,
                pokemons: sorted
            }
        case "GET_NAME_POKEMON":
            return {
                ...state,
                pokemons: action.payload,
            }
        case "POST_POKEMON":
            return {
                ...state,
            }
        case "GET_DETAILS":
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return state;
    }
};

export default rootReducer;