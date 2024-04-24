# Medi Tree

## Build
mvn package

docker build --tag=medi-tree:latest .
docker tag medi-tree doddi76/medi-tree:latest
docker push doddi76/medi-tree:latest