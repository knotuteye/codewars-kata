function friend(friends) {
  return friends.filter((f) => f.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
