import { appendListOfElements } from './common';
import { People } from './people'
import { Planets } from './planets'

export const appEventListener = (event) => {
  //🔨 4. verify that tabs are working 🔨
  if (event.target.id === 'people') {
    console.log('people clicked');
    document.querySelector("main").insertAdjacentHTML("afterbegin", People({data: []}));
  }

  if (event.target.id === 'planets') {
    console.log('planets clicked');
    document.querySelector("main").insertAdjacentHTML("afterbegin", Planets({data: []}));
  }
  //🔨 8. render people elements by clicking on people's tab 🔨
  //🔨 8. render planets elements by clicking on planets' tab🔨
  //🔨 11. render planet info element by clicking on show planet info button🔨
};
