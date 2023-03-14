import GalleryLayout from 'components/layouts/GalleryLayout';
import { NextPageWithLayout } from './page';

const FadedCircle: NextPageWithLayout = () => {
  const colors = [
    '#FF3F8E',
    '#04C2C9',
    '#2E55C1',
    '#F5A623',
    '#62D0DF',
    '#D81E5B',
    '#27A9E0',
    '#EA4335',
  ];
  const circleSize = 400;
  const numOfColors = Math.floor(Math.random() * 2) + 1;
  const gradientAngle = Math.floor(Math.random() * 360);

  const renderGradient = () => {
    let colorStops = [];
    let prevStop = 0;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorStops.push(`${randomColor} 0%`);
    for (let i = 0; i < numOfColors; i++) {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
      let randomStop =
        prevStop +
        (Math.random() * (1 - prevStop - (numOfColors - i - 1) * 0.1)) /
          (numOfColors - i);
      colorStops.push(`${randomColor} ${(randomStop * 100).toFixed(2)}%`);
      prevStop = randomStop;
    }
    randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorStops.push(`${randomColor} 100%`);
    return colorStops.join(', ');
  };

  return (
    <div
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        borderRadius: '50%',
        background: `linear-gradient(${gradientAngle}deg, ${renderGradient()})`,
      }}
    />
  );
};

export default FadedCircle;

FadedCircle.getLayout = (page) => {
  return <GalleryLayout>{page}</GalleryLayout>;
};
