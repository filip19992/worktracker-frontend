"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Login = _interopRequireDefault(require("../components/Login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// src/router/index.js
// Adjust the path as necessary
var routes = [{
  path: '/login',
  name: 'Login',
  component: _Login["default"]
} // Add other routes here
];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
