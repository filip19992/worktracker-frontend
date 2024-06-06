"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _LoginUser = _interopRequireDefault(require("../components/LoginUser.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// src/router/index.js
var routes = [{
  path: '/login',
  name: 'Login',
  component: _LoginUser["default"]
} // Add other routes here
];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
