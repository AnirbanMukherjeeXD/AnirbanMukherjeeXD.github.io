var photos = [
    "photos/set1/DSC_0013 copy.jpg",
    "photos/set1/DSC_0058 copy.jpg",
    "photos/set1/DSC_0063 copy.jpg",
    "photos/set1/DSC_0067 copy.jpg",
	"photos/set1/DSC_0270 copy.jpg"
];

var gallery = document.getElementById("gallery");

for (var i = 0; i < photos.length; i++) {
    var img = document.createElement("img");
    img.src = photos[i];
    img.className = "gallery-img";
    img.alt = "Photo " + (i + 1);

    gallery.appendChild(img);
}
