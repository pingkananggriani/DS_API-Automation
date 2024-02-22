const request = require("supertest");
const { expect } = require("chai"); 
const baseurl = require("../globalvariabel/baseurl");

const url = baseurl; 

async function getMethod () {
    const response = await request(url)
    .get("/objects");

    expect(response.status).to.equal(200);
    console.log("DATA GET:");
    console.log(response.body);
  }


async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Pingkan",
      data: {
        nik: "1233",
        Pekerjaan: "Pegawai",
        Alamat: "Surabaya"
      },
    });
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Pingkan");
  expect(response.body.data.nik).to.equal("1233");
  expect(response.body.data.Pekerjaan).to.equal("Pegawai");
  expect(response.body.data.Alamat).to.equal("Surabaya");

  console.log("DATA POST:");
  console.log(response.body);
  const id = response.body.id;
  return id;
}

async function putMethod(id) {
    const response = await request(url)
      .put(`/objects/${id}`)
      .send({
        name: "Pingkann",
        data: {
            nik: "1233",
            Pekerjaan: "Pegawai",
            Alamat: "Surabaya",
            usia : "23"
        },
      });
    
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Pingkann");
    expect(response.body.data.nik).to.equal("1233");
    expect(response.body.data.Pekerjaan).to.equal("Pegawai");
    expect(response.body.data.Alamat).to.equal("Surabaya");
    expect(response.body.data.usia).to.equal("23");

    console.log("DATA PUT:");
    console.log(response.body);
  
  }
 
  
async function patchMethod(id) {
  const response = await request(url)
    .patch(`/objects/${id}`)
    .send({
      name: "Pingkan A"
    });
  
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Pingkan A");

  console.log("DATA PATCH:");
  console.log(response.body);

}
module.exports = {getMethod, postMethod, putMethod,  patchMethod};