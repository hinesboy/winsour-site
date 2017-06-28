FROM daocloud.io/node:5
MAINTAINER hinesboy hines.zhu@gmail.com
ENV HTTP_PORT 8081
COPY . /app
WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8081

CMD ["npm", "start"]
