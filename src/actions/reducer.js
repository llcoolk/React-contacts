const initialState = {
    list: [
        {
            id: 1,
            name: 'Abigale Boyd',
            email: 'aboyd@hotmail.com',
            phone: '123-555-1212'
        },
        {
            id: 2,
            name: 'Bryan Chang',
            email: 'bchang@gmail.com',
            phone: '234-555-1212'
        },
        {
            id: 3,
            name: 'Crystal Dunn',
            email: 'cdunn@hotmail.com',
            phone: '345-555-1212'
        },
        {
            id: 4,
            name: 'Donna Edwards',
            email: 'dedwards@gmail.com',
            phone: '456-555-1212'
        },
        {
            id: 5,
            name: 'Eddie Folkner',
            email: 'eflkner@aol.com',
            phone: '567-555-1212'
        },
        {
            id: 6,
            name: 'Frank Gretzsky',
            email: 'fgretzsky@gmail.com',
            phone: '678-555-1212'
        },
        {
            id: 7,
            name: 'Gale Holland',
            email: 'gholland@aol.com',
            phone: '789-555-1212'
        },
    ],
    name: '',
    email: '',
    phone: '',
    redirectTo: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'CHANGE_ITEM':
            const listItem = state.list.filter(item => item.id === parseInt(action.id, 10));
            return {
                ...state,
                name: listItem[0] ? listItem[0].name : '',
                email: listItem[0] ? listItem[0].email : '',
                phone: listItem[0] ? listItem[0].phone : ''
            }
        case 'CAPTURE_INPUT':
            console.log(['NAME'], action.payload.name)
            console.log(['VALUE'], action.payload.value)

            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'UPDATE':
            const updatedList = state.list.map(item => {
                if (item.id === parseInt(action.id, 10)) {
                    item.name = state.name;
                    item.email = state.email;
                    item.phone = state.phone;
                }
                return item;
            })
            return {
                ...state,
                list: updatedList
            }

        case 'DELETE':
            const newList = state.list.filter(item => item.id !== parseInt(action.id, 10));
            return {
                ...state,
                list: newList,
                name: newList[0] ? newList[0].name : '',
                email: newList[0] ? newList[0].email : '',
                phone: newList[0] ? newList[0].phone : '',
                redirectTo: newList.length > 0 ? `/${newList[0].id}` : '/1'
            }

        case 'ADD':
            let id = state.list.length > 0 ? state.list[state.list.length - 1].id + 1 : id = 1;
            const newContact = { id: id, name: state.name, email: state.email, phone: state.phone }
            return {
                ...state,
                list: state.list.concat(newContact)
            }

        default:
            return state;
    }
}

export default reducer;