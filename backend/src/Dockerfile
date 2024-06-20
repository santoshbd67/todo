# Use a base image with Java 11 installed
FROM openjdk:11-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged JAR file into the container
COPY target/*.jar app.jar

# Expose the port that your Spring Boot application uses (default is 8080)
EXPOSE 8080

# Command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "app.jar"]

