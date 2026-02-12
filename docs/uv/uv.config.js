self.__uv$config = {
  bare: "https://uv.student-portal.xyz/bare/", // This is a public bare server
  prefix: "service/",
  prefix: "service/", 
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "uv/uv.handler.js",
  client: "uv/uv.client.js",
  bundle: "uv/uv.bundle.js",
  config: "uv/uv.config.js",
  sw: "uv/uv.sw.js",
};
