'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBar = _react2.default.createClass({
  displayName: 'AppBar',


  propTypes: {
    actionIcons: _react2.default.PropTypes.array,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    filterIcon: _react2.default.PropTypes.element,
    iconStyleRight: _react2.default.PropTypes.object,
    moreIcon: _react2.default.PropTypes.element,
    navIcon: _react2.default.PropTypes.element,
    onLeftIconButtonTouchTap: _react2.default.PropTypes.func,
    onRightIconButtonTouchTap: _react2.default.PropTypes.func,
    style: _react2.default.PropTypes.object,
    title: _react2.default.PropTypes.node,
    titleStyle: _react2.default.PropTypes.object,
    zDepth: _react2.default.PropTypes.number
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      zDepth: 1
    };
  },
  getStyles: function getStyles() {
    var spacing = this.context.muiTheme.rawTheme.spacing;
    var themeVariables = this.context.muiTheme.appBar;
    var iconButtonSize = this.context.muiTheme.button.iconButtonSize;
    var flatButtonSize = 36;
    var styles = {
      root: {
        zIndex: 5,
        width: '100%',
        display: 'flex',
        minHeight: themeVariables.height,
        backgroundColor: themeVariables.color,
        paddingLeft: spacing.desktopGutter,
        paddingRight: spacing.desktopGutter
      },
      title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: 24,
        fontWeight: this.context.muiTheme.appBar.titleFontWeight,
        color: themeVariables.textColor,
        lineHeight: themeVariables.height + 'px'
      },

      // http://jsfiddle.net/iamanubhavsaini/zWtBu/
      mainElement: {
        flex: '0 1 auto',
        minWidth: 0
      },
      filterIcon: {
        marginTop: (themeVariables.height - iconButtonSize) / 2,
        flex: '1 0 auto'
      },
      rightContainer: {
        marginRight: -16,
        marginLeft: 0,
        flex: '0 0 auto'
      },

      iconButton: {
        style: {
          marginTop: (themeVariables.height - iconButtonSize) / 2,
          marginLeft: -16
        },
        iconStyle: {
          fill: themeVariables.textColor,
          color: themeVariables.textColor
        }
      },
      flatButton: {
        color: themeVariables.textColor,
        backgroundColor: 'transparent',
        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
      }
    };

    return styles;
  },
  _onLeftIconButtonTouchTap: function _onLeftIconButtonTouchTap(event) {
    if (this.props.onLeftIconButtonTouchTap) {
      this.props.onLeftIconButtonTouchTap(event);
    }
  },
  _onRightIconButtonTouchTap: function _onRightIconButtonTouchTap(event) {
    if (this.props.onRightIconButtonTouchTap) {
      this.props.onRightIconButtonTouchTap(event);
    }
  },
  render: function render() {
    var _props = this.props,
        title = _props.title,
        titleStyle = _props.titleStyle,
        className = _props.className,
        style = _props.style,
        zDepth = _props.zDepth,
        children = _props.children,
        navIcon = _props.navIcon,
        filterIcon = _props.filterIcon,
        actionIcons = _props.actionIcons,
        moreIcon = _props.moreIcon,
        iconStyleRight = _props.iconStyleRight,
        other = (0, _objectWithoutProperties3.default)(_props, ['title', 'titleStyle', 'className', 'style', 'zDepth', 'children', 'navIcon', 'filterIcon', 'actionIcons', 'moreIcon', 'iconStyleRight']);

    var titleElement = void 0;
    var navIconElement = void 0;
    var filterIconElement = void 0;
    var rightIcons = [];
    var rightIconElements = void 0;

    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = this.getStyles();
    var iconRightContainerStyle = prepareStyles(styles.iconButton.style, styles.rightContainer, iconStyleRight);

    if (navIcon) {
      if (navIcon.type.muiName === 'IconButton') {
        navIcon = _react2.default.cloneElement(navIcon, {
          iconStyle: (0, _simpleAssign2.default)({}, styles.iconButton.iconStyle, navIcon.props.iconStyle)
        });
      }

      navIconElement = _react2.default.createElement(
        'div',
        { style: styles.iconButton.style },
        navIcon
      );
    }

    // Title Wrapper
    if (title) {
      // If the title is a string, wrap in an h1 tag.
      // If not, just use it as a node.
      if (typeof title === 'string' || title instanceof String) {
        title = _react2.default.createElement(
          'h1',
          { style: prepareStyles(styles.title, titleStyle) },
          title
        );
      }
    }

    // Filter Icon
    if (filterIcon) {
      if (filterIcon.type.muiName === 'IconButton' || filterIcon.type.muiName === 'IconMenu') {
        filterIcon = _react2.default.cloneElement(filterIcon, {
          iconStyle: (0, _simpleAssign2.default)({}, styles.iconButton.iconStyle, filterIcon.props.iconStyle)
        });
      }
    }
    filterIconElement = _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.filterIcon) },
      filterIcon
    );

    // Builded title (text and filter icon)
    titleElement = _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.mainElement) },
      title
    );

    // Action Icons
    if (actionIcons) {
      actionIcons = actionIcons.map(function (icon) {
        if (icon.type.muiName === 'IconButton') {
          icon = _react2.default.cloneElement(icon, {
            iconStyle: (0, _simpleAssign2.default)({}, styles.iconButton.iconStyle, icon.props.iconStyle)
          });
        } else if (icon.type.muiName === 'FlatButton') {
          icon = _react2.default.cloneElement(icon, {
            style: (0, _simpleAssign2.default)({}, styles.flatButton, icon.props.style)
          });
        }
        return icon;
      }.bind(this));

      rightIcons = rightIcons.concat(actionIcons);
    }

    // More Icon
    if (moreIcon) {
      if (moreIcon.type.muiName === 'IconButton' || moreIcon.type.muiName === 'IconMenu') {
        moreIcon = _react2.default.cloneElement(moreIcon, {
          iconStyle: (0, _simpleAssign2.default)({}, styles.iconButton.iconStyle, moreIcon.props.iconStyle)
        });
      }

      rightIcons.push(moreIcon);
    }

    // Right-most Icon container
    if (rightIcons.length > 0) {
      rightIconElements = _react2.default.createElement(
        'div',
        { style: iconRightContainerStyle },
        rightIcons
      );
    }

    return _react2.default.createElement(
      _Paper2.default,
      (0, _extends3.default)({}, other, {
        rounded: false,
        className: className,
        style: (0, _simpleAssign2.default)({}, styles.root, style),
        zDepth: zDepth
      }),
      navIconElement,
      titleElement,
      filterIconElement,
      rightIconElements,
      children
    );
  }
});

module.exports = AppBar;