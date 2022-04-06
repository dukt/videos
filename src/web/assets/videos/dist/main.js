/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\n\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/clone-deep/index.js":
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Module dependenices\n */\n\nvar clone = __webpack_require__(/*! shallow-clone */ \"./node_modules/shallow-clone/index.js\");\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/kind-of/index.js\");\n\nvar isPlainObject = __webpack_require__(/*! is-plain-object */ \"./node_modules/is-plain-object/index.js\");\n\nfunction cloneDeep(val, instanceClone) {\n  switch (typeOf(val)) {\n    case 'object':\n      return cloneObjectDeep(val, instanceClone);\n\n    case 'array':\n      return cloneArrayDeep(val, instanceClone);\n\n    default:\n      {\n        return clone(val);\n      }\n  }\n}\n\nfunction cloneObjectDeep(val, instanceClone) {\n  if (typeof instanceClone === 'function') {\n    return instanceClone(val);\n  }\n\n  if (instanceClone || isPlainObject(val)) {\n    var res = new val.constructor();\n\n    for (var key in val) {\n      res[key] = cloneDeep(val[key], instanceClone);\n    }\n\n    return res;\n  }\n\n  return val;\n}\n\nfunction cloneArrayDeep(val, instanceClone) {\n  var res = new val.constructor(val.length);\n\n  for (var i = 0; i < val.length; i++) {\n    res[i] = cloneDeep(val[i], instanceClone);\n  }\n\n  return res;\n}\n/**\n * Expose `cloneDeep`\n */\n\n\nmodule.exports = cloneDeep;\n\n//# sourceURL=webpack://videos/./node_modules/clone-deep/index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar TypeError = global.TypeError; // `Assert: IsCallable(argument) is true`\n\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw TypeError(tryToString(argument) + ' is not a function');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\n\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar TypeError = global.TypeError; // `Assert: IsConstructor(argument) is true`\n\nmodule.exports = function (argument) {\n  if (isConstructor(argument)) return argument;\n  throw TypeError(tryToString(argument) + ' is not a constructor');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/a-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar String = global.String;\nvar TypeError = global.TypeError;\n\nmodule.exports = function (argument) {\n  if (typeof argument == 'object' || isCallable(argument)) return argument;\n  throw TypeError(\"Can't set \" + String(argument) + ' as a prototype');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\n\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n} // add a key to Array.prototype[@@unscopables]\n\n\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt); // `AdvanceStringIndex` abstract operation\n// https://tc39.es/ecma262/#sec-advancestringindex\n\n\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (it, Prototype) {\n  if (isPrototypeOf(Prototype, it)) return it;\n  throw TypeError('Incorrect invocation');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar String = global.String;\nvar TypeError = global.TypeError; // `Assert: Type(argument) is Object`\n\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw TypeError(String(argument) + ' is not an object');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-native.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-native.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("// eslint-disable-next-line es/no-typed-arrays -- safe\nmodule.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-buffer-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = fails(function () {\n  if (typeof ArrayBuffer == 'function') {\n    var buffer = new ArrayBuffer(8); // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe\n\n    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {\n      value: 8\n    });\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-buffer-non-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ \"./node_modules/core-js/internals/array-buffer-native.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar Int8Array = global.Int8Array;\nvar Int8ArrayPrototype = Int8Array && Int8Array.prototype;\nvar Uint8ClampedArray = global.Uint8ClampedArray;\nvar Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;\nvar TypedArray = Int8Array && getPrototypeOf(Int8Array);\nvar TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);\nvar ObjectPrototype = Object.prototype;\nvar TypeError = global.TypeError;\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');\nvar TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595\n\nvar NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';\nvar TYPED_ARRAY_TAG_REQUIRED = false;\nvar NAME, Constructor, Prototype;\nvar TypedArrayConstructorsList = {\n  Int8Array: 1,\n  Uint8Array: 1,\n  Uint8ClampedArray: 1,\n  Int16Array: 2,\n  Uint16Array: 2,\n  Int32Array: 4,\n  Uint32Array: 4,\n  Float32Array: 4,\n  Float64Array: 8\n};\nvar BigIntArrayConstructorsList = {\n  BigInt64Array: 8,\n  BigUint64Array: 8\n};\n\nvar isView = function isView(it) {\n  if (!isObject(it)) return false;\n  var klass = classof(it);\n  return klass === 'DataView' || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);\n};\n\nvar isTypedArray = function (it) {\n  if (!isObject(it)) return false;\n  var klass = classof(it);\n  return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);\n};\n\nvar aTypedArray = function (it) {\n  if (isTypedArray(it)) return it;\n  throw TypeError('Target is not a typed array');\n};\n\nvar aTypedArrayConstructor = function (C) {\n  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;\n  throw TypeError(tryToString(C) + ' is not a typed array constructor');\n};\n\nvar exportTypedArrayMethod = function (KEY, property, forced, options) {\n  if (!DESCRIPTORS) return;\n  if (forced) for (var ARRAY in TypedArrayConstructorsList) {\n    var TypedArrayConstructor = global[ARRAY];\n    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {\n      delete TypedArrayConstructor.prototype[KEY];\n    } catch (error) {\n      // old WebKit bug - some methods are non-configurable\n      try {\n        TypedArrayConstructor.prototype[KEY] = property;\n      } catch (error2) {\n        /* empty */\n      }\n    }\n  }\n\n  if (!TypedArrayPrototype[KEY] || forced) {\n    redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);\n  }\n};\n\nvar exportTypedArrayStaticMethod = function (KEY, property, forced) {\n  var ARRAY, TypedArrayConstructor;\n  if (!DESCRIPTORS) return;\n\n  if (setPrototypeOf) {\n    if (forced) for (ARRAY in TypedArrayConstructorsList) {\n      TypedArrayConstructor = global[ARRAY];\n      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {\n        delete TypedArrayConstructor[KEY];\n      } catch (error) {\n        /* empty */\n      }\n    }\n\n    if (!TypedArray[KEY] || forced) {\n      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable\n      try {\n        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);\n      } catch (error) {\n        /* empty */\n      }\n    } else return;\n  }\n\n  for (ARRAY in TypedArrayConstructorsList) {\n    TypedArrayConstructor = global[ARRAY];\n\n    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {\n      redefine(TypedArrayConstructor, KEY, property);\n    }\n  }\n};\n\nfor (NAME in TypedArrayConstructorsList) {\n  Constructor = global[NAME];\n  Prototype = Constructor && Constructor.prototype;\n  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);else NATIVE_ARRAY_BUFFER_VIEWS = false;\n}\n\nfor (NAME in BigIntArrayConstructorsList) {\n  Constructor = global[NAME];\n  Prototype = Constructor && Constructor.prototype;\n  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);\n} // WebKit bug - typed arrays constructors prototype is Object.prototype\n\n\nif (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {\n  // eslint-disable-next-line no-shadow -- safe\n  TypedArray = function TypedArray() {\n    throw TypeError('Incorrect invocation');\n  };\n\n  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {\n    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);\n  }\n}\n\nif (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {\n  TypedArrayPrototype = TypedArray.prototype;\n  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {\n    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);\n  }\n} // WebKit bug - one more object in Uint8ClampedArray prototype chain\n\n\nif (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {\n  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);\n}\n\nif (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {\n  TYPED_ARRAY_TAG_REQUIRED = true;\n  defineProperty(TypedArrayPrototype, TO_STRING_TAG, {\n    get: function () {\n      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;\n    }\n  });\n\n  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {\n    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);\n  }\n}\n\nmodule.exports = {\n  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,\n  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,\n  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,\n  aTypedArray: aTypedArray,\n  aTypedArrayConstructor: aTypedArrayConstructor,\n  exportTypedArrayMethod: exportTypedArrayMethod,\n  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,\n  isView: isView,\n  isTypedArray: isTypedArray,\n  TypedArray: TypedArray,\n  TypedArrayPrototype: TypedArrayPrototype\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-buffer-view-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ \"./node_modules/core-js/internals/array-buffer-native.js\");\n\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toIndex = __webpack_require__(/*! ../internals/to-index */ \"./node_modules/core-js/internals/to-index.js\");\n\nvar IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ \"./node_modules/core-js/internals/ieee754.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar arrayFill = __webpack_require__(/*! ../internals/array-fill */ \"./node_modules/core-js/internals/array-fill.js\");\n\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length';\nvar WRONG_INDEX = 'Wrong index';\nvar NativeArrayBuffer = global[ARRAY_BUFFER];\nvar $ArrayBuffer = NativeArrayBuffer;\nvar ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];\nvar $DataView = global[DATA_VIEW];\nvar DataViewPrototype = $DataView && $DataView[PROTOTYPE];\nvar ObjectPrototype = Object.prototype;\nvar Array = global.Array;\nvar RangeError = global.RangeError;\nvar fill = uncurryThis(arrayFill);\nvar reverse = uncurryThis([].reverse);\nvar packIEEE754 = IEEE754.pack;\nvar unpackIEEE754 = IEEE754.unpack;\n\nvar packInt8 = function (number) {\n  return [number & 0xFF];\n};\n\nvar packInt16 = function (number) {\n  return [number & 0xFF, number >> 8 & 0xFF];\n};\n\nvar packInt32 = function (number) {\n  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];\n};\n\nvar unpackInt32 = function (buffer) {\n  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];\n};\n\nvar packFloat32 = function (number) {\n  return packIEEE754(number, 23, 4);\n};\n\nvar packFloat64 = function (number) {\n  return packIEEE754(number, 52, 8);\n};\n\nvar addGetter = function (Constructor, key) {\n  defineProperty(Constructor[PROTOTYPE], key, {\n    get: function () {\n      return getInternalState(this)[key];\n    }\n  });\n};\n\nvar get = function (view, count, index, isLittleEndian) {\n  var intIndex = toIndex(index);\n  var store = getInternalState(view);\n  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);\n  var bytes = getInternalState(store.buffer).bytes;\n  var start = intIndex + store.byteOffset;\n  var pack = arraySlice(bytes, start, start + count);\n  return isLittleEndian ? pack : reverse(pack);\n};\n\nvar set = function (view, count, index, conversion, value, isLittleEndian) {\n  var intIndex = toIndex(index);\n  var store = getInternalState(view);\n  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);\n  var bytes = getInternalState(store.buffer).bytes;\n  var start = intIndex + store.byteOffset;\n  var pack = conversion(+value);\n\n  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];\n};\n\nif (!NATIVE_ARRAY_BUFFER) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, ArrayBufferPrototype);\n    var byteLength = toIndex(length);\n    setInternalState(this, {\n      bytes: fill(Array(byteLength), 0),\n      byteLength: byteLength\n    });\n    if (!DESCRIPTORS) this.byteLength = byteLength;\n  };\n\n  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, DataViewPrototype);\n    anInstance(buffer, ArrayBufferPrototype);\n    var bufferLength = getInternalState(buffer).byteLength;\n    var offset = toIntegerOrInfinity(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    setInternalState(this, {\n      buffer: buffer,\n      byteLength: byteLength,\n      byteOffset: offset\n    });\n\n    if (!DESCRIPTORS) {\n      this.buffer = buffer;\n      this.byteLength = byteLength;\n      this.byteOffset = offset;\n    }\n  };\n\n  DataViewPrototype = $DataView[PROTOTYPE];\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, 'byteLength');\n    addGetter($DataView, 'buffer');\n    addGetter($DataView, 'byteLength');\n    addGetter($DataView, 'byteOffset');\n  }\n\n  redefineAll(DataViewPrototype, {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset\n    /* , littleEndian */\n    ) {\n      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset\n    /* , littleEndian */\n    ) {\n      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));\n    },\n    getUint32: function getUint32(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);\n    },\n    getFloat64: function getFloat64(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packInt8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packInt8, value);\n    },\n    setInt16: function setInt16(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setUint16: function setUint16(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setInt32: function setInt32(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setUint32: function setUint32(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setFloat32: function setFloat32(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    setFloat64: function setFloat64(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);\n    }\n  });\n} else {\n  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;\n  /* eslint-disable no-new -- required for testing */\n\n  if (!fails(function () {\n    NativeArrayBuffer(1);\n  }) || !fails(function () {\n    new NativeArrayBuffer(-1);\n  }) || fails(function () {\n    new NativeArrayBuffer();\n    new NativeArrayBuffer(1.5);\n    new NativeArrayBuffer(NaN);\n    return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;\n  })) {\n    /* eslint-enable no-new -- required for testing */\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, ArrayBufferPrototype);\n      return new NativeArrayBuffer(toIndex(length));\n    };\n\n    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;\n\n    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) {\n        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);\n      }\n    }\n\n    ArrayBufferPrototype.constructor = $ArrayBuffer;\n  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {\n    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);\n  } // WebKit bug - the same parent prototype for typed arrays and data view\n\n\n  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {\n    setPrototypeOf(DataViewPrototype, ObjectPrototype);\n  } // iOS Safari 7.x bug\n\n\n  var testView = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);\n  testView.setInt8(0, 2147483648);\n  testView.setInt8(1, 2147483649);\n  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll(DataViewPrototype, {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8(this, byteOffset, value << 24 >> 24);\n    }\n  }, {\n    unsafe: true\n  });\n}\n\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nmodule.exports = {\n  ArrayBuffer: $ArrayBuffer,\n  DataView: $DataView\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar min = Math.min; // `Array.prototype.copyWithin` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.copywithin\n// eslint-disable-next-line es/no-array-prototype-copywithin -- safe\n\nmodule.exports = [].copyWithin || function copyWithin(target\n/* = 0 */\n, start\n/* = 0, end = @length */\n) {\n  var O = toObject(this);\n  var len = lengthOfArrayLike(O);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];else delete O[to];\n    to += inc;\n    from += inc;\n  }\n\n  return O;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\"); // `Array.prototype.fill` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.fill\n\n\nmodule.exports = function fill(value\n/* , start = 0, end = @length */\n) {\n  var O = toObject(this);\n  var length = lengthOfArrayLike(O);\n  var argumentsLength = arguments.length;\n  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);\n  var end = argumentsLength > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n\n  while (endPos > index) O[index++] = value;\n\n  return O;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\n\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\n\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn\n/* , thisArg */\n) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-from-constructor-and-list.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nmodule.exports = function (Constructor, list) {\n  var index = 0;\n  var length = lengthOfArrayLike(list);\n  var result = new Constructor(length);\n\n  while (length > index) result[index] = list[index++];\n\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-from-constructor-and-list.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js/internals/call-with-safe-iteration-closing.js\");\n\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\n\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar Array = global.Array; // `Array.from` method implementation\n// https://tc39.es/ecma262/#sec-array.from\n\nmodule.exports = function from(arrayLike\n/* , mapfn = undefined, thisArg = undefined */\n) {\n  var O = toObject(arrayLike);\n  var IS_CONSTRUCTOR = isConstructor(this);\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case\n\n  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = getIterator(O, iteratorMethod);\n    next = iterator.next;\n    result = IS_CONSTRUCTOR ? new this() : [];\n\n    for (; !(step = call(next, iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = lengthOfArrayLike(O);\n    result = IS_CONSTRUCTOR ? new this(length) : Array(length);\n\n    for (; length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n\n  result.length = index;\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\"); // `Array.prototype.{ indexOf, includes }` methods implementation\n\n\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value; // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check\n\n      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not\n    } else for (; length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    }\n    return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = uncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation\n\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_REJECT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that);\n    var length = lengthOfArrayLike(self);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;\n    var value, result;\n\n    for (; length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3:\n            return true;\n          // some\n\n          case 5:\n            return value;\n          // find\n\n          case 6:\n            return index;\n          // findIndex\n\n          case 2:\n            push(target, value);\n          // filter\n        } else switch (TYPE) {\n          case 4:\n            return false;\n          // every\n\n          case 7:\n            push(target, value);\n          // filterReject\n        }\n      }\n    }\n\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterReject` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterReject: createMethod(7)\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable es/no-array-prototype-lastindexof -- safe */\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar min = Math.min;\nvar $lastIndexOf = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;\nvar STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');\nvar FORCED = NEGATIVE_ZERO || !STRICT_METHOD; // `Array.prototype.lastIndexOf` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.lastindexof\n\nmodule.exports = FORCED ? function lastIndexOf(searchElement\n/* , fromIndex = @[*-1] */\n) {\n  // convert -0 to +0\n  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;\n  var O = toIndexedObject(this);\n  var length = lengthOfArrayLike(O);\n  var index = length - 1;\n  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));\n  if (index < 0) index = length + index;\n\n  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;\n\n  return -1;\n} : $lastIndexOf;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n\n    constructor[SPECIES] = function () {\n      return {\n        foo: 1\n      };\n    };\n\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call -- required for testing\n    method.call(null, argument || function () {\n      return 1;\n    }, 1);\n  });\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar TypeError = global.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation\n\nvar createMethod = function (IS_RIGHT) {\n  return function (that, callbackfn, argumentsLength, memo) {\n    aCallable(callbackfn);\n    var O = toObject(that);\n    var self = IndexedObject(O);\n    var length = lengthOfArrayLike(O);\n    var index = IS_RIGHT ? length - 1 : 0;\n    var i = IS_RIGHT ? -1 : 1;\n    if (argumentsLength < 2) while (true) {\n      if (index in self) {\n        memo = self[index];\n        index += i;\n        break;\n      }\n\n      index += i;\n\n      if (IS_RIGHT ? index < 0 : length <= index) {\n        throw TypeError('Reduce of empty array with no initial value');\n      }\n    }\n\n    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n\n    return memo;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.reduce` method\n  // https://tc39.es/ecma262/#sec-array.prototype.reduce\n  left: createMethod(false),\n  // `Array.prototype.reduceRight` method\n  // https://tc39.es/ecma262/#sec-array.prototype.reduceright\n  right: createMethod(true)\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar Array = global.Array;\nvar max = Math.max;\n\nmodule.exports = function (O, start, end) {\n  var length = lengthOfArrayLike(O);\n  var k = toAbsoluteIndex(start, length);\n  var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n  var result = Array(max(fin - k, 0));\n\n  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);\n\n  result.length = n;\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-slice-simple.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis([].slice);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-slice.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-sort.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\n\nvar floor = Math.floor;\n\nvar mergeSort = function (array, comparefn) {\n  var length = array.length;\n  var middle = floor(length / 2);\n  return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);\n};\n\nvar insertionSort = function (array, comparefn) {\n  var length = array.length;\n  var i = 1;\n  var element, j;\n\n  while (i < length) {\n    j = i;\n    element = array[i];\n\n    while (j && comparefn(array[j - 1], element) > 0) {\n      array[j] = array[--j];\n    }\n\n    if (j !== i++) array[j] = element;\n  }\n\n  return array;\n};\n\nvar merge = function (array, left, right, comparefn) {\n  var llength = left.length;\n  var rlength = right.length;\n  var lindex = 0;\n  var rindex = 0;\n\n  while (lindex < llength || rindex < rlength) {\n    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];\n  }\n\n  return array;\n};\n\nmodule.exports = mergeSort;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-sort.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar Array = global.Array; // a part of `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\n\nmodule.exports = function (originalArray) {\n  var C;\n\n  if (isArray(originalArray)) {\n    C = originalArray.constructor; // cross-realm fallback\n\n    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }\n\n  return C === undefined ? Array : C;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ \"./node_modules/core-js/internals/array-species-constructor.js\"); // `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\n\n\nmodule.exports = function (originalArray, length) {\n  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\"); // call something on iterator step with safe closing on error\n\n\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  } catch (error) {\n    iteratorClose(iterator, 'throw', error);\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return {\n        done: !!called++\n      };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n\n\n  Array.from(iteratorWithReturn, function () {\n    throw 2;\n  });\n} catch (error) {\n  /* empty */\n}\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n\n  try {\n    var object = {};\n\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return {\n            done: ITERATION_SUPPORT = true\n          };\n        }\n      };\n    };\n\n    exec(object);\n  } catch (error) {\n    /* empty */\n  }\n\n  return ITERATION_SUPPORT;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar Object = global.Object; // ES3 wrong here\n\nvar CORRECT_ARGUMENTS = classofRaw(function () {\n  return arguments;\n}()) == 'Arguments'; // fallback for IE11 Script Access Denied error\n\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) {\n    /* empty */\n  }\n}; // getting tag from ES6+ `Object.prototype.toString`\n\n\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case\n  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case\n  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback\n  : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/clear-error-stack.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/clear-error-stack.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar replace = uncurryThis(''.replace);\n\nvar TEST = function (arg) {\n  return String(Error(arg).stack);\n}('zxcasd');\n\nvar V8_OR_CHAKRA_STACK_ENTRY = /\\n\\s*at [^:]*:[^\\n]*/;\nvar IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);\n\nmodule.exports = function (stack, dropEntries) {\n  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {\n    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');\n  }\n\n  return stack;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/clear-error-stack.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\n\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\n\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar fastKey = (__webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\").fastKey);\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar internalStateGetterFor = InternalStateModule.getterFor;\nmodule.exports = {\n  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {\n    var Constructor = wrapper(function (that, iterable) {\n      anInstance(that, Prototype);\n      setInternalState(that, {\n        type: CONSTRUCTOR_NAME,\n        index: create(null),\n        first: undefined,\n        last: undefined,\n        size: 0\n      });\n      if (!DESCRIPTORS) that.size = 0;\n      if (iterable != undefined) iterate(iterable, that[ADDER], {\n        that: that,\n        AS_ENTRIES: IS_MAP\n      });\n    });\n    var Prototype = Constructor.prototype;\n    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);\n\n    var define = function (that, key, value) {\n      var state = getInternalState(that);\n      var entry = getEntry(that, key);\n      var previous, index; // change existing entry\n\n      if (entry) {\n        entry.value = value; // create new entry\n      } else {\n        state.last = entry = {\n          index: index = fastKey(key, true),\n          key: key,\n          value: value,\n          previous: previous = state.last,\n          next: undefined,\n          removed: false\n        };\n        if (!state.first) state.first = entry;\n        if (previous) previous.next = entry;\n        if (DESCRIPTORS) state.size++;else that.size++; // add to index\n\n        if (index !== 'F') state.index[index] = entry;\n      }\n\n      return that;\n    };\n\n    var getEntry = function (that, key) {\n      var state = getInternalState(that); // fast case\n\n      var index = fastKey(key);\n      var entry;\n      if (index !== 'F') return state.index[index]; // frozen object case\n\n      for (entry = state.first; entry; entry = entry.next) {\n        if (entry.key == key) return entry;\n      }\n    };\n\n    redefineAll(Prototype, {\n      // `{ Map, Set }.prototype.clear()` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.clear\n      // https://tc39.es/ecma262/#sec-set.prototype.clear\n      clear: function clear() {\n        var that = this;\n        var state = getInternalState(that);\n        var data = state.index;\n        var entry = state.first;\n\n        while (entry) {\n          entry.removed = true;\n          if (entry.previous) entry.previous = entry.previous.next = undefined;\n          delete data[entry.index];\n          entry = entry.next;\n        }\n\n        state.first = state.last = undefined;\n        if (DESCRIPTORS) state.size = 0;else that.size = 0;\n      },\n      // `{ Map, Set }.prototype.delete(key)` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.delete\n      // https://tc39.es/ecma262/#sec-set.prototype.delete\n      'delete': function (key) {\n        var that = this;\n        var state = getInternalState(that);\n        var entry = getEntry(that, key);\n\n        if (entry) {\n          var next = entry.next;\n          var prev = entry.previous;\n          delete state.index[entry.index];\n          entry.removed = true;\n          if (prev) prev.next = next;\n          if (next) next.previous = prev;\n          if (state.first == entry) state.first = next;\n          if (state.last == entry) state.last = prev;\n          if (DESCRIPTORS) state.size--;else that.size--;\n        }\n\n        return !!entry;\n      },\n      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.foreach\n      // https://tc39.es/ecma262/#sec-set.prototype.foreach\n      forEach: function forEach(callbackfn\n      /* , that = undefined */\n      ) {\n        var state = getInternalState(this);\n        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n        var entry;\n\n        while (entry = entry ? entry.next : state.first) {\n          boundFunction(entry.value, entry.key, this); // revert to the last existing entry\n\n          while (entry && entry.removed) entry = entry.previous;\n        }\n      },\n      // `{ Map, Set}.prototype.has(key)` methods\n      // https://tc39.es/ecma262/#sec-map.prototype.has\n      // https://tc39.es/ecma262/#sec-set.prototype.has\n      has: function has(key) {\n        return !!getEntry(this, key);\n      }\n    });\n    redefineAll(Prototype, IS_MAP ? {\n      // `Map.prototype.get(key)` method\n      // https://tc39.es/ecma262/#sec-map.prototype.get\n      get: function get(key) {\n        var entry = getEntry(this, key);\n        return entry && entry.value;\n      },\n      // `Map.prototype.set(key, value)` method\n      // https://tc39.es/ecma262/#sec-map.prototype.set\n      set: function set(key, value) {\n        return define(this, key === 0 ? 0 : key, value);\n      }\n    } : {\n      // `Set.prototype.add(value)` method\n      // https://tc39.es/ecma262/#sec-set.prototype.add\n      add: function add(value) {\n        return define(this, value = value === 0 ? 0 : value, value);\n      }\n    });\n    if (DESCRIPTORS) defineProperty(Prototype, 'size', {\n      get: function () {\n        return getInternalState(this).size;\n      }\n    });\n    return Constructor;\n  },\n  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {\n    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';\n    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);\n    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods\n    // https://tc39.es/ecma262/#sec-map.prototype.entries\n    // https://tc39.es/ecma262/#sec-map.prototype.keys\n    // https://tc39.es/ecma262/#sec-map.prototype.values\n    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator\n    // https://tc39.es/ecma262/#sec-set.prototype.entries\n    // https://tc39.es/ecma262/#sec-set.prototype.keys\n    // https://tc39.es/ecma262/#sec-set.prototype.values\n    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator\n\n    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {\n      setInternalState(this, {\n        type: ITERATOR_NAME,\n        target: iterated,\n        state: getInternalCollectionState(iterated),\n        kind: kind,\n        last: undefined\n      });\n    }, function () {\n      var state = getInternalIteratorState(this);\n      var kind = state.kind;\n      var entry = state.last; // revert to the last existing entry\n\n      while (entry && entry.removed) entry = entry.previous; // get next entry\n\n\n      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {\n        // or finish the iteration\n        state.target = undefined;\n        return {\n          value: undefined,\n          done: true\n        };\n      } // return step by kind\n\n\n      if (kind == 'keys') return {\n        value: entry.key,\n        done: false\n      };\n      if (kind == 'values') return {\n        value: entry.value,\n        done: false\n      };\n      return {\n        value: [entry.key, entry.value],\n        done: false\n      };\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors\n    // https://tc39.es/ecma262/#sec-get-map-@@species\n    // https://tc39.es/ecma262/#sec-get-set-@@species\n\n    setSpecies(CONSTRUCTOR_NAME);\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ \"./node_modules/core-js/internals/internal-metadata.js\");\n\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\n\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nmodule.exports = function (CONSTRUCTOR_NAME, wrapper, common) {\n  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;\n  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var NativeConstructor = global[CONSTRUCTOR_NAME];\n  var NativePrototype = NativeConstructor && NativeConstructor.prototype;\n  var Constructor = NativeConstructor;\n  var exported = {};\n\n  var fixMethod = function (KEY) {\n    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);\n    redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {\n      uncurriedNativeMethod(this, value === 0 ? 0 : value);\n      return this;\n    } : KEY == 'delete' ? function (key) {\n      return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);\n    } : KEY == 'get' ? function get(key) {\n      return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);\n    } : KEY == 'has' ? function has(key) {\n      return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);\n    } : function set(key, value) {\n      uncurriedNativeMethod(this, key === 0 ? 0 : key, value);\n      return this;\n    });\n  };\n\n  var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {\n    new NativeConstructor().entries().next();\n  })));\n\n  if (REPLACE) {\n    // create collection constructor\n    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);\n    InternalMetadataModule.enable();\n  } else if (isForced(CONSTRUCTOR_NAME, true)) {\n    var instance = new Constructor(); // early implementations not supports chaining\n\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false\n\n    var THROWS_ON_PRIMITIVES = fails(function () {\n      instance.has(1);\n    }); // most early implementations doesn't supports iterables, most modern - not close it correctly\n    // eslint-disable-next-line no-new -- required for testing\n\n    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {\n      new NativeConstructor(iterable);\n    }); // for early implementations -0 and +0 not the same\n\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new NativeConstructor();\n      var index = 5;\n\n      while (index--) $instance[ADDER](index, index);\n\n      return !$instance.has(-0);\n    });\n\n    if (!ACCEPT_ITERABLES) {\n      Constructor = wrapper(function (dummy, iterable) {\n        anInstance(dummy, NativePrototype);\n        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);\n        if (iterable != undefined) iterate(iterable, that[ADDER], {\n          that: that,\n          AS_ENTRIES: IS_MAP\n        });\n        return that;\n      });\n      Constructor.prototype = NativePrototype;\n      NativePrototype.constructor = Constructor;\n    }\n\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method\n\n    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;\n  }\n\n  exported[CONSTRUCTOR_NAME] = Constructor;\n  $({\n    global: true,\n    forced: Constructor != NativeConstructor\n  }, exported);\n  setToStringTag(Constructor, CONSTRUCTOR_NAME);\n  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);\n  return Constructor;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/collection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() {\n    /* empty */\n  }\n\n  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype);\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () {\n  return this;\n};\n\nmodule.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, {\n    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)\n  });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPropertyKey(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () {\n  return this;\n};\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n\n    switch (KIND) {\n      case KEYS:\n        return function keys() {\n          return new IteratorConstructor(this, KIND);\n        };\n\n      case VALUES:\n        return function values() {\n          return new IteratorConstructor(this, KIND);\n        };\n\n      case ENTRIES:\n        return function entries() {\n          return new IteratorConstructor(this, KIND);\n        };\n    }\n\n    return function () {\n      return new IteratorConstructor(this);\n    };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY; // fix native\n\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n\n    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {\n          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      } // Set @@toStringTag to native iterators\n\n\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n\n\n  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {\n      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);\n    } else {\n      INCORRECT_VALUES_NAME = true;\n\n      defaultIterator = function values() {\n        return call(nativeIterator, this);\n      };\n    }\n  } // export additional methods\n\n\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({\n      target: NAME,\n      proto: true,\n      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME\n    }, methods);\n  } // define iterator\n\n\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    redefine(IterablePrototype, ITERATOR, defaultIterator, {\n      name: DEFAULT\n    });\n  }\n\n  Iterators[NAME] = defaultIterator;\n  return methods;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\"); // Detect IE8's incomplete defineProperty implementation\n\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, {\n    get: function () {\n      return 7;\n    }\n  })[1] != 7;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document; // typeof document.createElement is 'object' in old IE\n\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar classList = documentCreateElement('span').classList;\nvar DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;\nmodule.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/dom-token-list-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-ff-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar firefox = userAgent.match(/firefox\\/(\\d+)/i);\nmodule.exports = !!firefox && +firefox[1];\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/engine-ff-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ie-or-edge.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var UA = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /MSIE|Trident/.test(UA);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/engine-is-ie-or-edge.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\n\n\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-webkit-version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar webkit = userAgent.match(/AppleWebKit\\/(\\d+)\\./);\nmodule.exports = !!webkit && +webkit[1];\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/engine-webkit-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// IE8- don't enum bug keys\nmodule.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/error-stack-installable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/error-stack-installable.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = !fails(function () {\n  var error = Error('a');\n  if (!('stack' in error)) return true; // eslint-disable-next-line es/no-object-defineproperty -- safe\n\n  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));\n  return error.stack !== 7;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/error-stack-installable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n  options.name        - the .name of the function if it does not match the key\n*/\n\n\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target\n\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty == typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    } // add a flag to not completely full polyfills\n\n\n    if (options.sham || targetProperty && targetProperty.sham) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    } // extend global\n\n\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(" // TODO: Remove from `core-js@4` since it's moved to entry points\n\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar RegExpPrototype = RegExp.prototype;\n\nmodule.exports = function (KEY, exec, FORCED, SHAM) {\n  var SYMBOL = wellKnownSymbol(KEY);\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n\n    O[SYMBOL] = function () {\n      return 7;\n    };\n\n    return ''[KEY](O) != 7;\n  });\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n\n      re.constructor = {};\n\n      re.constructor[SPECIES] = function () {\n        return re;\n      };\n\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () {\n      execCalled = true;\n      return null;\n    };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {\n    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      var uncurriedNativeMethod = uncurryThis(nativeMethod);\n      var $exec = regexp.exec;\n\n      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return {\n            done: true,\n            value: uncurriedNativeRegExpMethod(regexp, str, arg2)\n          };\n        }\n\n        return {\n          done: true,\n          value: uncurriedNativeMethod(str, regexp, arg2)\n        };\n      }\n\n      return {\n        done: false\n      };\n    });\n    redefine(String.prototype, KEY, methods[0]);\n    redefine(RegExpPrototype, SYMBOL, methods[1]);\n  }\n\n  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing\n  return Object.isExtensible(Object.preventExtensions({}));\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/freezing.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe\n\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind); // optional / simple context binding\n\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function\n    /* ...args */\n  () {\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  var test = function () {\n    /* empty */\n  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe\n\n\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\nvar EXISTS = hasOwn(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names\n\nvar PROPER = EXISTS && function something() {\n  /* empty */\n}.name === 'something';\n\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar bind = FunctionPrototype.bind;\nvar call = FunctionPrototype.call;\nvar uncurryThis = NATIVE_BIND && bind.bind(call, call);\nmodule.exports = NATIVE_BIND ? function (fn) {\n  return fn && uncurryThis(fn);\n} : function (fn) {\n  return fn && function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar aFunction = function (argument) {\n  return isCallable(argument) ? argument : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (argument, usingIterator) {\n  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;\n  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));\n  throw TypeError(tryToString(argument) + ' is not iterable');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\"); // `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\n\n\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return func == null ? undefined : aCallable(func);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar floor = Math.floor;\nvar charAt = uncurryThis(''.charAt);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d{1,2}|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d{1,2})/g; // `GetSubstitution` abstract operation\n// https://tc39.es/ecma262/#sec-getsubstitution\n\nmodule.exports = function (matched, str, position, captures, namedCaptures, replacement) {\n  var tailPos = position + matched.length;\n  var m = captures.length;\n  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n\n  if (namedCaptures !== undefined) {\n    namedCaptures = toObject(namedCaptures);\n    symbols = SUBSTITUTION_SYMBOLS;\n  }\n\n  return replace(replacement, symbols, function (match, ch) {\n    var capture;\n\n    switch (charAt(ch, 0)) {\n      case '$':\n        return '$';\n\n      case '&':\n        return matched;\n\n      case '`':\n        return stringSlice(str, 0, position);\n\n      case \"'\":\n        return stringSlice(str, tailPos);\n\n      case '<':\n        capture = namedCaptures[stringSlice(ch, 1, -1)];\n        break;\n\n      default:\n        // \\d\\d?\n        var n = +ch;\n        if (n === 0) return match;\n\n        if (n > m) {\n          var f = floor(n / 10);\n          if (f === 0) return match;\n          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);\n          return match;\n        }\n\n        capture = captures[n - 1];\n    }\n\n    return capture === undefined ? '' : capture;\n  });\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/get-substitution.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\n\n\nmodule.exports = // eslint-disable-next-line es/no-global-this -- safe\ncheck(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe\ncheck(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback\nfunction () {\n  return this;\n}() || Function('return this')();\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty); // `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\"); // Thanks to IE8 for its funny defineProperty\n\n\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// IEEE754 conversions based on https://github.com/feross/ieee754\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar Array = global.Array;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\n\nvar pack = function (number, mantissaLength, bytes) {\n  var buffer = Array(bytes);\n  var exponentLength = bytes * 8 - mantissaLength - 1;\n  var eMax = (1 << exponentLength) - 1;\n  var eBias = eMax >> 1;\n  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;\n  var index = 0;\n  var exponent, mantissa, c;\n  number = abs(number); // eslint-disable-next-line no-self-compare -- NaN check\n\n  if (number != number || number === Infinity) {\n    // eslint-disable-next-line no-self-compare -- NaN check\n    mantissa = number != number ? 1 : 0;\n    exponent = eMax;\n  } else {\n    exponent = floor(log(number) / LN2);\n    c = pow(2, -exponent);\n\n    if (number * c < 1) {\n      exponent--;\n      c *= 2;\n    }\n\n    if (exponent + eBias >= 1) {\n      number += rt / c;\n    } else {\n      number += rt * pow(2, 1 - eBias);\n    }\n\n    if (number * c >= 2) {\n      exponent++;\n      c /= 2;\n    }\n\n    if (exponent + eBias >= eMax) {\n      mantissa = 0;\n      exponent = eMax;\n    } else if (exponent + eBias >= 1) {\n      mantissa = (number * c - 1) * pow(2, mantissaLength);\n      exponent = exponent + eBias;\n    } else {\n      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);\n      exponent = 0;\n    }\n  }\n\n  while (mantissaLength >= 8) {\n    buffer[index++] = mantissa & 255;\n    mantissa /= 256;\n    mantissaLength -= 8;\n  }\n\n  exponent = exponent << mantissaLength | mantissa;\n  exponentLength += mantissaLength;\n\n  while (exponentLength > 0) {\n    buffer[index++] = exponent & 255;\n    exponent /= 256;\n    exponentLength -= 8;\n  }\n\n  buffer[--index] |= sign * 128;\n  return buffer;\n};\n\nvar unpack = function (buffer, mantissaLength) {\n  var bytes = buffer.length;\n  var exponentLength = bytes * 8 - mantissaLength - 1;\n  var eMax = (1 << exponentLength) - 1;\n  var eBias = eMax >> 1;\n  var nBits = exponentLength - 7;\n  var index = bytes - 1;\n  var sign = buffer[index--];\n  var exponent = sign & 127;\n  var mantissa;\n  sign >>= 7;\n\n  while (nBits > 0) {\n    exponent = exponent * 256 + buffer[index--];\n    nBits -= 8;\n  }\n\n  mantissa = exponent & (1 << -nBits) - 1;\n  exponent >>= -nBits;\n  nBits += mantissaLength;\n\n  while (nBits > 0) {\n    mantissa = mantissa * 256 + buffer[index--];\n    nBits -= 8;\n  }\n\n  if (exponent === 0) {\n    exponent = 1 - eBias;\n  } else if (exponent === eMax) {\n    return mantissa ? NaN : sign ? -Infinity : Infinity;\n  } else {\n    mantissa = mantissa + pow(2, mantissaLength);\n    exponent = exponent - eBias;\n  }\n\n  return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);\n};\n\nmodule.exports = {\n  pack: pack,\n  unpack: unpack\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/ieee754.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar Object = global.Object;\nvar split = uncurryThis(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings\n\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : Object(it);\n} : Object;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\"); // makes subclassing work correct for wrapped built-ins\n\n\nmodule.exports = function ($this, dummy, Wrapper) {\n  var NewTarget, NewTargetPrototype;\n  if ( // it can work only with native `setPrototypeOf`\n  setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this\n  isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);\n  return $this;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\n\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/install-error-cause.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/install-error-cause.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\"); // `InstallErrorCause` abstract operation\n// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause\n\n\nmodule.exports = function (O, options) {\n  if (isObject(options) && 'cause' in options) {\n    createNonEnumerableProperty(O, 'cause', options.cause);\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/install-error-cause.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\n\nvar getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\");\n\nvar isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ \"./node_modules/core-js/internals/object-is-extensible.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar FREEZING = __webpack_require__(/*! ../internals/freezing */ \"./node_modules/core-js/internals/freezing.js\");\n\nvar REQUIRED = false;\nvar METADATA = uid('meta');\nvar id = 0;\n\nvar setMetadata = function (it) {\n  defineProperty(it, METADATA, {\n    value: {\n      objectID: 'O' + id++,\n      // object ID\n      weakData: {} // weak collections IDs\n\n    }\n  });\n};\n\nvar fastKey = function (it, create) {\n  // return a primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n\n  if (!hasOwn(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F'; // not necessary to add metadata\n\n    if (!create) return 'E'; // add missing metadata\n\n    setMetadata(it); // return object ID\n  }\n\n  return it[METADATA].objectID;\n};\n\nvar getWeakData = function (it, create) {\n  if (!hasOwn(it, METADATA)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true; // not necessary to add metadata\n\n    if (!create) return false; // add missing metadata\n\n    setMetadata(it); // return the store of weak collections IDs\n  }\n\n  return it[METADATA].weakData;\n}; // add metadata on freeze-family methods calling\n\n\nvar onFreeze = function (it) {\n  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);\n  return it;\n};\n\nvar enable = function () {\n  meta.enable = function () {\n    /* empty */\n  };\n\n  REQUIRED = true;\n  var getOwnPropertyNames = getOwnPropertyNamesModule.f;\n  var splice = uncurryThis([].splice);\n  var test = {};\n  test[METADATA] = 1; // prevent exposing of metadata key\n\n  if (getOwnPropertyNames(test).length) {\n    getOwnPropertyNamesModule.f = function (it) {\n      var result = getOwnPropertyNames(it);\n\n      for (var i = 0, length = result.length; i < length; i++) {\n        if (result[i] === METADATA) {\n          splice(result, i, 1);\n          break;\n        }\n      }\n\n      return result;\n    };\n\n    $({\n      target: 'Object',\n      stat: true,\n      forced: true\n    }, {\n      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f\n    });\n  }\n};\n\nvar meta = module.exports = {\n  enable: enable,\n  fastKey: fastKey,\n  getWeakData: getWeakData,\n  onFreeze: onFreeze\n};\nhiddenKeys[METADATA] = true;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/internal-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    }\n\n    return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = uncurryThis(store.get);\n  var wmhas = uncurryThis(store.has);\n  var wmset = uncurryThis(store.set);\n\n  set = function (it, metadata) {\n    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset(store, it, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return wmget(store, it) || {};\n  };\n\n  has = function (it) {\n    return wmhas(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype; // check on default Array iterator\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\"); // `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\n\n\nmodule.exports = Array.isArray || function isArray(argument) {\n  return classof(argument) == 'Array';\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = function (argument) {\n  return typeof argument == 'function';\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar noop = function () {\n  /* empty */\n};\n\nvar empty = [];\nvar construct = getBuiltIn('Reflect', 'construct');\nvar constructorRegExp = /^\\s*(?:class|function)\\b/;\nvar exec = uncurryThis(constructorRegExp.exec);\nvar INCORRECT_TO_STRING = !constructorRegExp.exec(noop);\n\nvar isConstructorModern = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n\n  try {\n    construct(noop, empty, argument);\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nvar isConstructorLegacy = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n\n  switch (classof(argument)) {\n    case 'AsyncFunction':\n    case 'GeneratorFunction':\n    case 'AsyncGeneratorFunction':\n      return false;\n  }\n\n  try {\n    // we can't check .prototype since constructors produced by .bind haven't it\n    // `Function#toString` throws on some built-it function in some legacy engines\n    // (for example, `DOMQuad` and similar in FF41-)\n    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));\n  } catch (error) {\n    return true;\n  }\n};\n\nisConstructorLegacy.sham = true; // `IsConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-isconstructor\n\nmodule.exports = !construct || fails(function () {\n  var called;\n  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {\n    called = true;\n  }) || called;\n}) ? isConstructorLegacy : isConstructorModern;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\nmodule.exports = isForced;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-integral-number.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-integral-number.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar floor = Math.floor; // `IsIntegralNumber` abstract operation\n// https://tc39.es/ecma262/#sec-isintegralnumber\n// eslint-disable-next-line es/no-number-isinteger -- safe\n\nmodule.exports = Number.isInteger || function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-integral-number.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

eval("module.exports = false;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\n\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar Object = global.Object;\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\nvar TypeError = global.TypeError;\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar ResultPrototype = Result.prototype;\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator, 'normal', condition);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    }\n\n    return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators\n\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && isPrototypeOf(ResultPrototype, result)) return result;\n      }\n\n      return new Result(false);\n    }\n\n    iterator = getIterator(iterable, iterFn);\n  }\n\n  next = iterator.next;\n\n  while (!(step = call(next, iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator, 'throw', error);\n    }\n\n    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;\n  }\n\n  return new Result(false);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n\n  try {\n    innerResult = getMethod(iterator, 'return');\n\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false; // `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\n\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n/* eslint-disable es/no-array-prototype-keys -- safe */\n\nif ([].keys) {\n  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`\n\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {\n  var test = {}; // FF44- legacy iterators case\n\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};else if (IS_PURE) IteratorPrototype = create(IteratorPrototype); // `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\n\nif (!isCallable(IteratorPrototype[ITERATOR])) {\n  redefine(IteratorPrototype, ITERATOR, function () {\n    return this;\n  });\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\"); // `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\n\n\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\"); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\n\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n  !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\nmodule.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/normalize-string-argument.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/normalize-string-argument.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nmodule.exports = function (argument, $default) {\n  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/normalize-string-argument.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* global ActiveXObject -- old IE, WSH */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\n\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () {\n  /* empty */\n};\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype\n\n\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n\n  return temp;\n}; // Create object with fake `null` prototype: use iframe Object with cleared prototype\n\n\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475\n\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n}; // Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\n\n\nvar activeXDocument;\n\nvar NullProtoObject = function () {\n  try {\n    activeXDocument = new ActiveXObject('htmlfile');\n  } catch (error) {\n    /* ignore */\n  }\n\n  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE\n  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH\n\n  var length = enumBugKeys.length;\n\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true; // `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null; // add \"__proto__\" for Object.getPrototypeOf polyfill\n\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n\n  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\"); // `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\n\n\nexports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var props = toIndexedObject(Properties);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n\n  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);\n\n  return O;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar TypeError = global.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe\n\nvar $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable'; // `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\n\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  }\n\n  return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) {\n    /* empty */\n  }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\"); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n\n\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\n\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) {\n    /* empty */\n  }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es/no-object-getownpropertynames -- safe */\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\n\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return $getOwnPropertyNames(it);\n  } catch (error) {\n    return arraySlice(windowNames);\n  }\n}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\n\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && classof(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar Object = global.Object;\nvar ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  }\n\n  return object instanceof Object ? ObjectPrototype : null;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ \"./node_modules/core-js/internals/array-buffer-non-extensible.js\"); // eslint-disable-next-line es/no-object-isextensible -- safe\n\n\nvar $isExtensible = Object.isExtensible;\nvar FAILS_ON_PRIMITIVES = fails(function () {\n  $isExtensible(1);\n}); // `Object.isExtensible` method\n// https://tc39.es/ecma262/#sec-object.isextensible\n\nmodule.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {\n  if (!isObject(it)) return false;\n  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;\n  return $isExtensible ? $isExtensible(it) : true;\n} : $isExtensible;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key); // Don't enum bug & hidden keys\n\n\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\"); // `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\n\n\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n\nvar $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug\n\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({\n  1: 2\n}, 1); // `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\n\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable no-proto -- safe */\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\"); // `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\n\n\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) {\n    /* empty */\n  }\n\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\"); // `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\n\n\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar TypeError = global.TypeError; // `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\n\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\n\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat); // all object keys, includes non-enumerable and symbols\n\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) redefine(target, key, src[key], options);\n\n  return target;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").CONFIGURABLE);\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var name = options && options.name !== undefined ? options.name : key;\n  var state;\n\n  if (isCallable(value)) {\n    if (String(name).slice(0, 7) === 'Symbol(') {\n      name = '[' + String(name).replace(/^Symbol\\(([^)]*)\\)/, '$1') + ']';\n    }\n\n    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {\n      createNonEnumerableProperty(value, 'name', name);\n    }\n\n    state = enforceInternalState(value);\n\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');\n    }\n  }\n\n  if (O === global) {\n    if (simple) O[key] = value;else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n\n  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return isCallable(this) && getInternalState(this).source || inspectSource(this);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nvar TypeError = global.TypeError; // `RegExpExec` abstract operation\n// https://tc39.es/ecma262/#sec-regexpexec\n\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n\n  if (isCallable(exec)) {\n    var result = call(exec, R, S);\n    if (result !== null) anObject(result);\n    return result;\n  }\n\n  if (classof(R) === 'RegExp') return call(regexpExec, R, S);\n  throw TypeError('RegExp#exec called on incompatible receiver');\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */\n\n/* eslint-disable regexp/no-useless-quantifier -- testing */\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\n\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\n\nvar UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ \"./node_modules/core-js/internals/regexp-unsupported-ncg.js\");\n\nvar nativeReplace = shared('native-string-replace', String.prototype.replace);\nvar nativeExec = RegExp.prototype.exec;\nvar patchedExec = nativeExec;\nvar charAt = uncurryThis(''.charAt);\nvar indexOf = uncurryThis(''.indexOf);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\n\nvar UPDATES_LAST_INDEX_WRONG = function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  call(nativeExec, re1, 'a');\n  call(nativeExec, re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n}();\n\nvar UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.\n\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;\n\nif (PATCH) {\n  patchedExec = function exec(string) {\n    var re = this;\n    var state = getInternalState(re);\n    var str = toString(string);\n    var raw = state.raw;\n    var result, reCopy, lastIndex, match, i, object, group;\n\n    if (raw) {\n      raw.lastIndex = re.lastIndex;\n      result = call(patchedExec, raw, str);\n      re.lastIndex = raw.lastIndex;\n      return result;\n    }\n\n    var groups = state.groups;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = call(regexpFlags, re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = replace(flags, 'y', '');\n\n      if (indexOf(flags, 'g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = stringSlice(str, re.lastIndex); // Support anchored sticky behavior.\n\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      } // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n\n\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n    match = call(nativeExec, sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = stringSlice(match.input, charsAdded);\n        match[0] = stringSlice(match[0], charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      call(nativeReplace, match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    if (match && groups) {\n      match.groups = object = create(null);\n\n      for (i = 0; i < groups.length; i++) {\n        group = groups[i];\n        object[group[0]] = match[group[1]];\n      }\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\"); // `RegExp.prototype.flags` getter implementation\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\n\n\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\"); // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\n\n\nvar $RegExp = global.RegExp;\nvar UNSUPPORTED_Y = fails(function () {\n  var re = $RegExp('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n}); // UC Browser bug\n// https://github.com/zloirock/core-js/issues/1008\n\nvar MISSED_STICKY = UNSUPPORTED_Y || fails(function () {\n  return !$RegExp('a', 'y').sticky;\n});\nvar BROKEN_CARET = UNSUPPORTED_Y || fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = $RegExp('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\nmodule.exports = {\n  BROKEN_CARET: BROKEN_CARET,\n  MISSED_STICKY: MISSED_STICKY,\n  UNSUPPORTED_Y: UNSUPPORTED_Y\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\"); // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError\n\n\nvar $RegExp = global.RegExp;\nmodule.exports = fails(function () {\n  var re = $RegExp('.', 's');\n  return !(re.dotAll && re.exec('\\n') && re.flags === 's');\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/regexp-unsupported-dot-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\"); // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError\n\n\nvar $RegExp = global.RegExp;\nmodule.exports = fails(function () {\n  var re = $RegExp('(?<a>b)', 'g');\n  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/regexp-unsupported-ncg.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar TypeError = global.TypeError; // `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\n\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ (function(module) {

