function findMissingLetter(array) {
  let AlphabetArr = Array.from(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  );
  let AlphabetSlice = AlphabetArr.slice(
    AlphabetArr.indexOf(array[0]),
    AlphabetArr.indexOf(array[array.length - 1]) + 1
  );
  let messingLetter = AlphabetSlice.find((e, i) => e !== array[i]);
  return messingLetter;
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
