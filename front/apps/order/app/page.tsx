'use client';

import { Suspense } from 'react';
import { Stack } from '@chakra-ui/react';
import { Header } from '../components/header';
import MenuSkeleton from '../components/menu/skeleton';
import { MenuContainer } from '../components/menu';
import { Modals } from '../components/modals';
import Footer from '../components/footer';

const Page: () => JSX.Element = () => {
  return (
    <Stack position="relative">
      <Header />
      <Suspense fallback={<MenuSkeleton />}>
        <MenuContainer />
      </Suspense>
      <Footer />
      <Modals />
    </Stack>
  );
};

export default Page;
