const server = require("./index.js")
const supertest = require("supertest")
const requestWithSupertest = supertest(server)

describe("Convert Endpoint Error", () => {
  it("POST /convert should return error with no file in multipart/form-data", async () => {
    const res = await requestWithSupertest.post("/convert")
    expect(res.status).toEqual(400)
    expect(res.type).toEqual(expect.stringContaining("json"))
  })
})

describe("Random Endpoint", () => {
  it("Get /random should return 404 error", async () => {
    const res = await requestWithSupertest.post("/random")
    expect(res.status).toEqual(404)
    expect(res.type).toEqual(expect.stringContaining("json"))
  })
})

describe("Convert Endpoint Success", () => {
  it("POST /convert should return status 200", async () => {
    const res = await requestWithSupertest
      .post("/convert?format=image/jpeg")
      .attach("image", "example.png")
    expect(res.status).toEqual(200)
  })
})
