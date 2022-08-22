import { Button, IconButton } from "@mui/material";
import React from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Inbox from "@mui/icons-material/Inbox";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Section from "./Section";
import EmailRow from "./EmailRow";

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
      <div className="email__list--middle-bar">
        <Section Icon={Inbox} title='Primary' color={' red'}/>
        <Section Icon={LocalOfferOutlinedIcon} title='Promotions' color={' green'}/>
        <Section Icon={GroupOutlinedIcon} title='Social' color={' blue'}/>
      </div>
      <div className="email__list--rows">
        <EmailRow title='Test' subject='test' description='testagain' time='12:59'/>
        <EmailRow title='Test' subject='test' description='testagain' time='12:59'/>
        <EmailRow title='Test' subject='test' description='testagain' time='12:59'/>
      </div>
    </div>
  );
};

export default EmailList;
