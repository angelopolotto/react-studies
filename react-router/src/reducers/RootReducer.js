const initialState = {
    cards: [
        {id: 1, title: 'Alex', body: 'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.'},
        {id: 2, title: 'Willma', body: 'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.'},
        {id: 3, title: 'John', body: 'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.'}
    ],
    users: []
}

const RootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_CARD':
            let newCard = state.cards.filter(card => action.id !== card.id)
            return {
                ...state,
                cards: newCard
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default RootReducer