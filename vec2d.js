'use strict';

(function(window) {

    var Vec = (function() {

        function Vec(x, y) {
            this.x = x;
            this.y = y;
        };

        Vec.fromDegree = function(degree) {
            var rad = degree * (Math.PI / 180);
            return new Vec(Math.cos(rad), Math.sin(rad)).normalize();
        };

        Vec.prototype.add = function(v) {
            this.x += v.x;
            this.y += v.y;

            return this;
        };

        Vec.prototype.subtract = function(v) {
            this.x -= v.x;
            this.y -= v.y;

            return this;
        };

        Vec.prototype.divide = function(value) {
            this.x /= value;
            this.y /= value;

            return this;
        };

        Vec.prototype.multiply = function(value) {
            this.x *= value;
            this.y *= value;

            return this;
        };

        Vec.prototype.length = function() {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        };

        Vec.prototype.normalize = function() {
            var length = this.length();
            if (length === 0) {
                return this;
            }
            return this.divide(length);
        };

        Vec.prototype.copy = function() {
            return new Vec(this.x, this.y);
        };

        Vec.prototype._add = function(v) {
            return new Vec(this.x + v.x, this.y + v.y);
        };

        Vec.prototype._subtract = function(v) {
            return new Vec(this.x - v.x, this.y - v.y);
        };

        Vec.prototype._divide = function(value) {
            return new Vec(this.x / value, this.y / value);
        };

        Vec.prototype._multiply = function(value) {
            return new Vec(this.x * value, this.y * value);
        };

        Vec.prototype._normalize = function() {
            var length = this.length();
            if (length === 0) {
                return this;
            }
            return this._divide(length);
        };

        return Vec;

    })();

    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = Vec;
    } else {
        window.Vec = Vec;
    }

})(this);