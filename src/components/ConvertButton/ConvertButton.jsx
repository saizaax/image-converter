import axios from "axios"
import React from "react"
import { saveAs } from "file-saver"

import styles from "./ConvertButton.module.scss"

function ConvertButton(props) {
  const { format } = props
  const [files, setFiles] = props.useFiles

  const convert = () => {
    const imageData = files[0]
    const fileExtension = `.${format.split("/")[1]}`

    const data = new FormData()
    data.append("image", imageData)

    axios
      .post(`http://localhost:5500/convert?format=${format}`, data, {
        responseType: "blob"
      })
      .then((res) => {
        saveAs(res.data, imageData.name.replace(/\.[^/.]+$/, fileExtension))
        setFiles([])
      })
      .catch((err) => console.log(err))
  }

  return (
    <button className={styles.convertButton} onClick={convert}>
      Convert
    </button>
  )
}

export default ConvertButton
