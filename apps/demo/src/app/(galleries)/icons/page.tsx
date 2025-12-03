"use client";

import { useState, useEffect, useRef } from "react";
import { AdminNav } from "@/components/admin-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Copy, Check, RefreshCw, Square, LayoutGrid, AlertTriangle } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Curated list of icons relevant for app/components/database/search applications
// Lucide icons are ISC licensed (permissive, similar to MIT)
const CURATED_ICONS = [
  // Navigation & UI
  "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ArrowUpRight", "ArrowDownRight", "ArrowUpLeft", "ArrowDownLeft",
  "ArrowBigLeft", "ArrowBigRight", "ArrowBigUp", "ArrowBigDown",
  "ChevronLeft", "ChevronRight", "ChevronUp", "ChevronDown", "ChevronsLeft", "ChevronsRight", "ChevronsUp", "ChevronsDown", "ChevronsUpDown",
  "Menu", "MenuSquare", "MoreHorizontal", "MoreVertical", "Minimize", "Maximize", "Minimize2", "Maximize2",
  "Move", "MoveHorizontal", "MoveVertical", "MoveDiagonal", "MoveDiagonal2",
  "PanelLeft", "PanelRight", "PanelTop", "PanelBottom", "PanelLeftOpen", "PanelRightOpen", "PanelTopOpen", "PanelBottomOpen",
  "Sidebar", "SidebarClose", "SidebarOpen",
  "Home", "Layout", "LayoutDashboard", "LayoutGrid", "LayoutList", "LayoutTemplate", "Columns", "Rows",
  "AlignHorizontalDistributeCenter", "AlignHorizontalJustifyCenter", "AlignVerticalDistributeCenter", "AlignVerticalJustifyCenter",

  // Actions & Operations
  "Plus", "PlusCircle", "PlusSquare", "Minus", "MinusCircle", "MinusSquare",
  "X", "XCircle", "XSquare", "Check", "CheckCircle", "CheckCircle2", "CheckSquare",
  "Edit", "Edit2", "Edit3", "Pencil", "PencilLine", "PencilRuler", "Pen", "PenTool",
  "Trash", "Trash2", "Delete",
  "Save", "SaveAll", "Download", "DownloadCloud", "Upload", "UploadCloud",
  "Copy", "CopyCheck", "CopyPlus", "CopyMinus", "CopyX",
  "Clipboard", "ClipboardCopy", "ClipboardCheck", "ClipboardList", "ClipboardPaste",
  "Undo", "Undo2", "Redo", "Redo2", "RotateCw", "RotateCcw", "Rotate3d",
  "RefreshCw", "RefreshCcw",
  "Play", "PlayCircle", "Pause", "PauseCircle", "Square", "StopCircle",
  "FastForward", "Rewind", "SkipForward", "SkipBack",
  "Circle", "CircleDot", "CircleFadingArrowUp", "Triangle", "Octagon", "Hexagon", "Pentagon",

  // Search & Filter
  "Search", "SearchCheck", "SearchX", "Filter", "FilterX",
  "ScanSearch",
  "SlidersHorizontal", "SlidersVertical", "Settings", "Settings2", "SettingsIcon", "Tool",
  "Sliders", "ListFilter", "SortAsc", "SortDesc",

  // Data & Database
  "Database", "DatabaseBackup", "Server", "ServerCog", "ServerOff",
  "HardDrive", "HardDriveDownload", "HardDriveUpload",
  "Table", "Table2", "TableProperties",
  "FileText", "File", "Files", "FileCode", "FileCode2", "FileJson", "FileJson2",
  "FilePlus", "FileMinus", "FileEdit", "FileCheck", "FileX", "FileOutput", "FileInput",
  "FileSpreadsheet", "FileSearch", "FileSearch2", "FileClock", "FileWarning", "TextSearch",
  "FolderOpen", "Folder", "FolderPlus", "FolderMinus", "FolderEdit", "FolderTree",
  "FolderCheck", "FolderX", "FolderClock", "FolderSearch", "FolderSearch2",
  "Archive", "ArchiveRestore", "ArchiveX",
  "Package", "Package2", "PackageOpen", "PackagePlus", "PackageMinus", "PackageCheck", "PackageX", "PackageSearch",

  // Users & Authentication
  "User", "UserPlus", "UserMinus", "UserCheck", "UserX", "Users", "UsersRound",
  "UserRound", "UserRoundPlus", "UserRoundMinus", "UserRoundSearch",
  "UserCircle", "UserCircle2", "CircleUserRound",
  "UserSquare", "UserSquare2", "SquareUserRound", "UserCog", "UserCog2",
  "Contact", "Contact2", "ContactRound", "Contacts",
  "LogIn", "LogOut", "Lock", "LockOpen", "Unlock", "LockKeyhole",
  "Key", "KeyRound", "KeySquare",
  "Shield", "ShieldCheck", "ShieldAlert", "ShieldX", "ShieldQuestion", "ShieldOff", "ShieldUser",
  "Fingerprint", "Eye", "EyeOff", "ScanFace", "ScanLine",

  // Status & Alerts
  "AlertCircle", "AlertTriangle", "AlertOctagon", "AlertSquare",
  "Info", "HelpCircle", "CircleAlert", "LifeBuoy",
  "Bell", "BellOff", "BellRing", "BellPlus", "BellMinus", "BellDot",
  "XOctagon",
  "Loader", "Loader2", "LoaderCircle",
  "Timer", "TimerOff", "TimerReset", "Clock", "Clock1", "Clock2", "Clock3", "Clock4", "Clock5", "Clock6", "Clock7", "Clock8", "Clock9", "Clock10", "Clock11", "Clock12",

  // Charts & Analytics
  "BarChart", "BarChart2", "BarChart3", "BarChart4", "BarChartHorizontal",
  "LineChart", "PieChart", "TrendingUp", "TrendingDown", "TrendingUpDown",
  "Activity", "Gauge", "GaugeCircle",
  "AreaChart", "CandlestickChart",

  // Communication
  "Mail", "MailOpen", "MailPlus", "MailMinus", "MailCheck", "MailX", "MailWarning",
  "Send", "SendHorizontal", "SendToBack",
  "MessageSquare", "MessageSquarePlus", "MessageSquareText", "MessageSquareWarning",
  "MessageCircle", "MessageCircleCode", "MessageCircleQuestion",
  "Phone", "PhoneCall", "PhoneIncoming", "PhoneOutgoing", "PhoneMissed", "PhoneOff", "PhoneForwarded",
  "AtSign", "Link", "Link2", "Unlink", "Unlink2",
  "Share", "Share2", "Forward", "Reply", "ReplyAll",
  "Inbox", "Outbox",

  // Calendar & Time
  "Calendar", "CalendarDays", "CalendarClock", "CalendarCheck", "CalendarCheck2",
  "CalendarPlus", "CalendarMinus", "CalendarX", "CalendarX2",
  "CalendarRange", "CalendarSearch", "CalendarHeart",
  "Hourglass",

  // Documents & Content
  "ScrollText", "Scroll", "Sheet", "Newspaper",
  "BookOpen", "BookOpenCheck", "BookOpenText", "Book", "BookCheck", "BookMarked", "BookCopy",
  "Library", "LibraryBig", "SquareLibrary",
  "Bookmark", "BookmarkPlus", "BookmarkMinus", "BookmarkCheck", "BookmarkX",
  "StickyNote", "NotebookPen", "NotebookText", "SquarePen",
  "FileType", "FileType2",

  // Media & Images
  "Image", "ImagePlus", "ImageMinus", "ImageOff", "Images", "ImageDown", "ImageUp",
  "Gallery", "GalleryHorizontal", "GalleryVerticalEnd",
  "Camera", "CameraOff", "Video", "VideoOff",
  "Film", "Clapperboard", "MonitorPlay",

  // Commerce & Finance
  "ShoppingCart", "ShoppingBag", "Store",
  "CreditCard", "Wallet", "Coins", "Banknote",
  "DollarSign", "Euro", "PoundSterling", "Receipt",
  "Tag", "Tags", "Percent", "BadgeDollarSign", "BadgePercent",

  // Code & Development
  "Code", "Code2", "CodeSquare", "CodeXml",
  "Terminal", "SquareTerminal",
  "Braces", "Brackets", "Binary",
  "Bug", "BugOff", "BugPlay",
  "GitBranch", "GitBranchPlus", "GitCommit", "GitCommitHorizontal", "GitCommitVertical",
  "GitMerge", "GitPullRequest", "GitPullRequestDraft", "GitPullRequestClosed",
  "GitFork", "GitCompare", "Github",

  // System & Tools
  "Cog", "Wrench", "Hammer", "Drill", "Microscope",
  "Plug", "PlugZap", "Cable", "Power", "PowerOff",
  "Wifi", "WifiOff", "WifiZero",
  "Signal", "SignalHigh", "SignalLow", "SignalMedium", "SignalZero",
  "Battery", "BatteryCharging", "BatteryFull", "BatteryLow", "BatteryMedium", "BatteryWarning",
  "Bluetooth", "BluetoothConnected", "BluetoothOff", "BluetoothSearching",
  "Cast", "Airplay", "MonitorSpeaker", "Dock",
  "Shredder",

  // Location & Map
  "MapPin", "MapPinOff", "Map", "Navigation", "Navigation2", "NavigationOff",
  "Compass", "Globe", "Earth",
  "Route", "RouteOff", "Milestone",

  // Shapes & Design
  "Star", "StarHalf", "StarOff", "Heart", "HeartOff", "Sparkles", "Sparkle",
  "Palette", "Pipette", "Paintbrush", "Paintbrush2",
  "Ruler", "Scissors", "Layers", "Layers2", "Layers3",
  "Box", "Boxes", "Container", "Cone",
  "Grid", "Grid2x2", "Grid3x3",
  "RectangleHorizontal", "RectangleEllipsis",

  // Text & Typography
  "Type", "Text", "TextCursor", "TextCursorInput", "TextQuote",
  "Bold", "Italic", "Underline", "Strikethrough",
  "AlignLeft", "AlignCenter", "AlignRight", "AlignJustify",
  "AlignStartVertical", "AlignCenterVertical", "AlignEndVertical",
  "AlignStartHorizontal", "AlignCenterHorizontal", "AlignEndHorizontal",
  "List", "ListOrdered", "ListChecks", "ListTree", "ListMinus", "ListPlus", "ListX",
  "Heading", "Heading1", "Heading2", "Heading3", "Heading4", "Heading5", "Heading6",
  "Quote", "WholeWord", "CaseSensitive", "Pilcrow",

  // Organization
  "Briefcase", "Building", "Building2", "Warehouse", "Factory",
  "Hotel", "School", "Hospital",

  // Utility
  "Zap", "ZapOff", "Flame", "FlameKindling",
  "Target", "Focus", "Crosshair",
  "QrCode", "Barcode", "ScanBarcode", "Scan",
  "Printer", "PrinterCheck",
  "Monitor", "MonitorCheck", "MonitorDot", "MonitorOff",
  "Smartphone", "TabletSmartphone", "Tablet", "Laptop", "Watch",
  "Fullscreen", "FullscreenExit",
  "Expand", "Shrink", "ZoomIn", "ZoomOut",
  "Volume", "Volume1", "Volume2", "VolumeX",
  "Mic", "MicOff",

  // Directional
  "MoveUp", "MoveDown", "MoveLeft", "MoveRight",
  "CornerUpLeft", "CornerUpRight", "CornerDownLeft", "CornerDownRight",
  "CornerLeftUp", "CornerLeftDown", "CornerRightUp", "CornerRightDown",

  // Special
  "Flag", "FlagOff", "FlagTriangleLeft", "FlagTriangleRight",
  "Pin", "PinOff", "Paperclip",
  "Hash", "Ampersand", "Asterisk",
  "Grip", "GripHorizontal", "GripVertical",
  "Award", "Trophy", "Medal", "Crown",
  "ThumbsUp", "ThumbsDown",
  "Verified", "BadgeCheck", "BadgeAlert", "BadgeInfo", "BadgeHelp", "BadgeX",
  "Moon", "Sun", "Ghost",
  "Command",
  "History",
  "TreePine",
];

