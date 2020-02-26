

This was my first solo react build. Took just under three weeks to create. My goal was to create an app where users could follow other users and give movie recommendations based on there wastch history.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can run this project using 

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can use this json database to get started.
If a movie poster no longer works you can just delete the poster all together from the site or use the edit to add a new image address.




{
  "users": [
    {
      "email": "t@t.com",
      "password": "1",
      "name": "Tyler D.",
      "id": 1
    },
    {
      "email": "b@b.com",
      "password": "1",
      "name": "Bob B.",
      "id": 2
    },
    {
      "email": "j@j.com",
      "password": "1",
      "name": "Jon J.",
      "id": 3
    },
    {
      "email": "m@m.com",
      "password": "1",
      "name": "Sean S.",
      "id": 4
    },
    {
      "email": "d@d.com",
      "password": "1",
      "name": "Dan D.",
      "id": 5
    },
    {
      "email": "e@e.com",
      "password": "1",
      "name": "Evan E.",
      "id": 6
    }
  ],
  "movies": [
    {
      "name": "Drive",
      "director": "Nicolas Winding Refn",
      "budget": "16 million USD",
      "summary": "Driver (Ryan Gosling) is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene (Carey Mulligan) and her young son, Benicio (Kaden Leos). When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
      "poster": "https://alternativemovieposters.com/wp-content/uploads/2016/03/signalnoise_drive.jpg",
      "userId": 1,
      "id": 1
    },
    {
      "id": 2,
      "name": "Jakie Brown",
      "director": "Quentin Tarantino",
      "genreId": 1,
      "summary": "When flight attendant Jackie Brown (Pam Grier) is busted smuggling money for her arms dealer boss, Ordell Robbie (Samuel L. Jackson), agent Ray Nicolette (Michael Keaton) and detective Mark Dargus (Michael Bowen) want her help to bring down Robbie. Facing jail time for her silence or death for her cooperation, Brown decides instead to double-cross both parties and make off with the smuggled money. Meanwhile, she enlists the help of bondsman Max Cherry (Robert Forster), a man who loves her.",
      "poster": "https://filmtoro.cz/img/film/4XVPYOdMAizdNMSwS0SK3fPJcvR.jpg",
      "userId": 1
    },
    {
      "id": 3,
      "name": "Hateful Eight",
      "director": "Quentin Tarantino",
      "genreId": 1,
      "budget": "44 million USD",
      "summary": "While racing toward the town of Red Rock in post-Civil War Wyoming, bounty hunter John 'The Hangman' Ruth (Kurt Russell) and his fugitive prisoner (Jennifer Jason Leigh) encounter another bounty hunter (Samuel L. Jackson) and a man who claims to be a sheriff. Hoping to find shelter from a blizzard, the group travels to a stagecoach stopover located on a mountain pass. Greeted there by four strangers, the eight travelers soon learn that they may not make it to their destination after all.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg",
      "userId": 2
    },
    {
      "id": 4,
      "name": "Kill Bill Vol. 1",
      "director": "Quentin Tarantino",
      "genreId": 1,
      "budget": "30 million USD",
      "summary": "A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies.",
      "poster": "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/films/kill_bill.jpg?itok=SVhD1ZRz&c=52f5523c73a1078f25cf52c5d0e495c8",
      "userId": 3
    },
    {
      "id": 6,
      "name": "Blade Runner 2049",
      "director": "Denis Villeneuve",
      "genreId": 1,
      "budget": "92.1 million USD",
      "summary": "Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years.",
      "poster": "https://resizing.flixster.com/U6wbBV7uAXUK_t6GTJ2mePaPIRQ=/206x305/v1.bTsxMjQ5NjIzMTtqOzE4MzI0OzEyMDA7MjY1Njs0MDk2",
      "userId": 3
    },
    {
      "id": 7,
      "name": "Joker",
      "director": "Todd Phillips",
      "genreId": 1,
      "budget": "62.5 million",
      "summary": "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      "userId": 3
    },
    {
      "id": 8,
      "name": "Ad Astra",
      "director": "James Gray",
      "genreId": 1,
      "budget": "$80 million",
      "summary": "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe.",
      "poster": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/dad5418b30c0e30c58b86126e97202cb_480x.jpg?v=1573572691",
      "userId": 1
    },
    {
      "id": 10,
      "name": "The Dark Knight",
      "director": "Christopher Nolan",
      "genreId": 1,
      "budget": "180 million USD",
      "summary": "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._AC_SL1500_.jpg",
      "userId": 2
    },
    {
      "id": 11,
      "name": "Inglorius Bastards",
      "director": "Quentin Tarantino",
      "genreId": 1,
      "budget": "70 million USD",
      "summary": "It is the first year of Germany's occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus, who seeks to avenge the Nazis' execution of her family.",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      "userId": 2
    },
    {
      "name": "Interstellar",
      "director": "Christopher Nolan",
      "summary": "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/716P1xCmnPL._AC_SY550_.jpg",
      "userId": 1,
      "id": 12
    },
    {
      "name": "The King",
      "director": "David Michôd",
      "summary": "Young Henry V encounters deceit, war and treachery after becoming King of England in the 15th century, in the aftermath of his brother's death.",
      "poster": "https://www.joblo.com/assets/images/joblo/posters/2019/10/the-king-poster.jpg",
      "userId": 3,
      "id": 13
    },
    {
      "name": "Mad Max Fury Road",
      "director": "George Miller",
      "summary": "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/817J4ESrRdL._AC_SY679_.jpg",
      "userId": 1,
      "id": 14
    },
    {
      "name": "Get Out",
      "director": "Jordan Peele",
      "summary": "Now that Chris (Daniel Kaluuya) and his girlfriend, Rose (Allison Williams), have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
      "userId": 3,
      "id": 15
    },
    {
      "name": "The Irishman",
      "director": "Martin Scorsese",
      "summary": "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/71Y5pMAw8rL._AC_SL1200_.jpg",
      "userId": 1,
      "id": 16
    },
    {
      "name": "Once Upon a Time in Hollywood",
      "director": "Quentin Tarantino",
      "summary": "Actor Rick Dalton gained fame and fortune by starring in a 1950s television Western, but is now struggling to find meaningful work in a Hollywood that he doesn't recognize anymore. He spends most of his time drinking and palling around with Cliff Booth, his easygoing best friend and longtime stunt double. Rick also happens to live next door to Roman Polanski and Sharon Tate -- the filmmaker and budding actress whose futures will forever be altered by members of the Manson Family.",
      "poster": "https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/06/IMG_9717.jpeg",
      "userId": 1,
      "id": 17
    },
    {
      "name": "Ex Machina",
      "director": "Alex Garland",
      "summary": "Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm's brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot. However, it soon becomes evident that Ava is far more self-aware and deceptive than either man imagined.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/71f6I4cjM7L._AC_SY679_.jpg",
      "userId": 2,
      "id": 18
    },
    {
      "name": "Bridman",
      "director": "Alejandro González Iñárritu",
      "summary": "Former cinema superhero Riggan Thomson (Michael Keaton) is mounting an ambitious Broadway production that he hopes will breathe new life into his stagnant career. It's risky, but he hopes that his creative gamble will prove that he's a real artist and not just a washed-up movie star. As opening night approaches, a castmate is injured, forcing Riggan to hire an actor (Edward Norton) who is guaranteed to shake things up. Meanwhile, Riggan must deal with his girlfriend, daughter and ex-wife.",
      "poster": "https://img.moviepostershop.com/birdman-movie-poster-2014-1020771721.jpg",
      "userId": 2,
      "id": 19
    },
    {
      "id": 20,
      "name": "Jurassic",
      "director": "Steven Spielberg",
      "summary": "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/51dZZ4pl-kL._AC_.jpg",
      "userId": 1
    },
    {
      "name": "Dunkirk",
      "director": "Christopher Nolan",
      "summary": "In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/61jphewUR6L._AC_SL1111_.jpg",
      "userId": 1,
      "id": 21
    },
    {
      "name": "us",
      "director": "jordan peele",
      "summary": "Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child. Haunted by a traumatic experience from the past, Adelaide grows increasingly concerned that something bad is going to happen. Her worst fears soon become a reality when four masked strangers descend upon the house, forcing the Wilsons into a fight for survival. When the masks come off, the family is horrified to learn that each attacker takes the appearance of one of them.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/61FWNPBWtmL._AC_SL1393_.jpg",
      "userId": 1,
      "id": 22
    }
  ],
  "followers": [
    {
      "followerId": 2,
      "userId": 1,
      "id": 1
    },
    {
      "followerId": 3,
      "userId": 1,
      "id": 2
    },
    {
      "followerId": 4,
      "userId": 1,
      "id": 6
    },
    {
      "followerId": 5,
      "userId": 1,
      "id": 7
    }
  ],
  "userMovies": [
    {
      "movieId": 6,
      "userId": 2,
      "id": 2
    },
    {
      "movieId": 7,
      "userId": 3,
      "id": 3
    },
    {
      "movieId": 2,
      "userId": 1,
      "id": 4
    },
    {
      "movieId": 7,
      "userId": 1,
      "id": 5
    },
    {
      "movieId": 20,
      "userId": 1,
      "id": 7
    },
    {
      "movieId": 10,
      "userId": 2,
      "id": 8
    },
    {
      "movieId": 14,
      "userId": 2,
      "id": 9
    },
    {
      "movieId": 12,
      "userId": 2,
      "id": 10
    },
    {
      "movieId": 14,
      "userId": 1,
      "id": 11
    },
    {
      "movieId": 17,
      "userId": 3,
      "id": 13
    }
  ],
  "messages": [
    {
      "id": 1,
      "message": "Hey Tyler, If you liked Jakie brown you should try The Hateful Eight or one of the other movies by Quintin tarintino",
      "date": 1580763313272,
      "userId": 3
    },
    {
      "id": 2,
      "message": "Hey Jon, I saw you have 1917 in your Favorites, you should try Dunkirk",
      "date": 1582566544671,
      "userId": 1
    },
    {
      "message": "i saw bob liked sci fi how about try blade runner",
      "date": 1582646889934,
      "userId": 1,
      "id": 3
    }
  ]
}



