import React, { useState } from "react"
import FormatSelector from "../FormatSelector/FormatSelector"
import styles from "./FileList.module.scss"
import ConvertButton from "../ConvertButton/ConvertButton"

function FileList(props) {
  const [format, setFormat] = useState("image/jpeg")
  
  const [files, setFiles] = props.useFiles

  return (
    <div className={styles.fileList}>
      {files.map((file, index) => (
        <React.Fragment key={index}>
          <div className={styles.dropFile} key={file.path}>
            {file.path}
          </div>
          <FormatSelector useFormat={[format, setFormat]} />
          <ConvertButton useFiles={[files, setFiles]} format={format} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default FileList
