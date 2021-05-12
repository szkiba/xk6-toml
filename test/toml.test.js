/**
 * MIT License
 *
 * Copyright (c) 2021 Iván Szkiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { group } from "k6";

export { options } from "./expect.js";
import { describe } from "./expect.js";
import TOML from "k6/x/toml";

const sample = open("./testdata/sample.toml");

const object = `
foo = "bar"
sizes = ["small", "medium", "large"]
`;

export default function () {
  describe("parse", (t) => {
    const obj = TOML.parse(object);
    t.expect(obj.foo).as("foo").toEqual("bar");
    t.expect(obj.sizes[0]).as("first item").toEqual("small");
  });

  describe("stringify", (t) => {
    const obj = { sizes: ["small", "medium", "large"] };
    const str = TOML.stringify(obj);
    t.expect(str).as("text").toEqual(`sizes = ["small", "medium", "large"]\n`);
  });

  describe("sample", (t) => {
    const obj = TOML.parse(sample);
    t.expect(obj.title).as("title").toEqual("TOML Example");
    t.expect(obj.owner.name).as("owner.name").toEqual("Tom Preston-Werner");
    t.expect(obj.database.ports[0]).as("database.ports[0]").toEqual(8000);
    t.expect(obj.owner.dob.toString()).as("owner.dob").toEqual("1979-05-27 07:32:00 +0000 UTC");
  });
}
