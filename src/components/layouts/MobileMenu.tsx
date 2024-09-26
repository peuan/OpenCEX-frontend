"use client";

import { Drawer } from "@mui/material";
import { ReactNode } from "react";

interface MobileMenuProps {
  menuContent: ReactNode;
  isOpen: boolean;
  onDrawerToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuContent,
  isOpen,
  onDrawerToggle,
}) => {
  return (
    <Drawer
      hideBackdrop
      anchor="top"
      open={isOpen}
      onClose={onDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        top: "66px",
      }}
      PaperProps={{
        variant: 'outlined',
        sx: {
          border: 'none',
          background: "background.default",
          boxSizing: "border-box",
          width: "100%",
          height: "calc(100vh - 66px)",
          top: "66px",
        },
      }}
    >
      {menuContent}
    </Drawer>
  );
};

export default MobileMenu;
