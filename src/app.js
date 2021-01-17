
// the arg of require was hardcoded in the src attribute of the html part returned from App()
// but the image is not rendered properly. This fix was required
// link: https://github.com/parcel-bundler/parcel/issues/3058
const spaceImgUrl = require('/src/assets/space.svg')

// 🆘 Lack of Reconciliation 🆘 what changes have been made in the dom? 🤷‍

const App = ({ tabs }) => {

  // Do you remember event bubbling ? 🎈🎈
  // 🔨 2. attach and event listener to element with id 🔸app🔸 and use appEventListener every time a users clicks on it🔨
  document.getElementById("app")
  
  // ✅ 3. get a list of Button elements from tabs✅
  // const buttonsList = ???;
  return `<h1 class="title">SWAPP</h1>
    <img width="100%" height="500" src="${spaceImgUrl}" alt="space"/> 
    <nav> ♻️ use appendListOfElements helper function to display planetList ♻️ </nav>`;
};

// ⚠️ Did you forget something? ⚠️
export default App;