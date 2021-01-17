const mainContentArea = document.querySelector("main");

// ⚠️ Planet Info Element ⚠️
// <div className="planet-info">
//     inner content
// </div>

const fetchEndpoint = (url) => fetch(url).then((res) => res.json());

// Receives a Component object to be rendered and a url from which it fetches the Components data
// Perform a fetch on the given url and when successful, it creates a Component from the returned data
// and appends it to the mainContentArea
// Component can be either a Person or a Planet
const addEntities = (Component, url) => {
   const onSuccess = (res) => {
        const results = res.results;
       // ✅ 7a. print results to the console ✅
       console.log(res)
       // 🤷🏼‍‍‍️ 8. but how can we extract results outside of a promise? 🤷🏾
       // innetHtml clears previous html!
       mainContentArea.innerHTML = Component({data: res.results})
   }

  //🔨 7. fetch and use onSuccess to retrieve 🤖 star wars 🤖 data based on the provided url (`https://swapi.dev/api/${url}/`)🔨
  fetchEndpoint(`https://swapi.dev/api/${url}/`).then(onSuccess)

};

const addPlanetInfo = (Component, planetUrl) => {
  fetchEndpoint(planetUrl.replace(/http/g, "https"))
    .then((planet) => {
        // ✅ 11a. print results to the console ✅

        // 🤷🏼‍‍‍️ 11b. but how can we extract planet info outside of a promise? 🤷🏾
    })
    .catch(() =>  { /* ✅ throw an alert in case of error her ✅ */ });
};

export default {
  addEntities,
  addPlanetInfo
};
