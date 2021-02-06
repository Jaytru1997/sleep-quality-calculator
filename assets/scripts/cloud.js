const cloudAreas = document.querySelectorAll('.cloud-row');
const cloud = document.createElement('div');
const cloudSizes = ['sm-cloud', 'md-cloud', 'lg-cloud'];

/* For each row of clouds, pick a random number of clouds between minClouds (inclusive) 
    and maxClouds (exclusive). Then, pick the size of each cloud at random and render
    it to the screen.
 */

cloudAreas.forEach((area) => {
  let maxClouds = 6;
  let minClouds = 4;
  let numClouds =
    Math.floor(Math.random() * (maxClouds - minClouds)) + minClouds;
  for (var i = 0; i < numClouds; i++) {
    let currentCloud = cloud.cloneNode(true);
    let sizeNum = Math.floor(Math.random() * cloudSizes.length);
    currentCloud.classList.add(cloudSizes[sizeNum]);
    area.appendChild(currentCloud);
  }
});
