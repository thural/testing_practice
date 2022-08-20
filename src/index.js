import _ from 'lodash';// Lodash now imported by this script

function component() {
  const element = document.createElement('div');

  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
