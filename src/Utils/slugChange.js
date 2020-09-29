export default function slugify(text) {
  let textNormalize = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return textNormalize
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\u0100-\uFFFF\w\-]/g, "-")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
