"use strict";

var cov_omjngq2uf = function () {
  var path = "/Users/maciejkowalczyk/Code/syncano-socket-giphy/src/random.ts",
      hash = "daf2ee33fcb4f253fb2e56dc58a78d344437792d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/maciejkowalczyk/Code/syncano-socket-giphy/src/random.ts",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 18
        },
        end: {
          line: 13,
          column: 28
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "2": {
        start: {
          line: 15,
          column: 21
        },
        end: {
          line: 15,
          column: 50
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "4": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 30
        }
      },
      "5": {
        start: {
          line: 23,
          column: 22
        },
        end: {
          line: 23,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 15
          },
          end: {
            line: 23,
            column: 16
          }
        },
        loc: {
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 23,
            column: 39
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var S = _interopRequireWildcard(require("@eyedea/syncano"));

var _giphyApi = _interopRequireDefault(require("giphy-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Endpoint extends (S.Endpoint) {
  async run({
    response
  }, {
    args
  }) {
    cov_omjngq2uf.f[0]++;
    const giphy = (cov_omjngq2uf.s[0]++, (0, _giphyApi.default)());
    cov_omjngq2uf.s[1]++;

    try {
      const {
        data
      } = (cov_omjngq2uf.s[2]++, await giphy.random(args.name));
      cov_omjngq2uf.s[3]++;
      response.json(data);
    } catch ({
      message
    }) {
      cov_omjngq2uf.s[4]++;
      response.json({
        message
      });
    }
  }

}

var _default = ctx => {
  cov_omjngq2uf.f[1]++;
  cov_omjngq2uf.s[5]++;
  return new Endpoint(ctx);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yYW5kb20udHMiXSwibmFtZXMiOlsiRW5kcG9pbnQiLCJTIiwicnVuIiwicmVzcG9uc2UiLCJhcmdzIiwiZ2lwaHkiLCJkYXRhIiwicmFuZG9tIiwibmFtZSIsImpzb24iLCJtZXNzYWdlIiwiY3R4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBTUEsTUFBTUEsUUFBTixVQUF1QkMsQ0FBQyxDQUFDRCxRQUF6QixFQUF3QztBQUN0QyxRQUFNRSxHQUFOLENBQ0U7QUFBQ0MsSUFBQUE7QUFBRCxHQURGLEVBRUU7QUFBQ0MsSUFBQUE7QUFBRCxHQUZGLEVBR0U7QUFBQTtBQUNBLFVBQU1DLEtBQUssMEJBQUcsd0JBQUgsQ0FBWDtBQURBOztBQUVBLFFBQUk7QUFDRixZQUFNO0FBQUNDLFFBQUFBO0FBQUQsaUNBQVMsTUFBTUQsS0FBSyxDQUFDRSxNQUFOLENBQWFILElBQUksQ0FBQ0ksSUFBbEIsQ0FBZixDQUFOO0FBREU7QUFFRkwsTUFBQUEsUUFBUSxDQUFDTSxJQUFULENBQWNILElBQWQ7QUFDRCxLQUhELENBR0UsT0FBTztBQUFDSSxNQUFBQTtBQUFELEtBQVAsRUFBa0I7QUFBQTtBQUNsQlAsTUFBQUEsUUFBUSxDQUFDTSxJQUFULENBQWM7QUFBQ0MsUUFBQUE7QUFBRCxPQUFkO0FBQ0Q7QUFDRjs7QUFacUM7O2VBZXpCQyxHQUFHLElBQUk7QUFBQTtBQUFBO0FBQUEsYUFBSVgsUUFBSixDQUFhVyxHQUFiO0FBQWlCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gJ0BleWVkZWEvc3luY2FubydcbmltcG9ydCBnaXBoeUFQSSBmcm9tICdnaXBoeS1hcGknXG5cbmludGVyZmFjZSBBcmdzIHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbmNsYXNzIEVuZHBvaW50IGV4dGVuZHMgUy5FbmRwb2ludDxBcmdzPiB7XG4gIGFzeW5jIHJ1bihcbiAgICB7cmVzcG9uc2V9OiBTLkNvcmUsXG4gICAge2FyZ3N9OiBTLkNvbnRleHQ8QXJncz5cbiAgKSB7XG4gICAgY29uc3QgZ2lwaHkgPSBnaXBoeUFQSSgpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdpcGh5LnJhbmRvbShhcmdzLm5hbWUpXG4gICAgICByZXNwb25zZS5qc29uKGRhdGEpXG4gICAgfSBjYXRjaCAoe21lc3NhZ2V9KSB7XG4gICAgICByZXNwb25zZS5qc29uKHttZXNzYWdlfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3R4ID0+IG5ldyBFbmRwb2ludChjdHgpXG4iXX0=