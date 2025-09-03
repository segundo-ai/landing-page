export function smoothScroll(e: React.MouseEvent, scrollTo: string) {
  e.preventDefault();
  const el = document.querySelector(scrollTo);
  el?.scrollIntoView({ behavior: "smooth" });
}
