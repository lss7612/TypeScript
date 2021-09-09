import IPerson from './person/IPerson';
import Person, { makePerson } from './person/Person';

const testMakePersion = (): void => {
  let jane: IPerson = makePerson('Jane');
  let jack: IPerson = makePerson('jack');
  console.log(jane, jack);
};

testMakePersion();