eval("// `SameValue` abstract operation\n// https://tc39.es/ecma262/#sec-samevalue\n// eslint-disable-next-line es/no-object-is -- safe\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\"); // eslint-disable-next-line es/no-object-defineproperty -- safe\n\n\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, {\n      value: value,\n      configurable: true,\n      writable: true\n    });\n  } catch (error) {\n    global[key] = value;\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () {\n        return this;\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (target, TAG, STATIC) {\n  if (target && !STATIC) target = target.prototype;\n\n  if (target && !hasOwn(target, TO_STRING_TAG)) {\n    defineProperty(target, TO_STRING_TAG, {\n      configurable: true,\n      value: TAG\n    });\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\nmodule.exports = store;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.21.1',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js/internals/a-constructor.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\n\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar stringSlice = uncurryThis(''.slice);\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = toString(requireObjectCoercible($this));\n    var position = toIntegerOrInfinity(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = charCodeAt(S, position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar replace = uncurryThis(''.replace);\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\n\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = toString(requireObjectCoercible($this));\n    if (TYPE & 1) string = replace(string, ltrim, '');\n    if (TYPE & 2) string = replace(string, rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.es/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\"); // `thisNumberValue` abstract operation\n// https://tc39.es/ecma262/#sec-thisnumbervalue\n\n\nmodule.exports = uncurryThis(1.0.valueOf);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/this-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min; // Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\n\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar RangeError = global.RangeError; // `ToIndex` abstract operation\n// https://tc39.es/ecma262/#sec-toindex\n\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toIntegerOrInfinity(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length or index');\n  return length;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor; // `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\n\nmodule.exports = function (argument) {\n  var number = +argument; // eslint-disable-next-line no-self-compare -- safe\n\n  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min; // `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\n\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar Object = global.Object; // `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\n\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ \"./node_modules/core-js/internals/to-positive-integer.js\");\n\nvar RangeError = global.RangeError;\n\nmodule.exports = function (it, BYTES) {\n  var offset = toPositiveInteger(it);\n  if (offset % BYTES) throw RangeError('Wrong offset');\n  return offset;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-offset.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar RangeError = global.RangeError;\n\nmodule.exports = function (it) {\n  var result = toIntegerOrInfinity(it);\n  if (result < 0) throw RangeError(\"The argument can't be less than 0\");\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-positive-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js/internals/ordinary-to-primitive.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TypeError = global.TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw TypeError(\"Can't convert object to primitive value\");\n  }\n\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\"); // `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\n\n\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\ntest[TO_STRING_TAG] = 'z';\nmodule.exports = String(test) === '[object z]';\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar String = global.String;\n\nmodule.exports = function (argument) {\n  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');\n  return String(argument);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar String = global.String;\n\nmodule.exports = function (argument) {\n  try {\n    return String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ \"./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js\");\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ \"./node_modules/core-js/internals/array-buffer.js\");\n\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ \"./node_modules/core-js/internals/is-integral-number.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toIndex = __webpack_require__(/*! ../internals/to-index */ \"./node_modules/core-js/internals/to-index.js\");\n\nvar toOffset = __webpack_require__(/*! ../internals/to-offset */ \"./node_modules/core-js/internals/to-offset.js\");\n\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\n\nvar typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ \"./node_modules/core-js/internals/typed-array-from.js\");\n\nvar forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\n\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar round = Math.round;\nvar RangeError = global.RangeError;\nvar ArrayBuffer = ArrayBufferModule.ArrayBuffer;\nvar ArrayBufferPrototype = ArrayBuffer.prototype;\nvar DataView = ArrayBufferModule.DataView;\nvar NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;\nvar TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;\nvar TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;\nvar TypedArray = ArrayBufferViewCore.TypedArray;\nvar TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;\nvar aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;\nvar isTypedArray = ArrayBufferViewCore.isTypedArray;\nvar BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\nvar WRONG_LENGTH = 'Wrong length';\n\nvar fromList = function (C, list) {\n  aTypedArrayConstructor(C);\n  var index = 0;\n  var length = list.length;\n  var result = new C(length);\n\n  while (length > index) result[index] = list[index++];\n\n  return result;\n};\n\nvar addGetter = function (it, key) {\n  nativeDefineProperty(it, key, {\n    get: function () {\n      return getInternalState(this)[key];\n    }\n  });\n};\n\nvar isArrayBuffer = function (it) {\n  var klass;\n  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';\n};\n\nvar isTypedArrayIndex = function (target, key) {\n  return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;\n};\n\nvar wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {\n  key = toPropertyKey(key);\n  return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);\n};\n\nvar wrappedDefineProperty = function defineProperty(target, key, descriptor) {\n  key = toPropertyKey(key);\n\n  if (isTypedArrayIndex(target, key) && isObject(descriptor) && hasOwn(descriptor, 'value') && !hasOwn(descriptor, 'get') && !hasOwn(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors\n  && !descriptor.configurable && (!hasOwn(descriptor, 'writable') || descriptor.writable) && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)) {\n    target[key] = descriptor.value;\n    return target;\n  }\n\n  return nativeDefineProperty(target, key, descriptor);\n};\n\nif (DESCRIPTORS) {\n  if (!NATIVE_ARRAY_BUFFER_VIEWS) {\n    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;\n    definePropertyModule.f = wrappedDefineProperty;\n    addGetter(TypedArrayPrototype, 'buffer');\n    addGetter(TypedArrayPrototype, 'byteOffset');\n    addGetter(TypedArrayPrototype, 'byteLength');\n    addGetter(TypedArrayPrototype, 'length');\n  }\n\n  $({\n    target: 'Object',\n    stat: true,\n    forced: !NATIVE_ARRAY_BUFFER_VIEWS\n  }, {\n    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,\n    defineProperty: wrappedDefineProperty\n  });\n\n  module.exports = function (TYPE, wrapper, CLAMPED) {\n    var BYTES = TYPE.match(/\\d+$/)[0] / 8;\n    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + TYPE;\n    var SETTER = 'set' + TYPE;\n    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];\n    var TypedArrayConstructor = NativeTypedArrayConstructor;\n    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;\n    var exported = {};\n\n    var getter = function (that, index) {\n      var data = getInternalState(that);\n      return data.view[GETTER](index * BYTES + data.byteOffset, true);\n    };\n\n    var setter = function (that, index, value) {\n      var data = getInternalState(that);\n      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;\n      data.view[SETTER](index * BYTES + data.byteOffset, value, true);\n    };\n\n    var addElement = function (that, index) {\n      nativeDefineProperty(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n\n    if (!NATIVE_ARRAY_BUFFER_VIEWS) {\n      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {\n        anInstance(that, TypedArrayConstructorPrototype);\n        var index = 0;\n        var byteOffset = 0;\n        var buffer, byteLength, length;\n\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new ArrayBuffer(byteLength);\n        } else if (isArrayBuffer(data)) {\n          buffer = data;\n          byteOffset = toOffset(offset, BYTES);\n          var $len = data.byteLength;\n\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - byteOffset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);\n          }\n\n          length = byteLength / BYTES;\n        } else if (isTypedArray(data)) {\n          return fromList(TypedArrayConstructor, data);\n        } else {\n          return call(typedArrayFrom, TypedArrayConstructor, data);\n        }\n\n        setInternalState(that, {\n          buffer: buffer,\n          byteOffset: byteOffset,\n          byteLength: byteLength,\n          length: length,\n          view: new DataView(buffer)\n        });\n\n        while (index < length) addElement(that, index++);\n      });\n      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);\n      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);\n    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {\n      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {\n        anInstance(dummy, TypedArrayConstructorPrototype);\n        return inheritIfRequired(function () {\n          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));\n          if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);\n          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);\n          return call(typedArrayFrom, TypedArrayConstructor, data);\n        }(), dummy, TypedArrayConstructor);\n      });\n      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);\n      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {\n        if (!(key in TypedArrayConstructor)) {\n          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);\n        }\n      });\n      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;\n    }\n\n    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {\n      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);\n    }\n\n    createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);\n\n    if (TYPED_ARRAY_TAG) {\n      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);\n    }\n\n    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;\n    $({\n      global: true,\n      forced: TypedArrayConstructor != NativeTypedArrayConstructor,\n      sham: !NATIVE_ARRAY_BUFFER_VIEWS\n    }, exported);\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {\n      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);\n    }\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {\n      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);\n    }\n\n    setSpecies(CONSTRUCTOR_NAME);\n  };\n} else module.exports = function () {\n  /* empty */\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/typed-array-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable no-new -- required for testing */\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar NATIVE_ARRAY_BUFFER_VIEWS = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").NATIVE_ARRAY_BUFFER_VIEWS);\n\nvar ArrayBuffer = global.ArrayBuffer;\nvar Int8Array = global.Int8Array;\nmodule.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {\n  Int8Array(1);\n}) || !fails(function () {\n  new Int8Array(-1);\n}) || !checkCorrectnessOfIteration(function (iterable) {\n  new Int8Array();\n  new Int8Array(null);\n  new Int8Array(1.5);\n  new Int8Array(iterable);\n}, true) || fails(function () {\n  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill\n  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from-species-and-list.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from-species-and-list.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ \"./node_modules/core-js/internals/array-from-constructor-and-list.js\");\n\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nmodule.exports = function (instance, list) {\n  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/typed-array-from-species-and-list.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js/internals/a-constructor.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\n\nvar aTypedArrayConstructor = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").aTypedArrayConstructor);\n\nmodule.exports = function from(source\n/* , mapfn, thisArg */\n) {\n  var C = aConstructor(this);\n  var O = toObject(source);\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var i, length, result, step, iterator, next;\n\n  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {\n    iterator = getIterator(O, iteratorMethod);\n    next = iterator.next;\n    O = [];\n\n    while (!(step = call(next, iterator)).done) {\n      O.push(step.value);\n    }\n  }\n\n  if (mapping && argumentsLength > 2) {\n    mapfn = bind(mapfn, arguments[2]);\n  }\n\n  length = lengthOfArrayLike(O);\n  result = new (aTypedArrayConstructor(C))(length);\n\n  for (i = 0; length > i; i++) {\n    result[i] = mapping ? mapfn(O[i], i) : O[i];\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/typed-array-from.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-species-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-species-constructor.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\n\nvar TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;\nvar aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor; // a part of `TypedArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#typedarray-species-create\n\nmodule.exports = function (originalArray) {\n  return aTypedArrayConstructor(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/typed-array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\"); // V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\n\n\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () {\n    /* empty */\n  }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype != 42;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar symbolFor = Symbol && Symbol['for'];\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    var description = 'Symbol.' + name;\n\n    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else if (USE_SYMBOL_AS_UID && symbolFor) {\n      WellKnownSymbolsStore[name] = symbolFor(description);\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);\n    }\n  }\n\n  return WellKnownSymbolsStore[name];\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("// a string of all valid unicode whitespaces\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002' + '\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/wrap-error-constructor-with-cause.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nvar normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ \"./node_modules/core-js/internals/normalize-string-argument.js\");\n\nvar installErrorCause = __webpack_require__(/*! ../internals/install-error-cause */ \"./node_modules/core-js/internals/install-error-cause.js\");\n\nvar clearErrorStack = __webpack_require__(/*! ../internals/clear-error-stack */ \"./node_modules/core-js/internals/clear-error-stack.js\");\n\nvar ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ \"./node_modules/core-js/internals/error-stack-installable.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nmodule.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {\n  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;\n  var path = FULL_NAME.split('.');\n  var ERROR_NAME = path[path.length - 1];\n  var OriginalError = getBuiltIn.apply(null, path);\n  if (!OriginalError) return;\n  var OriginalErrorPrototype = OriginalError.prototype; // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006\n\n  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;\n  if (!FORCED) return OriginalError;\n  var BaseError = getBuiltIn('Error');\n  var WrappedError = wrapper(function (a, b) {\n    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);\n    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();\n    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);\n    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));\n    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);\n    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);\n    return result;\n  });\n  WrappedError.prototype = OriginalErrorPrototype;\n\n  if (ERROR_NAME !== 'Error') {\n    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);else copyConstructorProperties(WrappedError, BaseError, {\n      name: true\n    });\n  }\n\n  copyConstructorProperties(WrappedError, OriginalError);\n  if (!IS_PURE) try {\n    // Safari 13- bug: WebAssembly errors does not have a proper `.name`\n    if (OriginalErrorPrototype.name !== ERROR_NAME) {\n      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);\n    }\n\n    OriginalErrorPrototype.constructor = WrappedError;\n  } catch (error) {\n    /* empty */\n  }\n  return WrappedError;\n};\n\n//# sourceURL=webpack://videos/./node_modules/core-js/internals/wrap-error-constructor-with-cause.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.slice.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.slice.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ \"./node_modules/core-js/internals/array-buffer.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\n\nvar ArrayBuffer = ArrayBufferModule.ArrayBuffer;\nvar DataView = ArrayBufferModule.DataView;\nvar DataViewPrototype = DataView.prototype;\nvar un$ArrayBufferSlice = uncurryThis(ArrayBuffer.prototype.slice);\nvar getUint8 = uncurryThis(DataViewPrototype.getUint8);\nvar setUint8 = uncurryThis(DataViewPrototype.setUint8);\nvar INCORRECT_SLICE = fails(function () {\n  return !new ArrayBuffer(2).slice(1, undefined).byteLength;\n}); // `ArrayBuffer.prototype.slice` method\n// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice\n\n$({\n  target: 'ArrayBuffer',\n  proto: true,\n  unsafe: true,\n  forced: INCORRECT_SLICE\n}, {\n  slice: function slice(start, end) {\n    if (un$ArrayBufferSlice && end === undefined) {\n      return un$ArrayBufferSlice(anObject(this), start); // FF fix\n    }\n\n    var length = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));\n    var viewSource = new DataView(this);\n    var viewTarget = new DataView(result);\n    var index = 0;\n\n    while (first < fin) {\n      setUint8(viewTarget, index++, getUint8(viewSource, first++));\n    }\n\n    return result;\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array-buffer.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\nvar TypeError = global.TypeError; // We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\n\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: FORCED\n}, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  concat: function concat(arg) {\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n\n      if (isConcatSpreadable(E)) {\n        len = lengthOfArrayLike(E);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n\n    A.length = n;\n    return A;\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar $filter = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").filter);\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method\n// https://tc39.es/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !HAS_SPECIES_SUPPORT\n}, {\n  filter: function filter(callbackfn\n  /* , thisArg */\n  ) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar $find = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").find);\n\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true; // Shouldn't skip holes\n\nif (FIND in []) Array(1)[FIND](function () {\n  SKIPS_HOLES = false;\n}); // `Array.prototype.find` method\n// https://tc39.es/ecma262/#sec-array.prototype.find\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: SKIPS_HOLES\n}, {\n  find: function find(callbackfn\n  /* , that = undefined */\n  ) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\n\naddToUnscopables(FIND);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js/internals/array-from.js\");\n\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  // eslint-disable-next-line es/no-array-from -- required for testing\n  Array.from(iterable);\n}); // `Array.from` method\n// https://tc39.es/ecma262/#sec-array.from\n\n$({\n  target: 'Array',\n  stat: true,\n  forced: INCORRECT_ITERATION\n}, {\n  from: from\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\n\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated),\n    // target\n    index: 0,\n    // next index\n    kind: kind // kind\n\n  }); // `%ArrayIteratorPrototype%.next` method\n  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return {\n      value: undefined,\n      done: true\n    };\n  }\n\n  if (kind == 'keys') return {\n    value: index,\n    done: false\n  };\n  if (kind == 'values') return {\n    value: target[index],\n    done: false\n  };\n  return {\n    value: [index, target[index]],\n    done: false\n  };\n}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\n\nvar values = Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries'); // V8 ~ Chrome 45- bug\n\nif (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {\n  defineProperty(values, 'name', {\n    value: 'values'\n  });\n} catch (error) {\n  /* empty */\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar un$Slice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\nvar SPECIES = wellKnownSymbol('species');\nvar Array = global.Array;\nvar max = Math.max; // `Array.prototype.slice` method\n// https://tc39.es/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !HAS_SPECIES_SUPPORT\n}, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = lengthOfArrayLike(O);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n\n    var Constructor, result, n;\n\n    if (isArray(O)) {\n      Constructor = O.constructor; // cross-realm fallback\n\n      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n\n      if (Constructor === Array || Constructor === undefined) {\n        return un$Slice(O, k, fin);\n      }\n    }\n\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n\n    result.length = n;\n    return result;\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.error.cause.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.error.cause.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable no-unused-vars -- required for functions `.length` */\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar wrapErrorConstructorWithCause = __webpack_require__(/*! ../internals/wrap-error-constructor-with-cause */ \"./node_modules/core-js/internals/wrap-error-constructor-with-cause.js\");\n\nvar WEB_ASSEMBLY = 'WebAssembly';\nvar WebAssembly = global[WEB_ASSEMBLY];\nvar FORCED = Error('e', {\n  cause: 7\n}).cause !== 7;\n\nvar exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {\n  var O = {};\n  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);\n  $({\n    global: true,\n    forced: FORCED\n  }, O);\n};\n\nvar exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {\n  if (WebAssembly && WebAssembly[ERROR_NAME]) {\n    var O = {};\n    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);\n    $({\n      target: WEB_ASSEMBLY,\n      stat: true,\n      forced: FORCED\n    }, O);\n  }\n}; // https://github.com/tc39/proposal-error-cause\n\n\nexportGlobalErrorCauseWrapper('Error', function (init) {\n  return function Error(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportGlobalErrorCauseWrapper('EvalError', function (init) {\n  return function EvalError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportGlobalErrorCauseWrapper('RangeError', function (init) {\n  return function RangeError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportGlobalErrorCauseWrapper('ReferenceError', function (init) {\n  return function ReferenceError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportGlobalErrorCauseWrapper('SyntaxError', function (init) {\n  return function SyntaxError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportGlobalErrorCauseWrapper('TypeError', function (init) {\n  return function TypeError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportGlobalErrorCauseWrapper('URIError', function (init) {\n  return function URIError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportWebAssemblyErrorCauseWrapper('CompileError', function (init) {\n  return function CompileError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportWebAssemblyErrorCauseWrapper('LinkError', function (init) {\n  return function LinkError(message) {\n    return apply(init, this, arguments);\n  };\n});\nexportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {\n  return function RuntimeError(message) {\n    return apply(init, this, arguments);\n  };\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.error.cause.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").EXISTS);\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar FunctionPrototype = Function.prototype;\nvar functionToString = uncurryThis(FunctionPrototype.toString);\nvar nameRE = /function\\b(?:\\s|\\/\\*[\\S\\s]*?\\*\\/|\\/\\/[^\\n\\r]*[\\n\\r]+)*([^\\s(/]*)/;\nvar regExpExec = uncurryThis(nameRE.exec);\nvar NAME = 'name'; // Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\n\nif (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return regExpExec(nameRE, functionToString(this))[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar Array = global.Array;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar exec = uncurryThis(/./.exec);\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar replace = uncurryThis(''.replace);\nvar numberToString = uncurryThis(1.0.toString);\nvar tester = /[\\uD800-\\uDFFF]/g;\nvar low = /^[\\uD800-\\uDBFF]$/;\nvar hi = /^[\\uDC00-\\uDFFF]$/;\n\nvar fix = function (match, offset, string) {\n  var prev = charAt(string, offset - 1);\n  var next = charAt(string, offset + 1);\n\n  if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {\n    return '\\\\u' + numberToString(charCodeAt(match, 0), 16);\n  }\n\n  return match;\n};\n\nvar FORCED = fails(function () {\n  return $stringify('\\uDF06\\uD834') !== '\"\\\\udf06\\\\ud834\"' || $stringify('\\uDEAD') !== '\"\\\\udead\"';\n});\n\nif ($stringify) {\n  // `JSON.stringify` method\n  // https://tc39.es/ecma262/#sec-json.stringify\n  // https://github.com/tc39/proposal-well-formed-stringify\n  $({\n    target: 'JSON',\n    stat: true,\n    forced: FORCED\n  }, {\n    // eslint-disable-next-line no-unused-vars -- required for `.length`\n    stringify: function stringify(it, replacer, space) {\n      for (var i = 0, l = arguments.length, args = Array(l); i < l; i++) args[i] = arguments[i];\n\n      var result = apply($stringify, null, args);\n      return typeof result == 'string' ? replace(result, tester, fix) : result;\n    }\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.json.stringify.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js/internals/collection.js\");\n\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"./node_modules/core-js/internals/collection-strong.js\"); // `Map` constructor\n// https://tc39.es/ecma262/#sec-map-objects\n\n\ncollection('Map', function (init) {\n  return function Map() {\n    return init(this, arguments.length ? arguments[0] : undefined);\n  };\n}, collectionStrong);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\n\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ \"./node_modules/core-js/internals/this-number-value.js\");\n\nvar trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\n\nvar NUMBER = 'Number';\nvar NativeNumber = global[NUMBER];\nvar NumberPrototype = NativeNumber.prototype;\nvar TypeError = global.TypeError;\nvar arraySlice = uncurryThis(''.slice);\nvar charCodeAt = uncurryThis(''.charCodeAt); // `ToNumeric` abstract operation\n// https://tc39.es/ecma262/#sec-tonumeric\n\nvar toNumeric = function (value) {\n  var primValue = toPrimitive(value, 'number');\n  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);\n}; // `ToNumber` abstract operation\n// https://tc39.es/ecma262/#sec-tonumber\n\n\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, 'number');\n  var first, third, radix, maxCode, digits, length, index, code;\n  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');\n\n  if (typeof it == 'string' && it.length > 2) {\n    it = trim(it);\n    first = charCodeAt(it, 0);\n\n    if (first === 43 || first === 45) {\n      third = charCodeAt(it, 2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (charCodeAt(it, 1)) {\n        case 66:\n        case 98:\n          radix = 2;\n          maxCode = 49;\n          break;\n        // fast equal of /^0b[01]+$/i\n\n        case 79:\n        case 111:\n          radix = 8;\n          maxCode = 55;\n          break;\n        // fast equal of /^0o[0-7]+$/i\n\n        default:\n          return +it;\n      }\n\n      digits = arraySlice(it, 2);\n      length = digits.length;\n\n      for (index = 0; index < length; index++) {\n        code = charCodeAt(digits, index); // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n\n        if (code < 48 || code > maxCode) return NaN;\n      }\n\n      return parseInt(digits, radix);\n    }\n  }\n\n  return +it;\n}; // `Number` constructor\n// https://tc39.es/ecma262/#sec-number-constructor\n\n\nif (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {\n  var NumberWrapper = function Number(value) {\n    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));\n    var dummy = this; // check on 1..constructor(foo) case\n\n    return isPrototypeOf(NumberPrototype, dummy) && fails(function () {\n      thisNumberValue(dummy);\n    }) ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;\n  };\n\n  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : ( // ES3:\n  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):\n  'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' + // ESNext\n  'fromString,range').split(','), j = 0, key; keys.length > j; j++) {\n    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {\n      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));\n    }\n  }\n\n  NumberWrapper.prototype = NumberPrototype;\n  NumberPrototype.constructor = NumberWrapper;\n  redefine(global, NUMBER, NumberWrapper);\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar nativeGetOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () {\n  nativeGetOwnPropertyDescriptor(1);\n});\nvar FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\n\n$({\n  target: 'Object',\n  stat: true,\n  forced: FORCED,\n  sham: !DESCRIPTORS\n}, {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {\n    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\"); // `Object.getOwnPropertyDescriptors` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors\n\n\n$({\n  target: 'Object',\n  stat: true,\n  sham: !DESCRIPTORS\n}, {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIndexedObject(object);\n    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var index = 0;\n    var key, descriptor;\n\n    while (keys.length > index) {\n      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);\n      if (descriptor !== undefined) createProperty(result, key, descriptor);\n    }\n\n    return result;\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () {\n  nativeKeys(1);\n}); // `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n\n$({\n  target: 'Object',\n  stat: true,\n  forced: FAILS_ON_PRIMITIVES\n}, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js/internals/object-to-string.js\"); // `Object.prototype.toString` method\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\n\n\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, {\n    unsafe: true\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f);\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").enforce);\n\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\n\nvar UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ \"./node_modules/core-js/internals/regexp-unsupported-ncg.js\");\n\nvar MATCH = wellKnownSymbol('match');\nvar NativeRegExp = global.RegExp;\nvar RegExpPrototype = NativeRegExp.prototype;\nvar SyntaxError = global.SyntaxError;\nvar getFlags = uncurryThis(regExpFlags);\nvar exec = uncurryThis(RegExpPrototype.exec);\nvar charAt = uncurryThis(''.charAt);\nvar replace = uncurryThis(''.replace);\nvar stringIndexOf = uncurryThis(''.indexOf);\nvar stringSlice = uncurryThis(''.slice); // TODO: Use only propper RegExpIdentifierName\n\nvar IS_NCG = /^\\?<[^\\s\\d!#%&*+<=>@^][^\\s!#%&*+<=>@^]*>/;\nvar re1 = /a/g;\nvar re2 = /a/g; // \"new\" should create a new object, old webkit bug\n\nvar CORRECT_NEW = new NativeRegExp(re1) !== re1;\nvar MISSED_STICKY = stickyHelpers.MISSED_STICKY;\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;\nvar BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {\n  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match\n\n  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';\n}));\n\nvar handleDotAll = function (string) {\n  var length = string.length;\n  var index = 0;\n  var result = '';\n  var brackets = false;\n  var chr;\n\n  for (; index <= length; index++) {\n    chr = charAt(string, index);\n\n    if (chr === '\\\\') {\n      result += chr + charAt(string, ++index);\n      continue;\n    }\n\n    if (!brackets && chr === '.') {\n      result += '[\\\\s\\\\S]';\n    } else {\n      if (chr === '[') {\n        brackets = true;\n      } else if (chr === ']') {\n        brackets = false;\n      }\n\n      result += chr;\n    }\n  }\n\n  return result;\n};\n\nvar handleNCG = function (string) {\n  var length = string.length;\n  var index = 0;\n  var result = '';\n  var named = [];\n  var names = {};\n  var brackets = false;\n  var ncg = false;\n  var groupid = 0;\n  var groupname = '';\n  var chr;\n\n  for (; index <= length; index++) {\n    chr = charAt(string, index);\n\n    if (chr === '\\\\') {\n      chr = chr + charAt(string, ++index);\n    } else if (chr === ']') {\n      brackets = false;\n    } else if (!brackets) switch (true) {\n      case chr === '[':\n        brackets = true;\n        break;\n\n      case chr === '(':\n        if (exec(IS_NCG, stringSlice(string, index + 1))) {\n          index += 2;\n          ncg = true;\n        }\n\n        result += chr;\n        groupid++;\n        continue;\n\n      case chr === '>' && ncg:\n        if (groupname === '' || hasOwn(names, groupname)) {\n          throw new SyntaxError('Invalid capture group name');\n        }\n\n        names[groupname] = true;\n        named[named.length] = [groupname, groupid];\n        ncg = false;\n        groupname = '';\n        continue;\n    }\n\n    if (ncg) groupname += chr;else result += chr;\n  }\n\n  return [result, named];\n}; // `RegExp` constructor\n// https://tc39.es/ecma262/#sec-regexp-constructor\n\n\nif (isForced('RegExp', BASE_FORCED)) {\n  var RegExpWrapper = function RegExp(pattern, flags) {\n    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);\n    var patternIsRegExp = isRegExp(pattern);\n    var flagsAreUndefined = flags === undefined;\n    var groups = [];\n    var rawPattern = pattern;\n    var rawFlags, dotAll, sticky, handled, result, state;\n\n    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {\n      return pattern;\n    }\n\n    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {\n      pattern = pattern.source;\n      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);\n    }\n\n    pattern = pattern === undefined ? '' : toString(pattern);\n    flags = flags === undefined ? '' : toString(flags);\n    rawPattern = pattern;\n\n    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {\n      dotAll = !!flags && stringIndexOf(flags, 's') > -1;\n      if (dotAll) flags = replace(flags, /s/g, '');\n    }\n\n    rawFlags = flags;\n\n    if (MISSED_STICKY && 'sticky' in re1) {\n      sticky = !!flags && stringIndexOf(flags, 'y') > -1;\n      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');\n    }\n\n    if (UNSUPPORTED_NCG) {\n      handled = handleNCG(pattern);\n      pattern = handled[0];\n      groups = handled[1];\n    }\n\n    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);\n\n    if (dotAll || sticky || groups.length) {\n      state = enforceInternalState(result);\n\n      if (dotAll) {\n        state.dotAll = true;\n        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);\n      }\n\n      if (sticky) state.sticky = true;\n      if (groups.length) state.groups = groups;\n    }\n\n    if (pattern !== rawPattern) try {\n      // fails in old engines, but we have no alternatives for unsupported regex syntax\n      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);\n    } catch (error) {\n      /* empty */\n    }\n    return result;\n  };\n\n  var proxy = function (key) {\n    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {\n      configurable: true,\n      get: function () {\n        return NativeRegExp[key];\n      },\n      set: function (it) {\n        NativeRegExp[key] = it;\n      }\n    });\n  };\n\n  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {\n    proxy(keys[index++]);\n  }\n\n  RegExpPrototype.constructor = RegExpWrapper;\n  RegExpWrapper.prototype = RegExpPrototype;\n  redefine(global, 'RegExp', RegExpWrapper);\n} // https://tc39.es/ecma262/#sec-get-regexp-@@species\n\n\nsetSpecies('RegExp');\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.dot-all.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.dot-all.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\n\nvar RegExpPrototype = RegExp.prototype;\nvar TypeError = global.TypeError; // `RegExp.prototype.dotAll` getter\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall\n\nif (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {\n  defineProperty(RegExpPrototype, 'dotAll', {\n    configurable: true,\n    get: function () {\n      if (this === RegExpPrototype) return undefined; // We can't use InternalStateModule.getterFor because\n      // we don't add metadata for regexps created by a literal.\n\n      if (classof(this) === 'RegExp') {\n        return !!getInternalState(this).dotAll;\n      }\n\n      throw TypeError('Incompatible receiver, RegExp required');\n    }\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.dot-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\"); // `RegExp.prototype.exec` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.exec\n\n\n$({\n  target: 'RegExp',\n  proto: true,\n  forced: /./.exec !== exec\n}, {\n  exec: exec\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.flags.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar objectDefinePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar RegExpPrototype = RegExp.prototype;\nvar FORCED = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n  return Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call({\n    dotAll: true,\n    sticky: true\n  }) !== 'sy';\n}); // `RegExp.prototype.flags` getter\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\n\nif (FORCED) objectDefinePropertyModule.f(RegExpPrototype, 'flags', {\n  configurable: true,\n  get: regExpFlags\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.sticky.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.sticky.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar MISSED_STICKY = (__webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\").MISSED_STICKY);\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\n\nvar RegExpPrototype = RegExp.prototype;\nvar TypeError = global.TypeError; // `RegExp.prototype.sticky` getter\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky\n\nif (DESCRIPTORS && MISSED_STICKY) {\n  defineProperty(RegExpPrototype, 'sticky', {\n    configurable: true,\n    get: function () {\n      if (this === RegExpPrototype) return undefined; // We can't use InternalStateModule.getterFor because\n      // we don't add metadata for regexps created by a literal.\n\n      if (classof(this) === 'RegExp') {\n        return !!getInternalState(this).sticky;\n      }\n\n      throw TypeError('Incompatible receiver, RegExp required');\n    }\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.sticky.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(" // TODO: Remove from `core-js@4` since it's moved to entry points\n\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar DELEGATES_TO_EXEC = function () {\n  var execCalled = false;\n  var re = /[ac]/;\n\n  re.exec = function () {\n    execCalled = true;\n    return /./.exec.apply(this, arguments);\n  };\n\n  return re.test('abc') === true && execCalled;\n}();\n\nvar Error = global.Error;\nvar un$Test = uncurryThis(/./.test); // `RegExp.prototype.test` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.test\n\n$({\n  target: 'RegExp',\n  proto: true,\n  forced: !DELEGATES_TO_EXEC\n}, {\n  test: function (str) {\n    var exec = this.exec;\n    if (!isCallable(exec)) return un$Test(this, str);\n    var result = call(exec, this, str);\n\n    if (result !== null && !isObject(result)) {\n      throw new Error('RegExp exec method returned something other than an Object or null');\n    }\n\n    return !!result;\n  }\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.test.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").PROPER);\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar TO_STRING = 'toString';\nvar RegExpPrototype = RegExp.prototype;\nvar n$ToString = RegExpPrototype[TO_STRING];\nvar getFlags = uncurryThis(regExpFlags);\nvar NOT_GENERIC = fails(function () {\n  return n$ToString.call({\n    source: 'a',\n    flags: 'b'\n  }) != '/a/b';\n}); // FF44- RegExp#toString has a wrong name\n\nvar INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.tostring\n\nif (NOT_GENERIC || INCORRECT_NAME) {\n  redefine(RegExp.prototype, TO_STRING, function toString() {\n    var R = anObject(this);\n    var p = $toString(R.source);\n    var rf = R.flags;\n    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);\n    return '/' + p + '/' + f;\n  }, {\n    unsafe: true\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar collection = __webpack_require__(/*! ../internals/collection */ \"./node_modules/core-js/internals/collection.js\");\n\nvar collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ \"./node_modules/core-js/internals/collection-strong.js\"); // `Set` constructor\n// https://tc39.es/ecma262/#sec-set-objects\n\n\ncollection('Set', function (init) {\n  return function Set() {\n    return init(this, arguments.length ? arguments[0] : undefined);\n  };\n}, collectionStrong);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt);\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-string.prototype-@@iterator\n\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: toString(iterated),\n    index: 0\n  }); // `%StringIteratorPrototype%.next` method\n  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return {\n    value: undefined,\n    done: true\n  };\n  point = charAt(string, index);\n  state.index += point.length;\n  return {\n    value: point,\n    done: false\n  };\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\n\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nvar getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ \"./node_modules/core-js/internals/get-substitution.js\");\n\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar REPLACE = wellKnownSymbol('replace');\nvar max = Math.max;\nvar min = Math.min;\nvar concat = uncurryThis([].concat);\nvar push = uncurryThis([].push);\nvar stringIndexOf = uncurryThis(''.indexOf);\nvar stringSlice = uncurryThis(''.slice);\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n}; // IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\n\n\nvar REPLACE_KEEPS_$0 = function () {\n  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing\n  return 'a'.replace(/./, '$0') === '$0';\n}(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\n\n\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n\n  return false;\n}();\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  var re = /./;\n\n  re.exec = function () {\n    var result = [];\n    result.groups = {\n      a: '7'\n    };\n    return result;\n  }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive\n\n\n  return ''.replace(re, '$<a>') !== '7';\n}); // @@replace logic\n\nfixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {\n  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';\n  return [// `String.prototype.replace` method\n  // https://tc39.es/ecma262/#sec-string.prototype.replace\n  function replace(searchValue, replaceValue) {\n    var O = requireObjectCoercible(this);\n    var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);\n    return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);\n  }, // `RegExp.prototype[@@replace]` method\n  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace\n  function (string, replaceValue) {\n    var rx = anObject(this);\n    var S = toString(string);\n\n    if (typeof replaceValue == 'string' && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, '$<') === -1) {\n      var res = maybeCallNative(nativeReplace, rx, S, replaceValue);\n      if (res.done) return res.value;\n    }\n\n    var functionalReplace = isCallable(replaceValue);\n    if (!functionalReplace) replaceValue = toString(replaceValue);\n    var global = rx.global;\n\n    if (global) {\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n    }\n\n    var results = [];\n\n    while (true) {\n      var result = regExpExec(rx, S);\n      if (result === null) break;\n      push(results, result);\n      if (!global) break;\n      var matchStr = toString(result[0]);\n      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n    }\n\n    var accumulatedResult = '';\n    var nextSourcePosition = 0;\n\n    for (var i = 0; i < results.length; i++) {\n      result = results[i];\n      var matched = toString(result[0]);\n      var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);\n      var captures = []; // NOTE: This is equivalent to\n      //   captures = result.slice(1).map(maybeToString)\n      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n      // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n\n      for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));\n\n      var namedCaptures = result.groups;\n\n      if (functionalReplace) {\n        var replacerArgs = concat([matched], captures, position, S);\n        if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);\n        var replacement = toString(apply(replaceValue, undefined, replacerArgs));\n      } else {\n        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n      }\n\n      if (position >= nextSourcePosition) {\n        accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;\n        nextSourcePosition = position + matched.length;\n      }\n    }\n\n    return accumulatedResult + stringSlice(S, nextSourcePosition);\n  }];\n}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar sameValue = __webpack_require__(/*! ../internals/same-value */ \"./node_modules/core-js/internals/same-value.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\"); // @@search logic\n\n\nfixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {\n  return [// `String.prototype.search` method\n  // https://tc39.es/ecma262/#sec-string.prototype.search\n  function search(regexp) {\n    var O = requireObjectCoercible(this);\n    var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);\n    return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));\n  }, // `RegExp.prototype[@@search]` method\n  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search\n  function (string) {\n    var rx = anObject(this);\n    var S = toString(string);\n    var res = maybeCallNative(nativeSearch, rx, S);\n    if (res.done) return res.value;\n    var previousLastIndex = rx.lastIndex;\n    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n    var result = regExpExec(rx, S);\n    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n    return result === null ? -1 : result.index;\n  }];\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.string.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// `Symbol.prototype.description` getter\n// https://tc39.es/ecma262/#sec-symbol.prototype.description\n\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\nvar SymbolPrototype = NativeSymbol && NativeSymbol.prototype;\n\nif (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) || // Safari 12 bug\nNativeSymbol().description !== undefined)) {\n  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description\n\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);\n    var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n    : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  SymbolWrapper.prototype = SymbolPrototype;\n  SymbolPrototype.constructor = SymbolWrapper;\n  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';\n  var symbolToString = uncurryThis(SymbolPrototype.toString);\n  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  var replace = uncurryThis(''.replace);\n  var stringSlice = uncurryThis(''.slice);\n  defineProperty(SymbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = symbolValueOf(this);\n      var string = symbolToString(symbol);\n      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n  $({\n    global: true,\n    forced: true\n  }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\"); // `Symbol.iterator` well-known symbol\n// https://tc39.es/ecma262/#sec-symbol.iterator\n\n\ndefineWellKnownSymbol('iterator');\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\n\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\");\n\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\n\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\n\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\n\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];\nvar TypeError = global.TypeError;\nvar QObject = global.QObject;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar push = uncurryThis([].push);\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\n\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\n\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () {\n      return nativeDefineProperty(this, 'a', {\n        value: 7\n      }).a;\n    }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPropertyKey(P);\n  anObject(Attributes);\n\n  if (hasOwn(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, {\n        enumerable: createPropertyDescriptor(0, false)\n      });\n    }\n\n    return setSymbolDescriptor(O, key, Attributes);\n  }\n\n  return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPropertyKey(V);\n  var enumerable = call(nativePropertyIsEnumerable, this, P);\n  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPropertyKey(P);\n  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n\n  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {\n      push(result, AllSymbols[key]);\n    }\n  });\n  return result;\n}; // `Symbol` constructor\n// https://tc39.es/ecma262/#sec-symbol-constructor\n\n\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);\n    var tag = uid(description);\n\n    var setter = function (value) {\n      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);\n      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {\n      configurable: true,\n      set: setter\n    });\n    return wrap(tag, description);\n  };\n\n  SymbolPrototype = $Symbol[PROTOTYPE];\n  redefine(SymbolPrototype, 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  definePropertiesModule.f = $defineProperties;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty(SymbolPrototype, 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {\n        unsafe: true\n      });\n    }\n  }\n}\n\n$({\n  global: true,\n  wrap: true,\n  forced: !NATIVE_SYMBOL,\n  sham: !NATIVE_SYMBOL\n}, {\n  Symbol: $Symbol\n});\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n$({\n  target: SYMBOL,\n  stat: true,\n  forced: !NATIVE_SYMBOL\n}, {\n  // `Symbol.for` method\n  // https://tc39.es/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = $toString(key);\n    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.es/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () {\n    USE_SETTER = true;\n  },\n  useSimple: function () {\n    USE_SETTER = false;\n  }\n});\n$({\n  target: 'Object',\n  stat: true,\n  forced: !NATIVE_SYMBOL,\n  sham: !DESCRIPTORS\n}, {\n  // `Object.create` method\n  // https://tc39.es/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.es/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.es/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n$({\n  target: 'Object',\n  stat: true,\n  forced: !NATIVE_SYMBOL\n}, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n\n$({\n  target: 'Object',\n  stat: true,\n  forced: fails(function () {\n    getOwnPropertySymbolsModule.f(1);\n  })\n}, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n}); // `JSON.stringify` method behavior with symbols\n// https://tc39.es/ecma262/#sec-json.stringify\n\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}\n\n    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null\n    || $stringify({\n      a: symbol\n    }) != '{}' // V8 throws on boxed symbols\n    || $stringify(Object(symbol)) != '{}';\n  });\n  $({\n    target: 'JSON',\n    stat: true,\n    forced: FORCED_JSON_STRINGIFY\n  }, {\n    // eslint-disable-next-line no-unused-vars -- required for `.length`\n    stringify: function stringify(it, replacer, space) {\n      var args = arraySlice(arguments);\n      var $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (isCallable($replacer)) value = call($replacer, this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return apply($stringify, null, args);\n    }\n  });\n} // `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive\n\n\nif (!SymbolPrototype[TO_PRIMITIVE]) {\n  var valueOf = SymbolPrototype.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length\n\n  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {\n    // TODO: improve hint logic\n    return call(valueOf, this);\n  });\n} // `Symbol.prototype[@@toStringTag]` property\n// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag\n\n\nsetToStringTag($Symbol, SYMBOL);\nhiddenKeys[HIDDEN] = true;\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.at.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.at.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.at` method\n// https://github.com/tc39/proposal-relative-indexing-method\n\nexportTypedArrayMethod('at', function at(index) {\n  var O = aTypedArray(this);\n  var len = lengthOfArrayLike(O);\n  var relativeIndex = toIntegerOrInfinity(index);\n  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;\n  return k < 0 || k >= len ? undefined : O[k];\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $ArrayCopyWithin = __webpack_require__(/*! ../internals/array-copy-within */ \"./node_modules/core-js/internals/array-copy-within.js\");\n\nvar u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin\n\nexportTypedArrayMethod('copyWithin', function copyWithin(target, start\n/* , end */\n) {\n  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $every = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").every);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every\n\nexportTypedArrayMethod('every', function every(callbackfn\n/* , thisArg */\n) {\n  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar $fill = __webpack_require__(/*! ../internals/array-fill */ \"./node_modules/core-js/internals/array-fill.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill\n\nexportTypedArrayMethod('fill', function fill(value\n/* , start, end */\n) {\n  var length = arguments.length;\n  return call($fill, aTypedArray(this), value, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $filter = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").filter);\n\nvar fromSpeciesAndList = __webpack_require__(/*! ../internals/typed-array-from-species-and-list */ \"./node_modules/core-js/internals/typed-array-from-species-and-list.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter\n\nexportTypedArrayMethod('filter', function filter(callbackfn\n/* , thisArg */\n) {\n  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  return fromSpeciesAndList(this, list);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").findIndex);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex\n\nexportTypedArrayMethod('findIndex', function findIndex(predicate\n/* , thisArg */\n) {\n  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $find = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").find);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find\n\nexportTypedArrayMethod('find', function find(predicate\n/* , thisArg */\n) {\n  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach\n\nexportTypedArrayMethod('forEach', function forEach(callbackfn\n/* , thisArg */\n) {\n  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $includes = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").includes);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes\n\nexportTypedArrayMethod('includes', function includes(searchElement\n/* , fromIndex */\n) {\n  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof\n\nexportTypedArrayMethod('indexOf', function indexOf(searchElement\n/* , fromIndex */\n) {\n  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar Uint8Array = global.Uint8Array;\nvar arrayValues = uncurryThis(ArrayIterators.values);\nvar arrayKeys = uncurryThis(ArrayIterators.keys);\nvar arrayEntries = uncurryThis(ArrayIterators.entries);\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar TypedArrayPrototype = Uint8Array && Uint8Array.prototype;\nvar GENERIC = !fails(function () {\n  TypedArrayPrototype[ITERATOR].call([1]);\n});\nvar ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';\n\nvar typedArrayValues = function values() {\n  return arrayValues(aTypedArray(this));\n}; // `%TypedArray%.prototype.entries` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries\n\n\nexportTypedArrayMethod('entries', function entries() {\n  return arrayEntries(aTypedArray(this));\n}, GENERIC); // `%TypedArray%.prototype.keys` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys\n\nexportTypedArrayMethod('keys', function keys() {\n  return arrayKeys(aTypedArray(this));\n}, GENERIC); // `%TypedArray%.prototype.values` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values\n\nexportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {\n  name: 'values'\n}); // `%TypedArray%.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator\n\nexportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {\n  name: 'values'\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar $join = uncurryThis([].join); // `%TypedArray%.prototype.join` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join\n\nexportTypedArrayMethod('join', function join(separator) {\n  return $join(aTypedArray(this), separator);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ \"./node_modules/core-js/internals/array-last-index-of.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof\n\nexportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement\n/* , fromIndex */\n) {\n  var length = arguments.length;\n  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $map = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").map);\n\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map\n\nexportTypedArrayMethod('map', function map(mapfn\n/* , thisArg */\n) {\n  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {\n    return new (typedArraySpeciesConstructor(O))(length);\n  });\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $reduceRight = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").right);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright\n\nexportTypedArrayMethod('reduceRight', function reduceRight(callbackfn\n/* , initialValue */\n) {\n  var length = arguments.length;\n  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $reduce = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").left);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce\n\nexportTypedArrayMethod('reduce', function reduce(callbackfn\n/* , initialValue */\n) {\n  var length = arguments.length;\n  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar floor = Math.floor; // `%TypedArray%.prototype.reverse` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse\n\nexportTypedArrayMethod('reverse', function reverse() {\n  var that = this;\n  var length = aTypedArray(that).length;\n  var middle = floor(length / 2);\n  var index = 0;\n  var value;\n\n  while (index < middle) {\n    value = that[index];\n    that[index++] = that[--length];\n    that[length] = value;\n  }\n\n  return that;\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.reverse.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar toOffset = __webpack_require__(/*! ../internals/to-offset */ \"./node_modules/core-js/internals/to-offset.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar RangeError = global.RangeError;\nvar Int8Array = global.Int8Array;\nvar Int8ArrayPrototype = Int8Array && Int8Array.prototype;\nvar $set = Int8ArrayPrototype && Int8ArrayPrototype.set;\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {\n  // eslint-disable-next-line es/no-typed-arrays -- required for testing\n  var array = new Uint8ClampedArray(2);\n  call($set, array, {\n    length: 1,\n    0: 3\n  }, 1);\n  return array[1] !== 3;\n}); // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other\n\nvar TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {\n  var array = new Int8Array(2);\n  array.set(1);\n  array.set('2', 1);\n  return array[0] !== 0 || array[1] !== 2;\n}); // `%TypedArray%.prototype.set` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set\n\nexportTypedArrayMethod('set', function set(arrayLike\n/* , offset */\n) {\n  aTypedArray(this);\n  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);\n  var src = toIndexedObject(arrayLike);\n  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);\n  var length = this.length;\n  var len = lengthOfArrayLike(src);\n  var index = 0;\n  if (len + offset > length) throw RangeError('Wrong length');\n\n  while (index < len) this[offset + index] = src[index++];\n}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar FORCED = fails(function () {\n  // eslint-disable-next-line es/no-typed-arrays -- required for testing\n  new Int8Array(1).slice();\n}); // `%TypedArray%.prototype.slice` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice\n\nexportTypedArrayMethod('slice', function slice(start, end) {\n  var list = arraySlice(aTypedArray(this), start, end);\n  var C = typedArraySpeciesConstructor(this);\n  var index = 0;\n  var length = list.length;\n  var result = new C(length);\n\n  while (length > index) result[index] = list[index++];\n\n  return result;\n}, FORCED);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar $some = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").some);\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some\n\nexportTypedArrayMethod('some', function some(callbackfn\n/* , thisArg */\n) {\n  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nvar internalSort = __webpack_require__(/*! ../internals/array-sort */ \"./node_modules/core-js/internals/array-sort.js\");\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar FF = __webpack_require__(/*! ../internals/engine-ff-version */ \"./node_modules/core-js/internals/engine-ff-version.js\");\n\nvar IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ \"./node_modules/core-js/internals/engine-is-ie-or-edge.js\");\n\nvar V8 = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ \"./node_modules/core-js/internals/engine-webkit-version.js\");\n\nvar Array = global.Array;\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar Uint16Array = global.Uint16Array;\nvar un$Sort = Uint16Array && uncurryThis(Uint16Array.prototype.sort); // WebKit\n\nvar ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails(function () {\n  un$Sort(new Uint16Array(2), null);\n}) && fails(function () {\n  un$Sort(new Uint16Array(2), {});\n}));\nvar STABLE_SORT = !!un$Sort && !fails(function () {\n  // feature detection can be too slow, so check engines versions\n  if (V8) return V8 < 74;\n  if (FF) return FF < 67;\n  if (IE_OR_EDGE) return true;\n  if (WEBKIT) return WEBKIT < 602;\n  var array = new Uint16Array(516);\n  var expected = Array(516);\n  var index, mod;\n\n  for (index = 0; index < 516; index++) {\n    mod = index % 4;\n    array[index] = 515 - index;\n    expected[index] = index - 2 * mod + 3;\n  }\n\n  un$Sort(array, function (a, b) {\n    return (a / 4 | 0) - (b / 4 | 0);\n  });\n\n  for (index = 0; index < 516; index++) {\n    if (array[index] !== expected[index]) return true;\n  }\n});\n\nvar getSortCompare = function (comparefn) {\n  return function (x, y) {\n    if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check\n\n    if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check\n\n    if (x !== x) return 1;\n    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;\n    return x > y;\n  };\n}; // `%TypedArray%.prototype.sort` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort\n\n\nexportTypedArrayMethod('sort', function sort(comparefn) {\n  if (comparefn !== undefined) aCallable(comparefn);\n  if (STABLE_SORT) return un$Sort(this, comparefn);\n  return internalSort(aTypedArray(this), getSortCompare(comparefn));\n}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.subarray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.subarray.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nvar typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ \"./node_modules/core-js/internals/typed-array-species-constructor.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray\n\nexportTypedArrayMethod('subarray', function subarray(begin, end) {\n  var O = aTypedArray(this);\n  var length = O.length;\n  var beginIndex = toAbsoluteIndex(begin, length);\n  var C = typedArraySpeciesConstructor(O);\n  return new C(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.subarray.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\n\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\n\nvar Int8Array = global.Int8Array;\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar $toLocaleString = [].toLocaleString; // iOS Safari 6.x fails here\n\nvar TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {\n  $toLocaleString.call(new Int8Array(1));\n});\nvar FORCED = fails(function () {\n  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();\n}) || !fails(function () {\n  Int8Array.prototype.toLocaleString.call([1, 2]);\n}); // `%TypedArray%.prototype.toLocaleString` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring\n\nexportTypedArrayMethod('toLocaleString', function toLocaleString() {\n  return apply($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this), arraySlice(arguments));\n}, FORCED);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.to-locale-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar exportTypedArrayMethod = (__webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\").exportTypedArrayMethod);\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar Uint8Array = global.Uint8Array;\nvar Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};\nvar arrayToString = [].toString;\nvar join = uncurryThis([].join);\n\nif (fails(function () {\n  arrayToString.call({});\n})) {\n  arrayToString = function toString() {\n    return join(this);\n  };\n}\n\nvar IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring\n\nexportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ \"./node_modules/core-js/internals/typed-array-constructor.js\"); // `Uint8Array` constructor\n// https://tc39.es/ecma262/#sec-typedarray-objects\n\n\ncreateTypedArrayConstructor('Uint8', function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/es.typed-array.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\n\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\n\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar handlePrototype = function (CollectionPrototype) {\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  if (DOMIterables[COLLECTION_NAME]) {\n    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);\n  }\n}\n\nhandlePrototype(DOMTokenListPrototype);\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\n\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\n\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nvar handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);\n}\n\nhandlePrototype(DOMTokenListPrototype, 'DOMTokenList');\n\n//# sourceURL=webpack://videos/./node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\n\nfunction isObjectObject(o) {\n  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';\n}\n\nmodule.exports = function isPlainObject(o) {\n  var ctor, prot;\n  if (isObjectObject(o) === false) return false; // If has modified constructor\n\n  ctor = o.constructor;\n  if (typeof ctor !== 'function') return false; // If has modified prototype\n\n  prot = ctor.prototype;\n  if (isObjectObject(prot) === false) return false; // If constructor does not have an Object-specific method\n\n  if (prot.hasOwnProperty('isPrototypeOf') === false) {\n    return false;\n  } // Most likely a plain Object\n\n\n  return true;\n};\n\n//# sourceURL=webpack://videos/./node_modules/is-plain-object/index.js?");

/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/*!\n * isobject <https://github.com/jonschlinkert/isobject>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\nvar _typeof = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\n\nmodule.exports = function isObject(val) {\n  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;\n};\n\n//# sourceURL=webpack://videos/./node_modules/isobject/index.js?");

/***/ }),

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var _typeof = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n\n__webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ \"./node_modules/core-js/modules/es.regexp.dot-all.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ \"./node_modules/core-js/modules/es.regexp.sticky.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.flags.js */ \"./node_modules/core-js/modules/es.regexp.flags.js\");\n\nvar toString = Object.prototype.toString;\n\nmodule.exports = function kindOf(val) {\n  if (val === void 0) return 'undefined';\n  if (val === null) return 'null';\n\n  var type = _typeof(val);\n\n  if (type === 'boolean') return 'boolean';\n  if (type === 'string') return 'string';\n  if (type === 'number') return 'number';\n  if (type === 'symbol') return 'symbol';\n\n  if (type === 'function') {\n    return isGeneratorFn(val) ? 'generatorfunction' : 'function';\n  }\n\n  if (isArray(val)) return 'array';\n  if (isBuffer(val)) return 'buffer';\n  if (isArguments(val)) return 'arguments';\n  if (isDate(val)) return 'date';\n  if (isError(val)) return 'error';\n  if (isRegexp(val)) return 'regexp';\n\n  switch (ctorName(val)) {\n    case 'Symbol':\n      return 'symbol';\n\n    case 'Promise':\n      return 'promise';\n    // Set, Map, WeakSet, WeakMap\n\n    case 'WeakMap':\n      return 'weakmap';\n\n    case 'WeakSet':\n      return 'weakset';\n\n    case 'Map':\n      return 'map';\n\n    case 'Set':\n      return 'set';\n    // 8-bit typed arrays\n\n    case 'Int8Array':\n      return 'int8array';\n\n    case 'Uint8Array':\n      return 'uint8array';\n\n    case 'Uint8ClampedArray':\n      return 'uint8clampedarray';\n    // 16-bit typed arrays\n\n    case 'Int16Array':\n      return 'int16array';\n\n    case 'Uint16Array':\n      return 'uint16array';\n    // 32-bit typed arrays\n\n    case 'Int32Array':\n      return 'int32array';\n\n    case 'Uint32Array':\n      return 'uint32array';\n\n    case 'Float32Array':\n      return 'float32array';\n\n    case 'Float64Array':\n      return 'float64array';\n  }\n\n  if (isGeneratorObj(val)) {\n    return 'generator';\n  } // Non-plain objects\n\n\n  type = toString.call(val);\n\n  switch (type) {\n    case '[object Object]':\n      return 'object';\n    // iterators\n\n    case '[object Map Iterator]':\n      return 'mapiterator';\n\n    case '[object Set Iterator]':\n      return 'setiterator';\n\n    case '[object String Iterator]':\n      return 'stringiterator';\n\n    case '[object Array Iterator]':\n      return 'arrayiterator';\n  } // other\n\n\n  return type.slice(8, -1).toLowerCase().replace(/\\s/g, '');\n};\n\nfunction ctorName(val) {\n  return typeof val.constructor === 'function' ? val.constructor.name : null;\n}\n\nfunction isArray(val) {\n  if (Array.isArray) return Array.isArray(val);\n  return val instanceof Array;\n}\n\nfunction isError(val) {\n  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';\n}\n\nfunction isDate(val) {\n  if (val instanceof Date) return true;\n  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';\n}\n\nfunction isRegexp(val) {\n  if (val instanceof RegExp) return true;\n  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';\n}\n\nfunction isGeneratorFn(name, val) {\n  return ctorName(name) === 'GeneratorFunction';\n}\n\nfunction isGeneratorObj(val) {\n  return typeof val.throw === 'function' && typeof val.return === 'function' && typeof val.next === 'function';\n}\n\nfunction isArguments(val) {\n  try {\n    if (typeof val.length === 'number' && typeof val.callee === 'function') {\n      return true;\n    }\n  } catch (err) {\n    if (err.message.indexOf('callee') !== -1) {\n      return true;\n    }\n  }\n\n  return false;\n}\n/**\n * If you need to support Safari 5-7 (8-10 yr-old browser),\n * take a look at https://github.com/feross/is-buffer\n */\n\n\nfunction isBuffer(val) {\n  if (val.constructor && typeof val.constructor.isBuffer === 'function') {\n    return val.constructor.isBuffer(val);\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack://videos/./node_modules/kind-of/index.js?");

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var _typeof = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.test.js */ \"./node_modules/core-js/modules/es.regexp.test.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n\n/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n/** Used as references for various `Number` constants. */\n\nvar NAN = 0 / 0;\n/** `Object#toString` result references. */\n\nvar symbolTag = '[object Symbol]';\n/** Used to match leading and trailing whitespace. */\n\nvar reTrim = /^\\s+|\\s+$/g;\n/** Used to detect bad signed hexadecimal string values. */\n\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n/** Used to detect binary string values. */\n\nvar reIsBinary = /^0b[01]+$/i;\n/** Used to detect octal string values. */\n\nvar reIsOctal = /^0o[0-7]+$/i;\n/** Built-in method references without a dependency on `root`. */\n\nvar freeParseInt = parseInt;\n/** Detect free variable `global` from Node.js. */\n\nvar freeGlobal = (typeof __webpack_require__.g === \"undefined\" ? \"undefined\" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n/** Detect free variable `self`. */\n\nvar freeSelf = (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) == 'object' && self && self.Object === Object && self;\n/** Used as a reference to the global object. */\n\nvar root = freeGlobal || freeSelf || Function('return this')();\n/** Used for built-in method references. */\n\nvar objectProto = Object.prototype;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar objectToString = objectProto.toString;\n/* Built-in method references for those with the same name as other `lodash` methods. */\n\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\n\nvar now = function now() {\n  return root.Date.now();\n};\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\n\n\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n\n  wait = toNumber(wait) || 0;\n\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time; // Start the timer for the trailing edge.\n\n    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.\n\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        result = wait - timeSinceLastCall;\n    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n\n    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;\n  }\n\n  function timerExpired() {\n    var time = now();\n\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    } // Restart the timer.\n\n\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n\n    return result;\n  }\n\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\n\n\nfunction isObject(value) {\n  var type = _typeof(value);\n\n  return !!value && (type == 'object' || type == 'function');\n}\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\n\n\nfunction isObjectLike(value) {\n  return !!value && _typeof(value) == 'object';\n}\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\n\n\nfunction isSymbol(value) {\n  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;\n}\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\n\n\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n\n  if (isSymbol(value)) {\n    return NAN;\n  }\n\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? other + '' : other;\n  }\n\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;\n}\n\nmodule.exports = debounce;\n\n//# sourceURL=webpack://videos/./node_modules/lodash.debounce/index.js?");

