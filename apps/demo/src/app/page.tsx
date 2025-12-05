import Link from "next/link";
import { AppLogo } from "@/components/app-logo";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <div className="flex justify-center">
          <AppLogo size={48} className="text-primary" collapsed={true} />
        </div>

        <h1 className="text-4xl tracking-tight mt-8 font-bold">
          Playground
        </h1>

        {/* Gallery Links - Route groups don't change URLs */}
        <div className="flex justify-center gap-3 mt-16 flex-wrap">
          <Link
            href="/primatives"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-[4px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap bg-[color:var(--color-surface-purple)] text-primary border !border-default-primary hover:bg-venus-primary-light hover:!border-default-primary-active hover:text-primary-active active:bg-venus-primary-light focus:ring-venus-primary/50 text-base px-6 h-10"
          >
            Primatives
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-[4px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap bg-[color:var(--color-surface-purple)] text-primary border !border-default-primary hover:bg-venus-primary-light hover:!border-default-primary-active hover:text-primary-active active:bg-venus-primary-light focus:ring-venus-primary/50 text-base px-6 h-10"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
