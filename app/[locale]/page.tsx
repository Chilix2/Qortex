import { getDictionary } from "@/lib/dictionary";
import { LandingClient } from "@/components/landing-client";

export default async function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <LandingClient dict={dict} locale={locale} />;
}