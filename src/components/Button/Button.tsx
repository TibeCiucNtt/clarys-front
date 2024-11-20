"use client"; 

import React from "react";
import Link from "next/link";
import {ButtonProps} from "@/types"
import styles from "./Button.module.css";


const Button = ({
  text,
  onClick,
  href,
  type = "button",
  styleType = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const combinedStyles = `
    ${styles.base} 
    ${styles[styleType]} 
    ${disabled ? styles.disabled : ""} 
    ${className}
  `;

  // Render as a Link if `href` is provided
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {text}
      </Link>
    );
  }

  // Otherwise render as a regular button
  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
