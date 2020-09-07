var io          = require('socket.io');console.log("DONE4");
var cloudcmd    = require('cloudcmd');console.log("DONE6");

var server;

global.vrcloudcmd={ 
  attachToExpress : function(a,s,e,c) {
    var app = a;
    server = s;

    var prefix = '/files';
    const {createConfigManager} = cloudcmd;
    socket = io.listen(server, {
      path: `${prefix}/socket.io`
    });
    var configManager = createConfigManager();
    configManager('name', 'A');

    var router = e.Router();

    app.get('/files/*' ,function (req, res, next) {
      if (req.path.includes('/files/') && !req.headers.referer) {
        var p = req.path.replace('/files/', '');
        for (var i=0;i<c.length;i++) {
          if (p.includes(c[i].name)) {
            router.use(req.path, cloudcmd({
              socket: socket,
              config: c[i],
              configManager: configManager,
            }));
          }
        }
      }
      router(req, res, next);
    })
  } 
}
