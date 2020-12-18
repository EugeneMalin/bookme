import { IPerson } from "../../data/interface/IPerson";
import { IPersonAction } from "../../data/interface/IPersonAction";
import { ADD_PERSON } from "../actions/addPerson";

export function addPerson(person: IPerson): IPersonAction {
    return {
        type: ADD_PERSON,
        person
    }
}
