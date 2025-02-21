var webAuth = new auth0.WebAuth({
  clientID: 'In43D8hfptI5B17Xo7XZX4aBkhfMuH56',
  domain: 'auth.coderic.org',
  audience: `https://coderic.eu.auth0.com/userinfo`,
  scope: 'openid profile email',
  redirectUri: 'https://coderic.org/callback',
  responseType: 'token id_token'
});

login = () => webAuth.authorize({
  audience: 'https://coderic.eu.auth0.com/userinfo',
  scope: 'openid profile email',
  redirectUri: 'https://coderic.org/callback'
});
logout = () => webAuth.logout({
  returnTo: 'https://coderic.org/logout'
});

load = () => {
  webAuth.checkSession(
    {
      audience: 'https://coderic.eu.auth0.com/userinfo',
      scope: 'openid profile email',
    },
    function (err, result) {
      console.dir(result);
      if (err || !result || !result.accessToken) {
        $(".guest").show();
        $(".authenticated").hide();
      } else {
        webAuth.client.userInfo(result.accessToken, function (err, user) {
          if (!err && user) {
            $("#username").text(user.name).show();
          }
        });
        $(".guest").hide();
        $(".authenticated").show();
      }
    });
};


$(document).ready(function () {
  load();
});