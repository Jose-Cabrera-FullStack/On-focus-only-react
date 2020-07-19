export default function formatHourMinute(durationInSeconds) { 
    const given_seconds = durationInSeconds; 
    let timeString

    let dateObj = new Date(given_seconds * 1000); 
    let hours = dateObj.getUTCHours(); 
    let minutes = dateObj.getUTCMinutes(); 
    let seconds = dateObj.getSeconds(); 

    return (
        timeString = hours.toString().padStart(1, '0') 
        + " horas " + minutes.toString().padStart(2, '0') 
        + " minutos."
        ) 
} 