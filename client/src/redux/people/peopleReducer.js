import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON} from './peopleTypes'
import { v4 as uuidv4 } from 'uuid';

//hardcoded data
const initialState = {
    people: [
        {"id":uuidv4(),"name":"დავით","phone_number":"6154702401"},
        {"id":uuidv4(),"name":"სოფო","phone_number":"9216864398"},
        {"id":uuidv4(),"name":"გიორგი","phone_number":"3306433869"},
        {"id":uuidv4(),"name":"მიხეილი","phone_number":"2353907881"},
        {"id":uuidv4(),"name":"ანი","phone_number":"5214234496"},
        {"id":uuidv4(),"name":"ელენე","phone_number":"8094734826"},
    ],
}

const peopleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_PERSON:
                state.people.push(action.payload)
        case EDIT_PERSON:
            return {
                ...state,
                people : state.people.map((person) =>{
                    if(person.id === action.payload.id){
                        return  action.payload
                    }
                    return person;
                })
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