/***/ }),

/***/ "./node_modules/shallow-clone/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/*!\n * shallow-clone <https://github.com/jonschlinkert/shallow-clone>\n *\n * Copyright (c) 2015-present, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n\n__webpack_require__(/*! core-js/modules/es.map.js */ \"./node_modules/core-js/modules/es.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.set.js */ \"./node_modules/core-js/modules/es.set.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.flags.js */ \"./node_modules/core-js/modules/es.regexp.flags.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\n__webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ \"./node_modules/core-js/modules/es.array-buffer.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ \"./node_modules/core-js/modules/es.typed-array.uint8-array.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ \"./node_modules/core-js/modules/es.typed-array.at.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ \"./node_modules/core-js/modules/es.typed-array.copy-within.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.every.js */ \"./node_modules/core-js/modules/es.typed-array.every.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ \"./node_modules/core-js/modules/es.typed-array.fill.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ \"./node_modules/core-js/modules/es.typed-array.filter.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.find.js */ \"./node_modules/core-js/modules/es.typed-array.find.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ \"./node_modules/core-js/modules/es.typed-array.find-index.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ \"./node_modules/core-js/modules/es.typed-array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ \"./node_modules/core-js/modules/es.typed-array.includes.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ \"./node_modules/core-js/modules/es.typed-array.index-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ \"./node_modules/core-js/modules/es.typed-array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.join.js */ \"./node_modules/core-js/modules/es.typed-array.join.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ \"./node_modules/core-js/modules/es.typed-array.last-index-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.map.js */ \"./node_modules/core-js/modules/es.typed-array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ \"./node_modules/core-js/modules/es.typed-array.reduce.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ \"./node_modules/core-js/modules/es.typed-array.reduce-right.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ \"./node_modules/core-js/modules/es.typed-array.reverse.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ \"./node_modules/core-js/modules/es.typed-array.set.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ \"./node_modules/core-js/modules/es.typed-array.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.some.js */ \"./node_modules/core-js/modules/es.typed-array.some.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ \"./node_modules/core-js/modules/es.typed-array.sort.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ \"./node_modules/core-js/modules/es.typed-array.subarray.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ \"./node_modules/core-js/modules/es.typed-array.to-locale-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ \"./node_modules/core-js/modules/es.typed-array.to-string.js\");\n\nvar valueOf = Symbol.prototype.valueOf;\n\nvar typeOf = __webpack_require__(/*! kind-of */ \"./node_modules/kind-of/index.js\");\n\nfunction clone(val, deep) {\n  switch (typeOf(val)) {\n    case 'array':\n      return val.slice();\n\n    case 'object':\n      return Object.assign({}, val);\n\n    case 'date':\n      return new val.constructor(Number(val));\n\n    case 'map':\n      return new Map(val);\n\n    case 'set':\n      return new Set(val);\n\n    case 'buffer':\n      return cloneBuffer(val);\n\n    case 'symbol':\n      return cloneSymbol(val);\n\n    case 'arraybuffer':\n      return cloneArrayBuffer(val);\n\n    case 'float32array':\n    case 'float64array':\n    case 'int16array':\n    case 'int32array':\n    case 'int8array':\n    case 'uint16array':\n    case 'uint32array':\n    case 'uint8clampedarray':\n    case 'uint8array':\n      return cloneTypedArray(val);\n\n    case 'regexp':\n      return cloneRegExp(val);\n\n    case 'error':\n      return Object.create(val);\n\n    default:\n      {\n        return val;\n      }\n  }\n}\n\nfunction cloneRegExp(val) {\n  var flags = val.flags !== void 0 ? val.flags : /\\w+$/.exec(val) || void 0;\n  var re = new val.constructor(val.source, flags);\n  re.lastIndex = val.lastIndex;\n  return re;\n}\n\nfunction cloneArrayBuffer(val) {\n  var res = new val.constructor(val.byteLength);\n  new Uint8Array(res).set(new Uint8Array(val));\n  return res;\n}\n\nfunction cloneTypedArray(val, deep) {\n  return new val.constructor(val.buffer, val.byteOffset, val.length);\n}\n\nfunction cloneBuffer(val) {\n  var len = val.length;\n  var buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);\n  val.copy(buf);\n  return buf;\n}\n\nfunction cloneSymbol(val) {\n  return valueOf ? Object(valueOf.call(val)) : {};\n}\n/**\n * Expose `clone`\n */\n\n\nmodule.exports = clone;\n\n//# sourceURL=webpack://videos/./node_modules/shallow-clone/index.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Explorer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Explorer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sidebar */ \"./src/web/assets/videos/src/js/components/Sidebar.vue\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Search */ \"./src/web/assets/videos/src/js/components/Search.vue\");\n/* harmony import */ var _components_Videos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Videos */ \"./src/web/assets/videos/src/js/components/Videos.vue\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VideosApp',\n  components: {\n    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Search: _components_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Videos: _components_Videos__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      loading: false,\n      loadingMore: false\n    };\n  },\n  computed: (0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({\n    gateways: function gateways(state) {\n      return state.gateways;\n    },\n    videos: function videos(state) {\n      return state.videos;\n    },\n    videosGateway: function videosGateway(state) {\n      return state.videosGateway;\n    },\n    videosMethod: function videosMethod(state) {\n      return state.videosMethod;\n    },\n    videosOptions: function videosOptions(state) {\n      return state.videosOptions;\n    },\n    videosMoreToken: function videosMoreToken(state) {\n      return state.videosMoreToken;\n    },\n    videosLoading: function videosLoading(state) {\n      return state.videosLoading;\n    }\n  })),\n  mounted: function mounted() {\n    var _this = this;\n\n    this.loading = true;\n    this.$store.dispatch('getGateways').then(function () {\n      _this.loading = false;\n\n      if (_this.gateways.length > 0) {\n        var currentGateway = _this.gateways[0];\n\n        _this.$store.commit('updateCurrentGatewayHandle', currentGateway.handle);\n\n        var collection = currentGateway.sections[0].collections[0];\n\n        var selectedCollection = _this.getCollectionUniqueKey(currentGateway.handle, 0, 0);\n\n        _this.$store.commit('updateSelectedCollection', selectedCollection);\n\n        _this.$store.commit('updateVideosLoading', true);\n\n        _this.$store.dispatch('getVideos', {\n          gateway: currentGateway.handle,\n          method: collection.method,\n          options: collection.options\n        }).then(function () {\n          _this.$store.commit('updateVideosLoading', false);\n        }).catch(function () {\n          _this.$store.commit('updateVideosLoading', false);\n\n          _this.$store.dispatch('displayError', 'Couldn’t get videos.');\n        });\n      }\n    });\n  },\n  methods: {\n    loadMore: function loadMore() {\n      var _this2 = this;\n\n      if (this.loadingMore) {\n        return;\n      }\n\n      var options = this.videosOptions ? JSON.parse(JSON.stringify(this.videosOptions)) : {};\n      options.moreToken = this.videosMoreToken;\n      this.loadingMore = true;\n      this.$store.dispatch('getVideos', {\n        gateway: this.videosGateway,\n        method: this.videosMethod,\n        options: options,\n        append: true\n      }).then(function () {\n        _this2.loadingMore = false;\n      }).catch(function () {\n        _this2.$store.dispatch('displayError', 'Couldn’t get videos.');\n\n        _this2.loadingMore = false;\n      });\n    },\n    onScroll: function onScroll() {\n      this.maybeLoadMore();\n    },\n    maybeLoadMore: function maybeLoadMore() {\n      if (!this.videosMoreToken) {\n        return false;\n      }\n\n      if (!this.canLoadMore()) {\n        return false;\n      }\n\n      this.loadMore();\n    },\n    canLoadMore: function canLoadMore() {\n      var scrollHeight = this.$refs.main.scrollHeight,\n          scrollTop = this.$refs.main.scrollTop,\n          height = this.$refs.main.clientHeight;\n      return scrollHeight - scrollTop <= height + 15;\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Explorer.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/videos */ \"./src/web/assets/videos/src/js/api/videos.js\");\n/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Preview */ \"./src/web/assets/videos/src/js/components/Preview.vue\");\n/* global VideoExplorerConstructor */\n\n/* global VideoSelectorActionsConstructor */\n\n/* global VideoPlayerConstructor */\n\n/* global Garnish */\n\n/* global $ */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Preview: _components_Preview__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      eventBus: new (vue__WEBPACK_IMPORTED_MODULE_0___default())(),\n      previewVideo: null,\n      previewLoading: false,\n      previewError: null,\n      videoSelectorModal: null,\n      playerModal: null,\n      fieldVariables: null\n    };\n  },\n  computed: {\n    videoUrl: {\n      get: function get() {\n        return this.$store.state.videoUrl;\n      },\n      set: function set(value) {\n        this.$store.commit('updateVideoUrl', value);\n      }\n    },\n    inputName: function inputName() {\n      if (!this.fieldVariables) {\n        return null;\n      }\n\n      return this.fieldVariables.namespaceName;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    // Use selected video\n    this.eventBus.$on('useSelectedVideo', function () {\n      _this.videoSelectorModal.hide();\n\n      _this.preview();\n    }); // Use selected video\n\n    this.eventBus.$on('cancel', function () {\n      _this.videoSelectorModal.hide();\n    }); // Play video\n\n    this.eventBus.$on('playVideo', function (_ref) {\n      var video = _ref.video;\n\n      if (_this.videoSelectorModal) {\n        _this.videoSelectorModal.hide();\n      }\n\n      var $playerModal = $('<div class=\"videos-player-modal modal\"></div>').appendTo(Garnish.$bod);\n      var options = {\n        data: function data() {\n          return {\n            eventBus: this.eventBus,\n            video: video\n          };\n        }\n      };\n      _this.playerModal = new VideoPlayerConstructor(options).$mount($playerModal.get(0));\n\n      _this.playerModal.$children[0].$on('hide', function () {\n        if (_this.videoSelectorModal) {\n          _this.videoSelectorModal.show();\n        }\n\n        _this.playerModal.$destroy();\n\n        _this.playerModal = null;\n      });\n    }); // Field variables\n\n    if (this.$root.fieldVariables) {\n      this.fieldVariables = this.$root.fieldVariables;\n\n      if (this.fieldVariables.value) {\n        this.$store.commit('updateVideoUrl', this.fieldVariables.value.url);\n        this.previewVideo = this.fieldVariables.value;\n      }\n    }\n  },\n  methods: {\n    browse: function browse() {\n      var _this2 = this;\n\n      // Initialize a Garnish modal\n      var $videoSelectorModal = $('<div class=\"videoselectormodal modal elementselectormodal\"></div>').appendTo(Garnish.$bod);\n      var $explorerContainer = $('<div class=\"new-explorer-container\"/>').appendTo($videoSelectorModal),\n          $footer = $('<div class=\"footer\"/>').appendTo($videoSelectorModal),\n          $selectorActions = $('<div/>').appendTo($footer);\n      this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {\n        visible: false,\n        resizable: false\n      }); // Mount the explorer app and the video selector actions\n\n      this.$nextTick(function () {\n        var options = {\n          store: _this2.$store,\n          data: {\n            eventBus: _this2.eventBus\n          }\n        };\n        new VideoExplorerConstructor(options).$mount($explorerContainer.get(0));\n        new VideoSelectorActionsConstructor(options).$mount($selectorActions.get(0));\n      });\n    },\n    preview: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n      var _this3 = this;\n\n      if (!this.videoUrl) {\n        this.previewLoading = false;\n        this.previewVideo = null;\n        this.previewError = null;\n        return null;\n      }\n\n      this.previewLoading = true;\n      this.previewError = null;\n      _api_videos__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getVideo(this.videoUrl).then(function (response) {\n        _this3.previewLoading = false;\n\n        if (response.data.error) {\n          _this3.previewVideo = null;\n          _this3.previewError = response.data.error;\n        } else {\n          _this3.previewVideo = response.data;\n        }\n      });\n    }, 1000),\n    playVideo: function playVideo(video) {\n      this.eventBus.$emit('playVideo', {\n        video: video\n      });\n    },\n    removeVideo: function removeVideo() {\n      this.videoUrl = null;\n      this.previewVideo = null;\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Field.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_videos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/videos */ \"./src/web/assets/videos/src/js/api/videos.js\");\n/* eslint-disable vue/no-v-html */\n\n/* global Garnish */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      modal: null,\n      embed: null\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var video = this.$root.video;\n    _api_videos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getVideoEmbedHtml(video).then(function (response) {\n      _this.embed = response.data.html;\n    });\n    this.modal = new Garnish.Modal(this.$refs.modal, {\n      resizable: false,\n      onHide: function () {\n        this.$emit('hide');\n      }.bind(this)\n    });\n  },\n  destroyed: function destroyed() {\n    this.modal.$shade[0].remove();\n    this.$el.remove();\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {\n    hasSelectedVideo: function hasSelectedVideo() {\n      return this.$store.state.selectedVideo;\n    }\n  },\n  methods: (0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['updateVideoUrlWithSelectedVideo'])), {}, {\n    useSelectedVideo: function useSelectedVideo() {\n      this.updateVideoUrlWithSelectedVideo();\n      this.$root.eventBus.$emit('useSelectedVideo');\n    },\n    cancel: function cancel() {\n      this.$root.eventBus.$emit('cancel');\n    }\n  })\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/SelectorActions.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Preview.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Preview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Thumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thumb */ \"./src/web/assets/videos/src/js/components/Thumb.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Thumb: _Thumb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    previewVideo: {\n      type: Object,\n      default: null\n    },\n    previewError: {\n      type: String,\n      default: ''\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Preview.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ \"./node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      query: ''\n    };\n  },\n  computed: (0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['currentGateway'])), {}, {\n    debouncedSearch: function debouncedSearch() {\n      var _this = this;\n\n      return lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {\n        _this.search();\n      }, 1000);\n    }\n  }),\n  methods: {\n    search: function search() {\n      var _this2 = this;\n\n      this.debouncedSearch.cancel();\n      this.$store.commit('updateSelectedCollection', null);\n      this.$store.commit('updateVideosLoading', true);\n      this.$store.dispatch('getVideos', {\n        gateway: this.currentGateway.handle,\n        method: 'search',\n        options: {\n          q: this.query\n        }\n      }).then(function () {\n        _this2.$store.commit('updateVideosLoading', false);\n      }).catch(function () {\n        _this2.$store.commit('updateVideosLoading', false);\n\n        _this2.$store.dispatch('displayError', 'Couldn’t get videos.');\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Search.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_ThumbUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/ThumbUp */ \"./src/web/assets/videos/src/icons/ThumbUp.vue\");\n/* harmony import */ var _icons_Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/Folder */ \"./src/web/assets/videos/src/icons/Folder.vue\");\n/* harmony import */ var _icons_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/Layout */ \"./src/web/assets/videos/src/icons/Layout.vue\");\n/* harmony import */ var _icons_VideoCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/VideoCamera */ \"./src/web/assets/videos/src/icons/VideoCamera.vue\");\n/* harmony import */ var _icons_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/icons/List */ \"./src/web/assets/videos/src/icons/List.vue\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ThumbUp: _icons_ThumbUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Folder: _icons_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Layout: _icons_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    VideoCamera: _icons_VideoCamera__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    List: _icons_List__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  computed: (0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({\n    gateways: function gateways(state) {\n      return state.gateways;\n    },\n    selectedCollection: function selectedCollection(state) {\n      return state.selectedCollection;\n    }\n  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['currentGateway'])), {}, {\n    currentGatewayHandle: {\n      get: function get() {\n        return this.$store.state.currentGatewayHandle;\n      },\n      set: function set(value) {\n        this.$store.commit('updateCurrentGatewayHandle', value);\n      }\n    }\n  }),\n  methods: {\n    handleCollectionClick: function handleCollectionClick(sectionKey, collectionKey, collection) {\n      var _this = this;\n\n      var selectedCollection = this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey);\n      this.$store.commit('updateSelectedCollection', selectedCollection);\n      this.$store.commit('updateVideosLoading', true);\n      this.$store.dispatch('getVideos', {\n        gateway: this.currentGatewayHandle,\n        method: collection.method,\n        options: collection.options\n      }).then(function () {\n        _this.$store.commit('updateVideosLoading', false);\n      }).catch(function () {\n        _this.$store.commit('updateVideosLoading', false);\n\n        _this.$store.dispatch('displayError', 'Couldn’t get videos.');\n      });\n    },\n    isCollectionSelected: function isCollectionSelected(sectionKey, collectionKey) {\n      if (this.selectedCollection !== this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)) {\n        return false;\n      }\n\n      return true;\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    url: {\n      type: String,\n      default: null\n    },\n    duration: {\n      type: String,\n      default: null\n    },\n    selected: {\n      type: Boolean,\n      default: false\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Thumb.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumb */ \"./src/web/assets/videos/src/js/components/Thumb.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Thumb: _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: {\n    video: {\n      type: Object,\n      required: true\n    }\n  },\n  computed: {\n    isVideoSelected: function isVideoSelected() {\n      if (!this.$store.state.selectedVideo) {\n        return false;\n      }\n\n      return this.$store.state.selectedVideo.id === this.video.id;\n    }\n  },\n  methods: (0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['selectVideo', 'updateVideoUrlWithSelectedVideo'])), {}, {\n    play: function play(video) {\n      this.$root.eventBus.$emit('playVideo', {\n        video: video\n      });\n    },\n    useVideo: function useVideo(video) {\n      this.selectVideo(video);\n      this.updateVideoUrlWithSelectedVideo();\n      this.$root.eventBus.$emit('useSelectedVideo');\n    }\n  })\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/VideoCard.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Videos.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Videos.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoCard */ \"./src/web/assets/videos/src/js/components/VideoCard.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    VideoCard: _VideoCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    videos: {\n      type: Array,\n      required: true\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Videos.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ listToStyles; }\n/* harmony export */ });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles(parentId, list) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\n//# sourceURL=webpack://videos/./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/api/videos.js":
/*!****************************************************!*\
  !*** ./src/web/assets/videos/src/js/api/videos.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* global Craft */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getGateways: function getGateways() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(Craft.getActionUrl('videos/explorer/get-gateways'), {\n      headers: {\n        'X-CSRF-Token': Craft.csrfTokenValue\n      }\n    });\n  },\n  getVideos: function getVideos(gateway, method, options) {\n    var data = {\n      gateway: gateway,\n      method: method\n    };\n\n    if (options) {\n      data.options = options;\n    }\n\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(Craft.getActionUrl('videos/explorer/get-videos'), data, {\n      headers: {\n        'X-CSRF-Token': Craft.csrfTokenValue\n      }\n    });\n  },\n  getVideo: function getVideo(url) {\n    var data = {\n      url: url\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(Craft.getActionUrl('videos/explorer/get-video'), data, {\n      headers: {\n        'X-CSRF-Token': Craft.csrfTokenValue\n      }\n    });\n  },\n  getVideoEmbedHtml: function getVideoEmbedHtml(video) {\n    var data = {\n      gateway: video.gatewayHandle,\n      videoId: video.id\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(Craft.getActionUrl('videos/explorer/get-video-embed-html'), data, {\n      headers: {\n        'X-CSRF-Token': Craft.csrfTokenValue\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/api/videos.js?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/createStore.js":
/*!*****************************************************!*\
  !*** ./src/web/assets/videos/src/js/createStore.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone-deep */ \"./node_modules/clone-deep/index.js\");\n/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone_deep__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_storeOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/storeOptions */ \"./src/web/assets/videos/src/js/storeOptions.js\");\n/**\n * Create Store\n * https://forum.vuejs.org/t/this-store-undefined-in-manually-mounted-vue-component/8756\n */\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default().use((vuex__WEBPACK_IMPORTED_MODULE_1___default()));\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return new (vuex__WEBPACK_IMPORTED_MODULE_1___default().Store)(clone_deep__WEBPACK_IMPORTED_MODULE_2___default()(_js_storeOptions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/createStore.js?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/mixins/utils.js":
/*!******************************************************!*\
  !*** ./src/web/assets/videos/src/js/mixins/utils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global Craft */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  methods: {\n    getCollectionUniqueKey: function getCollectionUniqueKey(gateway, sectionKey, collectionKey) {\n      return gateway + ':' + sectionKey + ':' + collectionKey;\n    },\n    t: function t(category, message, params) {\n      return Craft.t(category, message, params);\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/mixins/utils.js?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/storeOptions.js":
/*!******************************************************!*\
  !*** ./src/web/assets/videos/src/js/storeOptions.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_api_videos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/api/videos */ \"./src/web/assets/videos/src/js/api/videos.js\");\n\n\n\n\n\n/* global Craft */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  strict: true,\n  state: {\n    currentGatewayHandle: null,\n    gateways: [],\n    playingVideo: null,\n    selectedCollection: null,\n    selectedVideo: null,\n    videoUrl: null,\n    videos: [],\n    videosGateway: null,\n    videosLoading: false,\n    videosMethod: null,\n    videosMoreToken: null,\n    videosOptions: null\n  },\n  getters: {\n    currentGateway: function currentGateway(state) {\n      if (!state) {\n        return null;\n      }\n\n      return state.gateways.find(function (g) {\n        return g.handle === state.currentGatewayHandle;\n      });\n    }\n  },\n  actions: {\n    displayError: function displayError(context, msg) {\n      Craft.cp.displayError(msg);\n    },\n    displayNotice: function displayNotice(context, msg) {\n      Craft.cp.displayNotice(msg);\n    },\n    getGateways: function getGateways(_ref) {\n      var commit = _ref.commit;\n      return _js_api_videos__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getGateways().then(function (response) {\n        commit('updateGateways', response);\n      });\n    },\n    getVideos: function getVideos(_ref2, _ref3) {\n      var commit = _ref2.commit,\n          state = _ref2.state;\n      var gateway = _ref3.gateway,\n          method = _ref3.method,\n          options = _ref3.options,\n          append = _ref3.append;\n      return _js_api_videos__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getVideos(gateway, method, options).then(function (response) {\n        var videos;\n\n        if (append === true) {\n          videos = [].concat((0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.videos), (0,_Users_ben_Sites_plugindev_cms_v4_repos_videos_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data.videos));\n        } else {\n          videos = response.data.videos;\n        }\n\n        commit('updateVideos', {\n          videos: videos,\n          videosGateway: gateway,\n          videosMethod: method,\n          videosOptions: options,\n          videosMoreToken: response.data.moreToken\n        });\n      }).catch(function (error) {\n        commit('updateVideos', {\n          videos: [],\n          videosMoreToken: null\n        });\n        throw error;\n      });\n    },\n    selectVideo: function selectVideo(_ref4, video) {\n      var commit = _ref4.commit;\n      commit('updateSelectedVideo', video);\n    },\n    updateVideoUrlWithSelectedVideo: function updateVideoUrlWithSelectedVideo(_ref5) {\n      var commit = _ref5.commit,\n          state = _ref5.state;\n\n      if (!state.selectedVideo) {\n        return false;\n      }\n\n      commit('updateVideoUrl', state.selectedVideo.url);\n    }\n  },\n  mutations: {\n    updateCurrentGatewayHandle: function updateCurrentGatewayHandle(state, handle) {\n      state.currentGatewayHandle = handle;\n    },\n    updateGateways: function updateGateways(state, response) {\n      state.gateways = response.data;\n    },\n    updatePlayingVideo: function updatePlayingVideo(state, playingVideo) {\n      state.playingVideo = playingVideo;\n    },\n    updateSelectedCollection: function updateSelectedCollection(state, selectedCollection) {\n      state.selectedCollection = selectedCollection;\n    },\n    updateSelectedVideo: function updateSelectedVideo(state, selectedVideo) {\n      state.selectedVideo = selectedVideo;\n    },\n    updateVideos: function updateVideos(state, _ref6) {\n      var videos = _ref6.videos,\n          videosGateway = _ref6.videosGateway,\n          videosMethod = _ref6.videosMethod,\n          videosOptions = _ref6.videosOptions,\n          videosMoreToken = _ref6.videosMoreToken;\n      state.videos = videos;\n      state.videosGateway = videosGateway;\n      state.videosMethod = videosMethod;\n      state.videosOptions = videosOptions;\n      state.videosMoreToken = videosMoreToken;\n    },\n    updateVideosLoading: function updateVideosLoading(state, loading) {\n      state.videosLoading = loading;\n    },\n    updateVideoUrl: function updateVideoUrl(state, videoUrl) {\n      state.videoUrl = videoUrl;\n    }\n  }\n});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/storeOptions.js?");

/***/ }),

/***/ "./src/web/assets/videos/src/main.js":
/*!*******************************************!*\
  !*** ./src/web/assets/videos/src/main.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_mixins_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/utils */ \"./src/web/assets/videos/src/js/mixins/utils.js\");\n/* harmony import */ var _js_createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/createStore */ \"./src/web/assets/videos/src/js/createStore.js\");\n/* harmony import */ var _js_Explorer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/Explorer.vue */ \"./src/web/assets/videos/src/js/Explorer.vue\");\n/* harmony import */ var _js_Player_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/Player.vue */ \"./src/web/assets/videos/src/js/Player.vue\");\n/* harmony import */ var _js_Field_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/Field.vue */ \"./src/web/assets/videos/src/js/Field.vue\");\n/* harmony import */ var _js_SelectorActions_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/SelectorActions.vue */ \"./src/web/assets/videos/src/js/SelectorActions.vue\");\n/* harmony import */ var _css_videos_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/videos.pcss */ \"./src/web/assets/videos/src/css/videos.pcss\");\n/* harmony import */ var _css_videos_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_videos_pcss__WEBPACK_IMPORTED_MODULE_7__);\n/* eslint-disable vue/one-component-per-file */\n\n\n\n\n\n\n\n(vue__WEBPACK_IMPORTED_MODULE_0___default().config.productionTip) = false;\nvue__WEBPACK_IMPORTED_MODULE_0___default().mixin(_js_mixins_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nwindow.VideoExplorerConstructor = vue__WEBPACK_IMPORTED_MODULE_0___default().extend({\n  render: function render(h) {\n    return h(_js_Explorer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  },\n  store: (0,_js_createStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n});\nwindow.VideoFieldConstructor = vue__WEBPACK_IMPORTED_MODULE_0___default().extend({\n  created: function created() {\n    this.$store = (0,_js_createStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  },\n  render: function render(h) {\n    return h(_js_Field_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n});\nwindow.VideoSelectorActionsConstructor = vue__WEBPACK_IMPORTED_MODULE_0___default().extend({\n  render: function render(h) {\n    return h(_js_SelectorActions_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  }\n});\nwindow.VideoPlayerConstructor = vue__WEBPACK_IMPORTED_MODULE_0___default().extend({\n  render: function render(h) {\n    return h(_js_Player_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  }\n});\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/main.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./src/web/assets/videos/src/css/videos.pcss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./src/web/assets/videos/src/css/videos.pcss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/css/videos.pcss?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B3%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B3%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/Folder.vue":
/*!****************************************************!*\
  !*** ./src/web/assets/videos/src/icons/Folder.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Folder_vue_vue_type_template_id_448107e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Folder.vue?vue&type=template&id=448107e4& */ \"./src/web/assets/videos/src/icons/Folder.vue?vue&type=template&id=448107e4&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _Folder_vue_vue_type_template_id_448107e4___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Folder_vue_vue_type_template_id_448107e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/Folder.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/Layout.vue":
/*!****************************************************!*\
  !*** ./src/web/assets/videos/src/icons/Layout.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Layout_vue_vue_type_template_id_9692618c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=9692618c& */ \"./src/web/assets/videos/src/icons/Layout.vue?vue&type=template&id=9692618c&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _Layout_vue_vue_type_template_id_9692618c___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Layout_vue_vue_type_template_id_9692618c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/Layout.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/List.vue":
/*!**************************************************!*\
  !*** ./src/web/assets/videos/src/icons/List.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List_vue_vue_type_template_id_79386687___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=79386687& */ \"./src/web/assets/videos/src/icons/List.vue?vue&type=template&id=79386687&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _List_vue_vue_type_template_id_79386687___WEBPACK_IMPORTED_MODULE_0__.render,\n  _List_vue_vue_type_template_id_79386687___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/List.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/ThumbUp.vue":
/*!*****************************************************!*\
  !*** ./src/web/assets/videos/src/icons/ThumbUp.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ThumbUp_vue_vue_type_template_id_6fd6ed8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbUp.vue?vue&type=template&id=6fd6ed8e& */ \"./src/web/assets/videos/src/icons/ThumbUp.vue?vue&type=template&id=6fd6ed8e&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _ThumbUp_vue_vue_type_template_id_6fd6ed8e___WEBPACK_IMPORTED_MODULE_0__.render,\n  _ThumbUp_vue_vue_type_template_id_6fd6ed8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/ThumbUp.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/VideoCamera.vue":
/*!*********************************************************!*\
  !*** ./src/web/assets/videos/src/icons/VideoCamera.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VideoCamera_vue_vue_type_template_id_0d7de1f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoCamera.vue?vue&type=template&id=0d7de1f7& */ \"./src/web/assets/videos/src/icons/VideoCamera.vue?vue&type=template&id=0d7de1f7&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _VideoCamera_vue_vue_type_template_id_0d7de1f7___WEBPACK_IMPORTED_MODULE_0__.render,\n  _VideoCamera_vue_vue_type_template_id_0d7de1f7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/VideoCamera.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Explorer.vue":
/*!***************************************************!*\
  !*** ./src/web/assets/videos/src/js/Explorer.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Explorer_vue_vue_type_template_id_136210d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Explorer.vue?vue&type=template&id=136210d3& */ \"./src/web/assets/videos/src/js/Explorer.vue?vue&type=template&id=136210d3&\");\n/* harmony import */ var _Explorer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Explorer.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/Explorer.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Explorer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Explorer_vue_vue_type_template_id_136210d3___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Explorer_vue_vue_type_template_id_136210d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Explorer.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Field.vue":
/*!************************************************!*\
  !*** ./src/web/assets/videos/src/js/Field.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Field_vue_vue_type_template_id_9c0800f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=9c0800f0& */ \"./src/web/assets/videos/src/js/Field.vue?vue&type=template&id=9c0800f0&\");\n/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/Field.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Field_vue_vue_type_template_id_9c0800f0___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Field_vue_vue_type_template_id_9c0800f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Field.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Player.vue":
/*!*************************************************!*\
  !*** ./src/web/assets/videos/src/js/Player.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_vue_vue_type_template_id_a24f7c8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=a24f7c8a& */ \"./src/web/assets/videos/src/js/Player.vue?vue&type=template&id=a24f7c8a&\");\n/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/Player.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.vue?vue&type=style&index=0&lang=css& */ \"./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Player_vue_vue_type_template_id_a24f7c8a___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Player_vue_vue_type_template_id_a24f7c8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/SelectorActions.vue":
/*!**********************************************************!*\
  !*** ./src/web/assets/videos/src/js/SelectorActions.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SelectorActions_vue_vue_type_template_id_5cb3a125___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorActions.vue?vue&type=template&id=5cb3a125& */ \"./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=template&id=5cb3a125&\");\n/* harmony import */ var _SelectorActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectorActions.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SelectorActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SelectorActions_vue_vue_type_template_id_5cb3a125___WEBPACK_IMPORTED_MODULE_0__.render,\n  _SelectorActions_vue_vue_type_template_id_5cb3a125___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/SelectorActions.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Preview.vue":
/*!*************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Preview.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Preview_vue_vue_type_template_id_715bace8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=715bace8& */ \"./src/web/assets/videos/src/js/components/Preview.vue?vue&type=template&id=715bace8&\");\n/* harmony import */ var _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/components/Preview.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Preview_vue_vue_type_template_id_715bace8___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Preview_vue_vue_type_template_id_715bace8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Preview.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Search.vue":
/*!************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Search.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Search_vue_vue_type_template_id_3890eb83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=3890eb83& */ \"./src/web/assets/videos/src/js/components/Search.vue?vue&type=template&id=3890eb83&\");\n/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/components/Search.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Search_vue_vue_type_template_id_3890eb83___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Search_vue_vue_type_template_id_3890eb83___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Search.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Sidebar.vue":
/*!*************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Sidebar.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sidebar_vue_vue_type_template_id_52853fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=52853fc8&scoped=true& */ \"./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=template&id=52853fc8&scoped=true&\");\n/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_52853fc8_lang_pcss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true& */ \"./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Sidebar_vue_vue_type_template_id_52853fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Sidebar_vue_vue_type_template_id_52853fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"52853fc8\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Thumb.vue":
/*!***********************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Thumb.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Thumb_vue_vue_type_template_id_4085fce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thumb.vue?vue&type=template&id=4085fce0& */ \"./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=template&id=4085fce0&\");\n/* harmony import */ var _Thumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thumb.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Thumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Thumb_vue_vue_type_template_id_4085fce0___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Thumb_vue_vue_type_template_id_4085fce0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Thumb.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/VideoCard.vue":
/*!***************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/VideoCard.vue ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VideoCard_vue_vue_type_template_id_3b0bccee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoCard.vue?vue&type=template&id=3b0bccee& */ \"./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=template&id=3b0bccee&\");\n/* harmony import */ var _VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoCard.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VideoCard_vue_vue_type_template_id_3b0bccee___WEBPACK_IMPORTED_MODULE_0__.render,\n  _VideoCard_vue_vue_type_template_id_3b0bccee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/VideoCard.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Videos.vue":
/*!************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Videos.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Videos_vue_vue_type_template_id_03826c02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Videos.vue?vue&type=template&id=03826c02& */ \"./src/web/assets/videos/src/js/components/Videos.vue?vue&type=template&id=03826c02&\");\n/* harmony import */ var _Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Videos.vue?vue&type=script&lang=js& */ \"./src/web/assets/videos/src/js/components/Videos.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Videos_vue_vue_type_template_id_03826c02___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Videos_vue_vue_type_template_id_03826c02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Videos.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Explorer.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Explorer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explorer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Explorer.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Explorer.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explorer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Explorer.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Field.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Field.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Player.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Player.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Player.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectorActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectorActions.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectorActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/SelectorActions.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Preview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Preview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Preview.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Preview.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Search.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Search.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Thumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Thumb.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Thumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Thumb.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoCard.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/VideoCard.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Videos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Videos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Videos.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Videos.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Videos.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/Folder.vue?vue&type=template&id=448107e4&":
/*!***********************************************************************************!*\
  !*** ./src/web/assets/videos/src/icons/Folder.vue?vue&type=template&id=448107e4& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_template_id_448107e4___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_template_id_448107e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Folder_vue_vue_type_template_id_448107e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folder.vue?vue&type=template&id=448107e4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/Folder.vue?vue&type=template&id=448107e4&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/Folder.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/Layout.vue?vue&type=template&id=9692618c&":
/*!***********************************************************************************!*\
  !*** ./src/web/assets/videos/src/icons/Layout.vue?vue&type=template&id=9692618c& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_9692618c___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_9692618c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_9692618c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=9692618c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/Layout.vue?vue&type=template&id=9692618c&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/Layout.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/List.vue?vue&type=template&id=79386687&":
/*!*********************************************************************************!*\
  !*** ./src/web/assets/videos/src/icons/List.vue?vue&type=template&id=79386687& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_79386687___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_79386687___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_79386687___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=79386687& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/List.vue?vue&type=template&id=79386687&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/List.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/ThumbUp.vue?vue&type=template&id=6fd6ed8e&":
/*!************************************************************************************!*\
  !*** ./src/web/assets/videos/src/icons/ThumbUp.vue?vue&type=template&id=6fd6ed8e& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbUp_vue_vue_type_template_id_6fd6ed8e___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbUp_vue_vue_type_template_id_6fd6ed8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbUp_vue_vue_type_template_id_6fd6ed8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ThumbUp.vue?vue&type=template&id=6fd6ed8e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/ThumbUp.vue?vue&type=template&id=6fd6ed8e&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/ThumbUp.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/icons/VideoCamera.vue?vue&type=template&id=0d7de1f7&":
/*!****************************************************************************************!*\
  !*** ./src/web/assets/videos/src/icons/VideoCamera.vue?vue&type=template&id=0d7de1f7& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCamera_vue_vue_type_template_id_0d7de1f7___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCamera_vue_vue_type_template_id_0d7de1f7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCamera_vue_vue_type_template_id_0d7de1f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoCamera.vue?vue&type=template&id=0d7de1f7& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/VideoCamera.vue?vue&type=template&id=0d7de1f7&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/VideoCamera.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Explorer.vue?vue&type=template&id=136210d3&":
/*!**********************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Explorer.vue?vue&type=template&id=136210d3& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Explorer_vue_vue_type_template_id_136210d3___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Explorer_vue_vue_type_template_id_136210d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Explorer_vue_vue_type_template_id_136210d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Explorer.vue?vue&type=template&id=136210d3& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Explorer.vue?vue&type=template&id=136210d3&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Explorer.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Field.vue?vue&type=template&id=9c0800f0&":
/*!*******************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Field.vue?vue&type=template&id=9c0800f0& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_9c0800f0___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_9c0800f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_9c0800f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=9c0800f0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Field.vue?vue&type=template&id=9c0800f0&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Field.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Player.vue?vue&type=template&id=a24f7c8a&":
/*!********************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Player.vue?vue&type=template&id=a24f7c8a& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_a24f7c8a___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_a24f7c8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_a24f7c8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Player.vue?vue&type=template&id=a24f7c8a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=template&id=a24f7c8a&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=template&id=5cb3a125&":
/*!*****************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=template&id=5cb3a125& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectorActions_vue_vue_type_template_id_5cb3a125___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectorActions_vue_vue_type_template_id_5cb3a125___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectorActions_vue_vue_type_template_id_5cb3a125___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectorActions.vue?vue&type=template&id=5cb3a125& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=template&id=5cb3a125&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/SelectorActions.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Preview.vue?vue&type=template&id=715bace8&":
/*!********************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Preview.vue?vue&type=template&id=715bace8& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_715bace8___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_715bace8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_715bace8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=template&id=715bace8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Preview.vue?vue&type=template&id=715bace8&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Preview.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Search.vue?vue&type=template&id=3890eb83&":
/*!*******************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Search.vue?vue&type=template&id=3890eb83& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_3890eb83___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_3890eb83___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_3890eb83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Search.vue?vue&type=template&id=3890eb83& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Search.vue?vue&type=template&id=3890eb83&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Search.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=template&id=52853fc8&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=template&id=52853fc8&scoped=true& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_52853fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_52853fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_52853fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=52853fc8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=template&id=52853fc8&scoped=true&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=template&id=4085fce0&":
/*!******************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=template&id=4085fce0& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thumb_vue_vue_type_template_id_4085fce0___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thumb_vue_vue_type_template_id_4085fce0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thumb_vue_vue_type_template_id_4085fce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Thumb.vue?vue&type=template&id=4085fce0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=template&id=4085fce0&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Thumb.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=template&id=3b0bccee&":
/*!**********************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=template&id=3b0bccee& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_template_id_3b0bccee___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_template_id_3b0bccee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_template_id_3b0bccee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoCard.vue?vue&type=template&id=3b0bccee& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=template&id=3b0bccee&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/VideoCard.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Videos.vue?vue&type=template&id=03826c02&":
/*!*******************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Videos.vue?vue&type=template&id=03826c02& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_template_id_03826c02___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_template_id_03826c02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_template_id_03826c02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Videos.vue?vue&type=template&id=03826c02& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Videos.vue?vue&type=template&id=03826c02&\");\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Videos.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Player.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?");

/***/ }),

/***/ "./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_52853fc8_lang_pcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_52853fc8_lang_pcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_52853fc8_lang_pcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_52853fc8_lang_pcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_52853fc8_lang_pcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/Folder.vue?vue&type=template&id=448107e4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/Folder.vue?vue&type=template&id=448107e4& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:\"h-6 w-6\",attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"fill\":\"none\",\"viewBox\":\"0 0 24 24\",\"stroke\":\"currentColor\"}},[_c('path',{attrs:{\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",\"d\":\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"}})])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/Folder.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/Layout.vue?vue&type=template&id=9692618c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/Layout.vue?vue&type=template&id=9692618c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:\"h-6 w-6\",attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"fill\":\"none\",\"viewBox\":\"0 0 24 24\",\"stroke\":\"currentColor\"}},[_c('path',{attrs:{\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",\"d\":\"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z\"}})])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/Layout.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/List.vue?vue&type=template&id=79386687&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/List.vue?vue&type=template&id=79386687& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:\"h-6 w-6\",attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"fill\":\"none\",\"viewBox\":\"0 0 24 24\",\"stroke\":\"currentColor\"}},[_c('path',{attrs:{\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",\"d\":\"M4 6h16M4 10h16M4 14h16M4 18h16\"}})])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/List.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/ThumbUp.vue?vue&type=template&id=6fd6ed8e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/ThumbUp.vue?vue&type=template&id=6fd6ed8e& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:\"h-6 w-6\",attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"fill\":\"none\",\"viewBox\":\"0 0 24 24\",\"stroke\":\"currentColor\"}},[_c('path',{attrs:{\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",\"d\":\"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5\"}})])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/ThumbUp.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/VideoCamera.vue?vue&type=template&id=0d7de1f7&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/icons/VideoCamera.vue?vue&type=template&id=0d7de1f7& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:\"h-6 w-6\",attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"fill\":\"none\",\"viewBox\":\"0 0 24 24\",\"stroke\":\"currentColor\"}},[_c('path',{attrs:{\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",\"d\":\"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z\"}})])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/icons/VideoCamera.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Explorer.vue?vue&type=template&id=136210d3&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Explorer.vue?vue&type=template&id=136210d3& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"dv-h-full\",attrs:{\"id\":\"videos\"}},[_c('div',{staticClass:\"body\",class:{\n      'has-sidebar': !_vm.loading,\n      'dv-flex dv-justify-center': _vm.loading\n    }},[_c('div',{class:{\n        'content has-sidebar': !_vm.loading,\n        '': _vm.loading,\n      }},[(_vm.loading)?[_c('div',{staticClass:\"spinner\"})]:[_c('sidebar'),_vm._v(\" \"),_c('div',{ref:\"main\",staticClass:\"main\",on:{\"scroll\":_vm.onScroll}},[_c('search',{staticClass:\"dv-mb-6\"}),_vm._v(\" \"),(_vm.videosLoading)?[_c('div',{staticClass:\"spinner\"})]:[_c('videos',{attrs:{\"videos\":_vm.videos}}),_vm._v(\" \"),(_vm.videosMoreToken)?_c('div',[(!_vm.loadingMore)?[_c('button',{staticClass:\"btn\",on:{\"click\":function($event){return _vm.loadMore()}}},[_vm._v(\"\\n                  Load More\\n                \")])]:[_c('div',{staticClass:\"spinner\"})]],2):_vm._e()]],2)]],2)])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Explorer.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Field.vue?vue&type=template&id=9c0800f0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Field.vue?vue&type=template&id=9c0800f0& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"dv-relative\"},[_c('input',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.videoUrl),expression:\"videoUrl\"}],staticClass:\"text fullwidth\",attrs:{\"name\":_vm.inputName,\"placeholder\":_vm.t('videos', 'Enter a video URL from YouTube or Vimeo')},domProps:{\"value\":(_vm.videoUrl)},on:{\"input\":[function($event){if($event.target.composing){ return; }_vm.videoUrl=$event.target.value},function($event){return _vm.preview()}]}}),_vm._v(\" \"),_c('button',{staticClass:\"dv-absolute dv-top-2.5 dv-right-4 dv-text-xs dv-text-[#0b69a3] hover:dv-underline dv-cursor-pointer\",on:{\"click\":function($event){$event.preventDefault();return _vm.browse()}}},[_vm._v(\"\\n      \"+_vm._s(_vm.t('videos', 'Browse videos…'))+\"\\n    \")])]),_vm._v(\" \"),(_vm.previewLoading)?[_c('div',{staticClass:\"spinner dv-mt-2\"})]:[(_vm.previewError)?_c('div',{staticClass:\"dv-mt-4\"},[_c('ul',{staticClass:\"errors padded\"},[_c('li',[_vm._v(_vm._s(_vm.previewError))])])]):_vm._e(),_vm._v(\" \"),_c('preview',{staticClass:\"dv-mt-4\",attrs:{\"preview-video\":_vm.previewVideo,\"preview-error\":_vm.previewError},on:{\"playVideo\":_vm.playVideo,\"removeVideo\":function($event){return _vm.removeVideo()}}})]],2)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Field.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=template&id=a24f7c8a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=template&id=a24f7c8a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:\"modal\",staticClass:\"videos-player-modal modal\"},[_c('div',{staticClass:\"videos-player dv-bg-black dv-h-full\"},[_c('div',{domProps:{\"innerHTML\":_vm._s(_vm.embed)}})])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=template&id=5cb3a125&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/SelectorActions.vue?vue&type=template&id=5cb3a125& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"buttons dv-float-right\"},[_c('div',{staticClass:\"btn\",on:{\"click\":function($event){return _vm.cancel()}}},[_vm._v(\"\\n      \"+_vm._s(_vm.t('videos', 'Cancel'))+\"\\n    \")]),_vm._v(\" \"),_c('div',{staticClass:\"btn submit\",class:{disabled: !_vm.hasSelectedVideo},on:{\"click\":function($event){return _vm.useSelectedVideo()}}},[_vm._v(\"\\n      \"+_vm._s(_vm.t('videos', 'Select'))+\"\\n    \")])])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/SelectorActions.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Preview.vue?vue&type=template&id=715bace8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Preview.vue?vue&type=template&id=715bace8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.previewVideo)?_c('div',[(_vm.previewVideo.hasErrors)?[_c('ul',{staticClass:\"errors padded\"},[_vm._l((_vm.previewVideo.errors),function(errors,errorsKey){return [_vm._l((errors),function(error,errorKey){return [_c('li',{key:errorsKey +' :' + errorKey},[_vm._v(\"\\n            \"+_vm._s(error)+\"\\n          \")])]})]})],2)]:[_c('div',{staticClass:\"preview dv-flex dv-flex-nowrap dv-items-start\"},[_c('div',{staticClass:\"dv-shrink-0\"},[_c('thumb',{staticClass:\"dv-pt-0 dv-w-44\",attrs:{\"url\":_vm.previewVideo.thumbnail,\"duration\":_vm.previewVideo.duration},on:{\"playVideo\":function($event){return _vm.$emit('playVideo', _vm.previewVideo)}}})],1),_vm._v(\" \"),_c('div',{staticClass:\"dv-ml-2 dv-shrink dv-max-w-sm dv-min-w-0\"},[_c('div',{staticClass:\"dv-line-clamp-2\"},[_c('strong',[_vm._v(_vm._s(_vm.previewVideo.title))])]),_vm._v(\" \"),_c('ul',[_c('li',{staticClass:\"truncate dv-block\"},[_c('a',{attrs:{\"href\":_vm.previewVideo.url}},[_vm._v(_vm._s(_vm.previewVideo.url))])]),_vm._v(\" \"),_c('li',{staticClass:\"truncate dv-block\"},[_c('a',{staticClass:\"light\",attrs:{\"href\":_vm.previewVideo.authorUrl}},[_vm._v(_vm._s(_vm.previewVideo.authorName))])]),_vm._v(\" \"),_c('li',{staticClass:\"truncate dv-block\"},[_vm._v(\"\\n            \"+_vm._s(_vm.t('videos', '{plays} plays', {plays: _vm.previewVideo.plays}))+\"\\n          \")]),_vm._v(\" \"),_c('li',{staticClass:\"truncate dv-block\"},[_c('a',{on:{\"click\":function($event){$event.preventDefault();return _vm.$emit('removeVideo')}}},[_vm._v(\"\\n              \"+_vm._s(_vm.t('videos', \"Remove\"))+\"\\n            \")])])])])])]],2):_vm._e()}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Preview.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Search.vue?vue&type=template&id=3890eb83&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Search.vue?vue&type=template&id=3890eb83& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.currentGateway)?_c('div',[_c('input',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.query),expression:\"query\"}],staticClass:\"text fullwidth\",attrs:{\"type\":\"search\",\"placeholder\":_vm.t('videos', 'Search {gateway} videos…', { gateway: _vm.currentGateway.name })},domProps:{\"value\":(_vm.query)},on:{\"input\":[function($event){if($event.target.composing){ return; }_vm.query=$event.target.value},_vm.debouncedSearch],\"keyup\":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,\"enter\",13,$event.key,\"Enter\")){ return null; }return _vm.search.apply(null, arguments)}}})]):_vm._e()}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Search.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=template&id=52853fc8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=template&id=52853fc8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"sidebar\"},[_c('div',{staticClass:\"dv-px-2\"},[_c('div',{staticClass:\"select fullwidth\"},[_c('select',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.currentGatewayHandle),expression:\"currentGatewayHandle\"}],on:{\"change\":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return val}); _vm.currentGatewayHandle=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.gateways),function(gateway,gatewayKey){return _c('option',{key:(\"gateway-\" + gatewayKey),domProps:{\"value\":gateway.handle}},[_vm._v(\"\\n          \"+_vm._s(gateway.name)+\"\\n        \")])}),0)])]),_vm._v(\" \"),_c('nav',[_c('ul',[(_vm.currentGateway)?[_vm._l((_vm.currentGateway.sections),function(section,sectionKey){return [_c('li',{key:(\"section-\" + sectionKey),staticClass:\"heading\"},[_c('span',[_vm._v(_vm._s(section.name))])]),_vm._v(\" \"),_vm._l((section.collections),function(collection,collectionKey){return [_c('li',{key:(\"collection-\" + sectionKey + \"-\" + collectionKey)},[_c('a',{class:{sel: _vm.isCollectionSelected(sectionKey, collectionKey)},attrs:{\"href\":\"#\"},on:{\"click\":function($event){$event.preventDefault();return _vm.handleCollectionClick(sectionKey, collectionKey, collection)}}},[(collection.icon)?[_c(collection.icon,{tag:\"component\",staticClass:\"dv-text-blue-500 dv-w-5 dv-h-5 dv-mr-2\"})]:_vm._e(),_vm._v(\"\\n                \"+_vm._s(collection.name)+\"\\n              \")],2)])]})]})]:_vm._e()],2)])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=template&id=4085fce0&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Thumb.vue?vue&type=template&id=4085fce0& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"videos-thumb\",class:{\n    'dv-ring dv-ring-red-500 dv-ring-opacity-80': _vm.selected\n  }},[_c('div',{staticClass:\"videos-thumb-image-container\"},[_c('div',{staticClass:\"videos-thumb-image\",style:('background-image: url(' + _vm.url + ')')})]),_vm._v(\" \"),_c('div',{staticClass:\"duration\"},[_vm._v(\"\\n    \"+_vm._s(_vm.duration)+\"\\n  \")]),_vm._v(\" \"),_c('div',{staticClass:\"play\",on:{\"click\":function($event){$event.preventDefault();return _vm.$emit('playVideo')}}})])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Thumb.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=template&id=3b0bccee&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/VideoCard.vue?vue&type=template&id=3b0bccee& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"dv-group\",on:{\"click\":function($event){return _vm.selectVideo(_vm.video)},\"dblclick\":function($event){return _vm.useVideo(_vm.video)}}},[_c('thumb',{attrs:{\"selected\":_vm.isVideoSelected,\"url\":_vm.video.thumbnail,\"duration\":_vm.video.duration},on:{\"playVideo\":function($event){return _vm.play(_vm.video)}}}),_vm._v(\" \"),_c('div',{staticClass:\"dv-mt-2 dv-flex dv-flex-row dv-flex-nowrap dv-items-center\"},[(_vm.video.private)?[_c('svg',{staticClass:\"dv-h-4 dv-w-4 dv-mr-1\",attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"fill\":\"none\",\"viewBox\":\"0 0 24 24\",\"stroke\":\"currentColor\"}},[_c('path',{attrs:{\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"2\",\"d\":\"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z\"}})])]:_vm._e(),_vm._v(\" \"),_c('div',{staticClass:\"dv-flex-1\"},[_c('div',{staticClass:\"dv-line-clamp-2\"},[_vm._v(\"\\n        \"+_vm._s(_vm.video.title)+\"\\n      \")])])],2)],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/VideoCard.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Videos.vue?vue&type=template&id=03826c02&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Videos.vue?vue&type=template&id=03826c02& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"dv-w-full dv-grid dv-grid-cols-3 dv-grid dv-gap-4\"},[_vm._l((_vm.videos),function(video,videoKey){return [_c('video-card',{key:(\"video-\" + videoKey),attrs:{\"video\":video}})]})],2)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Videos.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ normalizeComponent; }\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://videos/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/web/assets/videos/src/css/videos.pcss":
/*!***************************************************!*\
  !*** ./src/web/assets/videos/src/css/videos.pcss ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./videos.pcss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./src/web/assets/videos/src/css/videos.pcss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"1a298e1a\", content, true, {});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/css/videos.pcss?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Player.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/Player.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"2a01261c\", content, true, {});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/Player.vue?./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B3%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/web/assets/videos/src/js/components/Sidebar.vue?vue&type=style&index=0&id=52853fc8&lang=pcss&scoped=true&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"65aa4ebf\", content, true, {});\n\n//# sourceURL=webpack://videos/./src/web/assets/videos/src/js/components/Sidebar.vue?./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B3%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addStylesClient; }\n/* harmony export */ });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack://videos/./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = Vue;

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "Vuex" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = Vuex;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = axios;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayLikeToArray; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayWithoutHoles; }\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _defineProperty; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _iterableToArray; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n\n\n\n\n\n\n\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _nonIterableSpread; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectSpread2; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defineProperty.js */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    enumerableOnly && (symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    })), keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = null != arguments[i] ? arguments[i] : {};\n    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {\n      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n    });\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/objectSpread2.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _toConsumableArray; }\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _unsupportedIterableToArray; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ \"./node_modules/core-js/modules/es.regexp.test.js\");\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\n\n\n\n\n\n\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://videos/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/web/assets/videos/src/main.js");
/******/ 	
/******/ })()
;