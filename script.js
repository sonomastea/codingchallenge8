document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const registrationDetails = document.getElementById('registrationDetails');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        registrationDetails.innerHTML = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const eventDate = form.eventDate.value;
        const preferences = Array.from(form.querySelectorAll('input[name="preference"]:checked'))
                                  .map(checkbox => checkbox.value)
                                  .join(', ');

        if (!name || !email || !eventDate || !preferences) {
            alert('Please fill out all fields.');
            return;
        }

        const details = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Event Date:</strong> ${eventDate}<br>
            <strong>Preferences:</strong> ${preferences}
        `;

        registrationDetails.innerHTML = details;

        form.reset();
    });
});