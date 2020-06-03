/* global document, chrome */
/* eslint no-restricted-syntax: 0 */
/* eslint no-console:0 */
const page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(buttonColors) {
  for (const item of buttonColors) {
    const button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', () => {
      chrome.storage.sync.set({ color: item }, () => { console.log(`color is ${item}`); });
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);
