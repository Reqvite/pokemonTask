const colors = ["blue", "green", "yellow", "red", "indigo", "pink"];

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return `bg-${randomColor}-200`;
}
