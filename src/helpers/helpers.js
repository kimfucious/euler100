export const getRandomAnimation = () => {
  const animations = [
    "headShake",
    "heartBeat",
    "jackInTheBox",
    "jello",
    "rollIn",
    "rotateIn",
    "rubberBand",
    "slideInRight",
    "swing",
    "tada",
    "wobble",
    "zoomIn"
  ];
  return animations[Math.floor(Math.random() * animations.length)];
};
