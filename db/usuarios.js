export let dBusuarios = [
  {
    id: 1,
    user: "Guillo",
    pass: "2024",
    admin: true,
  },
];


JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));


