addEventListener(
    "fetch", event => {
      let url = new URL(event.request.url);
      url.hostname = "${V2RAY_HOSTNAME}";
      url.protocol = "https";
      let request = new Request(url, event.request);
      event.respondWith(
        fetch(request)
      )
    }
  );
  