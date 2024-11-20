"use client";
import {homepageStyle, titleStyle, descriptionStyle} from "./page.styles";
import { formatDate, formatTime } from "@/utils/formatDate";
import Button from "@/components/Button/Button";

const Homepage = () => {
  const handleClick = () => alert("Button clicked!");
  const now = new Date();

  return (
    <div style={homepageStyle}>
      <h1 style={titleStyle}>Clarys</h1>
      <p style={descriptionStyle}>
        Welcome to Clarys.
      </p>
      <p>Today's Date: {formatDate(now)}</p>
      <p>Current Time: {formatTime(now)}</p>
      <Button text="Click Me" onClick={handleClick} styleType="primary" />
    </div>
  );
}

export default Homepage;