document.addEventListener("DOMContentLoaded", function() {
    // Fetch and load the header component
    fetch('components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation for the header:', error);
        });

    // Fetch and load the footer component
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation for the footer:', error);
        });
});