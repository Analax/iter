// Add a smooth scroll effect when clicking on the VR tour link
const vrTourLink = document.querySelector('.vr-tour a');
vrTourLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  const contentSection = document.querySelector('.content');
  contentSection.scrollIntoView({ behavior: 'smooth' });
});
