import { IPersonsAction, PersonsAction } from "../actions/persons";
import { IPerson } from "../data/person";

export const reducer = (store: IPerson[] = [], action: IPersonsAction) => {
    switch(action.type){
        default:
            return store;
        case PersonsAction.Add:
            if (!action.person) return store;
            if (store.includes(action.person)) return store;

            store.push(action.person);
            return store;
        case PersonsAction.AddAll:
            if (!action.persons) return store;
            action.persons.forEach((person) => {
                if (!store.includes(person)) {
                    store.push(person);
                }
            })
            return store;
    
        case PersonsAction.Remove:
            if (!action.person) return store;
            const index = store.indexOf(action.person);
            return store.filter((_, i) => i !== index);
        case PersonsAction.RemoveAll:
            if (!action.persons) return store;
            const indexes: number[] = [];
            action.persons.forEach((person) => {
                const index = store.indexOf(person);
                if (index < 0) return;
                indexes.push(index);
            });
        return store.filter((_, i) => !indexes.includes(i));
        case PersonsAction.Filter: 
            if (!action.filter) return store;
            return store.filter((person) => {
                if (!action.filter?.person.name) return true;
                return person.name.indexOf(action.filter?.person.name) === 0
            })      
    }
}