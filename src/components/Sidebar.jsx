import { Button } from "@mui/material";
import React from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Label from '@mui/icons-material/Label';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
  return (
    <div className="siderbar">
      <Button
        startIcon={<CreateOutlinedIcon className="composeIcon" />}
        className="sidebar__compose--btn"
      >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantOutlinedIcon} title="Important" number={54} />
      <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={54} />
      <SidebarOption Icon={InsertDriveFileOutlinedIcon} title="Drafts" number={54} />
      <SidebarOption Icon={Label} title="Categories" number={54} />
      <SidebarOption Icon={KeyboardArrowDownOutlinedIcon} title="More" number={54} />
      <div className="label__wrapper">
      <h3 className="labels">Labels</h3>
      <AddIcon className="addIcon"/>
      </div>
      <SidebarOption Icon={Label} title="Notes" number={54} />
      <SidebarOption Icon={Label} title="Personal" number={54} />
      <SidebarOption Icon={KeyboardArrowDownOutlinedIcon} title="More" number={54} />

    </div>
  );
};

export default Sidebar;
