import { useTranslations } from 'next-intl';

export default function TestComponent() {
  const t = useTranslations();
  return (
    <div>
      {t.rich('testRich', {
        0: (children) => <b>{children}</b>
      })}
    </div>
  );
}