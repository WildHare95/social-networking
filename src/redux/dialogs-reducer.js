const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState ={
    messageData: [
        {id: 1, mes: "Hi"},
        {id: 2, mes: "One"},
        {id: 3, mes: "Two"},
        {id: 4, mes: "Three"},
        {id: 5, mes: "Four"},
        {id: 6, mes: "Five"}
    ],
    dialogData: [
        {id: 1, name: 'Vasya1'},
        {id: 2, name: 'Vasya2'},
        {id: 3, name: 'Vasya3'},
        {id: 4, name: 'Vasya4'},
        {id: 5, name: 'Vasya6'}
    ]
}

const dialogReducer = (state = initialState, action) =>{
    switch (action.type){
        case SEND_MESSAGE:
        {
            let body = action.newMessageBody
            return  {
                ...state,
                messageData: [...state.messageData,{id: 7, mes: body}]
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return{
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogReducer