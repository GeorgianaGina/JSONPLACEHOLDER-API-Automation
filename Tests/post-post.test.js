const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Create posts endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("create new post test", async () => {
    const requestBody = {
      title: "Georgiana",
      body: "lorem ipsum",
    };
    await spec()
      .post(`${baseUrl}/posts`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(201)
      .expectResponseTime(3000)
      .expectBodyContains("lorem ipsum");
  });
});
