const Colors = [
  {
    name: "Red",
    hex: "#FF6666",
    description: "Rojo moderado, brillante pero no tan intenso.",
  },
  {
    name: "Pink",
    hex: "#FF99C8",
    description: "Rosa brillante, pero menos saturado.",
  },
  {
    name: "Orange",
    hex: "#FFA07A",
    description: "Naranja suave, vibrante pero no agresivo.",
  },
  {
    name: "Yellow",
    hex: "#FFDF00",
    description: "Amarillo claro, luminoso pero no excesivo.",
  },
  {
    name: "Green",
    hex: "#66CC66",
    description: "Verde vibrante pero no demasiado intenso.",
  },
  {
    name: "Blue",
    hex: "#6699FF",
    description: "Azul moderado, vivo pero no demasiado oscuro.",
  },
  {
    name: "Purple",
    hex: "#9966CC",
    description: "Púrpura suave, menos intenso pero aún vivo.",
  },
  {
    name: "Teal",
    hex: "#66CCCC",
    description: "Teal moderado, un verde azulado más suave.",
  },
  {
    name: "Lavender",
    hex: "#C299FF",
    description: "Lavanda claro, vibrante pero no excesivo.",
  },
  {
    name: "Peach",
    hex: "#FFB380",
    description: "Durazno moderado, cálido y suave.",
  },
  {
    name: "brown",
    hex: "#FFB380",
    description: "Durazno moderado, cálido y suave.",
  },
  {
    name: "Mint",
    hex: "#66FFCC",
    description: "Menta suave, refrescante y vibrante pero no agresivo.",
  },
  {
    name: "Coral",
    hex: "#FF9966",
    description: "Coral suave, cálido pero no excesivamente fuerte.",
  },
  {
    name: "Beige",
    hex: "#FFF2CC",
    description: "Beige claro, con un toque vibrante.",
  },
  {
    name: "Aqua",
    hex: "#80FFFF",
    description: "Aqua moderado, un tono suave pero brillante.",
  },
  {
    name: "Grey",
    hex: "#B3B3B3",
    description: "Gris suave y ligeramente apagado.",
  },
];

export const nameToColor = (name: string) => {
  const color = Colors.find((e) => e.name.toLowerCase() === name.toLowerCase());
  if (!color) return "#000000";
  return color.hex;
};

export const pokemonTypeColors: { [key: string]: string } = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
