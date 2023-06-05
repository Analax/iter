// Add a smooth scroll effect when clicking on the VR tour link
const vrTourLink = document.querySelector('.vr-tour a');
vrTourLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  const contentSection = document.querySelector('.content');
  contentSection.scrollIntoView({ behavior: 'smooth' });
});
// Get the elements
const vrTourTab = document.getElementById('vr-tour-link');
const vrTourModal = document.getElementById('vr-tour-modal');
const vrTourVideo = document.getElementById('vr-tour-video');
const modalCloseBtn = document.getElementsByClassName('close')[0];

// JavaScript functionality
const vrTour= document.getElementById('vr-tour-link');
const vrTourVideo2= document.getElementById('vr-tour-video-player');

vrTourLink.addEventListener('click', function(event) {
  event.preventDefault();
  vrTourVideo.style.display = 'block';
  vrTourVideo.play();
});
