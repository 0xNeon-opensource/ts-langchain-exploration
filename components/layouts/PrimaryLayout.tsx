import classNames from 'lib/styles/classNames';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
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
        className={classNames(
          'min-h-screen flex flex-col bg-slate-200 dark:bg-slate-800 dark:text-white',
          justify
        )}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default PrimaryLayout;
