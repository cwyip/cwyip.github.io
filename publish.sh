#!/bin/bash
 
message="Site generated on $( date +%Y-%m-%d--%T )"
 
jekyll build && \
  cd _site && \
  git add . && \
  git commit -am "$message" && \
  git push origin master && \
  cd .. && \
  echo "Successfully built and pushed to GitHub."