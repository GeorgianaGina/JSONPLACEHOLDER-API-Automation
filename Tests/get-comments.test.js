const { spec, request } = require("pactum");
const getCommentsSchema = require("../data/response/get-comments-response-schema.json");
const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Get all comments endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get all comments test", async () => {
    await spec()
      .get(`${baseUrl}/comments`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("id labore ex et quam laborum")
      .expectJsonSchema(getCommentsSchema)
  });

  it("get all comments with filter id test", async () => {
    await spec()
      .get(`${baseUrl}/comments?Id=1`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("id labore ex et quam laborum")
      .expectJsonSchema(getCommentsSchema)
  });
});
