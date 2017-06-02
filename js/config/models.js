import Realm from 'realm';

const Fave = {
  name: 'Fave',
  PrimaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
}

const realm = new Realm({ schema:[Fave] });
console.log('the path is: ', realm.path);

export const queryFaves = () => {
  let faveIds = realm.objects('Fave').map((fave) => fave.id);
  return faveIds;
};

export const createFave = (faveId) => {
  //WRAP IN realm.write
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: new Date})
  })
};

export const deleteFave = (faveId) => {
  //WRAP IN realm.write
  let fave = realm.objects('Fave').filtered('id == $0', faveId)
  realm.write(() => {
    realm.delete(fave);
  })
};
//CRUD OPERATIONS!!!!!!!!!!
export default realm;
