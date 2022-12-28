Post.destroy_all
User.destroy_all
Challenge.destroy_all

puts '🌱 Seeding Users...'

miguel = User.create(full_name: "Miguel Nazario", username: "duhitz_miguel", email: "mnazario@gmail.com", password: "miggy123", profile_pic: "/images/duhitz_miguel.jpeg", points: 21)
peace = User.create(full_name: "Peace Prosperity", username: "peace_and_prosperity", email: "peace@gmail.com", password: "prosperityroom", profile_pic: "/images/PeaceUserProfilePic.jpg", points: 20)
u3 = User.create(full_name: "Tunisia User", username: "t_user", email: "t@gmail.com", password_digest: "t123", profile_pic: "https://i.pinimg.com/originals/16/f1/54/16f154ab0ac5bce014f79d649605eb9c.png", points: 2)
u4 = User.create(full_name: "Gerald User", username: "g_user", email: "g@gmail.com", password_digest: "g123", profile_pic: "https://miro.medium.com/max/1400/1*bbw0fG-fExcsei5XFKEv6Q.png", points: 4)
u5 = User.create(full_name: "Bridget User", username: "b_user", email: "b@user.com", password_digest: "b123", profile_pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png", points: 6)

puts '🌱 Seeding Challenges...'

astoria_park = Challenge.create(image: "/images/challenges/AstoriaParkBridge.jpeg", location: "Astoria Park", latitude: 3987, longitude: 2853, hint: "Manhattan looks great from this view.", difficulty: 2)
main_street = Challenge.create(image: "/images/challenges/MainStreet.jpeg", location: "Main St., Flushing", latitude: 2929, longitude: 4581, hint: "Food, Culture, and Books!", difficulty: 4)
lic_library = Challenge.create(image: "/images/challenges/LICLibrary.jpeg", location: "Gantry Plaza State Park", latitude: 4425, longitude: 2968, hint: "Might need a restroom break first...", difficulty: 1)
pepsi_cola = Challenge.create(image: "/images/challenges/PepsiCola.jpeg", location: "Gantry Plaza State Park", latitude: 5055, longitude: 2954, hint: "A refreshing drink for a beautiful day.", difficulty: 5)
sunnyside = Challenge.create(image: "/images/challenges/Sunnyside.jpeg", location: "Sunnyside", latitude: 3426, longitude: 760, hint: "Don't look up.", difficulty: 3)
lic_port = Challenge.create(image: "/images/challenges/LICPort.jpeg", location: "Gantry Plaza State Park", latitude: 4202, longitude: 3226, hint: "If you were a boat, you would like the view too.", difficulty: 4)
corona_plaza = Challenge.create(image: "/images/challenges/CoronaPlaza.jpeg", location: "Corona", latitude: 5946, longitude: 4356, hint: "Smell all that food? That's Corona.", difficulty: 2)

puts '🌱 Seeding Posts...'

p1 = Post.create(image: "/images/userPosts/AstoriaPark_Peace_User.jpeg", date: 20220501, latitude: 3985, longitude: 2851, user_id: peace.id, challenge_id: astoria_park.id)
p2 = Post.create(image: "/images/userPosts/MainSt_duhitz_Miguel.jpeg", date: 20220503, latitude: 2927, longitude: 4579, user_id: miguel.id, challenge_id: main_street.id)
# p3 = Post.create(image: "/images/userPosts/LICLibrary_Peace_User.jpeg", date: 20220504, latitude: 4426, longitude: 2962, user_id: peace.id, challenge_id: lic_library.id)
p4 = Post.create(image: "/images/userPosts/PepsiCola_duhitz_Miguel.jpeg", date: 20220506, latitude: 5053, longitude: 2952, user_id: miguel.id, challenge_id: pepsi_cola.id)
p5 = Post.create(image: "/images/userPosts/Sunnyside_duhitz_Miguel.jpeg", date: 20220509, latitude: 3420, longitude: 779, user_id: miguel.id, challenge_id: sunnyside.id)
p6 = Post.create(image: "/images/userPosts/Sunnyside_Peace_User.jpeg", date: 20220508, latitude: 3404, longitude: 760, user_id: peace.id, challenge_id: sunnyside.id)
p7 = Post.create(image: "/images/userPosts/LICPort_duhitz_Miguel.jpeg", date: 20220509, latitude: 4194, longitude: 3237, user_id: miguel.id, challenge_id: lic_port.id)

puts '🌱 Seeding Done...'
