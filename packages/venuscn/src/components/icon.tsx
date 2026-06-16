import * as React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  BookOpen,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Clipboard,
  Clock,
  Copy,
  CreditCard,
  Delete,
  Download,
  Edit,
  Edit2,
  ExternalLink,
  Eye,
  EyeOff,
  File,
  FileText,
  Filter,
  Flag,
  Folder,
  Globe,
  Grid,
  Heart,
  Home,
  Image,
  Info,
  Link,
  List,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Pencil,
  Phone,
  Play,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  Share,
  Shield,
  Slash,
  Star,
  Sun,
  Tag,
  Trash,
  Trash2,
  TrendingUp,
  Upload,
  User,
  UserPlus,
  Users,
  Video,
  X,
  XCircle,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { cn } from "../lib/utils";

/** Lookup map from icon name string to Lucide icon component. */
const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  "alert-circle": AlertCircle,
  "alert-triangle": AlertTriangle,
  archive: Archive,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  bell: Bell,
  "book-open": BookOpen,
  calendar: Calendar,
  check: Check,
  "check-circle": CheckCircle,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  circle: Circle,
  clipboard: Clipboard,
  clock: Clock,
  copy: Copy,
  "credit-card": CreditCard,
  delete: Delete,
  download: Download,
  edit: Edit,
  "edit-2": Edit2,
  "external-link": ExternalLink,
  eye: Eye,
  "eye-off": EyeOff,
  file: File,
  "file-text": FileText,
  filter: Filter,
  flag: Flag,
  folder: Folder,
  globe: Globe,
  grid: Grid,
  heart: Heart,
  home: Home,
  image: Image,
  info: Info,
  link: Link,
  list: List,
  lock: Lock,
  "log-out": LogOut,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  "message-circle": MessageCircle,
  "message-square": MessageSquare,
  minus: Minus,
  moon: Moon,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  package: Package,
  pencil: Pencil,
  phone: Phone,
  play: Play,
  plus: Plus,
  "refresh-cw": RefreshCw,
  search: Search,
  send: Send,
  settings: Settings,
  share: Share,
  shield: Shield,
  slash: Slash,
  star: Star,
  sun: Sun,
  tag: Tag,
  trash: Trash,
  "trash-2": Trash2,
  "trending-up": TrendingUp,
  upload: Upload,
  user: User,
  "user-plus": UserPlus,
  users: Users,
  video: Video,
  x: X,
  "x-circle": XCircle,
  "zoom-in": ZoomIn,
  "zoom-out": ZoomOut,
};

/** Visual size tokens for the Icon wrapper. */
export type IconSize = "sm" | "md" | "lg";

const sizeClasses: Record<IconSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Lucide icon name in kebab-case (e.g. `"chevron-right"`, `"alert-circle"`).
   * Unrecognised names render nothing.
   */
  name: string;
  /**
   * Visual size of the icon.
   * - `"sm"` – 16×16 px
   * - `"md"` – 20×20 px (default)
   * - `"lg"` – 24×24 px
   * @default "md"
   */
  size?: IconSize;
  /**
   * Tailwind text-color class or inline color value applied to the SVG.
   * Falls back to `currentColor` (inherits from parent) when not set.
   */
  color?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = "md", color, className, ...props }, ref) => {
    const LucideComp = iconMap[name];

    if (!LucideComp) {
      return null;
    }

    return (
      <LucideComp
        ref={ref}
        className={cn(sizeClasses[size], color, className)}
        aria-hidden="true"
        focusable="false"
        {...(props as React.SVGProps<SVGSVGElement>)}
      />
    );
  },
);

Icon.displayName = "Icon";
