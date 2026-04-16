import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { NexusModalClient } from "./nexus-modal-client";

export default async function NexusModalPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/nexus-modal.tsx"), "utf-8");

  return <NexusModalClient dict={dict} sourceCode={sourceCode} />;
}
