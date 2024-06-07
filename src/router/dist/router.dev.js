"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _LoginUser = _interopRequireDefault(require("../components/LoginUser.vue"));

var _TodoPage = _interopRequireDefault(require("../components/TodoPage.vue"));

var _RegisterUser = _interopRequireDefault(require("../components/RegisterUser.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/login',
  component: _LoginUser["default"]
}, {
  path: '/todos',
  component: _TodoPage["default"]
}, {
  path: '/register',
  component: _RegisterUser["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
