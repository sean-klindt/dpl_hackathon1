# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  user = User.create(
    name: Faker::FunnyName.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  5.times do
    trip = Trip.create(
      name: Faker::Superhero.name,
      duration: Faker::Number.between(from: 1, to: 14)
    )

    location = Location.create(
      name: Faker::Address.state,
      trip_id: trip.id
     )

     Address.create(
       street_address: Faker::Address.full_address,
       location_id: location.id
     )

  end
end

puts "data seeded"

# ----------------------------------------------------------


# 5.times do
#   user = User.create(
#     name: Faker::Hobby.activity
#   )

#   3.times do
#     user = User.create(
#       first_name: Faker::FunnyName.name,
#       last_name: Faker::Name.last_name
#     )

#     Enrollment.create(
#       role: @roles.sample,
#       user_id: user.id,
#       course_id: course.id,
#     )
#   end
# end

# puts 'data seeded'