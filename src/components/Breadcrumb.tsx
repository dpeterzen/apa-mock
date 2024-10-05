import React from 'react';
import { Slash } from 'lucide-react';

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <button className="px-2 py-1 rounded">
            {item}
          </button>
          {index < items.length - 1 && <Slash />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;