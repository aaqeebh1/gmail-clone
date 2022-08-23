import React from "react";
import "./Sendmail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { db } from "./firebase.jsx";
import firebase from "firebase/compat/app";

const Sendmail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    db.collection("email").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendmail__close-icon"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <Alert severity="error">Required Field!</Alert>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <Alert severity="error">Required Field!</Alert>}
        <textarea
          name="message"
          type="text"
          className="sendmail__message-field"
          {...register("message", {
            required: true,
          })}
        />
        {errors.message && <Alert severity="error">Required Field!</Alert>}

        <div className="sendmail__option">
          <Button className="sendmail__send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Sendmail;
