export default function colourHealth(params) {
  return params.sort((a, b) => {
    if (a.health < b.health) return 1;
    return 0;
  });
}
