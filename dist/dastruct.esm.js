function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var Stack = /*#__PURE__*/function () {
  function Stack() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, Stack);
    _defineProperty(this, "items", []);
    this.items = items;
  }
  _createClass(Stack, [{
    key: "count",
    get: function get() {
      return this.items.length;
    }
  }, {
    key: "empty",
    get: function get() {
      return this.count === 0;
    }
  }, {
    key: "push",
    value: function push(item) {
      return this.items.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.items.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.count - 1;
      return this.items[index];
    }
  }]);
  return Stack;
}();

var dastruct = {
  Stack: Stack
};

export { Stack, dastruct as default };
//# sourceMappingURL=dastruct.esm.js.map
