import React from "react"

import styles from "./FormatSelector.module.scss"

function FormatSelector(props) {
  const [format, setFormat] = props.useFormat

  return (
    <select
      className={styles.formatSelector}
      defaultValue={format}
      onChange={(e) => setFormat(e.target.value)}
    >
      <option value="image/png">PNG</option>
      <option value="image/jpeg">JPEG</option>
      <option value="image/gif">GIF</option>
      <option value="image/tiff">TIFF</option>
    </select>
  )
}

export default FormatSelector
