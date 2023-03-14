import classNames from 'lib/styles/classNames';
import { useState } from 'react';

export interface IGalleryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const GalleryLayout: React.FC<IGalleryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const numViews = 5;
  const childrenList = [...Array(numViews)].map(() => {
    return children;
  });
  console.log('childrenList :>> ', childrenList);
  return (
    <>
      <div
        {...divProps}
        className={classNames('min-h-screen w-screen flex flex-col', justify)}
      >
        <main>
          {childrenList.map((child) => {
            return child;
          })}
        </main>
      </div>
    </>
  );
};

export default GalleryLayout;
