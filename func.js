// Function to open the modal with relevant content
function openModal(windowID) {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent"); // Assuming there's only one element with this class
  // Display the modal
  modal.style.display = "block";
  // Populate the modal content based on the window title
  fetch('data_' + windowID  + '.txt')
    .then(response => response.text())
    .then(text => {
      var lines = text.split('\n');
      modalContent.innerHTML = '';
      lines.forEach(line => {
        modalContent.innerHTML += '<li>'+ line +'</li>';
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      modalContent.innerText = "Error fetching data";
  });
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}


