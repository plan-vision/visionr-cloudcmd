var io          = require('socket.io');
var cloudcmd    = require('cloudcmd');

var server;

global.vrcloudcmd={ 
  attachToExpress : function(a,s,e,c) {
    var app = a;
    server = s;
    var socket1;
    
    // for (var i=0;i<c.length;i++) {
    //   if (!i) {
    //     socket1 = io.listen(server, {
    //       path: `${c[i].name}/socket.io`
    //     });
    //     c[i].editor = 'deepword';
    //     app.use('/fs/'+c[i].name, cloudcmd({
    //       config: c[i],
    //       socket: socket1,
    //     }));
    //   }      
    // }

    var prefix = '/fs';
    const {createConfigManager} = cloudcmd;
    var configManager = createConfigManager();

    var router = e.Router();

    app.get('/fs/*' ,function (req, res, next) {
      console.log(req.path);
      req.on('error', function () {
        console.log("error");
       }).on('end', function () {
        console.log("app.use on end");
      });
      if (req.path.includes('/fs/') && !req.headers.referer && !req.path.includes('.js.map') && !req.path.includes('/fs/VisionR-1/socket.io/')) {
        var p = req.path.replace('/fs/', '');
        for (var i=0;i<c.length;i++) {
          if (p.includes(c[i].name)) {
            socket1 = io.listen(server);
            // socket1 = io.listen(server, {
            //   path: `${c[i].name}/socket.io`
            // });
            configManager('name', c[i].name);
            c[i].editor = 'deepword';
            router.use(req.path, cloudcmd({
              socket: socket1,
              config: c[i],
              configManager: configManager
            }));
          }
        }
      }
      router(req, res, next);
    });
    app.put('/fs/*' ,function (req, res, next) {
      router(req, res, next);
    });
  } 
}
