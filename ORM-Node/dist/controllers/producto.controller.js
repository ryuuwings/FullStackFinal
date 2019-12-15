"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = createProduct;
exports.getProductByType = getProductByType;
exports.getProducts = getProducts;
exports.getOneProduct = getOneProduct;
exports.deleteOneProduct = deleteOneProduct;
exports.updateOneProduct = updateOneProduct;

var _productos = _interopRequireDefault(require("../models/productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createProduct(req, res) {
  var _req$body, tamaño, nombreplato, alérgenos, descripcion, infonutricional, precio, tipo, imagenidimagen, newProducto;

  return regeneratorRuntime.async(function createProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, tamaño = _req$body.tamaño, nombreplato = _req$body.nombreplato, alérgenos = _req$body.alérgenos, descripcion = _req$body.descripcion, infonutricional = _req$body.infonutricional, precio = _req$body.precio, tipo = _req$body.tipo, imagenidimagen = _req$body.imagenidimagen;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_productos["default"].create({
            tamaño: tamaño,
            nombreplato: nombreplato,
            alérgenos: alérgenos,
            descripcion: descripcion,
            infonutricional: infonutricional,
            precio: precio,
            tipo: tipo,
            imagenidimagen: imagenidimagen
          }, {
            fields: ['tamaño', 'nombreplato', 'alérgenos', 'descripcion', 'infonutricional', 'precio', 'tipo', 'imagenidimagen']
          }));

        case 4:
          newProducto = _context.sent;

          if (!newProducto) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Product registered',
            data: newProducto
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, product not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getProductByType(req, res) {
  var type, productos;
  return regeneratorRuntime.async(function getProductByType$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          type = req.params.type;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_productos["default"].findAll({
            attributes: ['idplato', 'tamaño', 'nombreplato', 'alérgenos', 'descripcion', 'infonutricional', 'precio', 'tipo', 'imagenidimagen'],
            where: {
              tipo: type
            }
          }));

        case 4:
          productos = _context2.sent;
          res.json({
            data: productos
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function getProducts(req, res) {
  var productos;
  return regeneratorRuntime.async(function getProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_productos["default"].findAll());

        case 3:
          productos = _context3.sent;
          res.json({
            data: productos
          });
          _context3.next = 9;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function getOneProduct(req, res) {
  var id, producto;
  return regeneratorRuntime.async(function getOneProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_productos["default"].findOne({
            where: {
              idplato: id
            }
          }));

        case 4:
          producto = _context4.sent;
          res.json({
            data: producto
          });
          _context4.next = 10;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function deleteOneProduct(req, res) {
  var id, deletedProductRows;
  return regeneratorRuntime.async(function deleteOneProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_productos["default"].destroy({
            where: {
              idplato: id
            }
          }));

        case 4:
          deletedProductRows = _context5.sent;
          res.json({
            message: 'Deleted product',
            count: deletedProductRows
          });
          _context5.next = 10;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function updateOneProduct(req, res) {
  var id, _req$body2, tamaño, nombreplato, alérgenos, descripcion, infonutricional, precio, tipo, imagenidimagen, producto;

  return regeneratorRuntime.async(function updateOneProduct$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, tamaño = _req$body2.tamaño, nombreplato = _req$body2.nombreplato, alérgenos = _req$body2.alérgenos, descripcion = _req$body2.descripcion, infonutricional = _req$body2.infonutricional, precio = _req$body2.precio, tipo = _req$body2.tipo, imagenidimagen = _req$body2.imagenidimagen;
          _context7.next = 5;
          return regeneratorRuntime.awrap(_productos["default"].findAll({
            attributes: ['idplato', 'tamaño', 'nombreplato', 'alérgenos', 'descripcion', 'infonutricional', 'precio', 'tipo', 'imagenidimagen'],
            where: {
              idplato: id
            }
          }));

        case 5:
          producto = _context7.sent;

          if (producto.length > 0) {
            producto.forEach(function _callee(producto) {
              return regeneratorRuntime.async(function _callee$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return regeneratorRuntime.awrap(producto.update({
                        tamaño: tamaño,
                        nombreplato: nombreplato,
                        alérgenos: alérgenos,
                        descripcion: descripcion,
                        infonutricional: infonutricional,
                        precio: precio,
                        tipo: tipo,
                        imagenidimagen: imagenidimagen
                      }));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              });
            });
          }

          return _context7.abrupt("return", res.json({
            message: 'Table updated!',
            data: producto
          }));

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 10]]);
}