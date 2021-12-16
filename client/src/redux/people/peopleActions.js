import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON} from "./peopleTypes";

export const AddPerson = (person) => {
    return {
        type: ADD_PERSON,
        payload:person
    }
}
export const EditPerson = (person) => {
    return {
        type: EDIT_PERSON,
        payload:person,
    }
}
export const RemovePerson = (id) => {
    return {
        type: REMOVE_PERSON,
        payload: id
    }
}