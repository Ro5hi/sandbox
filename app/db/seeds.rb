# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Subscription.create({id: 1, name: 'Netflix', category: 'Other', link: 'http://netflix.com', price: '15', user_id: 1})
    Subscriber.create({id: 1, name: "Name", email: "email@email.com"})