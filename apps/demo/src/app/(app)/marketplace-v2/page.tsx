import { ContentHeader } from "./components/content-header"

export default function MarketplaceV2Page() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <ContentHeader />
      <div className="flex-1">
        {/* Hero and sections will be added in later tasks */}
        <div className="p-6">
          <p className="text-gray-500">Content sections coming next...</p>
        </div>
      </div>
    </div>
  )
}
