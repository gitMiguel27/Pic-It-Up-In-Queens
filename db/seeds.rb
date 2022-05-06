puts '🌱 Seeding Users...'

miguel = User.create(full_name: "Miguel Nazario", username: "duhitz_miguel", email: "mnazario@gmail.com", password: "miggy123", profile_pic: "/images/duhitz_miguel.jpeg", followers: 299)
peace = User.create(full_name: "Peace Prosperity", username: "peace_and_prosperity", email: "peace@gmail.com", password: "prosperityroom", profile_pic: "/images/PeaceUserProfilePic.jpg", followers: 25000)
#  = User.create(full_name: "", username: "", email: "", password_digest: "", profile_pic: "", followers: )

puts '🌱 Seeding Challenges...'

astoria_park = Challenge.create(image: "/images/challenges/AstoriaParkBridge.jpeg", location: "Astoria Park", latitude: 3987, longitude: 2853, hint: "Manhattan looks great from this view.", difficulty: 2)
main_street = Challenge.create(image: "/images/challenges/MainStreet.jpeg", location: "Main St., Flushing", latitude: 2929, longitude: 4581, hint: "Food, Culture, and Books!", difficulty: 4)
lic_library = Challenge.create(image: "/images/challenges/LICLibrary.jpeg", location: "Gantry Plaza State Park", latitude: 4425, longitude: 2968, hint: "Might need a restroom break first...", difficulty: 1)
pepsi_cola = Challenge.create(image: "/images/challenges/PepsiCola.jpeg", location: "Gantry Plaza State Park", latitude: 5055, longitude: 2954, hint: "A refreshing drink for a beautiful day.", difficulty: 5)

puts '🌱 Seeding Posts...'

p1 = Post.create(image: "/images/userPosts/AstoriaPark_Peace_User.jpeg", date: 20220501, user_id: peace.id, challenge_id: astoria_park.id)
p2 = Post.create(image: "/images/userPosts/PepsiCola_duhitz_Miguel.jpeg", date: 20220501, user_id: miguel.id, challenge_id: pepsi_cola.id)
p3 = Post.create(image: "/images/userPosts/MainSt_duhitz_Miguel.jpeg", date: 20220501, user_id: miguel.id, challenge_id: main_street.id)
# p4 = Post.create(image: "", date: , user_id: , challenge_id: )
# p5 = Post.create(image: "", date: , user_id: , challenge_id: )

puts '🌱 Seeding Done...'
