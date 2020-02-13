import {observable} from 'mobx';
import {FlatList} from 'react-native';



class QuestionStore {

  questions = [
    {title:"First Question", author: "Yahya",vote:1, description: "Description 1", createdAt: new Date("2019-10-17")},
    {title:"Second Question", author: "Diki",vote:3, description: "Description 2", createdAt: new Date("2019-10-18")},
    {title:"Third Question", author: "Budi",vote:2, description: "Description 3", createdAt: new Date("2019-10-19")},
    {title:"Fourth Question", author: "Jimmy",vote:1, description: "Description 4", createdAt: new Date("2019-10-20")},
    {title:"5 Question", author: "Doni",vote:3, description: "Description 5", createdAt: new Date("2019-10-21")},
  ];

  @observable questions;

  constructor() {
    this.questions = cloneWithRows(this.questions);
    
  }
  

}

const questionStore = new QuestionStore();
export default questionStore;