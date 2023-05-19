export default function getHealths(pers) {
  if (pers.health > 50) {
    return 'healthy';
  }
  if (pers.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
