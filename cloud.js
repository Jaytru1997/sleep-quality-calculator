const cloudAreas = document.querySelectorAll('.cloud-row');
const cloud = document.createElement('div');
cloud.classList.add('cloud-container');

const cloudSegment = document.createElement('div');
cloudSegment.classList.add('cloud-segment');

const leftSegment = cloudSegment.cloneNode();
leftSegment.classList.add('left-cloud');
cloud.appendChild(leftSegment);

const rightSegment = cloudSegment.cloneNode();
rightSegment.classList.add('right-cloud');
cloud.appendChild(rightSegment);

const centerSegment = cloudSegment.cloneNode();
centerSegment.classList.add('center-cloud');
cloud.appendChild(centerSegment);

const cloudSizes = ['sm-cloud', 'md-cloud', 'lg-cloud'];

/* For each row of clouds, pick a random number of clouds between minClouds (inclusive) 
    and maxClouds (exclusive). Then, pick the size of each cloud at random and render
    it to the screen.
 */

cloudAreas.forEach((area) => {
  let maxClouds = 8;
  let minClouds = 5;
  let numClouds =
    Math.floor(Math.random() * (maxClouds - minClouds)) + minClouds;
  for (var i = 0; i < numClouds; i++) {
    let currentCloud = cloud.cloneNode(true);
    let sizeNum = Math.floor(Math.random() * cloudSizes.length);
    console.log(sizeNum);
    currentCloud.classList.add(cloudSizes[sizeNum]);
    area.appendChild(currentCloud);
  }
});
