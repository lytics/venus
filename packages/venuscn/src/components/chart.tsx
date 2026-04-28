import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System Chart Component — lightweight CSS/SVG bar and line charts */

const CHART_COLORS = [
  "var(--chart-blue, #5a5ae8)",
  "var(--chart-sky, #5a9ae8)",
  "var(--chart-emerald, #5ae8a0)",
  "var(--chart-rose, #e85a8f)",
  "var(--chart-orange, #e88a5a)",
  "var(--chart-indigo, #8a5ae8)",
  "var(--chart-purple, #d85ae8)",
  "var(--chart-yellow, #e8d85a)",
];

export interface ChartDataPoint {
  /** Label displayed on the axis. */
  label: string;
  /** Numeric value for the bar or point. */
  value: number;
  /** Optional hex color override for this data point. */
  color?: string;
}

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chart type. @default "bar" */
  type?: "bar" | "line";
  /** Data points to render. */
  data: ChartDataPoint[];
  /** Height of the chart area in pixels. @default 200 */
  height?: number;
}

// ── Bar Chart ──────────────────────────────────────────────────────────────

function BarChart({
  data,
  height,
}: {
  data: ChartDataPoint[];
  height: number;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="flex items-end gap-2 w-full" style={{ height }}>
      {data.map((point, i) => {
        const pct = (point.value / max) * 100;
        const color = point.color ?? CHART_COLORS[i % CHART_COLORS.length];
        return (
          <div key={i} className="flex flex-col items-center gap-1 flex-1 min-w-0 h-full justify-end">
            <span className="text-xs font-medium text-[#374151] tabular-nums">
              {point.value}
            </span>
            <div
              className="w-full rounded-t-[2px] transition-all duration-300"
              style={{
                height: `${pct}%`,
                backgroundColor: color,
                minHeight: point.value > 0 ? "4px" : "0",
              }}
              role="img"
              aria-label={`${point.label}: ${point.value}`}
            />
            <span
              className="text-xs text-[#6B7280] truncate w-full text-center"
              title={point.label}
            >
              {point.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Line Chart ─────────────────────────────────────────────────────────────

function LineChart({
  data,
  height,
}: {
  data: ChartDataPoint[];
  height: number;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const min = Math.min(...data.map((d) => d.value), 0);
  const range = max - min || 1;

  const svgWidth = 600;
  const svgHeight = height - 28; // reserve space for x-axis labels
  const padX = 16;
  const padY = 12;
  const plotWidth = svgWidth - padX * 2;
  const plotHeight = svgHeight - padY * 2;

  const points = data.map((d, i) => ({
    x: padX + (i / Math.max(data.length - 1, 1)) * plotWidth,
    y: padY + plotHeight - ((d.value - min) / range) * plotHeight,
    d,
  }));

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");
  const lineColor = "var(--chart-blue, #5a5ae8)";

  return (
    <div className="flex flex-col" style={{ height }}>
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full flex-1"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
          const y = padY + t * plotHeight;
          return (
            <line
              key={i}
              x1={padX}
              y1={y}
              x2={svgWidth - padX}
              y2={y}
              stroke="rgba(113,128,150,0.15)"
              strokeWidth="1"
            />
          );
        })}

        {/* Polyline */}
        <polyline
          points={polylinePoints}
          fill="none"
          stroke={lineColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fill area */}
        <polygon
          points={`${points[0]?.x ?? padX},${padY + plotHeight} ${polylinePoints} ${points[points.length - 1]?.x ?? svgWidth - padX},${padY + plotHeight}`}
          fill={lineColor}
          fillOpacity="0.08"
        />

        {/* Dots */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="white"
            stroke={p.d.color ?? lineColor}
            strokeWidth="2"
          >
            <title>{`${p.d.label}: ${p.d.value}`}</title>
          </circle>
        ))}
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between px-4 mt-1">
        {data.map((d, i) => (
          <span
            key={i}
            className="text-xs text-[#6B7280] truncate flex-1 text-center"
            title={d.label}
          >
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Chart (public) ─────────────────────────────────────────────────────────

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ type = "bar", data, height = 200, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        {type === "line" ? (
          <LineChart data={data} height={height} />
        ) : (
          <BarChart data={data} height={height} />
        )}
      </div>
    );
  }
);

Chart.displayName = "Chart";
