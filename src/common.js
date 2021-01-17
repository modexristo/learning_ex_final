// Returns a button html element, with the id attribute set to a name that's given as argument
export const Button = ({ name = "" }) => {
  return `
   <button id="${name}">${name.toUpperCase()}</button>`;
};

// makes a list of elements html friendly, by removing the , delimiter
// makes it easy to render the elements of the list without also rendering the commas that separates those element
export const appendListOfElements = (elementsList) =>
  `${elementsList}`.replace(/,/g, "");
