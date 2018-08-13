'use strict';

module.exports = function() {
<<<<<<< HEAD
    $.gulp.task('clean', function(cb) {
        return $.del($.config.root, cb);
=======
    $.gulp.task('clean', function() {
        return $.del($.config.root);
>>>>>>> header
    });
};