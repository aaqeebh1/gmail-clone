import { Button, IconButton } from "@mui/material";
import React from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const EmailList = () => {
  return (
    <div className="email__list">
      <div className="email__list--top-bar">
        <div className="email__list--top-left">
          <IconButton>
            <CheckBoxOutlineBlankIcon fontSize="small"/>
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <RefreshIcon fontSize="small"/>
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small"/>
          </IconButton>
        </div>
        <div className="email__list--top-right">
          <Button variant="text">
            <p className="email__number">1-50 of 25000</p>
          </Button>
          <IconButton>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ChevronRightIcon fontSize="small"/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
