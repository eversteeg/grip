#!/bin/bash

set -e

cat <<EOF >/usr/share/nginx/html/config.json
{
  "authenticationUrl": "$authenticationUrl",
  "baseEntity": "$baseEntity",
  "baseUrl": "$baseUrl",
  "clientSecret": "$clientSecret",
  "gripPassword": "$gripPassword",
  "gripUsername": "$gripUsername",
  "reCaptchaSiteKey": "$reCaptchaSiteKey",
  "replyAddressGrip": "$replyAddressGrip"
}
EOF

cat <<EOF >/etc/nginx/conf.d/default.conf
server {
    listen       80;
    server_name  localhost;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files \$uri /index.html;
    }
    location $baseUrl/ {
        proxy_pass $navajoUrl/;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
EOF

exec "$@"
