import React from 'react';
interface SidebarProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ header, content, footer }) => {
  return (
    <div className="flex w-64 flex-shrink-0 flex-col border-r">
      {/* Sidebar Header */}
      {header && <div className="m-2">{header}</div>}

      {/* Sidebar Content */}
      {content && (
        <div className="flex-1 p-2">
          <ScrollArea>
            {content}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      )}

      {/* Sidebar Footer */}
      {footer && <div className="m-2">{footer}</div>}
    </div>
  );
};

export default Sidebar;
