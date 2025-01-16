// Calculate years since a given date
function calculateYearsSince(startDateString) {
    const startDate = new Date(startDateString); // Parse the start date
    console.log('startDate', startDateString, startDate)
    const now = new Date(); // Current date
    let years = now.getFullYear() - startDate.getFullYear();
    console.log('years', years)

    // Adjust if today hasn't reached the start month/day of the start date
    if (
        now.getMonth() < startDate.getMonth() ||
        (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())
    ) {
        years -= 1;
    }

    console.log('years', years)
    return years;
}

export default function (startDateString, selector) {
  // Replace placeholders with the calculated years
  document.addEventListener('DOMContentLoaded', function () {
      const placeholders = document.querySelectorAll(selector);
      placeholders.forEach(function (placeholder) {
          const years = calculateYearsSince(startDateString);
          placeholder.textContent = years;
      });
  });
}

