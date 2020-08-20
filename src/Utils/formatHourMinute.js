export default function formatHourMinute(durationInSeconds) {
  const given_seconds = durationInSeconds;
  let timeString;

  let dateObj = new Date(given_seconds * 1000);
  let hours = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();

  return (timeString =
    (hours > 0 ? hours.toString().padStart(1, "0") + " hr " : "") +
    minutes.toString().padStart(1, "0") +
    " min.");
}
