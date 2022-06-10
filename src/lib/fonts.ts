const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Quando&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const cedarville = new FontFaceObserver('Cedarville Cursive');
  const lato = new FontFaceObserver('Lato');
  const quando = new FontFaceObserver('Quando');

  cedarville.load().then(() => {
    document.documentElement.classList.add('cedarville');
  });

  lato.load().then(() => {
    document.documentElement.classList.add('lato');
  });

  quando.load().then(() => {
    document.documentElement.classList.add('quando');
  });
};

export default Fonts;
