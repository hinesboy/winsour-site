FROM centos:centos7
MAINTAINER yourname@example.com

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all

# copy 程序代码到容器的/src 下
ADD . /src

RUN cd /src; npm install

EXPOSE 3000

CMD ["node", "/src/index.js"]
