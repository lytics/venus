"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AdminNav } from "@/components/admin-nav";
import { Tabs, TabsList, TabsTrigger } from "@contentstack/venuscn";

// Color variable definitions
const themeColorVars = [
  '--brand-1', '--brand-2', '--brand-3', '--brand-4', '--brand-5', '--brand-6',
  '--brand-7', '--brand-8', '--brand-9', '--brand-10', '--brand-11', '--brand-12',
  '--primary', '--primary-foreground', '--secondary', '--secondary-foreground',
  '--background', '--background-secondary', '--foreground', '--card', '--card-foreground',
  '--popover', '--popover-foreground',
  '--muted', '--muted-foreground', '--accent', '--accent-foreground',
  '--destructive', '--destructive-foreground', '--border', '--input', '--ring'
];

const grayScaleVars = [
  '--gray-1', '--gray-2', '--gray-3', '--gray-4', '--gray-5', '--gray-6',
  '--gray-7', '--gray-8', '--gray-9', '--gray-10', '--gray-11', '--gray-12'
];

const utilityColorVars = [
  '--success-50', '--success-100', '--success-200', '--success-300', '--success-400', '--success-500', '--success-600', '--success-700', '--success-800', '--success-900', '--success-fg',
  '--danger-50', '--danger-100', '--danger-200', '--danger-300', '--danger-400', '--danger-500', '--danger-600', '--danger-700', '--danger-800', '--danger-900', '--danger-fg',
  '--info-50', '--info-100', '--info-200', '--info-300', '--info-400', '--info-500', '--info-600', '--info-700', '--info-800', '--info-900', '--info-fg',
  '--warning-50', '--warning-100', '--warning-200', '--warning-300', '--warning-400', '--warning-500', '--warning-600', '--warning-700', '--warning-800', '--warning-900', '--warning-fg',
];

const chartColorVars = [
  '--chart-rose', '--chart-orange',
  '--chart-yellow', '--chart-lime', '--chart-emerald',
  '--chart-sky', '--chart-blue',
  '--chart-indigo', '--chart-purple',
  '--chart-slate', '--chart-gray'
];

type ViewMode = 'simple' | 'advanced';

