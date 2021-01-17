import { appendListOfElements } from './common';
import { People } from './people'
import { Planets } from './planets'

export const appEventListener = (event) => {
  //🔨 4. verify that tabs are working 🔨
  if (event.target.id === 'people') {
    console.log('people clicked');
  }

  if (event.target.id === 'planets') {
    console.log('planets clicked');
  }

  //🔨 8. render people elements by clicking on people's tab 🔨
  if (event.target.id === 'people') {
    const ppl = [{
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "eye_color": "blue"
    }, {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "eye_color": "yellow"
    }, {
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "eye_color": "red"
    }]
    document.querySelector("main").insertAdjacentHTML("afterbegin", People({"data": ppl}));
  }

  //🔨 8. render planets elements by clicking on planets' tab🔨
  if (event.target.id === 'planets') {
    const planet = [{
      "name": "Tatooine",
      "climate": "arid",
      "population": "200000"
    }, {
      "name": "Alderaan",
      "climate": "temperate",
      "population": "2000000000"
    }, {
      "name": "Yavin IV",
      "climate": "temperate, tropical",
      "population": "1000"
    }]
    document.querySelector("main").insertAdjacentHTML("afterbegin", Planets({"data": planet}));
  }
  //🔨 11. render planet info element by clicking on show planet info button🔨
};
