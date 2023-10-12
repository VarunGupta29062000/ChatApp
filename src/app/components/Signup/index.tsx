"use client";
import React, { useState } from "react";
import cx from "classnames";
import Link from "next/link";
import Toaster from "../Toaster";
import {
  EMAIL_CHECK_REGEX,
  MOBILE_PHONE_REGEX,
  PASSWORD_REGEX,
} from "@/utils/constants";

import styles from "./styles.module.scss";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOpenToaster, setIsOpenToaster] = useState<boolean>(false);
  const [toasterMessage, setToasterMessage] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [image, setImage] = useState("");

  const validations = (name: string, value: string) => {
    if (name === "email") {
      return EMAIL_CHECK_REGEX?.test(value as string);
    }
    if (name === "phoneNumber") {
      return MOBILE_PHONE_REGEX?.test(value as string);
    }
    if (name === "password") {
      return PASSWORD_REGEX?.test(value as string);
    }

    if (name === "confirm-password") {
      return PASSWORD_REGEX?.test(value as string);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (validations(name, value)) {
        setIsOpenToaster(true);
        setToasterMessage("Valid Email");
        setIsShowError(false);
        setEmail(value);
      } else {
        setIsOpenToaster(true);
        setToasterMessage("Invalid Email");
        setIsShowError(true);
      }
    } else if (name === "password") {
      if (validations(name, value)) {
        setIsOpenToaster(true);
        setToasterMessage("Valid Password");
        setIsShowError(false);
        setPassword(value);
      } else {
        setIsOpenToaster(true);
        setToasterMessage("Invalid Password");
        setIsShowError(true);
      }
    } else if (name === "name") {
      setName(value);
    } else if (name === "phoneNumber") {
      if (validations(name, value)) {
        setIsOpenToaster(true);
        setToasterMessage("Valid Phone Number");
        setIsShowError(false);
        setPhoneNumber(value);
      } else {
        setIsOpenToaster(true);
        setToasterMessage("Invalid Phone Number");
        setIsShowError(true);
      }
    } else if (name === "confirm-password") {
      if (validations(name, value)) {
        setIsOpenToaster(true);
        setToasterMessage("Valid Confirm Password");
        setIsShowError(false);
        setConfirmPassword(value);
      } else {
        setIsOpenToaster(true);
        setToasterMessage("Invalid Confirm Password");
        setIsShowError(true);
      }
    } else if (name === "file") {
      setImage(value);
    }
  };
  const isDisabled = !(
    email.length > 0 &&
    password.length > 0 &&
    name.length > 0 &&
    phoneNumber.length > 0 &&
    confirmPassword.length > 0 &&
    image.length > 0
  );

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setIsOpenToaster(true);
      setToasterMessage("Passwords do not match");
      setIsShowError(true);
    } else {
      console.log(image);
      setIsOpenToaster(true);
      setIsShowError(false);
      setToasterMessage("Signup successfull");
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p className={styles.heading}>CHATTING APP SIGN UP</p>
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
              placeholder="Enter your password (Min. 8 characters)"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="confirm-password"
              placeholder="Re-enter your password"
              onChange={handleInputChange}
            />
            <div>
              <input
                type="file"
                name="file"
                onChange={handleInputChange}
                accept="Image/*"
                className={styles.imageUpload}
                required
              />
            </div>

            <button
              type="button"
              disabled={isDisabled}
              className={
                isDisabled ? cx(styles.disable, styles.button) : styles.button
              }
              onClick={handleSubmit}
            >
              Create User
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
