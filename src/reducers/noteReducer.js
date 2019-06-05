const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            console.log(state)
            return [
                ...state,
                {
                    title: action.title, 
                    body: action.body, 
                    id: action.id,
                    color: action.color
                }
            ]

        case 'DELETE_NOTE':
            return state.filter( note => note.id !== action.id)

        case 'EDIT_NOTE':
            return state.map( note => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        body: action.body,
                        color: action.color
                    }    
                } else {
                    return note
                }
            }) 

        default: 
            return state
    }
}

export default noteReducer