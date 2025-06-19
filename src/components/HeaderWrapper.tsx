'use client';

import PromotionalBar from "@/components/PromotionalBar";
import Header from "@/components/Header";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export default function HeaderWrapper() {
  const { totalQuantity } = useCartStore();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.getElementById('site-header');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, [totalQuantity]);

  return (
    <>
      <div id="site-header" className="fixed top-0 left-0 right-0 z-40">
        <PromotionalBar />
        <Header />
      </div>
      <div style={{ paddingTop: `${headerHeight}px` }} />
    </>
  );
} 