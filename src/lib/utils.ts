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
