########################################
# STEP 1 => INSTALL BASIC CONFIGURATIONS 
########################################
FROM node:16 as build-step
ARG GITHUB_TOKEN

WORKDIR /app
COPY . .
RUN echo //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN} >> .npmrc

RUN yarn
RUN yarn build


# SERVICE
FROM nginx:latest
COPY --from=build-step /app/build /usr/share/nginx/html

