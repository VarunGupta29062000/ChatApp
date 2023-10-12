import React from "react";
import cx from "classnames";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import styles from "./styles.module.scss";

interface ToasterProps {
  open: boolean;
  message: string;
  onClose: () => void;
  className?: string;
  severity: "error" | "warning" | "info" | "success";
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
}

const stylesToaster = {
  "& .MuiPaper-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const Toaster = (props: ToasterProps) => {
  const { open, message, severity, anchorOrigin, onClose, className } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      sx={stylesToaster}
      anchorOrigin={anchorOrigin}
    >
      <div className={cx(styles["toast-structure"], className)}>
        <Alert onClose={onClose} severity={severity}>
          <p>{message}</p>
        </Alert>
      </div>
    </Snackbar>
  );
};

Toaster.defaultProps = {
  anchorOrigin: { vertical: "top", horizontal: "right" },
};

export default Toaster;
