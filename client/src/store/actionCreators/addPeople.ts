import { IPerson } from "../../data/interface/IPerson";
import { IPersonAction } from "../../data/interface/IPersonAction";
import { ADD_PEOPLE } from "../actions/addPeople";

export function addPeople(people: IPerson[]): IPersonAction {
    return {
        type: ADD_PEOPLE,
        people
    }
}