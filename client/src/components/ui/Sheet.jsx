import React, { useEffect } from "react";

export function Sheet({ open, onOpenChange, children }) {
  // Close on Escape key
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  // Prevent scrolling when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => onOpenChange(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      ></div>

      {/* Sheet content container */}
      <div className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-black shadow-lg z-50 overflow-auto transition-transform">
        {children}
      </div>
    </>
  );
}

export function SheetTrigger({ children, onClick }) {
  // Just wrap the child element and handle clicks
  return React.cloneElement(children, {
    onClick,
  });
}

export function SheetContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
