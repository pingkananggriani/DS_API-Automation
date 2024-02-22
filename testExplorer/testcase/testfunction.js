const { postMethod, putMethod, getMethod, patchMethod, deleteMethod } = require("../apiServer/apiobjects");

describe("Testing API restful", function () {
  let id;
  it("Test GET from Function", async function () {
    await getMethod(id);
  });

  it("Test POST from Function", async function () {
   id = await postMethod();
  });

  it("Test PUT from Function", async function () {
    await putMethod(id);
   });

  it("Test PATCH from Function", async function () {
    await patchMethod(id);
   });
  
});