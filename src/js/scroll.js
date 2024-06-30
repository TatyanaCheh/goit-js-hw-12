import { refs } from './refs';

export function skipOldElement(x = 0, y = 0) {
    const liEl = refs.gallery.children[0];
    const height = liEl.getBoundingClientRect().height;

    window.scrollBy({
        top: height * 2,
        left: y,
        behavior: 'smooth',
    });
}