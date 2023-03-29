# Stage 0 - Build Frontend Assets
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]