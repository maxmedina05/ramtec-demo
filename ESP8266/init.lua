print("HTTP Client Init")

SSID      = "CLARO882"
PASSWORD  = "12345678"

MODULE_NAME = "ESP8266"
MODULE_ID   = 102

API_ENDPOINT = "http://40.71.197.209:3100/api/v1/voltages"

VARIABLE_TABLE = {}

function setup(ssid, password, callback)
  wifi.setmode(wifi.STATION)
  station_cfg = {}
  station_cfg.ssid = ssid
  station_cfg.pwd = password
  wifi.sta.config(station_cfg)
  -- code extracted from: http://www.esp8266.com/viewtopic.php?f=24&t=826
  tmr.alarm(1,1000, 1, callback)
end

function randomFloat(lower, upper)
  return lower + math.random() * (upper - lower)
end

function sendData(body)
    http.post(API_ENDPOINT,
      'Content-Type: application/x-www-form-urlencoded\r\n',
      body, 
      function(code, data)

        if(code < 0) then
            print("HTTP request failed")
        else
          print(code, data)
        end
      end)
end

function buildBody(id, name, voltage01, voltage02)
    return string.format("name=%s&moduleId=%d&voltage01=%.2f&voltage02=%.2f",
      name, id, voltage01, voltage02)
end

function interval_cb() 
      local postData = buildBody(MODULE_ID, MODULE_NAME, randomFloat(9, 13), randomFloat(9, 13))
      sendData(postData)
      print(postData)
end

function connected_cb() 
    if wifi.sta.getip() == nil then 
      print(" Wait to IP address!") 
    else 
      tmr.stop(1) 
      print("New IP address is "..wifi.sta.getip())
--      tmr.alarm(1,5000, tmr.ALARM_AUTO, interval_cb)
    end 
end

function splitVariableAndValue(str)
  local it = string.gmatch(str, '([^=]+)')
  local vName = it()
  local vValue = it()
  VARIABLE_TABLE[vName] = vValue
end

function onUartDataReceived(data)
    string.gsub(data, '([^,]+)', splitVariableAndValue)

    for idx, v in pairs(VARIABLE_TABLE) do
      print(string.format("%s: %s", idx, v))
    end
end

function main() 
    setup(SSID, PASSWORD, connected_cb)
    uart.on("data", "\r", onUartDataReceived)
    
end

main()
