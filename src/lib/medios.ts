import type { ImageMetadata } from 'astro';

// Las fotos se ubican solas por nombre de archivo: src/assets/fotos/<clave>.jpg
// Los videos igual: src/assets/videos/<clave>.mp4 (y opcional <clave>.jpg como portada del video).
const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const videos = import.meta.glob<string>('../assets/videos/*.{mp4,webm}', { eager: true, query: '?url', import: 'default' });

const nombre = (ruta: string) => ruta.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();

const indiceFotos = new Map(Object.entries(fotos).map(([ruta, m]) => [nombre(ruta), m.default]));
const indiceVideos = new Map(Object.entries(videos).map(([ruta, url]) => [nombre(ruta), url]));

export const foto = (clave: string) => indiceFotos.get(clave.toLowerCase());
export const video = (clave: string) => indiceVideos.get(clave.toLowerCase());
