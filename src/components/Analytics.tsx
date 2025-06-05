'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface AnalyticsProps {
  gtmId?: string;
  gaId?: string;
}

export default function Analytics({ gtmId, gaId }: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (gaId) {
      // Load Google Analytics
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          page_path: window.location.pathname,
          send_page_view: true
        });
      `;
      document.head.appendChild(script2);
    }

    if (gtmId) {
      // Load Google Tag Manager
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);

      // Add noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gaId, gtmId]);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  return null;
}

// Analytics utility functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPurchase = (transactionId: string, value: number, currency = 'EUR', items: unknown[] = []) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    });
  }
};

export const trackAddToCart = (currency = 'EUR', value: number, items: unknown[] = []) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'add_to_cart', {
      currency: currency,
      value: value,
      items: items,
    });
  }
};

export const trackViewItem = (currency = 'EUR', value: number, items: unknown[] = []) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'view_item', {
      currency: currency,
      value: value,
      items: items,
    });
  }
};

export const trackSearch = (searchTerm: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'search', {
      search_term: searchTerm,
    });
  }
}; 