const todoReducer = (state = {}, action) => {
    switch (action?.type) {
        case 'add':
            return [...state, action?.payload];
        case 'delete':
            return state.filter((s) => s.id !== action.payload ) ;
        case 'toggle':
            return state.map((s) => s.id === action.payload ? {...s, done: !s.done} : s);
        case 'toggle-old':
            return state.map((s) => {
                if (s.id === action.payload){
                    return {
                        ...s,
                        done: !s.done         
                    }
                } 

                return s;
            }) ;
        default:
            return state;
    }
}
export default todoReducer;