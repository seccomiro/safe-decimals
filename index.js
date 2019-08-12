(() => {
  Number.prototype.safe = function() {
    const factor = 1000000000000000;
    return Math.round(this * factor) / factor;
  };
})();
