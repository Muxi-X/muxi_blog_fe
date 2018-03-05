function Fetch(url, opt = {}) {
  opt.method = opt.method || "GET";
  opt.headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (opt.token) {
    opt.headers.token = opt.token;
  }

  opt.body = JSON.stringify(opt.data) || null;

  return fetch(url, opt).then(response => {
    return response.json().then(json => {
      switch (response.status) {
        case 200:
          return json;
        case 502:
          util.message(response.statusText, "err");
        case 403:
          throw response.statusText;
        case 401:
          throw response.status;
          break;
      }
    });
  });
}

let Service = {
  // get blogs
  fetch_url(url, page_num) {
    return Fetch("/api/v2.0" + url + "/?page=" + page_num);
  },

  // view one blog
  view(id) {
    return Fetch("/api/v2.0/" + id + "/views/");
  },
  delete_blog(id, token) {
    return Fetch("/api/v2.0/" + this.id + "/delete/", {
      method: "DELETE",
      token: token
    });
  },
  edit_send(flag, token, method, body) {
    if (flag) {
      // edit
      var id = window.location.pathname.split("/")[2];
      var url = "/api/v2.0/" + id + "/edit/";
      var used_method = "PUT";
    } else {
      // send
      var url = "/api/v2.0/send/";
      var used_method = "POST";
    }
    return Fetch(url, {
      method: used_method,
      token: token,
      data: body
    });
  },

  // all tags
  all_tags() {
    return Fetch("/api/v2.0/all_tags/");
  },

  // all archives
  archive() {
    return Fetch("/api/v2.0/get_time/");
  },
  // add comment
  add_comment(id, token, body) {
    return Fetch("/api/v2.0/" + id + "/add_comment/", {
      method: "POST",
      token: token,
      data: body
    });
  },

  // blog login
  login(body) {
    return Fetch("/api/v2.0/login/", {
      method: "POST",
      data: body
    });
  },
  // blog register
  register(body) {
    return Fetch("/api/v2.0/signup/", {
      method: "POST",
      data: body
    });
  },

  // like a blog
  like(token, body) {
    return Fetch("/api/v2.0/like/", {
      method: "POST",
      token: token,
      data: body
    });
  },

  // cancel like a blog
  cancel_like(token, body) {
    return Fetch("/api/v2.0/unlike/", {
      method: "POST",
      token: token,
      data: body
    });
  }
};

module.exports = Service;
