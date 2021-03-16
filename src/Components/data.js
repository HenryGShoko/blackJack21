const dealer = {
  name: "Dealer",
  userImg: "/assets/images/dealer.png",
  hand: [
    { image: "/assets/images/jake-of-spades.png", weight: 10 },
    { image: "/assets/images/nine-of-hearts.png", weight: 9 },
  ],
  id: 1,
  points: 19,
  status: "",
};

let players = [
  {
    name: "Learmany",
    userImg: "/assets/images/user1.png",
    hand: [
      { image: "/assets/images/Ace_of_spades.svg.png", weight: 1 },
      { image: "/assets/images/seven-of-hearts.png", weight: 7 },
      { image: "/assets/images/Ace_of_diamonds.svg.png", weight: 1 },
    ],
    id: 1,
    points: 9,
    status: "",
    win: false,
  },
  {
    name: "Andrew",
    userImg: "/assets/images/user2.png",
    hand: [
      { image: "/assets/images/king_of_diamonds.jpg", weight: 10 },
      { image: "/assets/images/four-of-spades.png", weight: 4 },
      { image: "/assets/images/four-of-clubs.png", weight: 4 },
    ],
    id: 2,
    points: 18,
    status: "",
    win: false,
  },
  {
    name: "Billy",
    userImg: "/assets/images/user3.png",
    hand: [
      { image: "/assets/images/two-of-diamond.png", weight: 2 },
      { image: "/assets/images/two-of-spades.png", weight: 2 },
      { image: "/assets/images/four-of-clubs.png", weight: 4 },
      { image: "/assets/images/four-of-diamond.png", weight: 4 },
      { image: "/assets/images/two-of-hearts.png", weight: 2 },
    ],
    id: 3,
    points: 14,
    status: "",
    win: false,
  },
  {
    name: "Carla",
    userImg: "/assets/images/user4.png",
    hand: [
      { image: "/assets/images/queen-of-clubs.jpg", weight: 10 },
      { image: "/assets/images/six of-spades.png", weight: 6 },
      { image: "/assets/images/nine-of-diamonds.png", weight: 9 },
    ],
    id: 4,
    points: 25,
    status: "",
    win: false,
  },
];

const checkResult = () => {

  // players and their status

  players.map((p) => {
    if (p.hand.length === 2 && p.points === 21) {
      p.status = "Congratulation Blackjack";
      p.win = true;
    } else if (
      (p.points >= dealer.points && p.points <= 21) ||
      (p.points === 21 && p.hand.length === 4)
    ) {
      p.status = `${p.name} beat dealer with ${
        p.points - dealer.points
      } points.`;
      p.win = true;
    } else if (p.points < dealer.points || p.points > 21) {
      p.status = `${p.name} lost`;
      p.win = false;
    } else if (dealer.points === p.points) {
      p.status = "Draw";
    }

    return p;
  });

  // dealer

  const dealerStatus = players.filter((p) => p.points > dealer.points && p.win);
  const names = dealerStatus.map((e) => e.name).join();
  if (dealerStatus && names) {
    dealer.status = `Dealer Lost with ${names}`;
  } else {
    dealer.status = "Dealer Wins";
  }
};

checkResult();

export { dealer, players };
