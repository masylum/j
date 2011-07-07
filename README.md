# j

**j** is a testing library written in 5 lines of code (or 376 characters) which tries to be performant, with eye-catchy reports and easy to use.

This library is a shameless copy of txus famous [a](https://github.com/txus/a). But smaller.

In order to contribute to **j**, you have to bear in mind that the code must stay under 5 lines and with less than 80 chars per line.

## Usage

RSpec? Cucumber? Vows? Expresso?

F**k, life is too short! Let's use j!!

``` javascript
var test = j();

test([
  function setup() {
    this.user = {some: 'object'};
  }
, function test_user_has_property(assert) {
    assert(this.user.some === 'object');
    assert(!this.user.other);
  }
, function teardown() {
    this.user = null;
  }
]);

test([
  function setup() {
    this.foo = [1, 2, 3];
  }
, function test_user_has_property(assert) {
    assert(this.foo.length === 3);
    assert(this.foo[2] > 934); // Should fail at line 27

    this.foo[1] = 99;

    assert(this.foo[1] !== 2);
  }
, function teardown() {
    this.bar = 'something';
  }
]);

test();
```
