import { IPerson } from "../../data/interface/IPerson";
import { IPersonAction } from "../../data/interface/IPersonAction";
import { UPDATE_PERSON } from "../actions/updatePerson";

export function updatePerson(person: IPerson): IPersonAction {
    return {
        type: UPDATE_PERSON,
        person
    }
}