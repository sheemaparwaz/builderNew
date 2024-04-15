"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button/Button";


type MyProps = { content: string; link: string }

// Any component in your codebase
function MyButton(props: MyProps) {
  return( <Button href={props.link}>{props.content}</Button>)
}

export default MyButton

