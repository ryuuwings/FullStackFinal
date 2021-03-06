"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('postgres', 'postgres', 'elrincon1920', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;