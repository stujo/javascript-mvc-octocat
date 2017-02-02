(function(app) {
  app.AppComponent = ng.core.Component({
    selector: 'cat-app',
    template: '' +
      '<div class="picture_frame">' +
      '        <div' +
      '          class="cat"' +
      '          [style.transform] = rotationLiteral()' +
      '          [style.webkitTransform] = rotationLiteral()' +
      '        >' +
      '        </div>' +
      '    </div>' +
      '    <div class="picture_frame">' +
      '        <button class="pure-button" (click)="rotate()">Clockwise</button>' +
      '        <div class="message">Rotated {{rotation}} degrees</div>' +
      '    </div>' +
      '    <div class="picture_frame">' +
      '      <h3>Other Versions</h3>' +
      '      <ul>' +
      '        <li><a href="../with_react/index.html">React</a></li>' +
      '        <li><a href="../with_closures.html">Closures</a></li>' +
      '        <li><a href="../index.html">Object Prototypes</a></li>' +
      '      </ul>' +
      '    </div>'
  })
    .Class({
      constructor: function() {
        this.rotation = 10;
      },
      rotate: function() {
        this.rotation = (this.rotation + 10) % 360;
      },
      rotationLiteral: function() {
        return 'rotate(' + this.rotation + 'deg)';
      }
    });
})(window.app || (window.app = {}));
