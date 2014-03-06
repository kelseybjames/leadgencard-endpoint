require 'sinatra'
require 'logger'

get '/' do
  "GET request"
  raw = request.env["rack.input"].read
  puts "\n\n request was: #{raw} \n\n"
  logger.info(request.env.inspect)
end

post '/' do
  puts "POST start: " + request["name"] + " | " + request["email"] + " | " + request["screen_name"] + " | " + request["token"] + " | " + request["card"] + " | " + request["testCustomHiddenField"] + " | POST end"
end

