// "use strict"

// // This is the Pact test for the Dog App 

// const expect = require("chai").expect
// const path = require("path")
// const { Pact } = require("@pact-foundation/pact")

// // Load the consumer client code which we will call in our test
// const { getMeDogs, getMeDog } = require("../dog-app")

// describe("Dog App Pact Test", () => {
//   let url = "http://localhost"
//   const port = 8993

//   // Use Pact to create a mock provider which we will point our consumer code at during the test
//   const provider = new Pact({
//     port: port,
//     log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
//     dir: path.resolve(process.cwd(), "pacts"),
//     spec: 2,
//     consumer: "Dog App",
//     provider: "dog-walk",
//   })

//   // This is the body we expect to get back from the provider
//   const EXPECTED_BODY = [
//     {
//       dog: 1,
//     },
//     {
//       dog: 2,
//     },
//   ]

//   // Setup the provider
//   before(() => provider.setup())

//   // Write Pact when all tests done
//   after(() => provider.finalize())

//   // verify with Pact, and reset expectations
//   afterEach(() => provider.verify())

//   describe("get /walk", () => {
//     before(done => {

//       // First we setup the expected interactions that should occur during the test
//       const interaction = {
//         state: "i have a list of dogs",
//         uponReceiving: "a request for all dogs want to walk",
//         withRequest: {
//           method: "GET",
//           path: "/walk",
//           headers: {
//             Accept: "application/json",
//           },
//         },
//         willRespondWith: {
//           status: 200,
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: EXPECTED_BODY,
//         },
//       }
//       provider.addInteraction(interaction).then(() => {
//         done()
//       })
//     })

//     it("returns the correct response", done => {
//       // We call our consumer code, and that will make requests to the mock server
//       const urlAndPort = {
//         url: url,
//         port: port,
//       }
//       getMeDogs(urlAndPort).then(response => {
//         expect(response.data).to.eql(EXPECTED_BODY)
//         done()
//       }, done)
//     })
//   })

//   describe("get /walk/1", () => {
//     before(done => {
//       const interaction = {
//         state: "i have a list of dogs",
//         uponReceiving: "a request for a single dog want to walk",
//         withRequest: {
//           method: "GET",
//           path: "/walk/1",
//           headers: {
//             Accept: "application/json",
//           },
//         },
//         willRespondWith: {
//           status: 200,
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: EXPECTED_BODY,
//         },
//       }
//       provider.addInteraction(interaction).then(() => {
//         done()
//       })
//     })

//     it("returns the correct response", done => {
//       const urlAndPort = {
//         url: url,
//         port: port,
//       }
//       getMeDog(urlAndPort).then(response => {
//         expect(response.data).to.eql(EXPECTED_BODY)
//         done()
//       }, done)
//     })
//   })
// })
