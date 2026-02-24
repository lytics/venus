"use client";

import { Fragment } from "react";

export default function MarketplaceV7Page() {
  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes MKT-Banner_show {
          0% { display: none; opacity: 0; }
          100% { opacity: 1; }
        }
      `}} />
      
      <div className="h-full text-black leading-none overflow-x-hidden bg-[oklch(95.7%_0.009_258.3)]" style={{"--top-nav-height":"3.5rem","--breadcrumb-height":"2rem","--trial-banner-height":"2rem","fontFamily":"Inter, sans-serif"}}>
        <div id="root">
          <div>
            <div>
              <div>
                <div tabIndex="-1" id="topnav" className="hidden">
                  <div className="flex flex-col justify-between fixed top-0 w-full h-14 bg-white z-[12]" style={{"fontFamily":"Inter"}}>
                    <div id="header-content-wrapper-id" className="flex">
                      <nav className="w-full ml-3">
                        <div className="flex items-center relative w-full h-14">
                          <div className="flex items-center w-fit bg-white rounded">
                            <button data-test-id="cs-marketplace-button" id="TopNavbar__content__product__button__with_svg" aria-label="marketplace" type="button" role="link" className="flex items-center relative min-w-8 min-h-10 max-h-10 pr-2 font-semibold text-center leading-none bg-white duration-150 cursor-pointer align-middle rounded pl-[5px] text-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:pr-2 hover:bg-[oklch(98.1%_0.005_258.3)] hover:pl-[0.3125rem] hover:text-[oklch(50.5%_0.166_284.1)] focus:pr-2 focus:bg-[oklch(98.1%_0.005_258.3)] focus:pl-[0.3125rem] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"fontVariationSettings":"\"slnt\" 0"}}>
                              <div className="flex justify-center items-center">
                                <div className="flex items-center -mt-px">
                                  <div data-test-id="TopNavbar__content__product__button-svg-logo" className="flex items-center">
                                    <svg width="115" height="32" viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="ProductLogoMarketplace" data-test-id="cs-icon">
                                      <mask id="ProductLogoMarketplace_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" style={{"maskType":"alpha"}}>
                                        <path fill="#D9D9D9" d="M0 0h32v32H0z" className="hover:stroke-[oklch(50.5%_0.166_284.1)]" style={{"stroke":"none"}}>
                                        </path>
                                      </mask>
                                      <g mask="url(#ProductLogoMarketplace_svg__a)">
                                        <mask id="ProductLogoMarketplace_svg__b" maskUnits="userSpaceOnUse" x="2" y="0" width="29" height="29" style={{"maskType":"alpha"}}>
                                          <path fill="#D9D9D9" d="M2.334.141h28v28h-28z" className="hover:stroke-[oklch(50.5%_0.166_284.1)]" style={{"stroke":"none"}}>
                                          </path>
                                        </mask>
                                        <g mask="url(#ProductLogoMarketplace_svg__b)">
                                          <mask id="ProductLogoMarketplace_svg__c" maskUnits="userSpaceOnUse" x="2" y="2" width="28" height="28" style={{"maskType":"alpha"}}>
                                            <path fill="#D9D9D9" d="M2 2h28v28H2z" className="hover:stroke-[oklch(50.5%_0.166_284.1)]" style={{"stroke":"none"}}>
                                            </path>
                                          </mask>
                                          <g mask="url(#ProductLogoMarketplace_svg__c)">
                                            <path d="M5.996 9.001V5.326h20.008v3.675H5.996zm-.01 17.675v-7H4.684v-3.675l1.312-5.833h20.008L27.317 16v3.675h-1.313v7H22.33v-7h-3.325v7H5.986zm3.685-3.675h5.658v-3.325H9.671v3.325z" fill="url(#ProductLogoMarketplace_svg__paint0_linear_11830_10530)" className="hover:stroke-[oklch(50.5%_0.166_284.1)]" style={{"stroke":"none"}}>
                                            </path>
                                          </g>
                                        </g>
                                      </g>
                                      <path d="M44.188 13.131c-.496 0-.974-.09-1.433-.273a3.681 3.681 0 01-1.192-.798 3.89 3.89 0 01-.809-1.258 4.5 4.5 0 01-.295-1.672c0-.613.102-1.163.306-1.651.204-.496.478-.911.82-1.247a3.737 3.737 0 012.602-1.05c.445 0 .86.063 1.247.187.394.123.736.302 1.028.535.298.226.546.503.743.831.197.32.328.678.394 1.072H46.34a1.962 1.962 0 00-.765-1.083c-.379-.277-.842-.415-1.389-.415-.335 0-.648.069-.94.208-.291.13-.547.32-.765.568-.212.24-.38.536-.503.886a3.391 3.391 0 00-.186 1.159c0 .43.062.823.186 1.18.124.35.291.653.503.908.218.248.474.44.765.58.292.138.605.207.94.207.547 0 1.006-.135 1.378-.405.372-.27.634-.634.787-1.093h1.258a3.1 3.1 0 01-.416 1.104 2.96 2.96 0 01-.743.82c-.292.226-.63.401-1.017.525a4.294 4.294 0 01-1.246.175zm7.242-.01c-.4 0-.78-.07-1.137-.209a2.76 2.76 0 01-.919-.59 2.968 2.968 0 01-.612-.951 3.245 3.245 0 01-.23-1.247c0-.437.077-.834.23-1.191.153-.365.357-.67.612-.919a2.76 2.76 0 01.919-.59 2.98 2.98 0 011.137-.219c.408 0 .787.07 1.137.208.357.139.663.335.918.59.263.248.467.554.613.919.153.364.23.765.23 1.202 0 .452-.077.864-.23 1.236-.153.372-.361.689-.623.951a2.876 2.876 0 01-2.045.81zm0-1.04c.496 0 .9-.178 1.214-.535.313-.365.47-.838.47-1.421 0-.547-.157-.995-.47-1.345-.314-.357-.718-.536-1.214-.536-.503 0-.911.179-1.225.536-.306.35-.459.798-.459 1.345 0 .575.157 1.046.47 1.41.314.364.718.547 1.214.547zm5.395-2.197V13h-1.18V7.337h1.169v.7c.175-.263.408-.467.7-.613.291-.146.623-.219.995-.219.627 0 1.122.197 1.487.59.371.387.557.945.557 1.674V13h-1.18V9.61c0-.415-.11-.746-.329-.994-.218-.255-.52-.383-.907-.383-.35 0-.656.139-.919.416-.262.27-.393.681-.393 1.235zm7.171 3.127c-.444 0-.809-.098-1.093-.295-.277-.197-.415-.605-.415-1.225V8.288h-.984v-.951h.984V5.98h1.17v1.356h1.355v.95h-1.355v3.04c0 .306.05.503.153.59.109.088.273.132.492.132h.71v.94c-.204.007-.371.011-.503.011-.124.007-.295.01-.514.01zm7.245-1.63a2.244 2.244 0 01-.404.788 2.343 2.343 0 01-.635.536c-.233.138-.488.24-.765.306-.277.073-.554.11-.83.11-.394 0-.766-.07-1.116-.209a2.76 2.76 0 01-.918-.59 2.755 2.755 0 01-.624-.94 3.278 3.278 0 01-.23-1.258c0-.444.077-.845.23-1.202.16-.365.368-.674.624-.93.262-.255.56-.448.896-.579a2.855 2.855 0 012.11-.01c.336.123.627.313.875.568.255.247.46.565.612.95.153.387.23.832.23 1.335v.273h-4.363c.051.488.24.875.569 1.159.328.284.707.426 1.137.426.284 0 .558-.054.82-.164a1.17 1.17 0 00.601-.568h1.181zm-2.733-3.18c-.401 0-.755.123-1.06.371-.3.248-.475.587-.526 1.017h3.138c-.029-.416-.19-.751-.48-1.006-.292-.255-.65-.383-1.072-.383zm5.27 1.683V13h-1.182V7.337h1.17v.7c.175-.263.408-.467.7-.613.291-.146.623-.219.995-.219.627 0 1.122.197 1.487.59.372.387.557.945.557 1.674V13h-1.18V9.61c0-.415-.11-.746-.328-.994-.219-.255-.522-.383-.908-.383-.35 0-.656.139-.918.416-.263.27-.394.681-.394 1.235zm7.17 3.127c-.444 0-.808-.098-1.093-.295-.277-.197-.415-.605-.415-1.225V8.288h-.984v-.951h.984V5.98h1.17v1.356h1.356v.95H80.61v3.04c0 .306.05.503.153.59.11.088.273.132.492.132h.71v.94c-.204.007-.371.011-.502.011-.124.007-.296.01-.514.01zm4.323.12c-.321 0-.627-.04-.919-.12a2.622 2.622 0 01-.765-.35 2.06 2.06 0 01-.547-.601 2.019 2.019 0 01-.262-.853h1.137c.05.335.207.58.47.732.262.146.565.22.907.22.292 0 .558-.06.799-.176.24-.116.36-.299.36-.546 0-.226-.105-.394-.317-.503-.211-.117-.514-.212-.907-.285l-.558-.098c-.546-.095-.977-.273-1.29-.536-.313-.262-.47-.612-.47-1.05 0-.276.058-.524.175-.743.116-.219.273-.404.47-.557.204-.154.44-.27.71-.35.27-.08.555-.12.853-.12.292 0 .573.04.842.12.27.073.507.186.711.339.211.145.383.328.514.546.138.219.226.467.262.744H86.32a.917.917 0 00-.437-.58c-.219-.13-.485-.197-.798-.197-.3 0-.55.066-.755.197-.204.124-.306.292-.306.503a.47.47 0 00.252.438c.167.094.419.17.754.23l.558.098c.605.109 1.09.295 1.454.557.364.255.546.63.546 1.126 0 .292-.065.55-.196.776a1.666 1.666 0 01-.514.57c-.212.152-.46.269-.744.349a3.09 3.09 0 01-.864.12zm5.431-.12c-.445 0-.809-.098-1.093-.295-.277-.197-.416-.605-.416-1.225V8.288h-.984v-.951h.984V5.98h1.17v1.356h1.356v.95h-1.356v3.04c0 .306.051.503.153.59.11.088.273.132.492.132h.71v.94c-.203.007-.37.011-.502.011-.124.007-.295.01-.514.01zM96.457 13l-.021-.743a1.88 1.88 0 01-.733.634c-.299.153-.66.23-1.082.23-.263 0-.518-.037-.766-.11a2.11 2.11 0 01-.656-.317 1.673 1.673 0 01-.459-.547 1.579 1.579 0 01-.175-.754c0-.613.233-1.05.7-1.312.474-.263 1.079-.452 1.815-.569l1.279-.207V9.25c0-.394-.106-.674-.317-.842-.204-.168-.489-.251-.853-.251-.357 0-.645.083-.864.251-.218.168-.36.408-.426.722H92.75c.073-.59.343-1.057.809-1.4.466-.35 1.024-.525 1.673-.525.328 0 .63.037.907.11.284.073.529.19.733.35.204.16.36.375.47.645.117.262.175.586.175.973l-.022 2.58c0 .087.004.215.01.383.008.16.023.411.045.754h-1.094zm-2.722-1.662a.71.71 0 00.306.612c.211.139.478.208.798.208.416 0 .773-.127 1.072-.383.299-.255.448-.634.448-1.137v-.404c-.926.117-1.596.248-2.012.393-.408.139-.612.376-.612.711zm7.834 1.782c-.393 0-.762-.069-1.104-.207a2.805 2.805 0 01-.897-.602 2.92 2.92 0 01-.59-.951 3.357 3.357 0 01-.219-1.236c0-.422.073-.812.219-1.17.153-.364.357-.674.612-.929a2.808 2.808 0 012.001-.82c.321 0 .631.051.929.153.307.102.576.248.809.438.234.182.427.404.58.667.153.262.244.55.273.863h-1.17a1.296 1.296 0 00-.524-.787 1.505 1.505 0 00-.908-.295c-.474 0-.86.179-1.159.536-.299.357-.448.805-.448 1.345 0 .56.153 1.027.459 1.399.306.372.689.558 1.148.558.328 0 .623-.091.886-.274.269-.19.452-.463.546-.82h1.17a2.23 2.23 0 01-.317.908c-.16.262-.361.484-.601.667-.233.182-.499.32-.798.415a2.887 2.887 0 01-.897.142zm7.647-.12l-1.629-2.733-.984.984V13h-1.17V5.128h1.17v4.68l2.405-2.471h1.531l-2.11 2.099L110.594 13h-1.378zM44.494 26l-2.832-7.107V26h-.733v-7.653h1.269l2.711 6.833 2.7-6.833h1.236V26h-.743v-7.107L45.28 26h-.787zm9.9 0l-.01-1.05c-.16.328-.409.605-.744.831-.328.226-.75.34-1.268.34-.248 0-.492-.034-.733-.1a2.089 2.089 0 01-.645-.294 1.596 1.596 0 01-.459-.525 1.573 1.573 0 01-.164-.733c0-.313.07-.576.208-.787.146-.211.346-.386.601-.525.255-.138.561-.251.919-.339.364-.094.765-.175 1.202-.24l1.039-.164v-.219c0-.488-.135-.842-.405-1.06-.27-.226-.63-.34-1.082-.34-.423 0-.784.11-1.082.329a1.32 1.32 0 00-.536.874h-.71c.036-.277.12-.524.25-.743.14-.226.314-.415.526-.569a2.37 2.37 0 01.721-.35c.27-.087.554-.13.853-.13.634 0 1.155.152 1.563.459.408.306.613.82.613 1.541l-.022 2.526c0 .08.003.207.01.382l.044.886h-.688zm-3.312-1.564c0 .365.142.638.426.82.284.175.612.263.984.263.525 0 .962-.168 1.312-.503.357-.343.536-.81.536-1.4v-.623c-1.137.146-1.964.314-2.482.503-.517.183-.776.496-.776.94zm6.417-1.705V26h-.722v-5.663h.722v1.093a2.11 2.11 0 01.197-.35c.08-.124.178-.233.295-.328.175-.16.36-.273.557-.339.197-.073.412-.11.645-.11.052 0 .102.004.154.012.058 0 .112.003.163.01v.7a3.65 3.65 0 00-.25-.01h-.165c-.168 0-.346.029-.536.087a1.558 1.558 0 00-.514.284c-.153.131-.284.31-.393.536-.102.218-.153.488-.153.809zM64.484 26l-1.903-3.192-1.257 1.18V26h-.722v-7.872h.722v5.018l2.908-2.81h.951l-2.077 1.969L65.336 26h-.852zm6.571-1.618c-.16.561-.48.991-.962 1.29a2.985 2.985 0 01-1.607.448c-.386 0-.747-.069-1.083-.207a2.634 2.634 0 01-.874-.613 3.055 3.055 0 01-.58-.94 3.515 3.515 0 01-.207-1.235c0-.46.072-.872.218-1.236.153-.364.354-.67.602-.918.247-.248.535-.438.863-.569a2.686 2.686 0 011.006-.197c.35 0 .685.062 1.006.186.328.124.612.31.853.558.24.24.433.546.58.918.145.365.218.784.218 1.258v.196h-4.614c.03.634.233 1.156.612 1.564.38.408.853.612 1.422.612.422 0 .79-.095 1.104-.284.32-.19.561-.467.722-.831h.721zm-2.635-3.564a1.95 1.95 0 00-.71.13 1.968 1.968 0 00-1.039.984c-.11.234-.175.5-.197.799h3.87c-.029-.59-.23-1.057-.6-1.4a1.886 1.886 0 00-1.324-.513zm5.756 5.193c-.437 0-.78-.087-1.028-.262-.24-.175-.36-.518-.36-1.028v-3.794H71.76v-.59h1.027v-1.345h.711v1.345h1.585v.59h-1.585v3.684c0 .321.066.536.197.645.138.11.353.165.645.165h.404c.124-.008.237-.011.34-.011v.58c-.161.006-.307.01-.438.01-.131.007-.288.01-.47.01zm4.949.11a2.2 2.2 0 01-2.045-1.29v3.246h-.721v-7.74h.721v1.115c.153-.357.408-.653.766-.886.357-.24.787-.36 1.29-.36.357 0 .692.065 1.005.196.314.124.587.31.82.558.241.248.43.554.569.918.138.365.208.78.208 1.247 0 .48-.073.907-.219 1.279a2.749 2.749 0 01-.569.94c-.233.255-.51.448-.83.58a2.55 2.55 0 01-.995.196zm-.099-.624c.547 0 1.01-.211 1.389-.634.386-.423.58-1.002.58-1.738 0-.722-.194-1.283-.58-1.684a1.823 1.823 0 00-1.389-.613 2.01 2.01 0 00-.743.143 1.796 1.796 0 00-.623.426c-.175.19-.317.43-.427.722-.11.284-.164.62-.164 1.006s.055.728.164 1.027c.11.3.255.547.438.744.182.197.39.346.623.448.24.102.484.153.732.153zm4.115.503v-7.872h.722V26h-.722zm6.196 0l-.01-1.05c-.161.328-.409.605-.744.831-.328.226-.75.34-1.268.34-.248 0-.492-.034-.733-.1a2.088 2.088 0 01-.645-.294 1.596 1.596 0 01-.46-.525 1.573 1.573 0 01-.163-.733c0-.313.069-.576.208-.787.145-.211.346-.386.6-.525.256-.138.562-.251.92-.339.364-.094.765-.175 1.202-.24l1.039-.164v-.219c0-.488-.135-.842-.405-1.06-.27-.226-.63-.34-1.082-.34-.423 0-.784.11-1.083.329a1.32 1.32 0 00-.535.874h-.711c.036-.277.12-.524.251-.743.139-.226.314-.415.525-.569.212-.153.452-.27.722-.35a2.75 2.75 0 01.852-.13c.635 0 1.156.152 1.564.459.408.306.612.82.612 1.541l-.022 2.526c0 .08.004.207.011.382.008.175.022.47.044.886h-.689zm-3.313-1.564c0 .365.143.638.427.82.284.175.612.263.984.263.525 0 .962-.168 1.312-.503.357-.343.536-.81.536-1.4v-.623c-1.138.146-1.965.314-2.482.503-.518.183-.776.496-.776.94zm8.025 1.684a2.658 2.658 0 01-1.947-.83 3.024 3.024 0 01-.579-.952 3.45 3.45 0 01-.208-1.213c0-.438.073-.835.219-1.192.146-.365.343-.67.59-.919.248-.255.54-.451.875-.59a2.605 2.605 0 011.05-.219c.313 0 .612.048.896.143.285.094.536.23.755.404.226.168.411.372.557.612.153.24.252.507.295.798h-.721c-.11-.4-.325-.721-.645-.962-.321-.24-.704-.36-1.148-.36a1.852 1.852 0 00-1.41.634 2.18 2.18 0 00-.416.721 2.672 2.672 0 00-.153.93c0 .335.047.648.142.94.102.284.24.532.415.743.183.204.394.368.635.492.247.117.513.175.798.175.437 0 .812-.12 1.126-.36.32-.241.54-.57.656-.985h.721a2.344 2.344 0 01-.874 1.454 2.604 2.604 0 01-1.63.536zm8.733-1.738a2.167 2.167 0 01-.963 1.29 2.983 2.983 0 01-1.607.448c-.386 0-.747-.069-1.082-.207a2.634 2.634 0 01-.875-.613 3.055 3.055 0 01-.58-.94 3.515 3.515 0 01-.207-1.235c0-.46.073-.872.219-1.236.153-.364.353-.67.6-.918.249-.248.537-.438.865-.569a2.687 2.687 0 011.006-.197c.349 0 .685.062 1.005.186.328.124.613.31.853.558.241.24.434.546.58.918.145.365.218.784.218 1.258v.196H98.2c.03.634.234 1.156.613 1.564.379.408.852.612 1.421.612.423 0 .791-.095 1.104-.284.321-.19.562-.467.722-.831h.722zm-2.635-3.564c-.248 0-.485.043-.711.13a1.97 1.97 0 00-1.039.984c-.11.234-.175.5-.197.799h3.871c-.029-.59-.23-1.057-.601-1.4a1.887 1.887 0 00-1.323-.513z" fill="#1A1919" className="fill-[oklch(56.8%_0.202_283.1)] hover:fill-[oklch(50.5%_0.168_284.0)] hover:stroke-[oklch(50.5%_0.166_284.1)]" style={{"stroke":"none"}}>
                                      </path>
                                      <defs>
                                        <lineargradient id="ProductLogoMarketplace_svg__paint0_linear_11830_10530" x1="2.671" y1="4.471" x2="32.921" y2="26.018" gradientUnits="userSpaceOnUse">
                                          <stop stopColor="#49A466">
                                          </stop>
                                          <stop offset="0.5" stopColor="#6F83F2">
                                          </stop>
                                          <stop offset="1" stopColor="#8A3DFF">
                                          </stop>
                                        </lineargradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div className="shrink-0 w-px h-4 ml-1 bg-[oklch(78.2%_0.098_289.2)]">
                            </div>
                          </div>
                          <div id="navbar-items-wrapper-id" className="flex justify-start gap-1 grow basis-0 mx-2" style={{"--default-color":"#475161","--default-background-color":"#fff","--hover-color":"#5d50bf","--hover-background-color":"#f7f9fc","--selected-color":"#6c5ce7","--selected-background-color":"#fff","--hover-selected-color":"#5d50bf","--hover-selected-background-color":"#f9f8ff"}}>
                            <div id="cs-visible-item-container-id" className="flex items-center gap-1">
                              <div className="flex items-center shrink-0">
                                <div data-test-id="menu" tabIndex="0" aria-expanded="false" role="menu" className="flex items-center relative w-max h-8 focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_0.125rem]">
                                  <div>
                                    <a aria-current="page" tabIndex="-1" href="https://app.contentstack.com/#!/marketplace/installed-apps?sort=name&order=asc" className="cursor-pointer text-[oklch(42.9%_0.297_264.1)] hover:cursor-pointer">
                                      <button data-test-id="marketplace-nav-manage-apps" aria-label="Manage Apps" type="button" role="button" tabIndex="-1" className="relative min-w-8 min-h-8 max-h-8 px-2 py-1 font-medium text-center text-xs leading-normal duration-150 align-middle rounded transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(98.1%_0.005_258.3)] hover:text-[oklch(50.5%_0.166_284.1)] focus:bg-[oklch(98.1%_0.005_258.3)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px] focus:text-[oklch(50.5%_0.166_284.1)]">
                                        <div className="flex justify-center items-center text-[oklch(43.2%_0.029_259.8)] leading-[18px]">
                                          <div className="flex items-center">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Management" data-test-id="cs-icon" className="w-6 h-6 mr-1 text-xs">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14 5.25A2.75 2.75 0 0011.25 8v1.25H7A1.75 1.75 0 005.25 11v14c0 .966.784 1.75 1.75 1.75h18A1.75 1.75 0 0026.75 25V11A1.75 1.75 0 0025 9.25h-4.25V8A2.75 2.75 0 0018 5.25h-4zm5.25 4V8c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.25h6.5zM7 10.75a.25.25 0 00-.25.25v4.813h18.5V11a.25.25 0 00-.25-.25H7zm18.25 6.563H6.75V25c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-7.688z" fill="#475161" className="hover:fill-[oklch(50.5%_0.166_284.1)] hover:stroke-[oklch(50.5%_0.166_284.1)] focus:fill-[oklch(50.5%_0.166_284.1)] focus:stroke-[oklch(50.5%_0.166_284.1)]">
                                              </path>
                                            </svg>
                                            Manage Apps
                                            <svg width="16px" height="16px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="CaretDownNew" data-test-id="cs-icon" className="w-4 h-4 ml-2 text-xs transition-[transform,_-webkit-transform] duration-[0.25s] hover:scale-y-[-1] focus:scale-y-[-1]">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M5.47 11.47a.75.75 0 011.06 0L16 20.94l9.47-9.47a.75.75 0 111.06 1.06l-10 10a.75.75 0 01-1.06 0l-10-10a.75.75 0 010-1.06z" fill="#475161" className="hover:fill-[oklch(50.5%_0.166_284.1)] hover:stroke-[oklch(50.5%_0.166_284.1)] focus:fill-[oklch(50.5%_0.166_284.1)] focus:stroke-[oklch(50.5%_0.166_284.1)]">
                                              </path>
                                            </svg>
                                          </div>
                                        </div>
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="shrink-0">
                                <a aria-current="page" tabIndex="-1" href="https://app.contentstack.com/#!/marketplace/audit-logs" className="cursor-pointer text-[oklch(42.9%_0.297_264.1)] hover:cursor-pointer">
                                  <button data-test-id="marketplace-nav-audit-logs" aria-label="Audit Logs" type="button" tabIndex="0" role="button" className="relative min-w-8 min-h-8 max-h-8 px-2 py-1 font-medium text-center text-xs leading-normal duration-150 align-middle capitalize rounded transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(98.1%_0.005_258.3)] hover:text-[oklch(50.5%_0.166_284.1)] focus:bg-[oklch(98.1%_0.005_258.3)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px] focus:text-[oklch(50.5%_0.166_284.1)]">
                                    <div className="flex justify-center items-center text-[oklch(43.2%_0.029_259.8)] leading-[18px]">
                                      <div className="flex items-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Audit" data-test-id="cs-icon" className="w-6 h-6 mr-1 text-xs">
                                          <path d="M10.25 10.049a.75.75 0 01.75-.75h10a.75.75 0 010 1.5H11a.75.75 0 01-.75-.75zM11 14.348a.75.75 0 000 1.5h10a.75.75 0 000-1.5H11z" fill="#475161" className="hover:fill-[oklch(50.5%_0.166_284.1)] hover:stroke-[oklch(50.5%_0.166_284.1)] focus:fill-[oklch(50.5%_0.166_284.1)] focus:stroke-[oklch(50.5%_0.166_284.1)]">
                                          </path>
                                          <path fillRule="evenodd" clipRule="evenodd" d="M6.82 26.532a.5.5 0 01-.82-.384V6a1 1 0 011-1h18a1 1 0 011 1v20.049a.5.5 0 01-.845.362L22.5 23.883l-2.628 2.92a.5.5 0 01-.744 0l-2.628-2.92-3.128 2.978a.5.5 0 01-.716-.028L10 23.883l-3.18 2.649zm2.22-3.802a1.5 1.5 0 012.075.15l1.968 2.185 2.383-2.268a1.5 1.5 0 012.149.082l1.885 2.094 1.885-2.094a1.5 1.5 0 012.15-.082l.965.919V6.5h-17v17.513l1.54-1.283z" fill="#475161" className="hover:fill-[oklch(50.5%_0.166_284.1)] hover:stroke-[oklch(50.5%_0.166_284.1)] focus:fill-[oklch(50.5%_0.166_284.1)] focus:stroke-[oklch(50.5%_0.166_284.1)]">
                                          </path>
                                        </svg>
                                        Audit Logs
                                      </div>
                                    </div>
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <div className="flex items-center gap-3 fixed right-0 top-[0.563rem] mr-[13.008px]">
                        <div role="button" id="stackListHeaderOrchAgent" tabIndex="0" aria-label="Polaris" aria-controls="true" className="flex flex-row-reverse justify-center w-10 h-10 cursor-pointer focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_0.125rem]">
                          <div data-test-id="cs-tooltip" className="flex justify-center items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" name="Polaris" data-test-id="cs-polaris-icon" className="w-8 h-8">
                              <path d="M12.7 6.705c.285-.716 1.315-.716 1.599 0l.026.074 1.026 3.37 3.37 1.026c.815.248.815 1.402 0 1.65l-3.37 1.026-1.026 3.37c-.248.815-1.402.815-1.65 0l-1.027-3.37-3.369-1.026c-.815-.248-.815-1.402 0-1.65l3.37-1.027 1.026-3.369.026-.074zm-.015 3.905a.863.863 0 01-.575.575L9.433 12l2.678.815c.241.073.436.247.537.474l.038.1.815 2.679.815-2.679.037-.1a.863.863 0 01.537-.474L17.568 12l-2.679-.815a.863.863 0 01-.574-.575L13.5 7.933l-.815 2.678z" fill="url(#Polaris_svg__paint0_linear_11848_85212)">
                              </path>
                              <path d="M7.357 3.433a.15.15 0 01.285 0l.577 1.753a.15.15 0 00.095.095l1.753.576a.15.15 0 010 .285l-1.753.577a.15.15 0 00-.095.095l-.577 1.753a.15.15 0 01-.285 0l-.576-1.753a.15.15 0 00-.095-.095l-1.753-.577a.15.15 0 010-.285l1.753-.576a.15.15 0 00.095-.095l.576-1.753z" fill="url(#Polaris_svg__paint1_linear_11848_85212)">
                              </path>
                              <path d="M7.357 15.433a.15.15 0 01.285 0l.577 1.753a.15.15 0 00.095.095l1.753.577a.15.15 0 010 .284l-1.753.577a.15.15 0 00-.095.095l-.577 1.753a.15.15 0 01-.285 0l-.576-1.753a.15.15 0 00-.095-.095l-1.753-.577a.15.15 0 010-.284l1.753-.577a.15.15 0 00.095-.095l.576-1.753z" fill="url(#Polaris_svg__paint2_linear_11848_85212)">
                              </path>
                              <defs>
                                <lineargradient id="Polaris_svg__paint0_linear_11848_85212" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#49A466">
                                  </stop>
                                  <stop offset="0.5" stopColor="#6F83F2">
                                  </stop>
                                  <stop offset="1" stopColor="#8A3DFF">
                                  </stop>
                                </lineargradient>
                                <lineargradient id="Polaris_svg__paint1_linear_11848_85212" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#49A466">
                                  </stop>
                                  <stop offset="0.5" stopColor="#6F83F2">
                                  </stop>
                                  <stop offset="1" stopColor="#8A3DFF">
                                  </stop>
                                </lineargradient>
                                <lineargradient id="Polaris_svg__paint2_linear_11848_85212" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#49A466">
                                  </stop>
                                  <stop offset="0.5" stopColor="#6F83F2">
                                  </stop>
                                  <stop offset="1" stopColor="#8A3DFF">
                                  </stop>
                                </lineargradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div data-test-id="cs-notification-bellicon" tabIndex="0" aria-label="Notification" aria-controls="true" className="flex justify-center items-center w-8 h-8 cursor-pointer focus:rounded focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_0.25rem]">
                          <div>
                            <div data-test-id="cs-tooltip" className="inline-block">
                              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" name="NotificationAlert" data-test-id="cs-notification-bell-icon" className="w-6 h-6">
                                <path d="M19.3 15.604V9.677C19.3 5.437 16.027 2 11.994 2 7.962 2 4.691 5.438 4.691 9.677v5.927c0 1.073-.83 1.938-1.845 1.938-1.026 0-1.846.864-1.846 1.937C1 20.323 1.644 21 2.445 21h19.11c.8 0 1.445-.677 1.445-1.52 0-1.074-.83-1.938-1.846-1.938-1.035.01-1.855-.865-1.855-1.938zM11.994 24C10.885 24 10 23.313 10 22.473V21h4v1.473c-.012.85-.909 1.527-2.006 1.527z" stroke="#6C5CE7" strokeWidth="2" strokeMiterlimit="10" className="stroke-[oklch(58.1%_0.054_261.8)] hover:stroke-[oklch(56.8%_0.202_283.1)]">
                                </path>
                                <circle cx="19" cy="5" r="4.5" fill="#D62400" stroke="#fff" className="fill-[oklch(56.3%_0.214_31.9)]">
                                </circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div id="stackListHelpIcon" className="flex justify-center items-center w-8 h-8 focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]">
                          <div role="button" tabIndex="0" aria-label="Help" aria-controls="true" className="px-[6.4px] py-[4.8px] focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]">
                            <div data-test-id="cs-tooltip" className="inline-block">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" name="HelpExtraLarge" data-test-id="cs-help-center" className="w-6 h-6 cursor-pointer">
                                <circle cx="12" cy="12" r="11" stroke="#697B9B" strokeWidth="2" className="fill-white hover:fill-white hover:stroke-[oklch(56.8%_0.202_283.1)]">
                                </circle>
                                <path d="M10.626 14.033c0-1.514.96-2.45 1.823-3.35.665-.707 1.262-1.34 1.262-2.167 0-.973-.502-1.606-1.599-1.606-1.114 0-1.892.844-2.013 2.166H8C8.13 6.57 9.797 5 12.216 5 14.791 5 16 6.496 16 8.35c0 1.36-.777 2.24-1.581 3.085-.847.863-1.71 1.644-1.762 2.718v.615h-2.013v-.735h-.018zm-.483 3.498c0-.844.665-1.496 1.477-1.496.795 0 1.443.652 1.443 1.496 0 .826-.648 1.469-1.443 1.469a1.466 1.466 0 01-1.477-1.469z" fill="#697B9B" className="hover:fill-[oklch(56.8%_0.202_283.1)]">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]">
                          <div role="button" tabIndex="0" aria-label="App Switcher" aria-controls="true" data-test-id="app-switcher" className="px-[6.4px] py-[4.8px] focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]">
                            <div data-test-id="app-switcher-toolbar" className="inline-block">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="AppDrawer" data-test-id="cs-icon" className="w-6 h-6 cursor-pointer">
                                <path d="M5 5h4v4H5V5z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 4h6v6H4V4zm1 1v4h4V5H5z" fill="#475161">
                                </path>
                                <path d="M14 5h4v4h-4V5z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 4h6v6h-6V4zm1 1v4h4V5h-4z" fill="#475161">
                                </path>
                                <path d="M23 5h4v4h-4V5z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 4h6v6h-6V4zm1 1v4h4V5h-4z" fill="#475161">
                                </path>
                                <path d="M5 14h4v4H5v-4z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 13h6v6H4v-6zm1 1v4h4v-4H5z" fill="#475161">
                                </path>
                                <path d="M14 14h4v4h-4v-4z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 13h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="#475161">
                                </path>
                                <path d="M23 14h4v4h-4v-4z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 13h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="#475161">
                                </path>
                                <path d="M5 23h4v4H5v-4z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 22h6v6H4v-6zm1 1v4h4v-4H5z" fill="#475161">
                                </path>
                                <path d="M14 23h4v4h-4v-4z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 22h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="#475161">
                                </path>
                                <path d="M23 23h4v4h-4v-4z" fill="#475161">
                                </path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 22h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="#475161">
                                </path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-10 h-10">
                          <div className="focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_0.125rem]">
                            <div data-test-id="cs-user-profile" className="focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]">
                              <label tabIndex="0" aria-label="User Profile" aria-expanded="false" role="button" aria-controls="true" className="block w-8 h-8 focus:rounded focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_0.125rem]">
                                <div data-test-id="cs-tooltip" className="inline-block cursor-default">
                                  <div className="flex justify-center items-center relative w-8 h-8 font-semibold bg-white border-2 text-[0.6875rem] leading-[11px] rounded-[360px] border-[oklch(91.4%_0.016_262.8)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                    <span className="flex justify-center items-center w-full h-full text-xs leading-3 duration-300 cursor-pointer overflow-hidden uppercase text-[oklch(43.2%_0.029_259.8)] transition-[background-color,_color]">EE</span>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div tabIndex="-1" id="breadcrumb">
                    </div>
                  </div>
                </div>
                <div tabIndex="-1" id="content">
                  <div>
                    <div>
                      <div data-test-id="cs-page-layout" className="flex">
                        <div data-test-id="cs-page-layout-leftSidebar" className="w-60 pt-5 border-r border-t h-full pb-[15px] bg-[oklch(98.1%_0.005_258.3)] border-r-[oklch(91.4%_0.016_262.8)] border-t-[oklch(91.4%_0.016_262.8)] shrink-0" style={{"borderRightStyle":"solid","borderTopStyle":"solid","fontFamily":"Inter"}}>
                          <div>
                            <div>
                              <div className="overflow-x-hidden overflow-y-auto">
                                <div>
                                  <div className="px-[15px]">
                                    <div className="flex justify-between items-center h-14 mr-1 px-2.5 font-semibold text-xs leading-3 cursor-pointer capitalize text-[oklch(25.2%_0.000_89.9)] focus:rounded-md focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_4px]">
                                      <div data-test-id="section-collections" className="text-sm text-[oklch(43.2%_0.029_259.8)] leading-[14px]">Collections</div>
                                      <div>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" name="DownArrowEnabled" data-test-id="cs-icon" className="text-xs rotate-180">
                                          <path d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="#647696" className="fill-[oklch(25.2%_0.000_89.9)]">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                    <div>
                                      <div data-test-id="collections-all-collections" className="flex cursor-pointer my-[5px] text-[oklch(56.8%_0.202_283.1)] hover:bg-white hover:shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px]">
                                        <div className="w-0.5 h-10 bg-[oklch(56.8%_0.202_283.1)]">
                                        </div>
                                        <div className="min-h-3.5 p-3 text-ellipsis overflow-hidden whitespace-nowrap">All Collections</div>
                                      </div>
                                      <div data-test-id="collections-apps" className="flex cursor-pointer my-[5px] text-[oklch(43.2%_0.029_259.8)] hover:bg-white hover:shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px]">
                                        <div className="min-h-3.5 p-3 text-ellipsis overflow-hidden whitespace-nowrap">Apps</div>
                                      </div>
                                      <div data-test-id="collections-starters" className="flex cursor-pointer my-[5px] text-[oklch(43.2%_0.029_259.8)] hover:bg-white hover:shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px]">
                                        <div className="min-h-3.5 p-3 text-ellipsis overflow-hidden whitespace-nowrap">Starters</div>
                                      </div>
                                      <div data-test-id="collections-content-models" className="flex cursor-pointer my-[5px] text-[oklch(43.2%_0.029_259.8)] hover:bg-white hover:shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px]">
                                        <div className="min-h-3.5 p-3 text-ellipsis overflow-hidden whitespace-nowrap">Content Models</div>
                                      </div>
                                      <div data-test-id="collections-automations" className="flex cursor-pointer my-[5px] text-[oklch(43.2%_0.029_259.8)] hover:bg-white hover:shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px]">
                                        <div className="min-h-3.5 p-3 text-ellipsis overflow-hidden whitespace-nowrap">Recipes</div>
                                      </div>
                                      <div data-test-id="collections-data-integrations" className="flex cursor-pointer my-[5px] text-[oklch(43.2%_0.029_259.8)] hover:bg-white hover:shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px]">
                                        <div className="min-h-3.5 p-3 text-ellipsis overflow-hidden whitespace-nowrap">Data Integrations</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div data-test-id="cs-line" className="w-full my-4 border-t border-t-[oklch(91.4%_0.016_262.8)]" style={{"borderTopStyle":"solid"}}>
                                  </div>
                                  <div className="px-[15px]">
                                    <div className="flex justify-between items-center h-14 mr-1 px-2.5 font-semibold text-xs leading-3 cursor-pointer capitalize text-[oklch(25.2%_0.000_89.9)] focus:rounded-md focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_4px]">
                                      <div data-test-id="section-filters-categories" className="text-xs text-[oklch(43.2%_0.029_259.8)]">categories</div>
                                      <div>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" name="DownArrowEnabled" data-test-id="cs-icon" className="text-xs rotate-180">
                                          <path d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="#647696" className="fill-[oklch(25.2%_0.000_89.9)]">
                                          </path>
                                        </svg>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="px-2.5 pb-[15px]">
                                        <div data-test-id="cs-search" className="relative h-10">
                                          <div className="flex justify-center items-center gap-1 h-full px-2 py-0.5 border rounded w-[189px] border-[oklch(91.4%_0.016_262.8)] hover:border hover:border-[oklch(50.5%_0.166_284.1)] focus:border focus:border-[oklch(56.8%_0.202_283.1)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Search" data-test-id="cs-icon" className="w-4 min-w-4 max-w-4 h-5">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="#475161">
                                              </path>
                                              <path fillRule="evenodd" clipRule="evenodd" d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="#475161">
                                              </path>
                                            </svg>
                                            <input aria-label="Search" data-test-id="filters-categories-search-box" id="category-search" name="category-search" placeholder="Search Categories" autoComplete="off" className="w-full h-full leading-6 bg-white text-[oklch(24.8%_0.000_89.9)] focus:bg-white focus:border-b focus:border-b-[oklch(56.8%_0.202_283.1)] focus:text-[oklch(56.4%_0.054_261.8)] placeholder:text-sm placeholder:text-[oklch(56.4%_0.054_261.8)]" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-a/b-testing" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-a/b-testing-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">A/B Testing</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-ai-assistance" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-ai-assistance-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">AI Assistance</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-advertising" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-advertising-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Advertising</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-analytics" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-analytics-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Analytics</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-artificial-intelligence" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-artificial-intelligence-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Artificial Intelligence</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-automate" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-automate-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Automate</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-automations" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-automations-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Automations</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-crm" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-crm-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">CRM</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-chatbot" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-chatbot-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Chatbot</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-commerce" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-commerce-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Commerce</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-communication" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-communication-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Communication</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-content-management" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-content-management-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Content Management</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-custom" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-custom-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Custom</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-customer-support" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-customer-support-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Customer Support</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-dam" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-dam-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">DAM</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-data-enrichment" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-data-enrichment-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Data Enrichment</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-data-management" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-data-management-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Data Management</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-data-streams" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-data-streams-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Data Streams</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-data-warehousing" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-data-warehousing-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Data Warehousing</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-development" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-development-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Development</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-email" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-email-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Email</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-formatting" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-formatting-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Formatting</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-hosting" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-hosting-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Hosting</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-identity-management" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-identity-management-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Identity Management</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-marketing" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-marketing-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Marketing</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-marketing-automation" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-marketing-automation-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Marketing Automation</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-messaging-queue" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-messaging-queue-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Messaging Queue</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-miscellaneous" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-miscellaneous-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Miscellaneous</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-mobile" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-mobile-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Mobile</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-monitoring" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-monitoring-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Monitoring</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-personalization" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-personalization-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Personalization</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-project-management" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-project-management-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Project Management</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-referencing" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-referencing-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Referencing</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-search" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-search-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Search</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-social-login" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-social-login-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Social Login</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-storage" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-storage-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Storage</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-survey-management" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-survey-management-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Survey Management</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-system-monitoring" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-system-monitoring-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">System Monitoring</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-tag-management" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-tag-management-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Tag Management</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-translation" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-translation-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Translation</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-video" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-video-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Video</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-web-optimization" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-web-optimization-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Web Optimization</span>
                                          </label>
                                        </div>
                                        <div className="mb-2.5">
                                          <label data-test-id="filters-categories-web-personalization" id="category" className="flex items-center relative px-2.5 hover:cursor-pointer">
                                            <input id="category" type="checkbox" className="absolute opacity-0 cursor-default" />
                                            <span className="hidden relative top-0 left-0 h-4 cursor-default z-[2] checked:align-top checked:inline-block">
                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" name="CheckBoxActiveNew" data-test-id="cs-icon" className="w-4 h-4">
                                                <rect width="16" height="16" rx="2" fill="#6C5CE7">
                                                </rect>
                                                <path d="M12.25 5l-5.503 5.25L4 7.625" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                              </svg>
                                            </span>
                                            <span className="inline-block relative w-4 min-w-4 h-4 bg-white rounded-sm cursor-default align-top border-[1.5px] border-[oklch(43.2%_0.029_259.8)] hover:border-[1.5px] hover:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(255,_255,_255)_0px_0px_0px_0.125rem,_rgb(187,_180,_244)_0px_0px_0px_0.25rem] disabled:border-[1.5px] disabled:border-[oklch(43.2%_0.029_259.8/37.6%)] checked:inline-block" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            </span>
                                            <span data-test-id="filters-categories-web-personalization-label" className="inline-block pl-2.5 cursor-default align-top text-[13px] text-[oklch(43.2%_0.029_259.8)] leading-[185%] hover:text-[oklch(50.5%_0.166_284.1)] disabled:opacity-40 disabled:pointer-events-none">Web Personalization</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                </div>
                                <div>
                                </div>
                                <div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0" style={{"fontFamily":"Inter"}}>
                          <div tabIndex="-1" data-test-id="cs-page-layout-header" className="flex items-center pr-5 pl-2.5 border-b border-l border-t duration-300 z-[9] w-full h-[90px] bg-[oklch(98.1%_0.005_258.3)] border-y-[oklch(91.4%_0.016_262.8)] border-l-[oklch(91.4%_0.016_262.8)] transition-[width]" style={{"borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopStyle":"solid"}}>
                            <div data-test-id="cs-page-layout-hamburger-menu-open" id="PageLayout-hamburger" tabIndex="0" className="flex justify-center items-center h-6 cursor-pointer w-6 ml-[-23px] rounded-full hover:border-2" style={{"borderStyle":"solid","borderWidth":"1px","borderColor":"rgb(108, 92, 231)","backgroundColor":"rgb(221, 227, 238)"}}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="CaretLeft" data-test-id="cs-icon" className="w-4 h-4 pointer-events-none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161">
                                </path>
                              </svg>
                            </div>
                            <div data-test-id="cs-page-header" className="flex justify-between items-center relative w-full pl-[7px]">
                              <div className="flex items-center">
                                <div data-test-id="cs-page-title" className="font-semibold text-xl leading-normal text-[oklch(25.2%_0.000_89.9)]" style={{"fontVariationSettings":"\"slnt\" 0"}}>All Collections</div>
                              </div>
                              <div className="flex items-center">
                                <button data-test-id="build-new-app-cta" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 cursor-pointer align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                  <div className="flex justify-center items-center leading-[14px]">
                                    <div className="flex items-center">
                                      Build New App
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" name="NewTab" data-test-id="cs-icon" className="ml-2 text-sm float-right">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="#647696" className="fill-white">
                                        </path>
                                      </svg>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div data-test-id="cs-page-layout-contentBody" className="relative ml-0 bg-white border-l duration-300 overflow-y-hidden z-[7] w-full h-full mt-0 border-l-[oklch(91.4%_0.016_262.8)] transition-[width,_margin]" style={{"borderLeftStyle":"solid"}}>
                            <div className="flex justify-between items-center p-3 border-b h-[60px] border-b-[oklch(91.4%_0.016_262.8)] focus:border-b focus:border-b-[oklch(56.8%_0.202_283.1)]" style={{"borderBottomStyle":"solid"}}>
                              <div data-test-id="cs-search" className="flex items-center gap-1 relative h-10 w-[507.008px]">
                                <div className="flex justify-center items-center h-full px-4 py-2 border rounded w-[382.164px] border-[oklch(91.4%_0.016_262.8)] shadow-[transparent_0px_0px_0px_2px] hover:border hover:border-[oklch(50.5%_0.166_284.1)] hover:shadow-[rgb(93,_80,_190)_0px_0px_0px_1px] focus:border focus:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                  <input aria-label="Search" data-test-id="cs-search-input-field" id="category-search" name="category-search" placeholder="Search in All Collections" autoComplete="off" className="w-full h-full leading-6 bg-white text-[oklch(24.8%_0.000_89.9)] focus:bg-white focus:text-[oklch(56.4%_0.054_261.8)] placeholder:text-[oklch(56.4%_0.054_261.8)]" />
                                </div>
                                <button data-test-id="cs-button" aria-label="aria-button" type="button" className="relative min-w-8 min-h-10 max-h-10 px-4 py-2 font-semibold text-center text-white leading-none border-transparent duration-150 cursor-pointer align-middle border rounded bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","fontVariationSettings":"\"slnt\" 0"}}>
                                  <div className="flex justify-center items-center">
                                    <div className="flex items-center -mt-px">
                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Search" data-test-id="cs-icon" className="w-6 h-6 mr-2 float-left">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="#475161" className="fill-white">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="#475161" className="fill-white">
                                        </path>
                                      </svg>
                                      Search
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="overflow-y-auto h-[calc(-196px_+_100vh)]">
                              <div className="flex flex-col justify-start w-full bg-white overflow-x-hidden overflow-y-auto">
                                <div data-test-id="marketplace-banner" className="bg-no-repeat border-b duration-500 h-[372px] mb-[15px] border-b-[oklch(95.7%_0.009_258.3)] transition-[height]" style={{"backgroundImage":"url(\"https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blte9d0c4604984a8a7/All collections page banner\"), linear-gradient(rgba(255, 255, 255, 0.48), rgba(221, 227, 238, 0.48))","backgroundPositionX":"right","backgroundPositionY":"center","borderBottomStyle":"solid"}}>
                                  <div className="mt-20 ml-16 w-[600px] leading-[150%] duration-[0.4s] animate-[MKT-Banner_show]" style={{"animationName":"mkt-banner_show","animationTimeline":"auto","animationRangeStart":"normal","animationRangeEnd":"normal"}}>
                                    <h2 className="font-semibold leading-tight text-[34px] text-[oklch(24.8%_0.000_89.9)]">
                                      Contentstack Marketplace:
                                      <br />
                                      Where composable happens
                                    </h2>
                                    <div className="mt-3 leading-6 text-[oklch(43.2%_0.029_259.8)]">From powerful apps to quick-start templates and automation recipes, accelerate your project's journey from concept to launch.</div>
                                    <div className="flex mt-3 text-xs leading-6 text-[oklch(54.0%_0.042_290.0)]">
                                      <div>New to Marketplace? Use</div>
                                      <div>
                                        <div data-test-id="cs-link" className="inline-block text-sm">
                                          <a tabIndex="0" target="_blank" href="https://www.contentstack.com/docs/developers/marketplace-platform-guides/" className="flex items-center px-1 text-xs cursor-pointer text-[oklch(56.8%_0.202_283.1)] hover:cursor-pointer hover:text-[oklch(50.5%_0.168_284.0)] focus:rounded-sm focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_2px]">
                                            <span>these</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div>guides to get started.</div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-col justify-start px-4 py-2">
                                    <div className="flex justify-between items-center w-full mt-2 mb-3">
                                      <h4 data-test-id="cs-heading-tag" className="flex items-center grow basis-0 font-semibold leading-normal whitespace-nowrap text-[1.375rem] text-[oklch(25.2%_0.000_89.9)]">Apps</h4>
                                      <div data-test-id="cs-line" className="w-full border-t ml-[15px] border-t-[oklch(91.4%_0.016_262.8)]">
                                      </div>
                                      <div data-test-id="view-all-apps" className="inline-block text-sm leading-[14px]">
                                        <a tabIndex="0" target="_blank" className="flex items-center whitespace-nowrap ml-[15px] text-[oklch(56.8%_0.202_283.1)] hover:cursor-pointer hover:text-[oklch(50.5%_0.168_284.0)] focus:rounded-sm focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_2px]">
                                          <span>View All Apps</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-3/5 text-sm ml-[15px] text-[oklch(43.2%_0.029_259.8)] leading-[25px]">Marketplace apps are installable, ready-to-use applications. These are handpicked apps, and you can install them in your stack with a few steps. To start using it, select the one you want to use, click on Install App.</div>
                                  <div className="flex flex-row flex-wrap justify-normal items-stretch content-stretch">
                                    <div data-test-id="apps-ai-assistant-card">
                                      <div data-uid="6438f4bc3ff41c00184b6b78" className="flex w-full min-w-80 max-w-80 bg-white transition-all duration-300 cursor-pointer border overflow-hidden h-[246px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:bg-white hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative w-full h-40 min-h-40 border-b transition-all duration-300 min-w-[300px] bg-[oklch(98.1%_0.005_258.3)] border-[oklch(91.4%_0.016_262.8)]" style={{"borderBottomStyle":"solid"}}>
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5c61f/686e9aa015ab2238fb4be288/AI-Assistant.svg" className="w-[72px] h-[72px] rounded-[10px]" />
                                            </div>
                                          </div>
                                          <div className="w-full mt-px p-4 bg-white hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-100px]">
                                            <div className="block mb-2 h-[54px]">
                                              <div className="flex mb-2">
                                                <h2 className="mr-1 font-semibold text-base capitalize leading-[150%]">AI Assistant</h2>
                                                <span className="hidden hover:block">
                                                  <div data-test-id="cs-tooltip" className="inline-block">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <div className="flex">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Stacks" data-test-id="cs-icon" className="w-4 h-4">
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.352 21.622a.75.75 0 011.026-.27L16 28.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161">
                                                  </path>
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.352 15.622a.75.75 0 011.026-.27L16 22.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161">
                                                  </path>
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M15.622 2.352a.75.75 0 01.756 0l12 7a.75.75 0 010 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 010-1.296l12-7zM5.49 10L16 16.132 26.512 10 16 3.868 5.49 10z" fill="#475161">
                                                  </path>
                                                </svg>
                                                <p data-test-id="cs-paragraph-tag" className="ml-1 text-xs leading-normal text-[oklch(54.0%_0.042_290.0)]">Stack App</p>
                                              </div>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden leading-[150%]">Create brand and tone-specific content in seconds for your Contentstack entries.</p>
                                          </div>
                                          <div className="w-full px-4 pb-4">
                                            <div>
                                              <button data-test-id="apps-ai-assistant-install" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm">
                                                      <g fill="#fff">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.848 2.253C9.85 2.808 8.05 5.547 7.878 8.46H5.31a.594.594 0 0 0-.412 1.021l4.56 4.397a.781.781 0 0 0 1.084 0l4.56-4.397a.594.594 0 0 0-.412-1.021h-2.555V5.2c0-.978.697-1.817 1.657-1.997l1.294-.242A.469.469 0 0 0 15 2.03c-.687 0-1.424.088-2.152.222ZM8.802 8.921c0-2.224 1.055-4.282 2.82-5.249a2.96 2.96 0 0 0-.424 1.528v3.604c0 .327.266.593.594.593h2.047L10 13.1 6.161 9.397h2.165a.476.476 0 0 0 .476-.476Z" className="fill-white">
                                                        </path>
                                                        <path d="M2.969 13.125a.469.469 0 1 0-.938 0v3.125c0 .604.49 1.094 1.094 1.094h13.75c.604 0 1.094-.49 1.094-1.094v-3.125a.469.469 0 0 0-.938 0v3.125c0 .086-.07.156-.156.156H3.125a.156.156 0 0 1-.156-.156v-3.125Z" className="fill-white">
                                                        </path>
                                                      </g>
                                                    </svg>
                                                    Install
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="apps-algolia-card">
                                      <div data-uid="61c0805c1ecff10018907bf6" className="flex w-full min-w-80 max-w-80 bg-white transition-all duration-300 cursor-pointer border overflow-hidden h-[246px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:bg-white hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative w-full h-40 min-h-40 border-b transition-all duration-300 min-w-[300px] bg-[oklch(98.1%_0.005_258.3)] border-[oklch(91.4%_0.016_262.8)]" style={{"borderBottomStyle":"solid"}}>
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0a670d76374019cc/655dd214825f65040ab6d48b/algolia_icon.svg" className="w-[72px] h-[72px] rounded-[10px]" />
                                            </div>
                                          </div>
                                          <div className="w-full mt-px p-4 bg-white hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-100px]">
                                            <div className="block mb-2 h-[54px]">
                                              <div className="flex mb-2">
                                                <h2 className="mr-1 font-semibold text-base capitalize leading-[150%]">Algolia</h2>
                                                <span className="hidden hover:block">
                                                  <div data-test-id="cs-tooltip" className="inline-block">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <div className="flex">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Stacks" data-test-id="cs-icon" className="w-4 h-4">
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.352 21.622a.75.75 0 011.026-.27L16 28.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161">
                                                  </path>
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.352 15.622a.75.75 0 011.026-.27L16 22.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161">
                                                  </path>
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M15.622 2.352a.75.75 0 01.756 0l12 7a.75.75 0 010 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 010-1.296l12-7zM5.49 10L16 16.132 26.512 10 16 3.868 5.49 10z" fill="#475161">
                                                  </path>
                                                </svg>
                                                <p data-test-id="cs-paragraph-tag" className="ml-1 text-xs leading-normal text-[oklch(54.0%_0.042_290.0)]">Stack App</p>
                                              </div>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden leading-[150%]">Automatically updates the Algolia index when specific actions are performed on the entries in Contentstack.</p>
                                          </div>
                                          <div className="w-full px-4 pb-4">
                                            <div>
                                              <button data-test-id="apps-algolia-install" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm">
                                                      <g fill="#fff">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.848 2.253C9.85 2.808 8.05 5.547 7.878 8.46H5.31a.594.594 0 0 0-.412 1.021l4.56 4.397a.781.781 0 0 0 1.084 0l4.56-4.397a.594.594 0 0 0-.412-1.021h-2.555V5.2c0-.978.697-1.817 1.657-1.997l1.294-.242A.469.469 0 0 0 15 2.03c-.687 0-1.424.088-2.152.222ZM8.802 8.921c0-2.224 1.055-4.282 2.82-5.249a2.96 2.96 0 0 0-.424 1.528v3.604c0 .327.266.593.594.593h2.047L10 13.1 6.161 9.397h2.165a.476.476 0 0 0 .476-.476Z" className="fill-white">
                                                        </path>
                                                        <path d="M2.969 13.125a.469.469 0 1 0-.938 0v3.125c0 .604.49 1.094 1.094 1.094h13.75c.604 0 1.094-.49 1.094-1.094v-3.125a.469.469 0 0 0-.938 0v3.125c0 .086-.07.156-.156.156H3.125a.156.156 0 0 1-.156-.156v-3.125Z" className="fill-white">
                                                        </path>
                                                      </g>
                                                    </svg>
                                                    Install
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="apps-automate-card">
                                      <div data-uid="664aedc8a7eb3b00138f34e4" className="flex w-full min-w-80 max-w-80 bg-white transition-all duration-300 cursor-pointer border overflow-hidden h-[246px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:bg-white hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative w-full h-40 min-h-40 border-b transition-all duration-300 min-w-[300px] bg-[oklch(98.1%_0.005_258.3)] border-[oklch(91.4%_0.016_262.8)]" style={{"borderBottomStyle":"solid"}}>
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5871b2603c70f5ab/628b5541445f645df4fcefe5/Automations.svg" className="w-[72px] h-[72px] rounded-[10px]" />
                                            </div>
                                          </div>
                                          <div className="w-full mt-px p-4 bg-white hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-100px]">
                                            <div className="block mb-2 h-[54px]">
                                              <div className="flex mb-2">
                                                <h2 className="mr-1 font-semibold text-base capitalize leading-[150%]">Automate</h2>
                                                <span className="hidden hover:block">
                                                  <div data-test-id="cs-tooltip" className="inline-block">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <div className="flex">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Stacks" data-test-id="cs-icon" className="w-4 h-4">
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.352 21.622a.75.75 0 011.026-.27L16 28.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161">
                                                  </path>
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.352 15.622a.75.75 0 011.026-.27L16 22.132l11.622-6.78a.75.75 0 01.756 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 01-.27-1.026z" fill="#475161">
                                                  </path>
                                                  <path fillRule="evenodd" clipRule="evenodd" d="M15.622 2.352a.75.75 0 01.756 0l12 7a.75.75 0 010 1.296l-12 7a.75.75 0 01-.756 0l-12-7a.75.75 0 010-1.296l12-7zM5.49 10L16 16.132 26.512 10 16 3.868 5.49 10z" fill="#475161">
                                                  </path>
                                                </svg>
                                                <p data-test-id="cs-paragraph-tag" className="ml-1 text-xs leading-normal text-[oklch(54.0%_0.042_290.0)]">Stack App</p>
                                              </div>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden leading-[150%]">Fetch and execute automations from the Automate platform via the Automate app into the Entry Sidebar UI location.</p>
                                          </div>
                                          <div className="w-full px-4 pb-4">
                                            <div>
                                              <button data-test-id="apps-automate-install" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm">
                                                      <g fill="#fff">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.848 2.253C9.85 2.808 8.05 5.547 7.878 8.46H5.31a.594.594 0 0 0-.412 1.021l4.56 4.397a.781.781 0 0 0 1.084 0l4.56-4.397a.594.594 0 0 0-.412-1.021h-2.555V5.2c0-.978.697-1.817 1.657-1.997l1.294-.242A.469.469 0 0 0 15 2.03c-.687 0-1.424.088-2.152.222ZM8.802 8.921c0-2.224 1.055-4.282 2.82-5.249a2.96 2.96 0 0 0-.424 1.528v3.604c0 .327.266.593.594.593h2.047L10 13.1 6.161 9.397h2.165a.476.476 0 0 0 .476-.476Z" className="fill-white">
                                                        </path>
                                                        <path d="M2.969 13.125a.469.469 0 1 0-.938 0v3.125c0 .604.49 1.094 1.094 1.094h13.75c.604 0 1.094-.49 1.094-1.094v-3.125a.469.469 0 0 0-.938 0v3.125c0 .086-.07.156-.156.156H3.125a.156.156 0 0 1-.156-.156v-3.125Z" className="fill-white">
                                                        </path>
                                                      </g>
                                                    </svg>
                                                    Install
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-col justify-start px-4 py-2">
                                    <div className="flex justify-between items-center w-full mt-2 mb-3">
                                      <h4 data-test-id="cs-heading-tag" className="flex items-center grow basis-0 font-semibold leading-normal whitespace-nowrap text-[1.375rem] text-[oklch(25.2%_0.000_89.9)]">Starters</h4>
                                      <div data-test-id="cs-line" className="w-full border-t ml-[15px] border-t-[oklch(91.4%_0.016_262.8)]">
                                      </div>
                                      <div data-test-id="view-all-starters" className="inline-block text-sm leading-[14px]">
                                        <a tabIndex="0" target="_blank" className="flex items-center whitespace-nowrap ml-[15px] text-[oklch(56.8%_0.202_283.1)] hover:cursor-pointer hover:text-[oklch(50.5%_0.168_284.0)] focus:rounded-sm focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_2px]">
                                          <span>View All Starters</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-3/5 text-sm ml-[15px] text-[oklch(43.2%_0.029_259.8)] leading-[25px]">Starters are ready-to-use, installable sample apps built on top of Contentstack. You can try them out by selecting one from the list and clicking on Install Template.</div>
                                  <div className="flex flex-row flex-wrap justify-normal items-stretch content-stretch">
                                    <div data-test-id="starters-kickstart-next-js-card">
                                      <div data-uid="blte485a8bc40a5abfd" className="flex w-full max-w-80 transition-all duration-300 cursor-pointer border overflow-hidden min-w-[255px] h-[210px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:duration-100 hover:transition-shadow hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative h-40 min-h-40 transition-all duration-300 min-w-[300px] bg-[oklch(91.4%_0.016_262.8)]">
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt908e05842d8170f5/68b9bc6546d77b7cd762d0f4/kickstart-nextjs.png" className="w-full h-40" />
                                            </div>
                                          </div>
                                          <div className="relative top-0 w-full px-4 pt-4 pb-2.5 bg-white border-t duration-150 border-t-[oklch(91.4%_0.016_262.8)] transition-[top]" style={{"borderTopStyle":"solid"}}>
                                            <div className="hidden h-10">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div className="flex justify-center items-center relative w-9 h-9 font-semibold bg-white border-2 text-[0.6875rem] leading-[11px] rounded-[360px] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 w-8 h-8 text-xs leading-3 bg-white duration-300 overflow-hidden uppercase text-[oklch(43.2%_0.029_259.8)] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt2e2cdc49f3d54d1b/68382a7d868ed343f139b2a2/nextjs-icon-dark.png" alt="nextjs-icon-dark.png" className="absolute grayscale-0 duration-300 top-[50%] left-[50%] w-[26px] h-[26px] rounded-[50%] translate-x-[-50%] translate-y-[-50%] transition-[filter,_-webkit-filter] hover:grayscale-0" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex items-center h-6 mb-2 mt-[-5px] hover:mb-2.5">
                                              <h2 className="h-full mr-1 font-semibold text-base leading-tight flow-root overflow-hidden text-[oklch(25.2%_0.000_89.9)]">Kickstart Next.js</h2>
                                              <span className="hidden hover:block">
                                                <div data-test-id="cs-tooltip" className="inline-block">
                                                  <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                      </path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                      </path>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden text-[oklch(43.2%_0.029_259.8)] leading-[155%]">Connect to Contentstack fast with the Next.js Kickstart.</p>
                                          </div>
                                          <div className="flex justify-between relative top-0 w-full px-4 pb-4 duration-150 transition-[top]">
                                            <div data-test-id="cs-tooltip" className="inline-block">
                                              <button data-test-id="starters-kickstart-next-js-import" disabled aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent opacity-40 duration-150 cursor-not-allowed align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Import" data-test-id="cs-icon" className="w-5 h-5 mr-2 text-sm">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M6 20.25a.75.75 0 01.75.75v5c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-5a.75.75 0 011.5 0v5A1.75 1.75 0 0125 27.75H7A1.75 1.75 0 015.25 26v-5a.75.75 0 01.75-.75z" fill="#475161" className="fill-white">
                                                      </path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M21.303 18.757L16.53 23.53a.75.75 0 01-1.06 0l-4.773-4.773a.75.75 0 011.06-1.06l3.493 3.492V9a.75.75 0 011.5 0v12.19l3.493-3.493a.75.75 0 011.06 1.06zM7.25 5A.75.75 0 018 4.25h16a.75.75 0 010 1.5H8A.75.75 0 017.25 5z" fill="#475161" className="fill-white">
                                                      </path>
                                                    </svg>
                                                    Import
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="starters-kickstart-nuxtjs-card">
                                      <div data-uid="bltcf6532b9c70b8c58" className="flex w-full max-w-80 transition-all duration-300 cursor-pointer border overflow-hidden min-w-[255px] h-[210px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:duration-100 hover:transition-shadow hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative h-40 min-h-40 transition-all duration-300 min-w-[300px] bg-[oklch(91.4%_0.016_262.8)]">
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt33f0cf74e7464154/68b9753a4499d2fc2d36f226/kickstart-nuxtjs.png" className="w-full h-40" />
                                            </div>
                                          </div>
                                          <div className="relative top-0 w-full px-4 pt-4 pb-2.5 bg-white border-t duration-150 border-t-[oklch(91.4%_0.016_262.8)] transition-[top]" style={{"borderTopStyle":"solid"}}>
                                            <div className="hidden h-10">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div className="flex justify-center items-center relative w-9 h-9 font-semibold bg-white border-2 text-[0.6875rem] leading-[11px] rounded-[360px] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 w-8 h-8 text-xs leading-3 bg-white duration-300 overflow-hidden uppercase text-[oklch(43.2%_0.029_259.8)] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltcf414761656dd2b6/68272c0f0af49e81bd08389f/nuxt.svg" alt="nuxt.svg" className="absolute grayscale-0 duration-300 top-[50%] left-[50%] w-[26px] h-[26px] rounded-[50%] translate-x-[-50%] translate-y-[-50%] transition-[filter,_-webkit-filter] hover:grayscale-0" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex items-center h-6 mb-2 mt-[-5px] hover:mb-2.5">
                                              <h2 className="h-full mr-1 font-semibold text-base leading-tight flow-root overflow-hidden text-[oklch(25.2%_0.000_89.9)]">Kickstart NuxtJS</h2>
                                              <span className="hidden hover:block">
                                                <div data-test-id="cs-tooltip" className="inline-block">
                                                  <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                      </path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                      </path>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden text-[oklch(43.2%_0.029_259.8)] leading-[155%]">Connect to Contentstack fast with the NuxtJS Kickstart.</p>
                                          </div>
                                          <div className="flex justify-between relative top-0 w-full px-4 pb-4 duration-150 transition-[top]">
                                            <div data-test-id="cs-tooltip" className="inline-block">
                                              <button data-test-id="starters-kickstart-nuxtjs-import" disabled aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent opacity-40 duration-150 cursor-not-allowed align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Import" data-test-id="cs-icon" className="w-5 h-5 mr-2 text-sm">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M6 20.25a.75.75 0 01.75.75v5c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-5a.75.75 0 011.5 0v5A1.75 1.75 0 0125 27.75H7A1.75 1.75 0 015.25 26v-5a.75.75 0 01.75-.75z" fill="#475161" className="fill-white">
                                                      </path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M21.303 18.757L16.53 23.53a.75.75 0 01-1.06 0l-4.773-4.773a.75.75 0 011.06-1.06l3.493 3.492V9a.75.75 0 011.5 0v12.19l3.493-3.493a.75.75 0 011.06 1.06zM7.25 5A.75.75 0 018 4.25h16a.75.75 0 010 1.5H8A.75.75 0 017.25 5z" fill="#475161" className="fill-white">
                                                      </path>
                                                    </svg>
                                                    Import
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="starters-react-starter-card">
                                      <div data-uid="bltbb9196f67f310b0d" className="flex w-full max-w-80 transition-all duration-300 cursor-pointer border overflow-hidden min-w-[255px] h-[210px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:duration-100 hover:transition-shadow hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative h-40 min-h-40 transition-all duration-300 min-w-[300px] bg-[oklch(91.4%_0.016_262.8)]">
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltc02313c2d4bd70ac/6242e8f883781b1bb02b2a1b/ReactStarter_Image.png" className="w-full h-40" />
                                            </div>
                                          </div>
                                          <div className="relative top-0 w-full px-4 pt-4 pb-2.5 bg-white border-t duration-150 border-t-[oklch(91.4%_0.016_262.8)] transition-[top]" style={{"borderTopStyle":"solid"}}>
                                            <div className="hidden h-10">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div className="flex justify-center items-center relative w-9 h-9 font-semibold bg-white border-2 text-[0.6875rem] leading-[11px] rounded-[360px] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 w-8 h-8 text-xs leading-3 bg-white duration-300 overflow-hidden uppercase text-[oklch(43.2%_0.029_259.8)] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltbd4eb08a9d6f83e6/6242e8f7a88dc662d6d5e2d9/react-starter-icon.svg" alt="react-logo.svg" className="absolute grayscale-0 duration-300 top-[50%] left-[50%] w-[26px] h-[26px] rounded-[50%] translate-x-[-50%] translate-y-[-50%] transition-[filter,_-webkit-filter] hover:grayscale-0" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex items-center h-6 mb-2 mt-[-5px] hover:mb-2.5">
                                              <h2 className="h-full mr-1 font-semibold text-base leading-tight flow-root overflow-hidden text-[oklch(25.2%_0.000_89.9)]">React Starter</h2>
                                              <span className="hidden hover:block">
                                                <div data-test-id="cs-tooltip" className="inline-block">
                                                  <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                      </path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                      </path>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden text-[oklch(43.2%_0.029_259.8)] leading-[155%]">Build a Contentstack-powered marketing website using React.js framework.</p>
                                          </div>
                                          <div className="flex justify-between relative top-0 w-full px-4 pb-4 duration-150 transition-[top]">
                                            <div data-test-id="cs-tooltip" className="inline-block">
                                              <button data-test-id="starters-react-starter-import" disabled aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent opacity-40 duration-150 cursor-not-allowed align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Import" data-test-id="cs-icon" className="w-5 h-5 mr-2 text-sm">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M6 20.25a.75.75 0 01.75.75v5c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-5a.75.75 0 011.5 0v5A1.75 1.75 0 0125 27.75H7A1.75 1.75 0 015.25 26v-5a.75.75 0 01.75-.75z" fill="#475161" className="fill-white">
                                                      </path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M21.303 18.757L16.53 23.53a.75.75 0 01-1.06 0l-4.773-4.773a.75.75 0 011.06-1.06l3.493 3.492V9a.75.75 0 011.5 0v12.19l3.493-3.493a.75.75 0 011.06 1.06zM7.25 5A.75.75 0 018 4.25h16a.75.75 0 010 1.5H8A.75.75 0 017.25 5z" fill="#475161" className="fill-white">
                                                      </path>
                                                    </svg>
                                                    Import
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-col justify-start px-4 py-2">
                                    <div className="flex justify-between items-center w-full mt-2 mb-3">
                                      <h4 data-test-id="cs-heading-tag" className="flex items-center grow basis-0 font-semibold leading-normal whitespace-nowrap text-[1.375rem] text-[oklch(25.2%_0.000_89.9)]">Content Models</h4>
                                      <div data-test-id="cs-line" className="w-full border-t ml-[15px] border-t-[oklch(91.4%_0.016_262.8)]">
                                      </div>
                                      <div data-test-id="view-all-content-models" className="inline-block text-sm leading-[14px]">
                                        <a tabIndex="0" target="_blank" className="flex items-center whitespace-nowrap ml-[15px] text-[oklch(56.8%_0.202_283.1)] hover:cursor-pointer hover:text-[oklch(50.5%_0.168_284.0)] focus:rounded-sm focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_2px]">
                                          <span>View All Content Models</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-3/5 text-sm ml-[15px] text-[oklch(43.2%_0.029_259.8)] leading-[25px]">Content Models are ready-to-use, installable sample content models built on top of Contentstack. You can try them out by selecting one from the list and clicking on Import Content Model.</div>
                                  <div className="flex flex-row flex-wrap justify-normal items-stretch content-stretch">
                                    <div data-test-id="content-models-hero-banner-card">
                                      <div className="box-border flex flex-col relative w-80 max-w-80 transition-all duration-200 cursor-pointer border overflow-hidden rounded min-w-[255px] h-[216px] m-[15px] border-[oklch(91.4%_0.016_262.8)] hover:duration-100 hover:transition-shadow hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_2px_0px,_rgba(0,_0,_0,_0.14)_0px_0px_2px_0px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full h-40 rounded-t">
                                          <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd2268c331b57592f/6527e72c3b69bfd0c65542d9/hero-banner.svg" alt="hero-banner.svg" className="w-full rounded-t" />
                                        </div>
                                        <div className="absolute bottom-0 w-full h-12 p-4 bg-white border-t transition-all duration-200 overflow-hidden z-[9] max-h-[167px] border-t-[oklch(91.4%_0.016_262.8)] hover:h-[170px]" style={{"borderTopStyle":"solid"}}>
                                          <div className="-mt-1 hover:flex hover:items-end">
                                            <h3 className="mr-1 font-semibold text-base leading-6 capitalize text-[oklch(24.8%_0.000_89.9)]">Hero Banner</h3>
                                            <span className="hidden hover:block hover:mt-[-5px]">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                    </path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                          <p className="my-2 pb-1 text-sm flow-root overflow-hidden min-h-[67px] text-[oklch(43.2%_0.029_259.8)] leading-[150%]">Defines the structure, fields, and schema to design the hero banner of your website.</p>
                                          <div className="h-8 opacity-0 transition-opacity duration-200 invisible">
                                            <div className="w-full">
                                              <div className="flex flex-row justify-between items-center w-full">
                                                <div data-test-id="cs-tooltip" className="inline-block">
                                                  <button data-test-id="content-models-hero-banner-card-import" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                    <div className="flex justify-center items-center leading-[14px]">
                                                      <div className="flex items-center">
                                                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm">
                                                          <path d="M3.75 12.656c.259 0 .469.21.469.469v3.125c0 .086.07.156.156.156h11.25c.086 0 .156-.07.156-.156v-3.125a.469.469 0 0 1 .938 0v3.125c0 .604-.49 1.094-1.094 1.094H4.375c-.604 0-1.094-.49-1.094-1.094v-3.125c0-.259.21-.469.469-.469Z" fill="#fff">
                                                          </path>
                                                          <path d="m13.315 11.723-2.983 2.983a.469.469 0 0 1-.663 0l-2.984-2.983a.469.469 0 1 1 .663-.663l2.183 2.183V5.625a.469.469 0 0 1 .938 0v7.618l2.183-2.183a.469.469 0 0 1 .663.663ZM4.531 3.125c0-.259.21-.469.469-.469h10a.469.469 0 1 1 0 .938H5a.469.469 0 0 1-.469-.469Z" fill="#fff">
                                                          </path>
                                                        </svg>
                                                        Import
                                                      </div>
                                                    </div>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="content-models-website-homepage-card">
                                      <div className="box-border flex flex-col relative w-80 max-w-80 transition-all duration-200 cursor-pointer border overflow-hidden rounded min-w-[255px] h-[216px] m-[15px] border-[oklch(91.4%_0.016_262.8)] hover:duration-100 hover:transition-shadow hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_2px_0px,_rgba(0,_0,_0,_0.14)_0px_0px_2px_0px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full h-40 rounded-t">
                                          <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt8a28293317dd7ac9/6527d164c929a57076f9b7ed/website-home-page.svg" alt="website-home-page.svg" className="w-full rounded-t" />
                                        </div>
                                        <div className="absolute bottom-0 w-full h-12 p-4 bg-white border-t transition-all duration-200 overflow-hidden z-[9] max-h-[167px] border-t-[oklch(91.4%_0.016_262.8)] hover:h-[170px]" style={{"borderTopStyle":"solid"}}>
                                          <div className="-mt-1 hover:flex hover:items-end">
                                            <h3 className="mr-1 font-semibold text-base leading-6 capitalize text-[oklch(24.8%_0.000_89.9)]">Website Homepage</h3>
                                            <span className="hidden hover:block hover:mt-[-5px]">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                    </path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                          <p className="my-2 pb-1 text-sm flow-root overflow-hidden min-h-[67px] text-[oklch(43.2%_0.029_259.8)] leading-[150%]">Defines the structure, fields, and schema to design the essential information about the website homepage.</p>
                                          <div className="h-8 opacity-0 transition-opacity duration-200 invisible">
                                            <div className="w-full">
                                              <div className="flex flex-row justify-between items-center w-full">
                                                <div data-test-id="cs-tooltip" className="inline-block">
                                                  <button data-test-id="content-models-website-homepage-card-import" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                    <div className="flex justify-center items-center leading-[14px]">
                                                      <div className="flex items-center">
                                                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm">
                                                          <path d="M3.75 12.656c.259 0 .469.21.469.469v3.125c0 .086.07.156.156.156h11.25c.086 0 .156-.07.156-.156v-3.125a.469.469 0 0 1 .938 0v3.125c0 .604-.49 1.094-1.094 1.094H4.375c-.604 0-1.094-.49-1.094-1.094v-3.125c0-.259.21-.469.469-.469Z" fill="#fff">
                                                          </path>
                                                          <path d="m13.315 11.723-2.983 2.983a.469.469 0 0 1-.663 0l-2.984-2.983a.469.469 0 1 1 .663-.663l2.183 2.183V5.625a.469.469 0 0 1 .938 0v7.618l2.183-2.183a.469.469 0 0 1 .663.663ZM4.531 3.125c0-.259.21-.469.469-.469h10a.469.469 0 1 1 0 .938H5a.469.469 0 0 1-.469-.469Z" fill="#fff">
                                                          </path>
                                                        </svg>
                                                        Import
                                                      </div>
                                                    </div>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="content-models-blog-landing-page-card">
                                      <div className="box-border flex flex-col relative w-80 max-w-80 transition-all duration-200 cursor-pointer border overflow-hidden rounded min-w-[255px] h-[216px] m-[15px] border-[oklch(91.4%_0.016_262.8)] hover:duration-100 hover:transition-shadow hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_2px_0px,_rgba(0,_0,_0,_0.14)_0px_0px_2px_0px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full h-40 rounded-t">
                                          <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt9a64e5044cc37445/6528023da000a9d476cd1024/blog-landing.svg" alt="blog-landing.svg" className="w-full rounded-t" />
                                        </div>
                                        <div className="absolute bottom-0 w-full h-12 p-4 bg-white border-t transition-all duration-200 overflow-hidden z-[9] max-h-[167px] border-t-[oklch(91.4%_0.016_262.8)] hover:h-[170px]" style={{"borderTopStyle":"solid"}}>
                                          <div className="-mt-1 hover:flex hover:items-end">
                                            <h3 className="mr-1 font-semibold text-base leading-6 capitalize text-[oklch(24.8%_0.000_89.9)]">Blog Landing Page</h3>
                                            <span className="hidden hover:block hover:mt-[-5px]">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                    </path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                          <p className="my-2 pb-1 text-sm flow-root overflow-hidden min-h-[67px] text-[oklch(43.2%_0.029_259.8)] leading-[150%]">Defines the structure, fields, and schema to design the landing page for each blog.</p>
                                          <div className="h-8 opacity-0 transition-opacity duration-200 invisible">
                                            <div className="w-full">
                                              <div className="flex flex-row justify-between items-center w-full">
                                                <div data-test-id="cs-tooltip" className="inline-block">
                                                  <button data-test-id="content-models-blog-landing-page-card-import" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                    <div className="flex justify-center items-center leading-[14px]">
                                                      <div className="flex items-center">
                                                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm">
                                                          <path d="M3.75 12.656c.259 0 .469.21.469.469v3.125c0 .086.07.156.156.156h11.25c.086 0 .156-.07.156-.156v-3.125a.469.469 0 0 1 .938 0v3.125c0 .604-.49 1.094-1.094 1.094H4.375c-.604 0-1.094-.49-1.094-1.094v-3.125c0-.259.21-.469.469-.469Z" fill="#fff">
                                                          </path>
                                                          <path d="m13.315 11.723-2.983 2.983a.469.469 0 0 1-.663 0l-2.984-2.983a.469.469 0 1 1 .663-.663l2.183 2.183V5.625a.469.469 0 0 1 .938 0v7.618l2.183-2.183a.469.469 0 0 1 .663.663ZM4.531 3.125c0-.259.21-.469.469-.469h10a.469.469 0 1 1 0 .938H5a.469.469 0 0 1-.469-.469Z" fill="#fff">
                                                          </path>
                                                        </svg>
                                                        Import
                                                      </div>
                                                    </div>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-col justify-start px-4 py-2">
                                    <div className="flex justify-between items-center w-full mt-2 mb-3">
                                      <h4 data-test-id="cs-heading-tag" className="flex items-center grow basis-0 font-semibold leading-normal whitespace-nowrap text-[1.375rem] text-[oklch(25.2%_0.000_89.9)]">Recipes</h4>
                                      <div data-test-id="cs-line" className="w-full border-t ml-[15px] border-t-[oklch(91.4%_0.016_262.8)]">
                                      </div>
                                      <div data-test-id="view-all-recipes" className="inline-block text-sm leading-[14px]">
                                        <a tabIndex="0" target="_blank" className="flex items-center whitespace-nowrap ml-[15px] text-[oklch(56.8%_0.202_283.1)] hover:cursor-pointer hover:text-[oklch(50.5%_0.168_284.0)] focus:rounded-sm focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_2px]">
                                          <span>View All Recipes</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-3/5 text-sm ml-[15px] text-[oklch(43.2%_0.029_259.8)] leading-[25px]">Recipes allow you to automate your business workflows to streamline tasks and eliminate manual efforts. You can try them out by selecting one from the list and importing it into your organization.</div>
                                  <div className="flex flex-row flex-wrap justify-normal items-stretch content-stretch">
                                    <div data-test-id="recipes-backup-entries-to-aws-s3-card">
                                      <div className="flex w-full min-w-80 max-w-80 h-60 transition-all duration-300 cursor-pointer border overflow-hidden rounded m-[15px] border-[oklch(91.4%_0.016_262.8)] hover:border hover:rounded hover:border-[oklch(91.4%_0.016_262.8)] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_2px_0px,_rgba(0,_0,_0,_0.14)_0px_0px_2px_0px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex justify-center items-center w-full h-40 px-5 transition-all duration-300 rounded bg-[oklch(98.1%_0.005_258.3)]">
                                            <div data-test-id="cs-avatar" className="flex justify-start items-center">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div className="flex justify-center items-center relative font-semibold border-2 w-[65px] h-[65px] bg-[oklch(95.7%_0.009_258.3)] rounded-[50%] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 bg-white duration-300 overflow-hidden uppercase w-[65px] h-[65px] text-[0.516rem] text-[oklch(43.2%_0.029_259.8)] leading-[8.256px] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd1599ef0db421778/669f62ddf2780933e9679fae/Logo.svg" alt="Contentstack" className="absolute top-[50%] left-[50%] w-[60px] h-[60px] p-[5px] rounded-[337.5px] translate-x-[-50%] translate-y-[-50%]" />
                                                  </span>
                                                </div>
                                              </div>
                                              <div data-test-id="cs-tooltip" className="inline-block translate-x-[-5px]">
                                                <div className="flex justify-center items-center relative font-semibold border-2 w-[65px] h-[65px] bg-[oklch(95.7%_0.009_258.3)] rounded-[50%] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 bg-white duration-300 overflow-hidden uppercase w-[65px] h-[65px] text-[0.516rem] text-[oklch(43.2%_0.029_259.8)] leading-[8.256px] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltc7fb98dc253f1e55/6287b670445f645df4fcef97/s3.svg" alt="s3.svg" className="absolute top-[50%] left-[50%] w-[60px] h-[60px] p-[5px] rounded-[337.5px] translate-x-[-50%] translate-y-[-50%]" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="w-full hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-120px]">
                                            <div data-test-id="cs-line" className="w-full border-t border-t-[oklch(91.4%_0.016_262.8)]" style={{"borderTopStyle":"solid"}}>
                                            </div>
                                            <div className="p-4">
                                              <div className="flex justify-between items-center h-14">
                                                <div data-test-id="cs-tooltip" className="inline-block h-full">
                                                  <h2 className="max-w-full h-full mr-1 font-semibold text-base flow-root overflow-hidden text-[oklch(25.2%_0.000_89.9)] leading-[175%] hover:max-h-6 hover:overflow-hidden">Backup Entries to AWS S3</h2>
                                                </div>
                                                <span className="invisible">
                                                  <div data-test-id="cs-tooltip" className="inline-block h-full">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <p className="text-sm flow-root overflow-hidden h-[60.7969px] leading-[150%]">Create a new object in AWS S3 via Automate.</p>
                                            </div>
                                          </div>
                                          <div className="w-full px-4">
                                            <button data-test-id="recipes-backup-entries-to-aws-s3-import" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                              <div className="flex justify-center items-center leading-[14px]">
                                                <div className="flex items-center">
                                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Import" data-test-id="cs-icon" className="w-5 h-5 mr-2 text-sm float-left">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 20.25a.75.75 0 01.75.75v5c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-5a.75.75 0 011.5 0v5A1.75 1.75 0 0125 27.75H7A1.75 1.75 0 015.25 26v-5a.75.75 0 01.75-.75z" fill="#475161" className="fill-white">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.303 18.757L16.53 23.53a.75.75 0 01-1.06 0l-4.773-4.773a.75.75 0 011.06-1.06l3.493 3.492V9a.75.75 0 011.5 0v12.19l3.493-3.493a.75.75 0 011.06 1.06zM7.25 5A.75.75 0 018 4.25h16a.75.75 0 010 1.5H8A.75.75 0 017.25 5z" fill="#475161" className="fill-white">
                                                    </path>
                                                  </svg>
                                                  Import
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="recipes-send-notifications-to-slack-channel-card">
                                      <div className="flex w-full min-w-80 max-w-80 h-60 transition-all duration-300 cursor-pointer border overflow-hidden rounded m-[15px] border-[oklch(91.4%_0.016_262.8)] hover:border hover:rounded hover:border-[oklch(91.4%_0.016_262.8)] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_2px_0px,_rgba(0,_0,_0,_0.14)_0px_0px_2px_0px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex justify-center items-center w-full h-40 px-5 transition-all duration-300 rounded bg-[oklch(98.1%_0.005_258.3)]">
                                            <div data-test-id="cs-avatar" className="flex justify-start items-center">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div className="flex justify-center items-center relative font-semibold border-2 w-[65px] h-[65px] bg-[oklch(95.7%_0.009_258.3)] rounded-[50%] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 bg-white duration-300 overflow-hidden uppercase w-[65px] h-[65px] text-[0.516rem] text-[oklch(43.2%_0.029_259.8)] leading-[8.256px] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd1599ef0db421778/669f62ddf2780933e9679fae/Logo.svg" alt="Contentstack" className="absolute top-[50%] left-[50%] w-[60px] h-[60px] p-[5px] rounded-[337.5px] translate-x-[-50%] translate-y-[-50%]" />
                                                  </span>
                                                </div>
                                              </div>
                                              <div data-test-id="cs-tooltip" className="inline-block translate-x-[-5px]">
                                                <div className="flex justify-center items-center relative font-semibold border-2 w-[65px] h-[65px] bg-[oklch(95.7%_0.009_258.3)] rounded-[50%] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 bg-white duration-300 overflow-hidden uppercase w-[65px] h-[65px] text-[0.516rem] text-[oklch(43.2%_0.029_259.8)] leading-[8.256px] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt4146ba6c4fac725f/6287b6a94794c17d29bc385a/Slack.svg" alt="Slack.svg" className="absolute top-[50%] left-[50%] w-[60px] h-[60px] p-[5px] rounded-[337.5px] translate-x-[-50%] translate-y-[-50%]" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="w-full hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-120px]">
                                            <div data-test-id="cs-line" className="w-full border-t border-t-[oklch(91.4%_0.016_262.8)]" style={{"borderTopStyle":"solid"}}>
                                            </div>
                                            <div className="p-4">
                                              <div className="flex justify-between items-center h-14">
                                                <div data-test-id="cs-tooltip" className="inline-block h-full">
                                                  <h2 className="max-w-full h-full mr-1 font-semibold text-base flow-root overflow-hidden text-[oklch(25.2%_0.000_89.9)] leading-[175%] hover:max-h-6 hover:overflow-hidden">Send Notifications to Slack Channel</h2>
                                                </div>
                                                <span className="invisible">
                                                  <div data-test-id="cs-tooltip" className="inline-block h-full">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <p className="text-sm flow-root overflow-hidden h-[60.7969px] leading-[150%]">Send notifications to a Slack channel using the Slack connector.</p>
                                            </div>
                                          </div>
                                          <div className="w-full px-4">
                                            <button data-test-id="recipes-send-notifications-to-slack-channel-import" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                              <div className="flex justify-center items-center leading-[14px]">
                                                <div className="flex items-center">
                                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Import" data-test-id="cs-icon" className="w-5 h-5 mr-2 text-sm float-left">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 20.25a.75.75 0 01.75.75v5c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-5a.75.75 0 011.5 0v5A1.75 1.75 0 0125 27.75H7A1.75 1.75 0 015.25 26v-5a.75.75 0 01.75-.75z" fill="#475161" className="fill-white">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.303 18.757L16.53 23.53a.75.75 0 01-1.06 0l-4.773-4.773a.75.75 0 011.06-1.06l3.493 3.492V9a.75.75 0 011.5 0v12.19l3.493-3.493a.75.75 0 011.06 1.06zM7.25 5A.75.75 0 018 4.25h16a.75.75 0 010 1.5H8A.75.75 0 017.25 5z" fill="#475161" className="fill-white">
                                                    </path>
                                                  </svg>
                                                  Import
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-test-id="recipes-translate-content-using-smartling-card">
                                      <div className="flex w-full min-w-80 max-w-80 h-60 transition-all duration-300 cursor-pointer border overflow-hidden rounded m-[15px] border-[oklch(91.4%_0.016_262.8)] hover:border hover:rounded hover:border-[oklch(91.4%_0.016_262.8)] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_2px_0px,_rgba(0,_0,_0,_0.14)_0px_0px_2px_0px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex justify-center items-center w-full h-40 px-5 transition-all duration-300 rounded bg-[oklch(98.1%_0.005_258.3)]">
                                            <div data-test-id="cs-avatar" className="flex justify-start items-center">
                                              <div data-test-id="cs-tooltip" className="inline-block">
                                                <div className="flex justify-center items-center relative font-semibold border-2 w-[65px] h-[65px] bg-[oklch(95.7%_0.009_258.3)] rounded-[50%] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 bg-white duration-300 overflow-hidden uppercase w-[65px] h-[65px] text-[0.516rem] text-[oklch(43.2%_0.029_259.8)] leading-[8.256px] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd1599ef0db421778/669f62ddf2780933e9679fae/Logo.svg" alt="Contentstack" className="absolute top-[50%] left-[50%] w-[60px] h-[60px] p-[5px] rounded-[337.5px] translate-x-[-50%] translate-y-[-50%]" />
                                                  </span>
                                                </div>
                                              </div>
                                              <div data-test-id="cs-tooltip" className="inline-block translate-x-[-5px]">
                                                <div className="flex justify-center items-center relative font-semibold border-2 w-[65px] h-[65px] bg-[oklch(95.7%_0.009_258.3)] rounded-[50%] border-[oklch(98.1%_0.005_258.3)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                  <span className="flex justify-center items-center shrink-0 bg-white duration-300 overflow-hidden uppercase w-[65px] h-[65px] text-[0.516rem] text-[oklch(43.2%_0.029_259.8)] leading-[8.256px] rounded-[50%] transition-[background-color,_color]">
                                                    <img src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt328f96e45f321daf/6242e8e3c470e610f0a9fe99/Smartling_icon.svg" alt="Smartling_icon.svg" className="absolute top-[50%] left-[50%] w-[60px] h-[60px] p-[5px] rounded-[337.5px] translate-x-[-50%] translate-y-[-50%]" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="w-full hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-120px]">
                                            <div data-test-id="cs-line" className="w-full border-t border-t-[oklch(91.4%_0.016_262.8)]" style={{"borderTopStyle":"solid"}}>
                                            </div>
                                            <div className="p-4">
                                              <div className="flex justify-between items-center h-14">
                                                <div data-test-id="cs-tooltip" className="inline-block h-full">
                                                  <h2 className="max-w-full h-full mr-1 font-semibold text-base flow-root overflow-hidden text-[oklch(25.2%_0.000_89.9)] leading-[175%] hover:max-h-6 hover:overflow-hidden">Translate Content using Smartling</h2>
                                                </div>
                                                <span className="invisible">
                                                  <div data-test-id="cs-tooltip" className="inline-block h-full">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <p className="text-sm flow-root overflow-hidden h-[60.7969px] leading-[150%]">Set up an automated language translation system via Smartling for your Contentstack-powered website.</p>
                                            </div>
                                          </div>
                                          <div className="w-full px-4">
                                            <button data-test-id="recipes-translate-content-using-smartling-import" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                              <div className="flex justify-center items-center leading-[14px]">
                                                <div className="flex items-center">
                                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Import" data-test-id="cs-icon" className="w-5 h-5 mr-2 text-sm float-left">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 20.25a.75.75 0 01.75.75v5c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-5a.75.75 0 011.5 0v5A1.75 1.75 0 0125 27.75H7A1.75 1.75 0 015.25 26v-5a.75.75 0 01.75-.75z" fill="#475161" className="fill-white">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.303 18.757L16.53 23.53a.75.75 0 01-1.06 0l-4.773-4.773a.75.75 0 011.06-1.06l3.493 3.492V9a.75.75 0 011.5 0v12.19l3.493-3.493a.75.75 0 011.06 1.06zM7.25 5A.75.75 0 018 4.25h16a.75.75 0 010 1.5H8A.75.75 0 017.25 5z" fill="#475161" className="fill-white">
                                                    </path>
                                                  </svg>
                                                  Import
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-col justify-start px-4 py-2">
                                    <div className="flex justify-between items-center w-full mt-2 mb-3">
                                      <h4 data-test-id="cs-heading-tag" className="flex items-center grow basis-0 font-semibold leading-normal whitespace-nowrap text-[1.375rem] text-[oklch(25.2%_0.000_89.9)]">Data Integrations</h4>
                                      <div data-test-id="cs-line" className="w-full border-t ml-[15px] border-t-[oklch(91.4%_0.016_262.8)]">
                                      </div>
                                      <div data-test-id="view-all-data-integrations" className="inline-block text-sm leading-[14px]">
                                        <a tabIndex="0" target="_blank" className="flex items-center whitespace-nowrap ml-[15px] text-[oklch(56.8%_0.202_283.1)] hover:cursor-pointer hover:text-[oklch(50.5%_0.168_284.0)] focus:rounded-sm focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px,_rgb(187,_180,_244)_0px_0px_0px_2px]">
                                          <span>View All Data Integrations</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-3/5 text-sm ml-[15px] text-[oklch(43.2%_0.029_259.8)] leading-[25px]">Connect Contentstack's Lytics to your existing marketing and data ecosystem to unify customer intelligence and activate personalized experiences across channels.</div>
                                  <div className="flex flex-row flex-wrap justify-normal items-stretch content-stretch">
                                    <div data-test-id="data-integrations-custom-integrations-card">
                                      <div data-uid="blt705e7d3c0f746c8b" className="flex w-full min-w-80 max-w-80 bg-white transition-all duration-300 cursor-pointer border overflow-hidden h-[246px] m-[15px] rounded-[10px] border-[oklch(91.4%_0.016_262.8)] hover:bg-white hover:shadow-[rgba(34,_34,_34,_0.1)_0px_8px_20px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                        <div className="w-full">
                                          <div className="flex items-center w-full rounded">
                                            <div className="flex flex-col justify-center items-center relative w-full h-40 min-h-40 border-b transition-all duration-300 min-w-[300px] bg-[oklch(98.1%_0.005_258.3)] border-[oklch(91.4%_0.016_262.8)]" style={{"borderBottomStyle":"solid"}}>
                                              <img alt="logo" src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt166f4609f5060189/6981ccbac75c1bdedcc3fb09/Custom_Integrations.png" className="w-[72px] h-[72px] rounded-[10px]" />
                                            </div>
                                          </div>
                                          <div className="w-full mt-px p-4 bg-white hover:bg-white hover:border-t hover:duration-150 hover:relative hover:transition-all hover:border-t-[oklch(91.4%_0.016_262.8)] hover:mt-[-100px]">
                                            <div className="block mb-2 h-[54px]">
                                              <div className="flex mb-2">
                                                <h2 className="mr-1 font-semibold text-base capitalize leading-[150%]">Custom Integrations</h2>
                                                <span className="hidden hover:block">
                                                  <div data-test-id="cs-tooltip" className="inline-block">
                                                    <div tabIndex="0" className="flex justify-center items-center w-6 h-6 hover:cursor-pointer hover:flex hover:h-6 hover:items-center hover:justify-center hover:w-6 hover:bg-[oklch(95.7%_0.009_258.3)] hover:rounded-[10%]">
                                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" name="Link" data-test-id="cs-icon" className="w-4 h-4">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.767 11.22a.75.75 0 01.001 1.06l-8.475 8.487a.75.75 0 11-1.061-1.06l8.475-8.487a.75.75 0 011.06 0z" fill="#475161">
                                                        </path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 13.345a.75.75 0 010 1.06L6.63 17.943a5.252 5.252 0 007.427 7.427l3.538-3.538a.75.75 0 111.06 1.06l-3.537 3.538a6.75 6.75 0 11-9.548-9.548l3.537-3.537a.75.75 0 011.06 0zM16.882 5.57a6.751 6.751 0 119.548 9.548l-3.537 3.537a.75.75 0 11-1.06-1.06l3.537-3.538a5.252 5.252 0 00-7.427-7.427l-3.538 3.538a.75.75 0 11-1.06-1.06l3.537-3.538z" fill="#475161">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <p className="h-11 text-sm flow-root overflow-hidden leading-[150%]">Import/export JSON or CSV data via Custom Integrations for sources without prebuilt Lytics connectors, often for campaign targeting.</p>
                                          </div>
                                          <div className="w-full px-4 pb-4">
                                            <div>
                                              <button data-test-id="data-integrations-custom-integrations-learn-more" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 px-4 font-semibold text-center text-sm text-white leading-none border-transparent duration-150 align-middle border rounded py-[5px] bg-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:bg-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                                <div className="flex justify-center items-center leading-[14px]">
                                                  <div className="flex items-center">
                                                    <div data-test-id="cs-icon" className="flex items-center">
                                                      <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-sm float-left">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M.379 7.187C1.636 4.805 4.402 2 8.001 2c3.624 0 6.428 2.874 7.666 5.273.236.457.236.997 0 1.454C14.429 11.127 11.625 14 8.001 14 4.456 14 1.72 10.89.437 8.784a1.614 1.614 0 0 1-.058-1.597zm7.622 4.51a3 3 0 1 0-.002-6.002 3 3 0 0 0 .002 6.002z" fill="#647696" className="fill-white">
                                                        </path>
                                                      </svg>
                                                    </div>
                                                    Learn More
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mr-5 my-[15px] ml-[15px]">
                                  <div data-test-id="cs-Info" className="flex flex-row mb-5 px-5 text-sm border-b border-r border-t rounded h-[60px] leading-[14px] bg-[oklch(98.9%_0.009_214.3)] border-r-[oklch(91.4%_0.016_262.8)] border-y-[oklch(91.4%_0.016_262.8)]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid"}}>
                                    <div className="rounded-l -ml-5 h-[58px] border-l-[0.25rem] border-l-[oklch(54.6%_0.202_258.3)]" style={{"borderLeftStyle":"solid"}}>
                                    </div>
                                    <div className="flex justify-center items-center">
                                      <div className="ml-[15px] py-[18px] text-[0.8125rem] text-[oklch(24.8%_0.000_89.9)] leading-[150%]">
                                        <div className="flex justify-between leading-[20.144px]">
                                          <div className="w-[85%]">
                                            <b className="text-[13px]">Can’t find what you’re looking for?</b>
                                            Marketplace lists all your favorite apps and starters that are publicly available for use. If you can't find what you're looking for, you can send us a request mentioning what you're looking for by clicking on the button below.
                                          </div>
                                          <button data-test-id="cs-button" aria-label="aria-button" type="button" className="relative min-w-8 min-h-8 max-h-8 mt-1 px-4 font-semibold text-center text-sm leading-none duration-150 cursor-pointer align-middle border rounded py-[5px] text-[oklch(56.8%_0.202_283.1)] bg-[oklch(98.2%_0.009_292.8)] border-[oklch(56.8%_0.202_283.1)] transition-[color,_background-color,_border-color,_box-shadow,_-webkit-box-shadow] hover:border hover:border-[oklch(50.5%_0.166_284.1)] hover:text-[oklch(50.5%_0.166_284.1)] focus:shadow-[rgb(173,_164,_244)_0px_0px_0px_2px]" style={{"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}}>
                                            <div className="flex justify-center items-center leading-[14px]">
                                              <div className="flex items-center">Submit Request</div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-test-id="cs-page-layout-leftDrawer" className="absolute w-2.5 border-r-2 border-r-transparent top-[-5.625rem] left-[-0.688rem] z-[7] h-[calc(100%_+_5.625rem)] hover:border-r-2 hover:border-r-[oklch(50.5%_0.166_284.1)]" style={{"borderRightStyle":"solid"}}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="trial-reminder-banner-dom">
        </div>
        <div id="embeddedservice">
        </div>
        <div id="dropdown-dom">
        </div>
        <div id="tooltip-dom">
        </div>
        <div id="branch-display-dom">
        </div>
        <div id="edit-entry-action-dom">
        </div>
        <div id="content-type-file-field-dropdown">
        </div>
        <div id="edit-entry-pubunpub-modal">
        </div>
        <div id="timeline-items-dropdown">
        </div>
        <div id="asset-management-upload-modal-root">
        </div>
        <div id="root-pubunpub-timezone-dropdown" className="flex flex-wrap gap-4">
          <div className="rounded">
            <div className="inline-block bg-white cursor-pointer rounded hover:border hover:border-[oklch(50.5%_0.166_284.1)] hover:shadow-[rgb(93,_80,_190)_0px_0px_0px_1px] focus:border focus:rounded focus:border-[oklch(56.8%_0.202_283.1)] focus:shadow-[rgb(108,_92,_231)_0px_0px_0px_1px]" style={{"fontFamily":"Inter"}}>
              <div id="edit-entry-pubunpub-timezone" className="-mt-6">
              </div>
            </div>
          </div>
        </div>
        <cs-native-frame-holder hidden>
        </cs-native-frame-holder>
      </div>
    </Fragment>
  );
}
