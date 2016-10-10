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


# Npm install :D
RUN npm install

# Copy files
COPY . /usr/src/app

# We did it \o/
CMD ["node", "server.js"]