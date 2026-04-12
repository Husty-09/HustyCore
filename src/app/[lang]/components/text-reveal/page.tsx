"use client";

import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { TextReveal as TextRevealUI } from "@/components/ui/text-reveal";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, filter: "blur(10px)", transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-wrap gap-x-2", className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block relative">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};`;

export default function TextRevealPage() {
  const { lang } = useParams() as { lang: string };
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.textReveal.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.textReveal.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
           {dict.components.textReveal.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden flex relative items-center justify-center p-8">
           
           <div className="max-w-2xl text-center flex flex-col items-center">
             <TextRevealUI text={dict.components.textReveal.previewTitle} className="text-5xl font-black text-foreground mb-6 justify-center" />
             <TextRevealUI text={dict.components.textReveal.previewDesc} className="text-xl text-muted-foreground justify-center" />
           </div>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
