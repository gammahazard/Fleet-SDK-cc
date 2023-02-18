const slider2 = document.querySelector('#team-cards')

let isdown2 = false;
let startX2;


slider2.addEventListener('mousedown', (e) => {
  isdown2 = true;
  slider2.classList.add('active');
  startX2 = e.pageX - slider2.offsetLeft;
  scrollLeft = slider2.scrollLeft;
  slider2.style.cursor = 'grabbing';
});
slider2.addEventListener('mouseleave', () => {
  isdown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', () => {
  isdown2 = false;
  slider2.classList.remove('active');
  slider2.style.cursor = 'grab';
});
slider2.addEventListener('mousemove', (e) => {
  if(!isdown2) return;
  e.preventDefault();
  const z = e.pageX - slider2.offsetLeft;
  const drag = (z - startX2) * 1.5; //speed of scroll
  slider2.scrollLeft = scrollLeft - drag;
  console.log(drag);
});


