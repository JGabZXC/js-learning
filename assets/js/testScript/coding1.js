const gab = [
  "gab",
  "lopez",
  2003,
  "student",
  ["Friend1", "Friend2", "Friend3"],
];

for (let i = gab.length - 1; i >= 0; i--) {
  console.log(i, gab[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting  exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
