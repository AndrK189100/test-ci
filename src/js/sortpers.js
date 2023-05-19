export default function sortPers(pers) {
  return pers.sort((first, second) => second.health - first.health);
}
