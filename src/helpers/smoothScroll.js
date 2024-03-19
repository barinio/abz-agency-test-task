export const smoothScrollTo = id => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
