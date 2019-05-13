puts "Hello, the time is: #{Time.now}"
puts ""
# time
# now = Time.now
# dob = Time.new(200,1,1)
# puts "my dob in seconds is #{now-dob.to_i}"

# guess a number background
# numbers = [1,2,3,4,5,6,7,8,9,10]
# secretnumber = numbers[rand(numbers.length)]
secretnumber = rand(10)
numoftries = 3
counttries = 0

# input variables
guessednumber = ""

# output variable
output = ""
puts "secret number is #{secretnumber}"

# processing
loop do
    puts "What is my secret number?"
    guessednumber = gets
    counttries = counttries + 1
    correct = (guessednumber == secretnumber ? "correct" : "incorrect")
    puts "You answer is #{correct}"

    break if (counttries == numoftries) || (correct == "correct")
end

unless secretnumber
    puts secretnumber
end
