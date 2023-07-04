export default function cleanSet(set, startString) {
  const valuesArray = Array.from(set);
  const filteredArray = valuesArray.filter((value) => value.startsWith(startString));
  const cleanedString = filteredArray.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
}
