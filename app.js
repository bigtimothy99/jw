(() => {
  const gallery = document.getElementById("gallery");
  const navLinks = document.querySelectorAll(".nav-link");

  const CATEGORY_LABELS = {
    audio: "AUDIO",
    tech: "TECH",
    life: "LIFESTYLE",
    food: "FOOD"
  };

  function render(category) {
    const items = category === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === category);

    gallery.innerHTML = "";

    if (!items.length) {
      gallery.innerHTML = '<div class="empty-state">NO ITEMS YET</div>';
      return;
    }

    items.forEach((p, i) => {
      const el = document.createElement("article");
      el.className = "item";
      el.style.animationDelay = `${i * 0.1}s`;

      el.innerHTML = `
        <div class="item-image-wrap">
          <img class="item-image" src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="item-overlay">
          <span class="item-category">${CATEGORY_LABELS[p.category] || p.category}</span>
          <h2 class="item-name">${p.name}</h2>
          <span class="item-price">\u20A9 ${p.price}</span>
          <a class="item-cta" href="${p.link}" target="_blank" rel="noopener noreferrer nofollow">
            SHOP NOW
          </a>
        </div>
      `;

      gallery.appendChild(el);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      render(link.dataset.category);
    });
  });

  render("all");
})();