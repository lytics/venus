"use client";

import Link from "next/link";
import { AppLogo } from "@/components/app-logo";
import { LayoutGrid, AppWindow, Code, Copy, Check, FileCode2 } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function CodeBlock({ children, copyText }: { children: React.ReactNode; copyText: string }) {
  return (
    <div className="relative bg-gray-900 rounded text-sm font-mono text-left overflow-x-auto">
      <CopyButton text={copyText} />
      <pre className="p-4 pr-12 text-gray-100">{children}</pre>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <AppLogo size={64} className="text-primary" collapsed={true} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">VenusCN</h1>
        <p className="text-[color:var(--color-body)]">
          ShadCN/UI-based Contentstack Venus Clone
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full mb-12">
        {/* Browse Components */}
        <Link
          href="/primitives"
          className="group p-6 rounded border border-[color:var(--color-border)] hover:border-primary hover:shadow-md transition-all bg-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded bg-[color:var(--color-surface-purple)] text-primary">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Components</h2>
          </div>
          <p className="text-[color:var(--color-body)] text-sm">
            Browse cloned components
          </p>
        </Link>

        {/* Page Templates */}
        <Link
          href="/templates"
          className="group p-6 rounded border border-[color:var(--color-border)] hover:border-primary hover:shadow-md transition-all bg-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded bg-[color:var(--color-surface-purple)] text-primary">
              <FileCode2 className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Templates</h2>
          </div>
          <p className="text-[color:var(--color-body)] text-sm">
            Starter templates for common page layouts
          </p>
        </Link>

        {/* Explore Demo */}
        <Link
          href="/dashboard"
          className="group p-6 rounded border border-[color:var(--color-border)] hover:border-primary hover:shadow-md transition-all bg-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded bg-[color:var(--color-surface-purple)] text-primary">
              <AppWindow className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Demo App</h2>
          </div>
          <p className="text-[color:var(--color-body)] text-sm">
            See Venus in a real application context
          </p>
        </Link>

        {/* Use in Your Project */}
        <div className="p-6 rounded border border-[color:var(--color-border)] bg-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded bg-[color:var(--color-surface-purple)] text-primary">
              <Code className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Use It</h2>
          </div>
          <p className="text-[color:var(--color-body)] text-sm">
            Import components into your React app
          </p>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="max-w-2xl w-full mb-12">
        <h3 className="text-sm font-semibold text-[color:var(--color-heading)] uppercase tracking-wide mb-4">
          Quick Start
        </h3>

        <div className="space-y-3">
          <CodeBlock copyText="git clone <repo-url> && cd venus_external && pnpm install">
            <span className="text-gray-500"># Clone and install</span>
            {"\n"}git clone &lt;repo-url&gt;
            {"\n"}cd venus_external
            {"\n"}pnpm install
          </CodeBlock>

          <CodeBlock copyText="pnpm dev">
            <span className="text-gray-500"># Start the demo app</span>
            {"\n"}pnpm dev
          </CodeBlock>

          <CodeBlock
            copyText={`import { Button, Input, Field } from "@contentstack/venuscn"`}
          >
            <span className="text-gray-500">{"// Import Venus components"}</span>
            {"\n"}
            <span className="text-purple-400">import</span>
            {" { Button, Input, Field } "}
            <span className="text-purple-400">from</span>
            {" "}
            <span className="text-green-400">&quot;@contentstack/venuscn&quot;</span>
          </CodeBlock>
        </div>

        <p className="text-xs text-[color:var(--color-body)] mt-3">
          See the{" "}
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">packages/venuscn/README.md</code>
          {" "}for full component documentation
        </p>
      </div>

    </div>
  );
}
