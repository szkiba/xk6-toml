// MIT License
//
// Copyright (c) 2021 Iván Szkiba
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

package toml

import (
	"github.com/pelletier/go-toml"
	"go.k6.io/k6/js/modules"
)

// Register the extensions on module initialization.
func init() {
	modules.Register("k6/x/toml", New())
}

type Module struct{}

func New() *Module {
	return &Module{}
}

func (m *Module) Parse(text string) (interface{}, error) {
	obj := map[string]interface{}{}

	err := toml.Unmarshal([]byte(text), &obj)
	if err != nil {
		return nil, err
	}

	return obj, nil
}

func (m *Module) Stringify(value interface{}) (string, error) {
	b, err := toml.Marshal(value)
	if err != nil {
		return "", err
	}

	return string(b), nil
}
