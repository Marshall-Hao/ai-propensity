'use client';
import { FC, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

type TProps = {
  children: ReactNode;
};

const Layout: FC<TProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
