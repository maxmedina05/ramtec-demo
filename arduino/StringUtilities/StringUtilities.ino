#include <stdio.h>
#include <string.h>

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  randomSeed(analogRead(0));
  Serial.println("String Utilities Loaded!");
}

void loop() {
  // put your main code here, to run repeatedly:
  int randNumber = random(9, 13);
  char buffer[100];
  sprintf(buffer, "name=%s&moduleId=%d&voltage01=%.2f&voltage02=11.02", 
    "ESP32", 101, (float)randNumber);
  String output = String(buffer);
  Serial.println(output);
  delay(5000);
}
