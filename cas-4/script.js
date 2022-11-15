function getInits(vrednost) {
  let initals = "";
  for (let i = 0; i < vrednost.length; i++) {
    if (vrednost[i] === " ") {
      initals += vrednost[i + 1];
      while (!(vrednost[i] === " ")) {
        i++;
      }
    }
  }
  return initals;
}
console.log(getInits(" John Ron Ron Talki"));
