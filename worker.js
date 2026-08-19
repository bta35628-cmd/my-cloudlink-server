export default {
  async fetch(request) {
    const upgradeHeader = request.headers.get('Upgrade');
    if (!upgradeHeader || upgradeHeader !== 'websocket') {
      return new Response('Cloudflare WebSocket Server is Running!', { status: 200 });
    }

    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);

    server.accept();
    server.addEventListener('message', event => {
      // Nhận dữ liệu từ PenguinMod và phát lại ngay lập tức
      server.send(event.data);
    });

    return new Response(null, {
      status: 101,
      webSocket: client,
    });
  }
};
