import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import Navbar from "@components/navbar/Navbar";
import Footer from "@pages/Footer";

type LegalPageProps = {
  title: string;
  content: string;
};

const markdownComponents: Components = {
  h1: ({ node: _node, ...props }) => (
    <h1
      className="text-[32px] md:text-[40px] font-semibold text-white mt-12 first:mt-0 mb-4"
      {...props}
    />
  ),
  h2: ({ node: _node, ...props }) => (
    <h2
      className="text-[24px] md:text-[30px] font-semibold text-white mt-10 mb-3"
      {...props}
    />
  ),
  h3: ({ node: _node, ...props }) => (
    <h3 className="text-[20px] font-semibold text-white mt-8 mb-3" {...props} />
  ),
  p: ({ node: _node, ...props }) => (
    <p className="text-base leading-relaxed text-[#E5E5E5] mb-4" {...props} />
  ),
  strong: ({ node: _node, ...props }) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  ul: ({ node: _node, ...props }) => (
    <ul
      className="list-disc pl-5 text-base leading-relaxed text-[#E5E5E5] mb-4 space-y-2"
      {...props}
    />
  ),
  ol: ({ node: _node, ...props }) => (
    <ol
      className="list-decimal pl-5 text-base leading-relaxed text-[#E5E5E5] mb-4 space-y-2"
      {...props}
    />
  ),
  li: ({ node: _node, ...props }) => (
    <li className="text-base leading-relaxed text-[#E5E5E5]" {...props} />
  ),
  blockquote: ({ node: _node, ...props }) => (
    <blockquote
      className="border-l-4 border-white/20 pl-4 italic text-[#D1D1D1] bg-white/5 rounded-r-2xl py-2 mb-4"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-white/10" />,
  a: ({ node: _node, ...props }) => (
    <a
      className="text-[#AE96FF] underline underline-offset-4 hover:text-white transition-colors"
      {...props}
    />
  ),
};

export default function LegalPage({ title, content }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [title]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <section className="flex-1 w-full px-6 py-12 md:px-12">
        <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-[#050505] px-6 py-10 shadow-[0_0_60px_rgba(138,153,255,0.15)] md:px-12 md:py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9BA3B4]">Legal</p>
              <h1 className="text-[34px] font-semibold text-white md:text-[46px]">
                {title}
              </h1>
            </div>
            <Link
              to="/"
              className="text-sm font-semibold text-[#AE96FF] transition-colors hover:text-white"
            >
              Regresar al inicio
            </Link>
          </div>
          <ReactMarkdown
            components={markdownComponents}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </article>
      </section>
      <Footer />
    </main>
  );
}
