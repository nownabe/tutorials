require "open-uri"
require "dotenv"

Dotenv.load

BASE_URL = "http://api.openweathermap.org/data/2.5/forecast"
API_KEY = ENV["OPEN_WEATHER_MAP_API_KEY"]

require "json"
require "open-uri"
require "pp"

# response = open(BASE_URL + "?q=Akashi-shi,JP&APPID=#{API_KEY}")
# response = open(BASE_URL + "?id=1859171&APPID=#{API_KEY}")
# response = open(BASE_URL + "?lat=34&lon=135&APPID=#{API_KEY}")
# response = open(BASE_URL + "?zip=673-0877,JP&APPID=#{API_KEY}")
response = open(BASE_URL + "?id=1847966&APPID=#{API_KEY}")
puts JSON.pretty_generate(JSON.parse(response.read))
