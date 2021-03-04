const cloudAreas = document.querySelectorAll('.cloud-row');
const cloud = document.createElement('div');
const cloudSizes = ['sm-cloud', 'md-cloud', 'lg-cloud'];

// mobileMaxWidth and tabletsMaxWidth set in pixels. Number of pixels chosen to accommodate iOS device returns on calling window.innerWidth, which are larger than their physical size
const mobileMaxWidth = 846;
const tabletsMaxWidth = 1024;
var userScreenWidth = window.innerWidth;

var maxClouds;
var minClouds;

if (userScreenWidth <= mobileMaxWidth) {
  // set to mobile
  maxClouds = 3;
  minClouds = 2;
} else if (userScreenWidth <= tabletsMaxWidth) {
  // set to tablet
  maxClouds = 4;
  minClouds = 2;
} else {
  // set to laptop
  maxClouds = 6;
  minClouds = 4;
}

/* For each row of clouds, pick a random number of clouds between minClouds (inclusive) 
    and maxClouds (exclusive). Then, pick the size of each cloud at random and render
    it to the screen.
 */

cloudAreas.forEach((area) => {
  let numClouds =
    Math.floor(Math.random() * (maxClouds - minClouds)) + minClouds;
  for (var i = 0; i < numClouds; i++) {
    let currentCloud = cloud.cloneNode(true);
    let sizeNum = Math.floor(Math.random() * cloudSizes.length);
    currentCloud.classList.add(cloudSizes[sizeNum]);
    area.appendChild(currentCloud);
  }
});
