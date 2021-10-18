import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"

import FileList from "../FileList/FileList"
import styles from "./DropArea.module.scss"

function DropArea() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/gif, image/tiff",
    maxFiles: 1
  })

  const [files, setFiles] = useState(acceptedFiles)

  useEffect(() => {
    setFiles(acceptedFiles)
  }, [acceptedFiles])

  return (
    <section className={styles.dropContainer}>
      <div {...getRootProps({ className: styles.dropArea })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop file here or click to choose file manually.</p>
      </div>
      <FileList useFiles={[files, setFiles]} />
    </section>
  )
}

export default DropArea
