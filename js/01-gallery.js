import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");

const openLightbox = (source, alt) => {
  const lightbox = basicLightbox.create(`<img src="${source}" alt="${alt}">`);
  lightbox.show();
};

const images = galleryItems.map((item) => {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                 <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
             </a>
        </div>`;
});

galleryContainer.insertAdjacentHTML("beforeend", images.join(""));

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const image = event.target.closest(".gallery__image");

  if (image) {
    const source = image.dataset.source;
    const alt = image.alt;
    openLightbox(source, alt);
  }
});

