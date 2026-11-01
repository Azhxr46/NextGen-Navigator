import React, { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  routeKey: string;
}

/**
 * PageTransition provides an elegant, hardware-accelerated slide-in animation
 * from the right with a subtle fade whenever the active route changes.
 * Fully accessible and respects prefers-reduced-motion.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children, routeKey }) => {
  return (
    <div key={routeKey} className="page-transition-enter w-full">
      {children}
    </div>
  );
};

