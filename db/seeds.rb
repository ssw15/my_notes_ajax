100.times do
  Note.create content: Faker::Hacker.say_something_smart
end
