FROM ubuntu:14.04
MAINTAINER Alexandre MOULAY & Hector ROUSSILLE

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C300EE8C && \
    echo "deb http://ppa.launchpad.net/nginx/development/ubuntu trusty main" >> /etc/apt/sources.list

RUN apt-get update && \
    apt-get install -y ca-certificates nginx-extras && \
    rm -rf /var/lib/apt/lists/*

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log


EXPOSE 80 443


#CMD ["/bin/bash", "/usr/local/script.sh"]
CMD ["nginx", "-g", "daemon off;"]
