const { expect } = require("chai");
const Dispatcher = require("./Dispatcher");

describe("createDispatcher", () => {
  const dispatcher = new Dispatcher();
  it("should return an EventDispatcher object with methods on and emit", async () => {
    expect(dispatcher)
      .to.be.an("object")
      .that.has.all.keys("on", "emit", "$clearEvent")
      .that.respondsTo("on")
      .that.respondsTo("emit")
      .that.respondsTo("$clearEvent");
  });
  it("Should be able to emit and handle events", (done) => {
    dispatcher.on("test", (data) => {
      expect(data).to.deep.equal({ testPassed: true });
      done();
    });

    dispatcher.emit("test", { testPassed: true });
  });
});
