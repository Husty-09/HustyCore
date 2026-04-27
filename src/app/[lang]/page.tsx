import { getDictionary } from "@/lib/dictionaries";
import HomeClient from "@/components/home/home-client";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "home");
  
  return <HomeClient dict={dict} />;
}
