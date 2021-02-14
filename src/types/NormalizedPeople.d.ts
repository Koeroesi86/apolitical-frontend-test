import Person from './Person';
export default interface NormalizedPeople {
    people: {
        [k: string]: Person;
    };
    urls: string[];
}
