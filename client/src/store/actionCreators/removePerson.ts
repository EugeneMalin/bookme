import { IPerson } from "../../data/interface/IPerson";
import { IPersonAction } from "../../data/interface/IPersonAction";
import { REMOVE_PERSON } from "../actions/removePerson";

export function removePerson(person: IPerson): IPersonAction {
    return {
        type: REMOVE_PERSON,
        person
    }
}
