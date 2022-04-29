# MonitoringApi
monitor server information

![image](https://user-images.githubusercontent.com/1637696/165881092-6e2bc50b-0d94-4b09-aee4-e6ebe923563e.png)

# End Points
### Check
url: http://localhost:9000/api/check

response:
```json
{
	"totalMemory": 34299437056,
	"freeMemory": 18762285056,
	"hostName": "DESKTOP-FT1HVFE",
	"uptime": 1025752,
	"operatingSystem": "Windows 10 Pro",
	"operatingSystemVersion": "10.0.19044"
}
```

### Heartbeat
url: http://localhost:9000/api/heartbeat

response:
```json
{
	"currentDate": 1651168188044
}
```
