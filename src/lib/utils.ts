/**
 * Get embed version to url youtube
 * @param url
 * @returns  new url or null
 */
export const convertToEmbed = (
  url: string,
  startTime: number = 0
): string | null => {
  const regex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  if (match) {
    const videoId = match[4];
    return `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1`;
  }

  return null; // Si el enlace no es válido
};

/**
 * Get how much time has passed since startDate date in spanish
 * @param startDate
 * @returns  string
 */
export const getTimeAgo = (startDate: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - startDate.getTime()) / 1000
  );
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} segundos`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutos`;
  } else if (diffInHours < 24) {
    return `${diffInHours} horas`;
  } else {
    return `${diffInDays} días`;
  }
};
