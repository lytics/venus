"use client";

export default function TextGallery() {
  return (
    <div className="min-h-screen bg-background">
        <div className="py-8 px-6">
          <main className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <h1 className="text-2xl font-bold">Text</h1>
                </div>
              </div>

              <p className="text-sm text-muted-foreground max-w-2xl">
                Typography system with Inter font family and custom text sizes. Base size is 16px. Custom sizes: text-13, text-22, text-28, text-34.
              </p>
            </div>

            {/* Font Weights */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Font Weights</h2>
              <div className="space-y-3 p-4 border rounded-lg">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">font-normal</div>
                  <div className="col-span-3 text-base font-normal">The quick brown fox</div>
                  <div className="col-span-7 text-sm text-muted-foreground">400 - Body text</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">font-medium</div>
                  <div className="col-span-3 text-base font-medium">The quick brown fox</div>
                  <div className="col-span-7 text-sm text-muted-foreground">500 - Venus descriptions, secondary text</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">font-semibold</div>
                  <div className="col-span-3 text-base font-semibold">The quick brown fox</div>
                  <div className="col-span-7 text-sm text-muted-foreground">600 - Venus card titles, labels</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">font-bold</div>
                  <div className="col-span-3 text-base font-bold">The quick brown fox</div>
                  <div className="col-span-7 text-sm text-muted-foreground">700 - Venus headings, buttons</div>
                </div>
              </div>
            </div>

            {/* Text Sizes */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Text Sizes</h2>
              <div className="space-y-3 p-4 border rounded-lg">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-9xl</div>
                  <div className="col-span-2 text-9xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">128px • 1:1 line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-8xl</div>
                  <div className="col-span-2 text-8xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">96px • 1:1 line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-7xl</div>
                  <div className="col-span-2 text-7xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">72px • 1:1 line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-6xl</div>
                  <div className="col-span-2 text-6xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">60px • 1:1 line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-5xl</div>
                  <div className="col-span-2 text-5xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">48px • 1:1 line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-4xl</div>
                  <div className="col-span-2 text-4xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">36px • 2.5rem line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-34</div>
                  <div className="col-span-2 text-34">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">34px • 2.5rem line height • Custom</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-3xl</div>
                  <div className="col-span-2 text-3xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">30px • 2.25rem line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-28</div>
                  <div className="col-span-2 text-28">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">28px • 2.25rem line height • Custom</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-2xl</div>
                  <div className="col-span-2 text-2xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">24px • 2rem line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-22</div>
                  <div className="col-span-2 text-22">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">22px • 1.75rem line height • Custom</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-xl</div>
                  <div className="col-span-2 text-xl">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">20px • 1.75rem line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-lg</div>
                  <div className="col-span-2 text-lg">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">18px • 1.75rem line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-base</div>
                  <div className="col-span-2 text-base">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">16px • 1.5rem line height • Base</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-sm</div>
                  <div className="col-span-2 text-sm">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">14px • 1.25rem line height</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-13</div>
                  <div className="col-span-2 text-13">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">13px • 1.25rem line height • Custom</div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-sm font-medium">text-xs</div>
                  <div className="col-span-2 text-xs">Ag</div>
                  <div className="col-span-8 text-sm text-muted-foreground">12px • 1rem line height</div>
                </div>
              </div>
            </div>
          </main>
        </div>
    </div>
  );
}
