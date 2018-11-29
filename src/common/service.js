/**
 *
 * @param {string} url
 * @param {object} opt
 * @param {object} opt.data
 * @param {object} opt.headers
 * @param {object} opt.responseHeaders - 需要返回的 http response 的 headers，传入一个 key 的数组，比如 ['link']
 */

/**
 * 如果传了 opt.responseHeaders。则返回的 Promise then 方法中拿到一个对象 { json, headers }
 */
function encodeUrlParams(data) {
  return Object.keys(data)
    .map(key => [key, data[key]].map(encodeURIComponent).join("="))
    .join("&");
}

export default function Fetch(url, opt = {}) {
  // 设置请求方法
  opt.method = opt.method || "GET";

  opt.headers = opt.headers || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  if (opt.data) {
    if (/GET/i.test(opt.method)) {
      url = `${url}/?${encodeUrlParams(opt.data)}`;
    } else {
      opt.body = JSON.stringify(opt.data);
    }
  }

  if (opt.token) {
    opt.headers.token = opt.token;
  }

  return fetch(url, opt).then(response => {
    switch (response.status) {
      case 200:
        if (opt.responseHeaders && opt.responseHeaders.length) {
          const headers = opt.responseHeaders.map(key =>
            response.headers.get(key)
          );
        }
        return response.json();
        break;

      case 201:
        if (opt.responseHeaders && opt.responseHeaders.length) {
          const headers = opt.responseHeaders.map(key =>
            response.headers.get(key)
          );
        }
        return response.json();
        break;

      case 401:
        throw new Error("未授权");

      case 403:
        throw new Error("没有权限访问");

      case 404:
        throw new Error("页面地址错误");

      case 500:
        throw new Error("服务器错误");

      case 502:
        throw new Error("网关错误");

      default:
        throw new Error("Wrong");
    }
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
    return Fetch("/api/v2.0/" + id + "/delete/", {
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
