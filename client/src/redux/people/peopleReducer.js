import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON} from './peopleTypes'


const initialState = {
    people: [
        {"id":"1","name":"Annemarie","phone_number":"615-470-2401"},
        {"id":"2","name":"Harvey","phone_number":"921-686-4398"},
        {"id":"3","name":"Sunny","phone_number":"330-643-3869"},
        {"id":"4","name":"Goldarina","phone_number":"235-390-7881"},
        {"id":"5","name":"Ramon","phone_number":"521-423-4496"},
        {"id":"6","name":"Peder","phone_number":"809-473-4826"},
    ],
}

const peopleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_PERSON:
            return {
                people:state.people.push(action.payload)
            }
        case EDIT_PERSON:
            return {
                ...state,
                people: state.people.filter((person) => person.id !== action.payload)
            }
        case REMOVE_PERSON:
            return {
                ...state,
                people: state.people.filter((person) => person.id !== action.payload)
            }
        default:
            return { ...state };
    }
} 

export default peopleReducer