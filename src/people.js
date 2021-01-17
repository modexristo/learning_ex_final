import { appendListOfElements } from './common';

// the arg of require was hardcoded in the src attribute of the html part returned from App()
// but the image is not rendered properly. This fix was required
// link: https://github.com/parcel-bundler/parcel/issues/3058
const profileImgUrl = require('/src/assets/profile.svg')

// 🔨6. build a function to retrieve each person 🔨
// ⚠️ Person Element ⚠️
// <article className="card">
//     <img src="/src/assets/profile.svg" alt="person-image"/>
//     <h3>Hero Name: </h2>
//     <div>Body: <strong style="margin-right: 10px;">height</strong>cm | <strong>mass</strong> kg/ft</div>
//     <div className="eyes_color">Eye Color: <div className="eye_color--container" style="background: "></div>
//     </div>
//     <div>Homeworld: <button id="open-planet" ✅ 10. add data attribute to transfer info with click event ✅> Show planet info </button></div>
// </article>
export const Person = ({ name, height, mass, eye_color }) => { 
  return `<article className="card">
      <img src=${profileImgUrl} alt="person-image"/>
      <h3>Hero Name: ${name}</h2>
      <div>Body: <strong style="margin-right: 10px;">${height}</strong>cm | <strong>${mass}</strong> kg/ft</div>
      <div className="eyes_color">Eye Color: <div className="eye_color--container" style="background: ${eye_color}"> </div>
      </div>
      <div>Homeworld: <button id="open-planet" ✅ 10. add data attribute to transfer info with click event ✅> Show planet info </button></div>
  </article>`
};

export const People = ({ data }) => {
  // ✅ 9. get a list of planet elements ✅
  // const peopleList = ???;
  // const peopleList = data.map(person => Person(person))

  // this also works!
  // all map needs is a callback, Person is one, so its acceptable
  // in Person, we desctructure what map passes in
  const peopleList = data.map(Person)

  // ✅ 5. render People content ✅
  // 9a. use appendListOfElements helper function to display planetList ♻️ 
  return `
     <h2>People List</h2>
     ${appendListOfElements(peopleList)}
  `;
};
