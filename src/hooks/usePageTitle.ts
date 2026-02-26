import { useEffect } from "react";

const BASE_TITLE = "Tro.ts Architects";

export const usePageTitle = (pageTitle?: string) => {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${BASE_TITLE}`
      : `${BASE_TITLE} | Context-Driven Architecture`;
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://trotsarchitects.com${window.location.pathname}`);
    }

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `https://trotsarchitects.com${window.location.pathname}`);
    }
  }, [pageTitle]);
};
