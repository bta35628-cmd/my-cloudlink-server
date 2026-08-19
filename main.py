import os
from cloudlink import Cloudlink

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    cl = Cloudlink()
    cl.server(host="0.0.0.0", port=port)
