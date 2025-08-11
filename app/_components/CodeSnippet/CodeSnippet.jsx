"use server"
import React from 'react';
import { Code } from 'bright';

import styles from './CodeSnippet.module.css';
import customTheme from './theme';

function CodeSnippet(props) {
  return (
    <Code
      {...props}
      theme={customTheme}
      className={styles.wrapper}
    />
  );
}

export default CodeSnippet;
