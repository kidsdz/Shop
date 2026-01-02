const products = [
  {
    name: "طقم بناتي",
    price: 3200,
    img: "https://i.postimg.cc/NF92x3Yx/30b07ad19be64867458379a15e35d7aa.jpg"
  },
  {
    name: "طقم أولادي",
    price: 2900,
    img: "https://i.postimg.cc/SNpj6r7W/d437971da6cada48994fc1d80e5d7650.jpg"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.price} دج</p>
    <button>اطلب الآن</button>
  `;
  container.appendChild(div);
});