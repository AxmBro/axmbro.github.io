import { globalCache } from "./constants.js";

async function loadImageHandler(imageID, imageElement) {
  //initially set to nothing, just to render image and fill space in css world :S
  if (!(imageElement.src)) {
    imageElement.src = "";
  }

  if (imageID === "null") return

  //if imageID isnt in cache, fetch it
  if (globalCache.images[imageID] === undefined) {
    const response = await fetch(`/assets/${imageID}.png`)
    const imageToBlob = await response.blob()
    const imageObjectURL = URL.createObjectURL(imageToBlob);

    imageElement.src = imageObjectURL
    globalCache.images[imageID] = imageObjectURL
  }
  //but if imageID is in cache, load it
  else {
    const cachedBlobURL = globalCache.images[imageID]
    imageElement.src = cachedBlobURL
  }
}

function setImages() {
  const images = document.querySelectorAll(".loadImage")
  images.forEach((imageElement) => {
    const imageID = imageElement.getAttribute("data-value")
    loadImageHandler(imageID, imageElement)
  });
}

export function initImageLoader() {
  setImages()
}

function setImagesSpecial(elementID) {
  const images = document.querySelectorAll(`.${elementID}`)
  images.forEach((imageElement) => {
    const imageID = imageElement.getAttribute("data-value")
    loadImageHandler(imageID, imageElement)
  });
}

export function initImageLoaderSpecial(elementID) {
  setImagesSpecial(elementID)
}