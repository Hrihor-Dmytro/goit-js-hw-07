import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createPhotoCards(el) {
  return el
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>`;
    })
    .join("");
}
const cardEl = createPhotoCards(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardEl);
galleryEl.addEventListener("click", noPreventDefault);

function noPreventDefault(evt) {
  evt.preventDefault();
}

const litebox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});

console.log(litebox);
