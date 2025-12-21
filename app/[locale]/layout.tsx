import { getDictionary } from "@/lib/dictionary";
import QortexHeader from "@/components/qortex-header";
import { WaveFooter } from "@/components/wave-footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="cosmic-iris-global" />
      <QortexHeader dict={dict} locale={locale} />
      <main className="pt-20">{children}</main>
      <WaveFooter />
    </div>
  );
}
