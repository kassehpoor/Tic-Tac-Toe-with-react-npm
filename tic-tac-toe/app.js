var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Square component is a controlled component.The Board has full control over them.
var Square = function (_React$Component) {
  _inherits(Square, _React$Component);

  function Square(props) {
    _classCallCheck(this, Square);

    var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Square, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'button',
        {
          className: 'square',
          onClick: function onClick() {
            return _this2.props.onClick();
          }
        },
        this.props.value
      );
    }
  }]);

  return Square;
}(React.Component);

var Board = function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this3 = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this3.state = {
      squares: Array(9).fill(null)
    };
    return _this3;
  }

  _createClass(Board, [{
    key: 'handleClick',
    value: function handleClick(i) {
      //create a copy of squares to modify.instead of modyfiying the exsisting array.
      var squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({ squares: squares });
    }
  }, {
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this4 = this;

      return React.createElement(Square, {
        value: this.state.squares[i],
        onClick: function onClick() {
          return _this4.handleClick(i);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var status = 'Next player: X';

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'status' },
          status
        ),
        React.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        React.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        React.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      );
    }
  }]);

  return Board;
}(React.Component);

var Game = function (_React$Component3) {
  _inherits(Game, _React$Component3);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'game' },
        React.createElement(
          'div',
          { className: 'game-board' },
          React.createElement(Board, null)
        ),
        React.createElement(
          'div',
          { className: 'game-info' },
          React.createElement('div', null),
          React.createElement('ol', null)
        )
      );
    }
  }]);

  return Game;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));