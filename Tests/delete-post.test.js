const { spec, request } = require("pactum");

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Delete posts endpoint test suites", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete existing post test", async () => {
    const postId = "1";

    await spec()
      .delete(`${baseUrl}/posts/${postId}`)
      .expectStatus(200)
      .expectResponseTime(3000);
  });

  it("Try to delete  post usuing a string instead of id test", async () => {
    const postId = "lorem";

    await spec()
      .delete(`${baseUrl}/posts/${postId}`)
      .expectStatus(200)
      .expectResponseTime(3000);
  });
});