export function changeLanguage(
  label: string,
  setActualLanguage: (label: string) => void
) {
  console.log(`trocar idioma para ${label}`);
  setActualLanguage(label);
}
