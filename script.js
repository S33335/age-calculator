document.getElementById('calculate').addEventListener('click', function() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (!dob || isNaN(dob.getTime())) {
        document.getElementById('result').textContent = "Please select a valid date.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
});

// Register the service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker Registered:', registration);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}
