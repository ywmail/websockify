var websockify = require('@maximegris/node-websockify');
websockify({
    source: 'localhost:7200',
    target: 'localhost:5900',
    web: './',
});