import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON} from "./peopleTypes";

export const AddPerson = () => {
    return {
        type: ADD_PERSON,
    }
}
export const EditPerson = () => {
    return {
        type: EDIT_PERSON,
    }
}
export const RemovePerson = () => {
    return {
        type: REMOVE_PERSON,
    }
}