const ICON_CATEGORIES = {
  "All": CURATED_ICONS,
  "Navigation": ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ArrowUpRight", "ArrowDownRight", "ChevronLeft", "ChevronRight", "ChevronUp", "ChevronDown", "ChevronsUpDown", "Menu", "Home", "PanelLeft", "Sidebar"],
  "Actions": ["Plus", "Minus", "X", "Check", "Edit", "Trash", "Save", "Download", "Upload", "Copy", "Clipboard", "Undo", "Redo", "RefreshCw", "Play", "Pause"],
  "Data": ["Database", "Server", "HardDrive", "Table", "File", "Files", "FileSearch", "FileSearch2", "Folder", "Archive", "Package", "FileJson", "FileCode", "TextSearch", "Book", "Library"],
  "Users": ["User", "Users", "UserPlus", "UserCheck", "UserCircle", "UserRound", "UserRoundPlus", "UserRoundSearch", "Contact", "ContactRound", "LogIn", "LogOut", "Lock", "Shield", "ShieldUser"],
  "Status": ["AlertCircle", "AlertTriangle", "Info", "HelpCircle", "Bell", "CheckCircle", "XCircle", "Loader", "Clock"],
  "Charts": ["BarChart", "BarChart3", "LineChart", "PieChart", "TrendingUp", "TrendingDown", "Activity"],
  "Communication": ["Mail", "Send", "MessageSquare", "Phone", "Link", "Share"],
  "Calendar": ["Calendar", "CalendarDays", "Clock", "Timer", "Hourglass"],
  "Search": ["Search", "SearchCheck", "SearchX", "ScanSearch", "Filter", "SlidersHorizontal", "Settings"],
  "Code": ["Code", "Terminal", "Bug", "GitBranch", "Braces"],
};

