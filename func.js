 // Function to open the modal with relevant content
 function openModal(windowID) {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");
  // Display the modal
  modal.style.display = "block";
  // Populate the modal content based on the window title
  fetch('data_' + windowID  + '.txt')
    .then(response => response.text())
    .then(data => {
      var lines = data.split('\n');
      modalContent.innerHTML ='ul';
      lines.forEach(line => {
        modalContent.innerHTML += '<li>'+ line +'</li>';
      });
      modalContent,innerHTML += '</ul>';
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


