
import { ReactNode } from 'react';
import Header from '@/components/Header';
import { localizedPaths } from '@/lib/paths';
import { localizedLabels } from '@/lib/labels';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header
        lang='en'
        labels={localizedLabels['en']}
        paths={localizedPaths['en']} 
      />
      <main className="p-6">{children}</main>
    </>
  );
}
