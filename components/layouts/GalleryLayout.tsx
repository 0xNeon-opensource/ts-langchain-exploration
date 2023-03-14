import classNames from 'lib/styles/classNames';
import Head from 'next/head';

export interface IGalleryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const GalleryLayout: React.FC<IGalleryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>🪷</title>
      </Head>
      <div
        {...divProps}
        className={classNames('min-h-screen w-screen flex flex-col', justify)}
      >
        <main>
          <div>{children}</div>
          <div>{children}</div>
          <div>{children}</div>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default GalleryLayout;
