export function isDocumentElement(el: HTMLElement) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
export function scrollTo(el: HTMLElement, top: number): void {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
}

export default function scrollIntoView(
  container: HTMLElement,
  target: HTMLElement
): void {
  const menuRect = container.getBoundingClientRect();
  const focusedRect = target.getBoundingClientRect();
  const overScroll = target.offsetHeight;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(
      container,
      Math.min(
        target.offsetTop +
          target.clientHeight -
          container.offsetHeight +
          overScroll,
        container.scrollHeight
      )
    );
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(container, Math.max(target.offsetTop - overScroll, 0));
  }
}
