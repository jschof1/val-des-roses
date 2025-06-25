'use client';

export default function SkipLink() {
  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <button
      onClick={handleSkipToMain}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-burgundy focus: focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:tracking-wide focus:border-2 focus:border-cream"
      tabIndex={0}
    >
      Skip to main content
    </button>
  );
} 