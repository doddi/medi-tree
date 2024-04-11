FROM openjdk:21-slim
MAINTAINER doddi.com
COPY target/medi-tree-0.0.1-SNAPSHOT.jar medi-tree-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/medi-tree-0.0.1-SNAPSHOT.jar"]