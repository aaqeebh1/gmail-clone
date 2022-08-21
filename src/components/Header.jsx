import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon className="menuIcon" />
        </IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png" />
      </div>
      <div className="header__middle">
        <div className="search__wrapper">
          <IconButton>
          <SearchIcon className="searchIcon" />
          </IconButton>
          <input
            type="text"
            placeholder="Search email"
            className="search__input"
          />
          <IconButton>
            <TuneOutlinedIcon className="settingIcon" />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
