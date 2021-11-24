window.onload = (function() {
    var loadingTime = performance.now() - t0;
    document.write('Page loaded in: ' + loadingTime + 'milliseconds')
    return loadingTime
})()