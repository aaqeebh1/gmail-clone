import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

const EmailRow = ({ title, subject, description, time, id }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        title,
        subject,
        description,
        time,
        id,
      })
    );
    history("/mail");
  };
  return (
    <div className="email__row" onClick={openMail}>
      <div className="email__row--options">
        <IconButton>
          <CheckBoxOutlineBlankIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <StarBorderOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="email__row--title">
        <h3 className="title">{title}</h3>
      </div>
      <div className="email__row--message">
        <h4>
          {subject}{" "}
          <span className="email__row--description">- {description}</span>
        </h4>
      </div>
      <p className="email__row--time">{time}</p>
    </div>
  );
};

export default EmailRow;
