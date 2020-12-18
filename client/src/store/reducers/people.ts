import { IPerson } from "../../data/interface/IPerson";
import { IPersonAction } from "../../data/interface/IPersonAction";
import { Person } from "../../data/Person";
import { ADD_PEOPLE } from "../actions/addPeople";
import { ADD_PERSON } from "../actions/addPerson";
import { REMOVE_PERSON } from "../actions/removePerson";
import { UPDATE_PERSON } from "../actions/updatePerson";

export function peopleReducer(state: Person[] = [], action: IPersonAction) {
    switch(action.type) {
        case ADD_PERSON:
            if (action.person) {
                state.push(new Person(action.person))
            }
            return state
        case ADD_PEOPLE:
            if (action.people) {
                state.push(...(action.people.map(p => new Person(p))))
            }
            return state
        case REMOVE_PERSON:
            if (!action.person) {
                return state
            }
            const item = state.find(per => per.isEqual(action.person as IPerson));
            if (!item) {
                return state;
            }
            return state.splice(state.indexOf(item), 1);
        case UPDATE_PERSON: 
            if (!action.person) {
                return state
            }
            const oldItem = state.find(per => per.isEqual(action.person as IPerson));
            if (!oldItem) {
                return state;
            }
            return state.splice(state.indexOf(oldItem), 1).push(new Person(action.person));
        default: 
            return state;
    }
}
