const NodeMediaServer = require('node-media-server');

const config = {
 rtmp: {
  port: 8001,
  chunk_size: 60000,
  gop_cache: true,
  ping: 30,
  ping_timeout: 60,
 },
 http: {
  port: process.env.PORT,
  allow_origin: '*',
 },
};

var nms = new NodeMediaServer(config);
nms.run();
