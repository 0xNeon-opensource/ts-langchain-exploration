import { Open_Sans } from '@next/font/google';
import classNames from 'lib/styles/classNames';

export interface GlobalStylesProviderProps
  extends React.ComponentPropsWithoutRef<'div'> {}

const openSans = Open_Sans({ subsets: ['latin'] });

const GlobalStylesProvider: React.FC<GlobalStylesProviderProps> = ({
  children,
}) => {
  return <div className={classNames(openSans.className, '')}>{children}</div>;
};

export default GlobalStylesProvider;
