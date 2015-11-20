import {add} from "../util";
import should from "should";

describe("Util", ()=> {
  
  it("should add two numbers", () => {
    add(1, 3).should.eql(5);
  });
});