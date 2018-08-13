'use strict';

module.exports = function() {
    $.gulp.task('copy:icon', function() {
        return $.gulp.src('./src/icons/**/*.*', { since: $.gulp.lastRun('copy:icon') })
            .pipe($.gulp.dest($.config.root + '/icons'));
    });
};