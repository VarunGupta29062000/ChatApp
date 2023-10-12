"use client";
import React, { useState } from "react";
import cx from "classnames";
import Link from "next/link";
import styles from "./styles.module.scss";
import Toaster from "../Toaster";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOpenToaster, setIsOpenToaster] = useState<boolean>(false);
  const [toasterMessage, setToasterMessage] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };
  const isDisabled = !(
    email.length > 0 &&
    password.length > 0 &&
    name.length > 0 &&
    phoneNumber.length > 0 &&
    confirmPassword.length > 0
  );

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setIsOpenToaster(true);
      setToasterMessage("Passwords do not match");
      setIsShowError(true);
    } else {
      setIsOpenToaster(true);
      setIsShowError(false);
      setToasterMessage("Signup successfull");
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p className={styles.heading}>LOGIN</p>
          <div className={styles.wrapper}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              onChange={handleInputChange}
              className={styles.inputEmail}
            />

            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="confirm-password"
              placeholder="Re-enter your password"
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
              Sign Up
            </button>

            <p>
              ALREADY HAVE AN ACCOUNT? <Link href="/">LOGIN</Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster
        open={isOpenToaster}
        message={toasterMessage}
        onClose={() => setIsOpenToaster(false)}
        severity={isShowError ? "error" : "success"}
      />
    </>
  );
};

export default SignUpPage;
