"use client"

export function ContentHeader() {
  return (
    <header className="flex items-center h-[90px] shrink-0 bg-[#F7F9FC] border-t border-b border-l border-[#DDE3EE] pl-[10px] pr-[20px]">
      {/* Collapse sidebar caret */}
      <button className="w-8 h-8 shrink-0 flex items-center justify-center cursor-pointer" aria-label="Toggle sidebar">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161"/>
        </svg>
      </button>

      {/* Title */}
      <h1 className="text-[20px] font-semibold text-[#222] leading-[30px] whitespace-nowrap ml-2">
        All Collections
      </h1>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Build New App button */}
      <button className="flex items-center gap-1.5 h-[32px] px-4 bg-[#6C5CE7] text-white text-[12px] font-medium leading-[18px] tracking-[0.24px] rounded-[4px] hover:bg-[#5A4BD1] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0">
        Build New App
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="white"/>
        </svg>
      </button>
    </header>
  )
}
