# Source image
FROM node:argon
# Env
ENV PORT=8080

# Expose port. Has to be 8080
EXPOSE 8080

# Create dir and set it has workdir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package
COPY package.json /usr/src/app/

# Install phantomjs
# RUN apt-get update
# RUN apt-get install build-essential g++ flex bison gperf ruby perl \
#   libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev \
#   libpng-dev libjpeg-dev python libx11-dev libxext-dev git -y
# RUN git clone git://github.com/ariya/phantomjs.git
# WORKDIR ./phantomjs
# RUN git checkout 2.1.1 && git submodule init && git submodule update
# RUN python build.py

# RUN PATH=$PATH:/usr/src/app/phantomjs/bin

# WORKDIR ./..

# Npm install :D
RUN npm install

# Copy files
COPY . /usr/src/app

CMD ["node", "server.js"]


# RUN npm install
# ENV NODE_ENV production
# EXPOSE 8080
# CMD ["node", "action.js"]


# # Dockerfile for example whisk docker action
# FROM openwhisk/dockerskeleton

# ENV FLASK_PROXY_PORT 8080

# ### Add source file(s)
# ADD example.c /action/example.c

# RUN apk add --no-cache --virtual .build-deps \
#         bzip2-dev \
#         gcc \
#         libc-dev \
# ### Compile source file(s)
#  && cd /action; gcc -o exec example.c \
#  && apk del .build-deps

# CMD ["/bin/bash", "-c", "cd actionProxy && python -u actionproxy.py"]
