const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Put posts endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("put new post test", async () => {
    const requestBody = {
      title: "Alina",
      body: "lorem ipsum",
    };

    const postId = "1"

    await spec()
      .put(`${baseUrl}/posts/${postId}`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains(requestBody.title);
  });
});
