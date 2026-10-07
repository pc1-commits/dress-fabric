// ====== EDIT THESE ======
const SHOP_PHONE = "918584042649"; // WhatsApp number with country code, no +
const CATEGORIES = ["All", "Party Wear", "Wedding", "Casual", "Ethnic", "Kids", "Gowns"];

// Photos are from Unsplash (free to use). To use your own photo, set image: "images/yourfile.jpg"
const PRODUCTS = [
  { id: 1, name: "Brown Sleeveless Party Dress", cat: "Party Wear", price: 1899, mrp: 2499, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1610372081132-3dfbb6db5aea?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 2, name: "Blue Festive Party Dress", cat: "Party Wear", price: 1699, mrp: 2299, sizes: "S, M, L, XL", image: "https://images.unsplash.com/photo-1607624333929-adc8b1d81586?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 3, name: "Sparkle Sequin Party Dress", cat: "Party Wear", price: 2999, mrp: 3999, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1772615071677-6441340349fd?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 4, name: "Classic Black Party Dress", cat: "Party Wear", price: 2199, mrp: 2899, sizes: "S, M, L, XL", image: "https://images.unsplash.com/photo-1770460620287-1fb3b3e1a392?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 5, name: "Classic White Bridal Gown", cat: "Wedding", price: 18999, mrp: 24999, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 6, name: "Sweetheart Neckline Bridal Gown", cat: "Wedding", price: 15999, mrp: 20999, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1549488497-94b52bddac5d?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 7, name: "Lace Wedding Gown", cat: "Wedding", price: 21999, mrp: 27999, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1521467752200-3bccf80f16ed?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 8, name: "Designer Bridal Dress", cat: "Wedding", price: 16999, mrp: 22999, sizes: "M, L", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 9, name: "Seaside Summer Dress", cat: "Casual", price: 1199, mrp: 1599, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 10, name: "Yellow Red Floral Dress", cat: "Casual", price: 999, mrp: 1399, sizes: "S, M, L, XL", image: "https://images.unsplash.com/photo-1602303894456-398ce544d90b?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 11, name: "Blue White Sleeveless Dress", cat: "Casual", price: 1099, mrp: 1499, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1613966570650-add3cf83aa83?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 12, name: "Yellow Sunshine Dress", cat: "Casual", price: 949, mrp: 1299, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1609695813802-3c443be34359?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 13, name: "White Red Floral Dress", cat: "Casual", price: 1049, mrp: 1449, sizes: "S, M, L, XL", image: "https://images.unsplash.com/photo-1502868354157-ec2edd2a1651?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 14, name: "Red Silk Saree", cat: "Ethnic", price: 3499, mrp: 4499, sizes: "Free size", image: "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 15, name: "Green Traditional Saree", cat: "Ethnic", price: 3999, mrp: 5199, sizes: "Free size", image: "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 16, name: "Pink Orange Saree", cat: "Ethnic", price: 3299, mrp: 4299, sizes: "Free size", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 17, name: "Purple Gold Saree", cat: "Ethnic", price: 4499, mrp: 5999, sizes: "Free size", image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 18, name: "Red Brown Saree", cat: "Ethnic", price: 2999, mrp: 3999, sizes: "Free size", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 19, name: "Girls Party Dress", cat: "Kids", price: 899, mrp: 1299, sizes: "3-10 yrs", image: "https://images.unsplash.com/photo-1578897367107-2828e351c8a8?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 20, name: "Girls Red Full Sleeve Frock", cat: "Kids", price: 799, mrp: 1099, sizes: "2-8 yrs", image: "https://images.unsplash.com/photo-1578897366846-358bb1c2412a?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 21, name: "Girls Yellow Frock", cat: "Kids", price: 749, mrp: 999, sizes: "2-8 yrs", image: "https://images.unsplash.com/photo-1611003967145-fb3960072424?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 22, name: "Girls White Flower Dress", cat: "Kids", price: 849, mrp: 1199, sizes: "2-8 yrs", image: "https://images.unsplash.com/photo-1620774760711-caa4c94d683a?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 23, name: "Kids White Teal Dress", cat: "Kids", price: 799, mrp: 1149, sizes: "3-10 yrs", image: "https://images.unsplash.com/photo-1599624427857-461fd60c23e5?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 24, name: "Kids Princess White Dress", cat: "Kids", price: 1199, mrp: 1699, sizes: "3-10 yrs", image: "https://images.unsplash.com/photo-1653686933006-249b035f9ee0?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 25, name: "Maroon Evening Gown", cat: "Gowns", price: 5999, mrp: 7999, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 26, name: "Black Evening Gown", cat: "Gowns", price: 5499, mrp: 7299, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 27, name: "Black Sleeveless Gown", cat: "Gowns", price: 4999, mrp: 6499, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1623580674393-edf6eb7090f8?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 28, name: "Blue Floral Gown", cat: "Gowns", price: 5299, mrp: 6999, sizes: "S, M, L", image: "https://images.unsplash.com/photo-1617258856138-402b60da4e2a?w=500&h=650&q=70&auto=format&fit=crop" },
  { id: 29, name: "Light Blue Ball Gown", cat: "Gowns", price: 8999, mrp: 11999, sizes: "M, L", image: "https://images.unsplash.com/photo-1763959952596-1512ebea8eb1?w=500&h=650&q=70&auto=format&fit=crop" },
];
// ========================

const $ = id => document.getElementById(id);
let activeCat = "All";
let cart = JSON.parse(localStorage.getItem("cart") || "{}");

const inr = n => "₹" + n.toLocaleString("en-IN");

function renderCats() {
  $("categories").innerHTML = CATEGORIES.map(c =>
    `<button class="${c === activeCat ? "active" : ""}" data-c="${c}">${c}</button>`).join("");
}

function renderGrid() {
  const q = $("search").value.trim().toLowerCase();
  let list = PRODUCTS.filter(p =>
    (activeCat === "All" || p.cat === activeCat) && p.name.toLowerCase().includes(q));
  const s = $("sort").value;
  if (s === "low") list.sort((a, b) => a.price - b.price);
  if (s === "high") list.sort((a, b) => b.price - a.price);
  $("catTitle").textContent = activeCat === "All" ? "All Dresses" : activeCat;
  $("empty").hidden = list.length > 0;
  $("grid").innerHTML = list.map(p => `
    <div class="card">
      <div class="img" style="background-color:#f3e5ea;${p.image ? `background-image:url('${p.image}')` : ""}">${p.image ? "" : "👗"}<span class="off">${Math.round((1 - p.price / p.mrp) * 100)}% OFF</span></div>
      <div class="info">
        <span class="tag">${p.cat}</span>
        <b>${p.name}</b>
        <div class="price">${inr(p.price)}<s>${inr(p.mrp)}</s></div>
        <div class="sizes">Sizes: ${p.sizes}</div>
        <button class="btn" data-add="${p.id}">Add to Cart</button>
      </div>
    </div>`).join("");
}

function renderCart() {
  const items = Object.entries(cart).map(([id, qty]) => ({ p: PRODUCTS.find(x => x.id == id), qty })).filter(i => i.p);
  $("cartCount").textContent = items.reduce((a, i) => a + i.qty, 0);
  $("cartItems").innerHTML = items.length ? items.map(i => `
    <div class="ci"><span>${i.p.name}<br><small>${inr(i.p.price)}</small></span>
    <span><button data-dec="${i.p.id}">−</button> ${i.qty} <button data-add="${i.p.id}">+</button></span></div>`).join("")
    : "<p>Your cart is empty.</p>";
  $("cartTotal").textContent = inr(items.reduce((a, i) => a + i.p.price * i.qty, 0));
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("click", e => {
  const t = e.target;
  if (t.dataset.c) { activeCat = t.dataset.c; renderCats(); renderGrid(); }
  if (t.dataset.add) { cart[t.dataset.add] = (cart[t.dataset.add] || 0) + 1; renderCart(); }
  if (t.dataset.dec) { if (--cart[t.dataset.dec] <= 0) delete cart[t.dataset.dec]; renderCart(); }
});
$("search").oninput = renderGrid;
$("sort").onchange = renderGrid;
$("cartBtn").onclick = () => $("cart").hidden = false;
$("closeCart").onclick = () => $("cart").hidden = true;
$("order").onclick = () => {
  const items = Object.entries(cart).map(([id, q]) => ({ p: PRODUCTS.find(x => x.id == id), q })).filter(i => i.p);
  if (!items.length) return alert("Cart is empty");
  const total = items.reduce((a, i) => a + i.p.price * i.q, 0);
  const msg = "Hello, I want to order:\n" + items.map(i => `- ${i.p.name} x${i.q} = ${inr(i.p.price * i.q)}`).join("\n") + `\nTotal: ${inr(total)}`;
  window.open(`https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
};

const WA_LINK = `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent("Hello Dress Fabric, I have an enquiry about your dresses.")}`;
$("waTop").href = WA_LINK; $("waFloat").href = WA_LINK;
$("phoneShow").textContent = "+" + SHOP_PHONE;
renderCats(); renderGrid(); renderCart();
