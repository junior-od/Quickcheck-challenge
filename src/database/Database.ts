import {openDatabase} from 'react-native-sqlite-storage';

export const database: any = openDatabase({
  name: 'Dbmine',
  location: 'default',
});
