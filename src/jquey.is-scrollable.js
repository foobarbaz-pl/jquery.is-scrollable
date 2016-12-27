(function($) {

  /**
   * @param {Element}
   * @return {Boolean}
   */
  $.fn.isVerticallyScrollable = function() {

    if (this.scrollTop()) {
      return true;
    } else {
      this.scrollTop(1);

      if (this.scrollTop()) {
        this.scrollTop(0);
        return true;
      }
    }

    return false;
  };

  /**
   * @param {Element}
   * @return {Boolean}
   */
  $.fn.isHorizontallyScrollable = function() {

    if (this.scrollLeft()) {
      return true;
    } else {
      this.scrollLeft(1);

      if (this.scrollLeft()) {
        this.scrollLeft(0);
        return true;
      }
    }
    return false;
  };

  $.extend($.expr.pseudos || $.expr[ ":" ], {
    "vertically-scrollable": function(a, i, m) {
      return $(a).isVerticallyScrollable();
    },
    "horizontally-scrollable": function(a, i, m) {
      return $(a).isHorizontallyScrollable();
    }
  });
})(jQuery);
