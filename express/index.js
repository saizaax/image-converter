const express = require("express")
const cors = require("cors")
const jimp = require("jimp")
const multer = require("multer")
const { Readable } = require("stream")

const app = express()
app.use(cors())

app.post("/convert", multer().single("image"), async (req, res) => {
  const { file, query } = req
  const { format } = query

  if (!file || !format) {
    res.status(400)
    return res.json({ error: "File and target file-format are required." })
  }

  const { buffer } = file

  jimp
    .read(buffer)
    .then((image) => image.getBufferAsync(format))
    .then((buffer) => {
      const stream = new Readable()
      stream.push(buffer)
      stream.push(null)

      stream.pipe(res)
    })
})

app.use((req, res) => {
  return res.status(404).json({ error: "Not found" })
})

app.listen(5500, () => {
  console.log(`Server is listening to port: ${5500}`)
})

module.exports = app