export function formatDate(dateString?: string) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString();
}

export function formatTimeWithUpperAMPM(dateString?: string) {
  if (!dateString) return null;

  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours % 12 || 12;
  const formattedMinute = minutes.toString().padStart(2, '0');

  return `${formattedHour}:${formattedMinute} ${ampm}`;
}
