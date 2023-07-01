let myMap = new Map();
myMap.set('div', 'class');
myMap.set('style', 'margin');
myMap.set('js', 6);

for (let [keys, values] of myMap) {
  console.log(`${keys}, ${values}`)
}
