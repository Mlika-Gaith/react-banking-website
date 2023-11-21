FROM node:18-alpine
WORKDIR /react-banking-website/
COPY public/ /react-banking-website/public
COPY src/ /react-banking-website/src
COPY package.json /react-banking-website/
RUN npm install
CMD ["npm","start"]
