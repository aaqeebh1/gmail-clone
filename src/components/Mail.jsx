import React from "react";
import "./Mail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import "./Mail.css";

const Mail = () => {
  const history = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools--left">
          <div className="mail__tools--back">
            <IconButton onClick={() => history("/")}>
              <ArrowBackIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="mail__tools--group">
            <IconButton>
              <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ReportGmailerrorredIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <DeleteOutlinedIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="mail__tools--group">
            <IconButton>
              <MailOutlineOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <AccessTimeIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <AddTaskIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="mail__tools--group">
            <IconButton>
              <DriveFileMoveOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LabelOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="mail__tools--right">
          <p className="email__number">1 of 20000</p>
          <IconButton className="mail__tools--right-icon">
            <ArrowBackIosNewOutlinedIcon fontSize="smaller" />
          </IconButton>
          <IconButton className="mail__tools--right-icon">
            <ArrowForwardIosOutlinedIcon fontSize="smaller" />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__body--header">
          <div className="mail__body--header-left">
            <h2>Subject</h2>
            <IconButton>
              <LabelImportantOutlinedIcon
                className="mail__important"
                fontSize="small"
              />
            </IconButton>
          </div>
          <div className="mail__body--header-right">
            <LocalPrintshopOutlinedIcon fontSize="small" />
            <OpenInNewOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className="mail__body--title">
          <div className="mail__body--title-left">
            <img
              src="https://lh3.googleusercontent.com/a/default-user=s40-p"
              className="avatar__img"
            />
            <h3>Title</h3>
            <p>Sender Email</p>
            <p>timestamp</p>
          </div>
          <div className='mail__body--title-right'>
            <IconButton>
              <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ReplyOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
