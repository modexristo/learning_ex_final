import { appendListOfElements } from './common';

// the arg of require was hardcoded in the src attribute of the html part returned from App()
// but the image is not rendered properly. This fix was required
// link: https://github.com/parcel-bundler/parcel/issues/3058
const planetImgUrl = require('/src/assets/profile.svg')

// 🔨6. build a function to retrieve each planet 🔨
// ⚠️ Planet Element ⚠️
// <article className="card">
//     <img src="/src/assets/planet.svg" alt="planet"/>
//     <h3>Planet Name: </h2>
//     <div>Climate: <strong style="margin-right: 10px;"></strong></div>
//     <div>Population: </div>
// </article>
export const Planet = ({ name, climate, population }) => { 
  return `<article className="card">
    <img src=${planetImgUrl} alt="planet"/>
    <h3>Planet Name: ${name}</h2>
    <div>Climate: <strong style="margin-right: 10px;">${climate}</strong></div>
    <div>Population: ${population}</div>
</article>`
};

export const Planets = ({ data }) => {
  // ✅ 9. get a list of planet elements ✅
  // const planetList = ???;

  // ✅ 5. render Planets content ✅
  return `
     <h2>Planets List</h2>
     ♻️ 9a. use appendListOfElements helper function to display planetList ♻️
  `;
};