export default function IconsPage() {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [usedIcons, setUsedIcons] = useState<Set<string>>(new Set());
  const [isScanning, setIsScanning] = useState(false);
  const [isFixing, setIsFixing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"full" | "condensed">("condensed");
  const hasScanned = useRef(false);

  const scanUsedIcons = async () => {
    setIsScanning(true);
    try {
      const response = await fetch('/api/icons/scan');
      const data = await response.json();
      setUsedIcons(new Set(data.usedIcons));
      toast.success(`Found ${data.usedIcons.length} icons in use`);
    } catch (error) {
      toast.error('Failed to scan for used icons');
    } finally {
      setIsScanning(false);
    }
  };

  const addToCuratedList = async () => {
    setIsFixing(true);
    try {
      const response = await fetch('/api/icons/add-to-curated', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ icons: nonCuratedUsedIcons }),
      });

      if (!response.ok) {
        throw new Error('Failed to add icons');
      }

      const data = await response.json();
      toast.success(`${data.addedCount} ${data.addedCount === 1 ? 'icon has' : 'icons have'} been added to the curated list!`);

      // Refresh the page to show updated curated list
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error('Failed to add icons to curated list');
    } finally {
      setIsFixing(false);
    }
  };

  useEffect(() => {
    if (!hasScanned.current) {
      hasScanned.current = true;
      scanUsedIcons();
    }
  }, []);

  const copyToClipboard = async (text: string, iconName: string, type: 'name' | 'import') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIcon(`${iconName}-${type}`);
      toast.success(type === 'name' ? 'Icon name copied!' : 'Import statement copied!');

      setTimeout(() => {
        setCopiedIcon(null);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  // Get icons for current category
  const categoryIcons = ICON_CATEGORIES[categoryFilter as keyof typeof ICON_CATEGORIES] || CURATED_ICONS;

  // Filter icons based on search and category, and ensure they exist in LucideIcons
  const filteredIcons = categoryIcons.filter(iconName => {
    const exists = iconName in LucideIcons;
    const matchesSearch = iconName.toLowerCase().includes(searchQuery.toLowerCase());
    return exists && matchesSearch;
  });

  const usedIconsFiltered = filteredIcons.filter(icon => usedIcons.has(icon));
  const unusedIconsFiltered = filteredIcons.filter(icon => !usedIcons.has(icon));

  // Count of used icons that are in the curated list (regardless of filters)
  const usedCuratedCount = CURATED_ICONS.filter(icon => usedIcons.has(icon)).length;

  // Find icons that are used but not in the curated list
  // Exclude TypeScript types and non-icon imports from lucide-react
  const typeOnlyImports = ['LucideIcon', 'LucideProps', 'Icon', 'IconNode'];
  const nonCuratedUsedIcons = Array.from(usedIcons).filter(icon =>
    !CURATED_ICONS.includes(icon) && !typeOnlyImports.includes(icon)
  );

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

        <div className="container mx-auto py-8 px-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Icons</h1>
                <p className="text-muted-foreground mt-2 text-sm">
                  Curated Lucide React icons for business applications. Click the icon name to copy it, or click "Copy Import" to copy the import statement.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">
                    {CURATED_ICONS.length} curated icons
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-foreground text-background">
                    {usedCuratedCount} in use
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {CURATED_ICONS.length - usedCuratedCount} available
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-2 text-xs">
                  Your codebase uses {usedIcons.size} total icons. {usedCuratedCount} are in the curated list, {usedIcons.size - usedCuratedCount} are not.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <Switch
                    id="view-mode"
                    checked={viewMode === "condensed"}
                    onCheckedChange={(checked) => setViewMode(checked ? "condensed" : "full")}
                  />
                  <LayoutGrid className="h-5 w-5 text-muted-foreground" />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scanUsedIcons}
                  disabled={isScanning}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isScanning ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Input
                  placeholder="Search icons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-3"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(ICON_CATEGORIES).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {(searchQuery || categoryFilter !== "All") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("All");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>

            {nonCuratedUsedIcons.length > 0 && (
              <Card className="border-warning">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      Non-Curated Icons ({nonCuratedUsedIcons.length})
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addToCuratedList}
                      disabled={isFixing}
                    >
                      {isFixing ? 'Adding...' : 'Fix'}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    These icons are used in your codebase but are not part of the curated list. Consider adding them to the curated list if they're commonly used.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nonCuratedUsedIcons.map((iconName) => (
                      <Badge key={iconName} variant="outline" className="text-xs border-warning text-warning">
                        {iconName}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {usedIconsFiltered.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">In Use ({usedIconsFiltered.length})</h2>
                  <p className="text-sm text-muted-foreground">Icons currently imported in the project</p>
                </div>
                <TooltipProvider delayDuration={300}>
                  <div className={`grid ${viewMode === 'condensed' ? 'gap-2 grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12' : 'gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
                    {usedIconsFiltered.map((iconName) => {
                    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as any;
                    if (!IconComponent) return null;
                    const importStatement = `import { ${iconName} } from "lucide-react"`;

                    if (viewMode === 'condensed') {
                      return (
                        <Tooltip key={iconName}>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => copyToClipboard(iconName, iconName, 'name')}
                              className="group border rounded-[calc(var(--radius)-2px)] cursor-pointer aspect-square overflow-hidden p-2 flex items-center justify-center hover:!border-foreground transition-all"
                            >
                              <IconComponent className="w-5 h-5 text-foreground" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{iconName}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    return (
                      <Card key={iconName} className="group border">
                        <CardContent className="px-6 py-6 flex flex-col items-center justify-center gap-4">
                          <button
                            onClick={() => copyToClipboard(iconName, iconName, 'name')}
                            className="flex items-center justify-center w-16 h-16 hover:opacity-80 transition-opacity"
                            title="Click to copy icon name"
                          >
                            <IconComponent className="w-8 h-8 text-foreground" />
                          </button>

                          <button
                            onClick={() => copyToClipboard(iconName, iconName, 'name')}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors text-center w-full flex items-center justify-center gap-1.5"
                          >
                            {copiedIcon === `${iconName}-name` ? (
                              <span className="text-success-600 dark:text-success-400 flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                Copied!
                              </span>
                            ) : (
                              <>
                                <span className="truncate">{iconName}</span>
                                <Copy className="w-3 h-3 flex-shrink-0" />
                              </>
                            )}
                          </button>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-auto text-xs h-7"
                            onClick={() => copyToClipboard(importStatement, iconName, 'import')}
                          >
                            {copiedIcon === `${iconName}-import` ? (
                              <>
                                <Check className="w-3 h-3 mr-1" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <span>Copy Import</span>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                  </div>
                </TooltipProvider>
              </div>
            )}

            {unusedIconsFiltered.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">Available ({unusedIconsFiltered.length})</h2>
                  <p className="text-sm text-muted-foreground">Icons available to import</p>
                </div>
                <TooltipProvider delayDuration={300}>
                  <div className={`grid ${viewMode === 'condensed' ? 'gap-2 grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12' : 'gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
                    {unusedIconsFiltered.map((iconName) => {
                    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as any;
                    if (!IconComponent) return null;
                    const importStatement = `import { ${iconName} } from "lucide-react"`;

                    if (viewMode === 'condensed') {
                      return (
                        <Tooltip key={iconName}>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => copyToClipboard(iconName, iconName, 'name')}
                              className="group border rounded-[calc(var(--radius)-2px)] cursor-pointer aspect-square overflow-hidden p-2 flex items-center justify-center hover:!border-foreground transition-all"
                            >
                              <IconComponent className="w-5 h-5 text-muted-foreground" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{iconName}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    return (
                      <Card key={iconName} className="group border">
                        <CardContent className="px-6 pt-8 pb-6 flex flex-col items-center justify-center gap-4">
                          <button
                            onClick={() => copyToClipboard(iconName, iconName, 'name')}
                            className="flex items-center justify-center w-16 h-16 hover:opacity-80 transition-opacity"
                            title="Click to copy icon name"
                          >
                            <IconComponent className="w-8 h-8 text-muted-foreground" />
                          </button>

                          <button
                            onClick={() => copyToClipboard(iconName, iconName, 'name')}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors text-center w-full flex items-center justify-center gap-1.5"
                          >
                            {copiedIcon === `${iconName}-name` ? (
                              <span className="text-success-600 dark:text-success-400 flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                Copied!
                              </span>
                            ) : (
                              <>
                                <span className="truncate">{iconName}</span>
                                <Copy className="w-3 h-3 flex-shrink-0" />
                              </>
                            )}
                          </button>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-auto text-xs h-7"
                            onClick={() => copyToClipboard(importStatement, iconName, 'import')}
                          >
                            {copiedIcon === `${iconName}-import` ? (
                              <>
                                <Check className="w-3 h-3 mr-1" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <span>Copy Import</span>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                  </div>
                </TooltipProvider>
              </div>
            )}

            {filteredIcons.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No icons found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
