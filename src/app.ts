const head = document.querySelector('#head') as HTMLCanvasElement;
const body = document.querySelector('#body') as HTMLCanvasElement;
const bottom = document.querySelector('#bottom') as HTMLCanvasElement;

head.getContext('2d');
body.getContext('2d');
bottom.getContext('2d');

head.setAttribute('width','1000');
head.setAttribute('height','200');
head.setAttribute('style','border:1px solid');


body.setAttribute('width',' 1000');
body.setAttribute('height','1000');
body.setAttribute('style','border:1px solid');

bottom.setAttribute('width','1000');
bottom.setAttribute('height','200');
bottom.setAttribute('style','border:1px solid');
