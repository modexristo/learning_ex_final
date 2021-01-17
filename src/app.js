import { appEventListener } from './eventListeners'
import { Button, appendListOfElements } from './common'

// the arg of require was hardcoded in the src attribute of the html part returned from App()
// but the image is not rendered properly. This fix was required
// link: https://github.com/parcel-bundler/parcel/issues/3058
const spaceImgUrl = require('/src/assets/space.svg')

// 🆘 Lack of Reconciliation 🆘 what changes have been made in the dom? 🤷‍

const App = ({ tabs }) => {

  // Do you remember event bubbling ? 🎈🎈
  // 🔨 2. attach and event listener to element with id 🔸app🔸 and use appEventListener every time a users clicks on it🔨
  document.getElementById("app").addEventListener('click', appEventListener)
  
  // ✅ 3. get a list of Button elements from tabs✅
  // const buttonsList = ???;
  // maps the list of tab names, to Button elements
  const buttonsList = tabs.map(el => Button({name: el}))

  // within <nav> use appendListOfElements helper function to display planetList
  // if not, and you provide the buttonsList directly, then the comma will be rendered too!
  // after that, add the peoples and planets data
  return `<h1 class="title">SWAPP</h1>
    <img width="100%" height="500" src="${spaceImgUrl}" alt="space"/> 
    <nav>${appendListOfElements(buttonsList)}</nav>`;
};

// ⚠️ Did you forget something? ⚠️
export default App;