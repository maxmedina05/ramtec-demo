#include <stdio.h>
#include <string.h>
#include <WiFi.h>
#include <ArduinoHttpClient.h>

const char* ssid     = "MaxAndroidAP";
const char* password = "12345678";

//char serverAddress[] = "maxmedinademo.ddns.net";  // server address
//char serverAddress[] = "148.0.241.85";  // server address
char serverAddress[] = "40.71.197.209";  // server address
int port = 3100;

WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);
int status = WL_IDLE_STATUS;
String response;
int statusCode = 0;

void setup() {
  // put your setup code here, to run once:
    Serial.begin(115200);
    randomSeed(analogRead(0));
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected.");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}

void loop() {
  // put your main code here, to run repeatedly:
  if(WiFi.status() == WL_CONNECTED) {
      int randNumber = random(9, 13);
      char buffer[100];
      sprintf(buffer, "name=%s&moduleId=%d&voltage01=%.2f&voltage02=11.02", 
        "ESP32", 101, (float)randNumber);
      String postData = String(buffer);
      
      Serial.println("making POST request");
      String contentType = "application/x-www-form-urlencoded";
//      String postData = "name=Modulo1&moduleId=101&voltage01=11.75&voltage02=11.25";
      
      client.post("/api/v1/voltages", contentType, postData);
      // read the status code and body of the response
      statusCode = client.responseStatusCode();
      response = client.responseBody();

      Serial.print("request body: ");
      Serial.println(postData);
      Serial.print("Status code: ");
      Serial.println(statusCode);
      Serial.print("Response: ");
      Serial.println(response);
    
      Serial.println("Wait five seconds");
  } else {
      Serial.println("No Internet");
    }

  
  delay(10000);
}
