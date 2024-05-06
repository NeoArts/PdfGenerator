const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export function getSpanishFormattedDate() {
    // Create a new Date object with the current date
    const today = new Date();
    
    // Get day, month, and year
    const day = today.getDate();
    const year = today.getFullYear();
    // Get the Spanish name of the current month
    const monthName = monthNames[today.getMonth()];
    
    // Construct the formatted date string
    return `${day} de ${monthName} de ${year}`;
}

export function getLastMonth() {
    // Create a new Date object with the current date
    const today = new Date();
    // Get the Spanish name of the previous month
    const monthName = monthNames[(today.getMonth() - 1 + 12) % 12];
    return monthName;
}