export default function ColorsPage() {
  const [pageMounted, setPageMounted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  // Default to simple mode and restore from localStorage
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('colorsViewMode') as ViewMode) || 'simple';
    }
    return 'simple';
  });

  useEffect(() => setPageMounted(true), []);

  // Persist view mode to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('colorsViewMode', viewMode);
    }
  }, [viewMode]);

  // Copy to clipboard function with visual feedback
  const copyToClipboard = async (text: string, feedbackId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(feedbackId);
      toast.success(`Copied: ${text}`);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
      console.error('Failed to copy:', err);
    }
  };

  // Convert any CSS color format to hex
  const convertToHex = (colorValue: string): string => {
    if (!colorValue) return '#000000';

    // Already hex format
    if (colorValue.startsWith('#')) {
      return colorValue;
    }

    // Detect HSL values without hsl() wrapper (shadcn format: "215 27.9% 16.9%")
    // Pattern: number, space, number%, space, number%
    let cssColor = colorValue;
    if (/^\d+\.?\d*\s+\d+\.?\d*%\s+\d+\.?\d*%$/.test(colorValue.trim())) {
      cssColor = `hsl(${colorValue})`;
    }

    // Create a temporary element to compute the color
    const temp = document.createElement('div');
    temp.style.color = cssColor;
    document.body.appendChild(temp);

    // Get computed color (will be in rgb/rgba format)
    const computed = window.getComputedStyle(temp).color;
    document.body.removeChild(temp);

    // Parse rgb/rgba format
    const match = computed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);
    if (match) {
      const r = parseInt(match[1]).toString(16).padStart(2, '0');
      const g = parseInt(match[2]).toString(16).padStart(2, '0');
      const b = parseInt(match[3]).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }

    // Fallback
    return '#000000';
  };

  // Populate color values in the colors section
  useEffect(() => {
    if (!pageMounted) return;

    const updateColorValues = () => {
      const computedStyle = window.getComputedStyle(document.documentElement);

      // Update brand colors
      for (let i = 1; i <= 12; i++) {
        const value = computedStyle.getPropertyValue(`--brand-${i}`).trim();
        const element = document.getElementById(`brand-${i}-value`);
        if (element) {
          element.textContent = convertToHex(value);
        }
      }

      // Update semantic colors - show HSL values (not hex) since they use HSL format
      themeColorVars.filter(v => !v.startsWith('--brand-')).forEach(colorVar => {
        const colorName = colorVar.replace('--', '');
        const value = computedStyle.getPropertyValue(colorVar).trim();
        const elementId = colorName.replace(/-/g, '');
        const element = document.getElementById(`${elementId}-value`);
        if (element) {
          // Show raw HSL value for semantic colors
          element.textContent = value ? `hsl(${value})` : '';
        }
      });

      // Update gray scale
      grayScaleVars.forEach(colorVar => {
        const colorName = colorVar.replace('--', '');
        const value = computedStyle.getPropertyValue(colorVar).trim();
        const elementId = colorName.replace(/-/g, '');
        const element = document.getElementById(`${elementId}-value`);
        if (element) {
          element.textContent = convertToHex(value);
        }
      });

      // Update text style colors - show HSL values
      const textColors = [
        { id: 'foreground-hex-display', cssVar: '--foreground' },
        { id: 'muted-foreground-hex-display', cssVar: '--muted-foreground' },
        { id: 'primary-hex-display', cssVar: '--primary' },
        { id: 'destructive-hex-display', cssVar: '--destructive' }
      ];

      textColors.forEach(({ id, cssVar }) => {
        const value = computedStyle.getPropertyValue(cssVar).trim();
        const element = document.getElementById(id);
        if (element) {
          element.textContent = value ? `hsl(${value})` : '';
        }
      });

      // Update status colors
      ['success', 'danger', 'info', 'warning'].forEach(family => {
        [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].forEach(shade => {
          const value = computedStyle.getPropertyValue(`--${family}-${shade}`).trim();
          const element = document.getElementById(`${family}-${shade}-value`);
          if (element) {
            element.textContent = convertToHex(value);
          }
        });
      });

      // Update chart colors
      chartColorVars.forEach(colorVar => {
        const colorName = colorVar.replace('--', '');
        const value = computedStyle.getPropertyValue(colorVar).trim();
        const elementId = colorName.replace(/-/g, '');
        const element = document.getElementById(`${elementId}-value`);
        if (element) {
          element.textContent = convertToHex(value);
        }
      });
    };

    // Initial update
    updateColorValues();

    // Set up observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateColorValues();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [pageMounted]);

  const isSimple = viewMode === 'simple';

  // Simple color card component
  const SimpleColorCard = ({ colorVar, colorName, isPrimary = false, usedInDemo = false, size = "normal" }: {
    colorVar: string;
    colorName: string;
    isPrimary?: boolean;
    usedInDemo?: boolean;
    size?: "small" | "normal";
  }) => {
    // Determine the background color - semantic/theme colors use HSL format, others use direct values
    const isSemanticColor = themeColorVars.filter(v => !v.startsWith('--brand-')).includes(colorVar);
    const bgColor = isSemanticColor
      ? `hsl(var(${colorVar}))`
      : `var(${colorVar})`;

    return (
      <div
        className={`flex flex-col items-center rounded-xl transition-all cursor-pointer hover:bg-muted/50 ${
          size === "small" ? "gap-2 p-3" : "gap-3 p-6"
        }`}
        onClick={() => copyToClipboard(colorVar, `${colorName}-simple`)}
        title={`Click to copy ${colorVar}`}
      >
        <div
          className={`rounded-xl border shadow-sm ${
            size === "small" ? "w-10 h-10" : "w-16 h-16"
          } ${
            copiedItem === `${colorName}-simple` ? 'ring-2 ring-primary animate-pulse scale-105' : ''
          }`}
          style={{ backgroundColor: bgColor }}
        />
        <div className={`font-medium text-foreground text-center ${
          size === "small" ? "text-xs" : "text-sm"
        }`}>
          {colorVar}
          {isPrimary && <span className="text-amber-500 ml-1">★</span>}
          {usedInDemo && <span className="text-primary ml-1">●</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

        <div className="py-8 px-6">
          <main className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <h1 className="text-2xl font-bold">Colors</h1>
                </div>
              </div>

              <p className="text-sm text-muted-foreground max-w-2xl">
                All colors come from the design token system in <code className="px-2 py-0.5 bg-muted rounded text-xs font-mono text-foreground">src/styles/tokens.css</code> and are mapped to Tailwind utilities in <code className="px-2 py-0.5 bg-muted rounded text-xs font-mono text-foreground">src/app/globals.css</code>.
              </p>
            </div>

            {/* Main Colors Legend + View Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <h2 className="text-base font-medium text-foreground">Main Colors</h2>
                <span className="inline-flex items-center gap-1"><span className="text-amber-500">★</span> Primary brand color</span>
                <span className="inline-flex items-center gap-1"><span className="text-primary">●</span> Used in demo</span>
              </div>

              {/* Simple/Advanced Toggle */}
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as ViewMode)}>
                <TabsList>
                  <TabsTrigger value="simple">Simple</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Color Details - Direct inline display */}
            <div className="space-y-8">
                {/* Tailwind Semantic Colors */}
                <div className="space-y-4">
                  <h2 className="text-base font-medium text-foreground">Tailwind Semantic Colors</h2>
                  {!isSimple && (
                    <p className="text-xs text-muted-foreground">shadcn/ui compatible semantic tokens. Use directly with Tailwind classes like <code className="px-2 py-0.5 bg-muted rounded">bg-primary</code>, <code className="px-2 py-0.5 bg-muted rounded">text-muted-foreground</code>.</p>
                  )}

                  {isSimple ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                      {themeColorVars.filter(v => !v.startsWith('--brand-')).map((colorVar) => {
                        const colorName = colorVar.replace('--', '');
                        const isPrimaryColor = colorVar === '--primary';
                        const usedInDemo = ['--primary', '--primary-foreground', '--secondary', '--background', '--foreground', '--muted', '--muted-foreground', '--destructive', '--border', '--card', '--accent'].includes(colorVar);
                        return (
                          <SimpleColorCard
                            key={colorName}
                            colorVar={colorVar}
                            colorName={colorName}
                            isPrimary={isPrimaryColor}
                            usedInDemo={usedInDemo}
                          />
                        );
                      })}
                    </div>
                  ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {themeColorVars.filter(v => !v.startsWith('--brand-')).map((colorVar) => {
                      const colorName = colorVar.replace('--', '');
                      const bgClass = `bg-${colorName}`;
                      const textClass = `text-${colorName}`;
                      const elementId = colorName.replace(/-/g, '');
                      const isPrimaryColor = colorVar === '--primary';
                      const usedInDemo = ['--primary', '--primary-foreground', '--secondary', '--background', '--foreground', '--muted', '--muted-foreground', '--destructive', '--border', '--card', '--accent'].includes(colorVar);
                      // All semantic tokens now use HSL format
                      return (
                        <div key={colorName} className={`flex items-center gap-3 p-3 border rounded-lg ${isPrimaryColor ? 'border-primary border-2' : ''}`}>
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === `${colorName}-tile` ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: `hsl(var(--${colorName}))` }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue(`--${colorName}`).trim();
                              copyToClipboard(value ? `hsl(${value})` : '', `${colorName}-tile`);
                            }}
                            title={`Click to copy HSL value`}
                          ></div>
                          <div className="flex-1">
                            <div
                              className={`text-sm font-medium text-foreground cursor-pointer transition-all hover:text-primary ${
                                copiedItem === `${colorName}-var` ? 'text-primary font-bold' : ''
                              }`}
                              onClick={() => copyToClipboard(colorVar, `${colorName}-var`)}
                              title="Click to copy CSS variable name"
                            >
                              {colorVar}
                              {isPrimaryColor && <span className="text-amber-500 ml-1">★</span>}
                              {usedInDemo && <span className="text-primary ml-1">●</span>}
                            </div>
                            <div
                              className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground ${
                                copiedItem === `${colorName}-hsl` ? 'text-foreground font-medium' : ''
                              }`}
                              id={`${elementId}-value`}
                              onClick={() => {
                                const element = document.getElementById(`${elementId}-value`);
                                if (element?.textContent) {
                                  copyToClipboard(element.textContent, `${colorName}-hsl`);
                                }
                              }}
                              title="Click to copy HSL value"
                            >
                              {/* Color value will be populated by JavaScript */}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `${colorName}-bg` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(bgClass, `${colorName}-bg`)}
                                title="Click to copy class name"
                              >
                                {bgClass}
                              </code>
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `${colorName}-text` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(textClass, `${colorName}-text`)}
                                title="Click to copy class name"
                              >
                                {textClass}
                              </code>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  )}
                </div>

                {/* Primary Color Scale */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-foreground">Primary Color Scale</h3>
                  {!isSimple && (
                    <p className="text-xs text-muted-foreground">Extended purple scale for the primary brand color. Use <code className="px-2 py-0.5 bg-muted rounded">bg-brand-*</code> or <code className="px-2 py-0.5 bg-muted rounded">text-brand-*</code>.</p>
                  )}

                  {isSimple ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                      {Array.from({ length: 12 }, (_, i) => {
                        const step = i + 1;
                        const colorVar = `--brand-${step}`;
                        const isPrimary = step === 9;
                        const isUsedInDemo = [3, 9].includes(step);
                        return (
                          <SimpleColorCard
                            key={step}
                            colorVar={colorVar}
                            colorName={`brand-${step}`}
                            isPrimary={isPrimary}
                            usedInDemo={isUsedInDemo}
                          />
                        );
                      })}
                    </div>
                  ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 12 }, (_, i) => {
                      const step = i + 1;
                      const colorVar = `--brand-${step}`;
                      const bgClass = `bg-brand-${step}`;
                      const textClass = `text-brand-${step}`;
                      const isPrimary = step === 9;
                      const isUsedInDemo = [3, 9].includes(step); // brand-3 (muted), brand-9 (primary)
                      return (
                        <div key={step} className={`flex items-center gap-3 p-3 border rounded-lg ${isPrimary ? 'border-primary border-2' : ''}`}>
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === `brand-${step}-tile` ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: `var(--brand-${step})` }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue(`--brand-${step}`).trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, `brand-${step}-tile`);
                            }}
                            title={`Click to copy hex value`}
                          ></div>
                          <div className="flex-1">
                            <div
                              className={`text-sm font-medium text-foreground cursor-pointer transition-all hover:text-primary ${
                                copiedItem === `brand-${step}-var` ? 'text-primary font-bold' : ''
                              }`}
                              onClick={() => copyToClipboard(colorVar, `brand-${step}-var`)}
                              title="Click to copy CSS variable name"
                            >
                              {colorVar}
                              {isPrimary && <span className="text-amber-500 ml-1">★</span>}
                              {isUsedInDemo && <span className="text-primary ml-1">●</span>}
                            </div>
                            <div
                              className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground ${
                                copiedItem === `brand-${step}-hex` ? 'text-foreground font-medium' : ''
                              }`}
                              id={`brand-${step}-value`}
                              onClick={() => {
                                const element = document.getElementById(`brand-${step}-value`);
                                if (element?.textContent) {
                                  copyToClipboard(element.textContent, `brand-${step}-hex`);
                                }
                              }}
                              title="Click to copy hex value"
                            >
                              {/* Color value will be populated by JavaScript */}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `brand-${step}-bg` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(bgClass, `brand-${step}-bg`)}
                                title="Click to copy class name"
                              >
                                {bgClass}
                              </code>
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `brand-${step}-text` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(textClass, `brand-${step}-text`)}
                                title="Click to copy class name"
                              >
                                {textClass}
                              </code>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  )}
                </div>

                {/* Gray Scale */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-foreground">Gray Scale</h3>

                  {isSimple ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                      {grayScaleVars.map((colorVar) => {
                        const colorName = colorVar.replace('--', '');
                        const usedInDemo = ['--gray-1', '--gray-12'].includes(colorVar);
                        return (
                          <SimpleColorCard
                            key={colorName}
                            colorVar={colorVar}
                            colorName={colorName}
                            usedInDemo={usedInDemo}
                          />
                        );
                      })}
                    </div>
                  ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {grayScaleVars.map((colorVar) => {
                      const colorName = colorVar.replace('--', '');
                      const bgClass = `bg-${colorName}`;
                      const textClass = `text-${colorName}`;
                      const elementId = colorName.replace(/-/g, '');
                      const usedInDemo = ['--gray-1', '--gray-12'].includes(colorVar);
                      return (
                        <div key={colorName} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === `${colorName}-tile` ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: `var(--${colorName})` }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue(`--${colorName}`).trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, `${colorName}-tile`);
                            }}
                            title={`Click to copy hex value`}
                          ></div>
                          <div className="flex-1">
                            <div
                              className={`text-sm font-medium text-foreground cursor-pointer transition-all hover:text-primary ${
                                copiedItem === `${colorName}-var` ? 'text-primary font-bold' : ''
                              }`}
                              onClick={() => copyToClipboard(colorVar, `${colorName}-var`)}
                              title="Click to copy CSS variable name"
                            >
                              {colorVar}
                              {usedInDemo && <span className="text-primary ml-1">●</span>}
                            </div>
                            <div
                              className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground ${
                                copiedItem === `${colorName}-hex` ? 'text-foreground font-medium' : ''
                              }`}
                              id={`${elementId}-value`}
                              onClick={() => {
                                const element = document.getElementById(`${elementId}-value`);
                                if (element?.textContent) {
                                  copyToClipboard(element.textContent, `${colorName}-hex`);
                                }
                              }}
                              title="Click to copy hex value"
                            >
                              {/* Color value will be populated by JavaScript */}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `${colorName}-bg` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(bgClass, `${colorName}-bg`)}
                                title="Click to copy class name"
                              >
                                {bgClass}
                              </code>
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `${colorName}-text` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(textClass, `${colorName}-text`)}
                                title="Click to copy class name"
                              >
                                {textClass}
                              </code>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  )}
                </div>

                {/* Text Styles Reference - only in advanced mode */}
                {!isSimple && (
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-foreground">Text Styles in App</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3 p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-foreground">Primary Text</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === 'foreground-tile' ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: 'hsl(var(--foreground))' }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue('--foreground').trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, 'foreground-tile');
                            }}
                            title="Click to copy hex value"
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <code
                                className={`text-sm text-foreground font-medium cursor-pointer transition-all hover:text-primary ${
                                  copiedItem === 'foreground-code' ? 'text-primary font-bold' : ''
                                }`}
                                onClick={() => copyToClipboard('text-foreground', 'foreground-code')}
                                title="Click to copy class name"
                              >
                                text-foreground
                              </code>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <div>Inherits from: <code
                                className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                  copiedItem === 'foreground-var' ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard('--foreground', 'foreground-var')}
                                title="Click to copy CSS variable"
                              >--foreground</code></div>
                              <div className="mt-1">
                                <code
                                  className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                    copiedItem === 'foreground-hex' ? 'bg-primary text-primary-foreground' : ''
                                  }`}
                                  id="foreground-hex-display"
                                  onClick={() => {
                                    const computedStyle = window.getComputedStyle(document.documentElement);
                                    const value = computedStyle.getPropertyValue('--foreground').trim();
                                    const hexValue = convertToHex(value);
                                    copyToClipboard(hexValue, 'foreground-hex');
                                  }}
                                  title="Click to copy hex value"
                                >
                                  Loading...
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Used for: Body text, headings, primary content
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-foreground">Secondary Text</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === 'muted-foreground-tile' ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: 'hsl(var(--muted-foreground))' }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue('--muted-foreground').trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, 'muted-foreground-tile');
                            }}
                            title="Click to copy hex value"
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <code
                                className={`text-sm text-muted-foreground font-medium cursor-pointer transition-all hover:text-primary ${
                                  copiedItem === 'muted-foreground-code' ? 'text-primary font-bold' : ''
                                }`}
                                onClick={() => copyToClipboard('text-muted-foreground', 'muted-foreground-code')}
                                title="Click to copy class name"
                              >
                                text-muted-foreground
                              </code>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <div>Inherits from: <code
                                className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                  copiedItem === 'muted-foreground-var' ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard('--muted-foreground', 'muted-foreground-var')}
                                title="Click to copy CSS variable"
                              >--muted-foreground</code></div>
                              <div className="mt-1">
                                <code
                                  className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                    copiedItem === 'muted-foreground-hex' ? 'bg-primary text-primary-foreground' : ''
                                  }`}
                                  id="muted-foreground-hex-display"
                                  onClick={() => {
                                    const computedStyle = window.getComputedStyle(document.documentElement);
                                    const value = computedStyle.getPropertyValue('--muted-foreground').trim();
                                    const hexValue = convertToHex(value);
                                    copyToClipboard(hexValue, 'muted-foreground-hex');
                                  }}
                                  title="Click to copy hex value"
                                >
                                  Loading...
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Used for: Descriptions, labels, secondary content
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-foreground">Interactive Text</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === 'primary-tile' ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: 'hsl(var(--primary))' }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue('--primary').trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, 'primary-tile');
                            }}
                            title="Click to copy hex value"
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <code
                                className={`text-sm text-primary font-medium cursor-pointer transition-all hover:text-primary/80 ${
                                  copiedItem === 'primary-code' ? 'text-primary/60 font-bold' : ''
                                }`}
                                onClick={() => copyToClipboard('text-primary', 'primary-code')}
                                title="Click to copy class name"
                              >
                                text-primary
                              </code>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <div>Inherits from: <code
                                className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                  copiedItem === 'primary-var' ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard('--primary', 'primary-var')}
                                title="Click to copy CSS variable"
                              >--primary</code></div>
                              <div className="mt-1">
                                <code
                                  className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                    copiedItem === 'primary-hex' ? 'bg-primary text-primary-foreground' : ''
                                  }`}
                                  id="primary-hex-display"
                                  onClick={() => {
                                    const computedStyle = window.getComputedStyle(document.documentElement);
                                    const value = computedStyle.getPropertyValue('--primary').trim();
                                    const hexValue = convertToHex(value);
                                    copyToClipboard(hexValue, 'primary-hex');
                                  }}
                                  title="Click to copy hex value"
                                >
                                  Loading...
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Used for: Links, active states, call-to-actions
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-foreground">Error/Warning Text</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === 'destructive-tile' ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: 'hsl(var(--destructive))' }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue('--destructive').trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, 'destructive-tile');
                            }}
                            title="Click to copy hex value"
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <code
                                className={`text-sm text-destructive font-medium cursor-pointer transition-all hover:text-destructive/80 ${
                                  copiedItem === 'destructive-code' ? 'text-destructive/60 font-bold' : ''
                                }`}
                                onClick={() => copyToClipboard('text-destructive', 'destructive-code')}
                                title="Click to copy class name"
                              >
                                text-destructive
                              </code>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <div>Inherits from: <code
                                className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                  copiedItem === 'destructive-var' ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard('--destructive', 'destructive-var')}
                                title="Click to copy CSS variable"
                              >--destructive</code></div>
                              <div className="mt-1">
                                <code
                                  className={`text-xs cursor-pointer transition-all hover:text-foreground px-2 py-0.5 rounded ${
                                    copiedItem === 'destructive-hex' ? 'bg-primary text-primary-foreground' : ''
                                  }`}
                                  id="destructive-hex-display"
                                  onClick={() => {
                                    const computedStyle = window.getComputedStyle(document.documentElement);
                                    const value = computedStyle.getPropertyValue('--destructive').trim();
                                    const hexValue = convertToHex(value);
                                    copyToClipboard(hexValue, 'destructive-hex');
                                  }}
                                  title="Click to copy hex value"
                                >
                                  Loading...
                                </code>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Used for: Error states, destructive actions, warnings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {/* Status Colors */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-foreground">Status Color Scales</h3>
                  {!isSimple && (
                    <p className="text-xs text-muted-foreground">Full color scales for status indicators. Use <code className="px-2 py-0.5 bg-muted rounded">bg-success-500</code>, <code className="px-2 py-0.5 bg-muted rounded">text-danger-600</code>, etc.</p>
                  )}
                  {['success', 'danger', 'info', 'warning'].map((family) => (
                    <div key={family} className="space-y-3">
                      <h4 className="text-sm font-medium capitalize text-foreground">{family}</h4>

                      {isSimple ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => {
                            const colorVar = `--${family}-${shade}`;
                            const colorName = `${family}-${shade}`;
                            return (
                              <SimpleColorCard
                                key={shade}
                                colorVar={colorVar}
                                colorName={colorName}
                                size={shade === 500 ? "normal" : "small"}
                              />
                            );
                          })}
                        </div>
                      ) : (
                      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => {
                          const colorVar = `--${family}-${shade}`;
                          const bgClass = `bg-${family}-${shade}`;
                          const textClass = `text-${family}-${shade}`;
                          return (
                            <div key={shade} className="flex flex-col items-center gap-2 p-2 border rounded">
                              <div
                                className={`w-8 h-8 rounded border cursor-pointer transition-all hover:scale-110 hover:shadow-md ${
                                  copiedItem === `${family}-${shade}-tile` ? 'ring-2 ring-primary animate-pulse' : ''
                                }`}
                                style={{ backgroundColor: `var(--${family}-${shade})` }}
                                onClick={() => {
                                  const computedStyle = window.getComputedStyle(document.documentElement);
                                  const value = computedStyle.getPropertyValue(`--${family}-${shade}`).trim();
                                  const hexValue = convertToHex(value);
                                  copyToClipboard(hexValue, `${family}-${shade}-tile`);
                                }}
                                title={`Click to copy ${colorVar} hex value`}
                              ></div>
                              <div
                                className={`text-xs text-foreground cursor-pointer transition-all hover:text-primary ${
                                  copiedItem === `${family}-${shade}-shade` ? 'text-primary font-bold' : ''
                                }`}
                                onClick={() => copyToClipboard(bgClass, `${family}-${shade}-shade`)}
                                title={`Click to copy ${bgClass}`}
                              >
                                {shade}
                              </div>
                              <div
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground ${
                                  copiedItem === `${family}-${shade}-hex` ? 'text-foreground font-medium' : ''
                                }`}
                                id={`${family}-${shade}-value`}
                                onClick={() => {
                                  const element = document.getElementById(`${family}-${shade}-value`);
                                  if (element?.textContent) {
                                    copyToClipboard(element.textContent, `${family}-${shade}-hex`);
                                  }
                                }}
                                title="Click to copy hex value"
                              >
                                {/* Color value will be populated by JavaScript */}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chart Colors */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-foreground">Chart Colors <span className="font-normal text-muted-foreground">(Not Venus)</span></h3>
                  {!isSimple && (
                    <p className="text-xs text-muted-foreground">Vibrant colors for charts, graphs, and data visualization. Use <code className="px-2 py-0.5 bg-muted rounded">bg-chart-rose</code>, <code className="px-2 py-0.5 bg-muted rounded">bg-chart-blue</code>, etc.</p>
                  )}

                  {isSimple ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                      {chartColorVars.map((colorVar) => {
                        const colorName = colorVar.replace('--', '');
                        return (
                          <SimpleColorCard
                            key={colorName}
                            colorVar={colorVar}
                            colorName={colorName}
                          />
                        );
                      })}
                    </div>
                  ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {chartColorVars.map((colorVar) => {
                      const colorName = colorVar.replace('--', '');
                      const bgClass = `bg-${colorName}`;
                      const elementId = colorName.replace(/-/g, '');
                      return (
                        <div key={colorName} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div
                            className={`w-12 h-12 rounded-lg border cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                              copiedItem === `${colorName}-tile` ? 'ring-2 ring-primary animate-pulse' : ''
                            }`}
                            style={{ backgroundColor: `var(--${colorName})` }}
                            onClick={() => {
                              const computedStyle = window.getComputedStyle(document.documentElement);
                              const value = computedStyle.getPropertyValue(`--${colorName}`).trim();
                              const hexValue = convertToHex(value);
                              copyToClipboard(hexValue, `${colorName}-tile`);
                            }}
                            title={`Click to copy hex value`}
                          ></div>
                          <div className="flex-1">
                            <div
                              className={`text-sm font-medium text-foreground cursor-pointer transition-all hover:text-primary ${
                                copiedItem === `${colorName}-var` ? 'text-primary font-bold' : ''
                              }`}
                              onClick={() => copyToClipboard(colorVar, `${colorName}-var`)}
                              title="Click to copy CSS variable name"
                            >
                              {colorVar}
                            </div>
                            <div
                              className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground ${
                                copiedItem === `${colorName}-hex` ? 'text-foreground font-medium' : ''
                              }`}
                              id={`${elementId}-value`}
                              onClick={() => {
                                const element = document.getElementById(`${elementId}-value`);
                                if (element?.textContent) {
                                  copyToClipboard(element.textContent, `${colorName}-hex`);
                                }
                              }}
                              title="Click to copy hex value"
                            >
                              {/* Color value will be populated by JavaScript */}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <code
                                className={`font-mono text-xs text-muted-foreground cursor-pointer transition-all hover:text-foreground hover:bg-muted px-2 py-0.5 rounded ${
                                  copiedItem === `${colorName}-bg` ? 'bg-primary text-primary-foreground' : ''
                                }`}
                                onClick={() => copyToClipboard(bgClass, `${colorName}-bg`)}
                                title="Click to copy class name"
                              >
                                {bgClass}
                              </code>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  )}
                </div>
            </div>
          </main>
        </div>
    </div>
  );
}
