"use client";
import React, { useState } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";
import Link from "next/link";
import Toaster from "../Toaster";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenToaster, setIsOpenToaster] = useState<boolean>(false);
  const [toasterMessage, setToasterMessage] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    if (password.length < 2) {
      setIsOpenToaster(true);
      setToasterMessage("Passwords do not match");
      setIsShowError(true);
    } else {
      setIsOpenToaster(true);
      setIsShowError(false);
      setToasterMessage("Signup successfull");
    }
  };

  const isDisabled = !(email.length > 0 && password.length > 0);

  return (
    <>
      {" "}
      <Toaster
        open={isOpenToaster}
        message={toasterMessage}
        onClose={() => setIsOpenToaster(false)}
        severity={isShowError ? "error" : "success"}
      />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p className={styles.heading}>LOGIN</p>
          <div className={styles.wrapper}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              className={styles.inputEmail}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
            <button
              type="button"
              disabled={isDisabled}
              className={
                isDisabled ? cx(styles.disable, styles.button) : styles.button
              }
              onClick={handleSubmit}
            >
              Sign In
            </button>

            <p>
              DON&#39;T HAVE AN ACCOUNT? <Link href="/signup">CREATE ONE</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
