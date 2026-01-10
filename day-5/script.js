const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");
const ACCESS_KEY = "t9VeOy9iGC4WaPfw-BOBc2g2IzGZi5GjZSO77pVqV_0";
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

async function fetchImages() {
  loading.style.display = "block";
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    data.forEach(photo => {
      const img = document.createElement("img");
      img.dataset.src = photo.urls.small; 
      observer.observe(img);
      gallery.appendChild(img);
    });
  } catch (error) {
    console.error("Error fetching images", error);
  }
  loading.style.display = "none";
}
fetchImages();
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 200
  ) {
    fetchImages();
  }
});
