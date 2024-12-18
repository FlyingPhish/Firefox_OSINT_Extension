let scanConfig = 'multi';
let siteConfig = 'exact';
let dorkModifier = 'noLimit';

// Function to toggle dark mode and save the preference
document.getElementById('darkModeContainer').addEventListener('change', function () {
  const isDarkMode = document.getElementById('darkMode').checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('dark-mode', isDarkMode);
});

// Check and apply the saved theme preference
if (localStorage.getItem('dark-mode') === 'true') {
  document.getElementById('darkMode').checked = true;
  document.body.classList.add('dark-mode');
}

//OVERPASS TAB STUFF
document.getElementById('overpassTabButton').addEventListener('click', function() {
  const overpassAPIContent = document.getElementById('overpassAPI');
  const overpassTabButton = document.getElementById('overpassTabButton');
  
  if (overpassAPIContent.style.display === 'none' || overpassAPIContent.style.display === '') {
    overpassAPIContent.style.display = 'block';
    overpassTabButton.classList.add('active');
  } else {
    overpassAPIContent.style.display = 'none';
    overpassTabButton.classList.remove('active');
  }
});

// OVERPASS STUFF
document.getElementById('openOverpass').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://overpass-turbo.eu/' }); 
});

document.getElementById('toggleButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({command: "toggle"}, function(response) {
    updateStatus(response.tracking);
    updateDomainList(response.domains);
  });
});

document.getElementById('clearListButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({command: "clearDomains"}, function(response) {
    updateDomainList([]);
  });
});

document.getElementById('addDomainsButton').addEventListener('click', function() {
  let domainInput = document.getElementById('addDomains').value;
  if (domainInput) {
    let newDomains = domainInput.split('\n'); // splitting by newline character
    chrome.runtime.sendMessage({command: "addDomains", newDomains: newDomains}, function(response) {
      // after domains are added, display the notification text
      let notification = document.getElementById('notification');
      notification.textContent = 'Domains added successfully!';
      notification.style.color = '#54d719'; // Setting the text color
      notification.style.fontSize = '15px'; // Setting the font size
      // remove the notification text after 3 seconds
      setTimeout(() => notification.textContent = '', 3000);
    });
  }
});

document.querySelectorAll('input[name="scanConfig"]').forEach((elem) => {
  elem.addEventListener('change', function() {
    scanConfig = this.value;
    console.log(scanConfig)
  });
});

document.querySelectorAll('input[name="siteConfig"]').forEach((elem) => {
  elem.addEventListener('change', function() {
    siteConfig = this.value;
  });
});

document.querySelectorAll('input[name="dorkModifier"]').forEach((elem) => {
  elem.addEventListener('change', function() {
    dorkModifier = this.value;
  });
});

document.getElementById('launchScan').addEventListener('click', function() {
  let scanType = document.getElementById('scanType').value;
  let message = {command: "scan", scanType: scanType, scanConfig: scanConfig, siteConfig: siteConfig, dorkModifier: dorkModifier};
  chrome.runtime.sendMessage(message, function(response) {
  });
});

document.getElementById('testCaptcha').addEventListener('click', function() {
  chrome.runtime.sendMessage({command: "testCaptcha"}, function(response) {
  });
});

function updateStatus(tracking) {
  let statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Site Tracking: ' + (tracking ? 'ON' : 'OFF');
  statusDiv.style.color = tracking ? '#54d719' : 'black';
}

function updateDomainList(domains) {
  let domainListDiv = document.getElementsByClassName('domainList')[0];
  domainListDiv.innerHTML = '';

  for (let i = 0; i < domains.length; i++) {
    let domainDiv = document.createElement('div'); // A container for each domain
    domainDiv.className = 'domainItem'; // Using the class name for styling

    let textNode = document.createElement('span'); // Changed to 'span' to align with buttons
    textNode.textContent = domains[i];

    let editButton = document.createElement('button');
    editButton.className = 'editButton';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      textNode.contentEditable = true;
      textNode.focus();
    });

    let saveButton = document.createElement('button');
    saveButton.className = 'saveButton';
    saveButton.textContent = 'Save';
    saveButton.style.display = 'none';
    saveButton.addEventListener('click', function() {
      textNode.contentEditable = false;
      saveButton.style.display = 'none';

      // Defining oldDomain and newDomain
      let oldDomain = domains[i]; // assuming i is the index of the domain being edited
      let newDomain = textNode.textContent.trim();

      chrome.runtime.sendMessage({command: "editDomain", oldDomain: oldDomain, newDomain: newDomain}, response => {
        updateDomainList(response.domains); // Pass the domains array to the function
      });
    });
    
    editButton.addEventListener('click', function() {
      saveButton.style.display = 'inline';
    });

    let deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() { // Add this event listener here
      chrome.runtime.sendMessage({command: "deleteDomain", domain: domains[i]}, response => {
        // Refresh the domain list after deletion
        chrome.runtime.sendMessage({command: "status"}, function(response) {
          updateStatus(response.tracking);
          updateDomainList(response.domains);
        });
      });
    });

    domainDiv.appendChild(textNode);
    domainDiv.appendChild(editButton);
    domainDiv.appendChild(saveButton);
    domainDiv.appendChild(deleteButton);
    domainListDiv.appendChild(domainDiv);
  }
}

chrome.runtime.sendMessage({command: "status"}, function(response) {
  updateStatus(response.tracking);
  updateDomainList(response.domains);
});