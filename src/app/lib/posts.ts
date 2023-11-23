const postArray = [
  {
    id: 1,
    title: "Losing My Sanity",
    author: "InsanitySeeker",
    content:
      "I can't take it anymore! Every game is a descent into madness. FF, go next, and release me from this digital asylum. My team is driving me insane with their incompetence!",
  },
  {
    id: 2,
    title: "Screaming Into the Void",
    author: "VoidScreamer",
    content:
      "AAAAHHHH! Another game, another set of brain-dead teammates. FF, go next, and spare me from this cacophony of idiocy. I'm screaming into the void, and it's staring back at me!",
  },
  {
    id: 3,
    title: "Elo Nightmare Unleashed",
    author: "NightmareOnEloStreet",
    content:
      "Nightmare after nightmare! My Elo is haunted by the ghosts of bad players. FF, go next, and banish me from this cursed realm. I'm trapped in a nightmare of incompetence!",
  },
  {
    id: 4,
    title: "Smashing My Keyboard",
    author: "KeyboardSmasher",
    content:
      "SMASH! That's the sound of my keyboard meeting its end. FF, go next, and maybe I'll find inner peace in the wreckage. My team is pushing me to the edge of sanity!",
  },
  {
    id: 5,
    title: "Reality Distorting Loss Streak",
    author: "RealityBender",
    content:
      "Reality is bending, and I'm losing my grip! FF, go next, and break the chains of this distorted existence. My teammates are unraveling the fabric of reality, one lost game at a time!",
  },
  {
    id: 6,
    title: "Rage Quitting Again",
    author: "QuitMaster",
    content:
      "I'm on the brink of rage quitting. FF, go next, or I'll unleash my fury on the next unsuspecting teammate. It's a war zone out there, and I'm ready to abandon ship!",
  },
  {
    id: 7,
    title: "Toxicity Overload",
    author: "ToxicOverlord",
    content:
      "Toxicity levels off the charts! FF, go next, and spare yourself from the nuclear meltdown of my rage. My teammates are like a radioactive cloud poisoning my gaming experience!",
  },
  {
    id: 8,
    title: "Insults Galore",
    author: "InsultMaster",
    content:
      "I've run out of insults for my teammates. FF, go next, and give me a fresh supply of creative insults. It's an insult carnival out here, and my team is the main attraction!",
  },
  {
    id: 9,
    title: "FF = Freedom From Fools",
    author: "FreedomSeeker",
    content:
      "FF, go next, and grant me freedom from these fools. My team is like a flock of clueless pigeons, and I need to spread my wings in a new game!",
  },
  {
    id: 10,
    title: "Unleashing the Beast",
    author: "BeastUnleashed",
    content:
      "The beast within is awakening! FF, go next, or witness the untamed fury of my wrath. My teammates are poking the sleeping giant, and it's time for them to face the consequences!",
  },
  {
    id: 11,
    title: "Destroyed Again!",
    author: "RageMasterX",
    content:
      "Seriously, what is wrong with my team? Another pathetic loss in League of Legends. FF, go next and spare me from these brain-dead teammates!",
  },
  {
    id: 12,
    title: "Team of Feeders",
    author: "ToxicWarrior",
    content:
      "I can't believe I'm stuck with a team that plays like bots. FF, go next! I'd rather gouge my eyes out than endure another game with these losers.",
  },
  {
    id: 13,
    title: "Elo Hell Confirmed",
    author: "SaltLord",
    content:
      "I've officially entered Elo Hell. These idiots don't even know the basics. FF, go next or I'll lose my mind. It's like playing with monkeys smashing keyboards!",
  },
  {
    id: 14,
    title: "Fed Every Game",
    author: "AngryGamer91",
    content:
      "Why does every game have a bunch of feeders? I can't carry this garbage team. FF, go next, and maybe I'll get teammates with a brain for once!",
  },
  {
    id: 15,
    title: "Trash Teammates Alert",
    author: "ToxicAvenger",
    content:
      "Just had the pleasure of playing with a team of complete trash. Do they even know how to use their abilities? FF, go next, and maybe I'll get teammates who aren't mentally challenged!",
  },
  {
    id: 16,
    title: "Report My Team, Please",
    author: "ReportMeIfYouCan",
    content:
      "Just lost another game thanks to my boosted animals of teammates. FF, go next, and someone please report these idiots. I can't carry this trash anymore!",
  },
  {
    id: 17,
    title: "Uninstalling This Garbage",
    author: "UninstallMaster",
    content:
      "I'm done with this garbage game. The matchmaking is rigged, and my teammates are braindead. FF, go next, and I'm uninstalling this trash. Riot, fix your broken game!",
  },
  {
    id: 18,
    title: "LP Wasted Again",
    author: "LPBurner",
    content:
      "Wasted another hour of my life on this trash. FF, go next, and give me back my LP that these idiots cost me. I deserve Challenger, not this silver elo hell!",
  },
];

export function getPosts() {
  return postArray;
}

export function getPostById(getId: number) {
  return postArray.filter((e) => e.id === getId);
}
