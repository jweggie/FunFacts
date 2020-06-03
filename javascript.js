var facts = [
	'Fun Fact: Penguins are actually completely white, their black coats are just that - coats!',
	'Fun Fact: Waffles are actually derived from the French Croissant, and were originally made using dough rather than a batter. Using batter for waffles became popularized by the Dutch in the 1950s.',
	'Fun Fact: Most urban birds are actually more closely related to fish than to other avian animals such as chickens or flamingos.',
	'Fun Fact: Harry Potter is actually a work of non-fiction, this was confirmed in an interview with J.K. Rowling conducted by the BBC in 2014.',
	'Fun Fact: There are more LEGOs produced every year than atoms in the visible universe!',
	'Fun Fact: If you built a tower out of every paper towel roll used every year in the United States, it would crush itself under its own weight.',
	'Fun Fact: There are more butterflies in your house than nuclear bombs.',
	'Fun Fact: Clouds are actually completely solid, floating landmasses colonized by the Canadian Government in 1976 under Pierre Trudeau.',
	'Fun Fact: Vanilla is just chocolate that\'s been dyed white',
	'Fun Fact: Strawberries are actually vegetables',
	'Fun Fact: The Moon is a projection on the night sky, and the reason we have phases of the moon is because in order to save energy not every bulb in the lamp is turned on every night.',
	'Fun Fact: The Sun is not actually a star, but in fact a planet.',
	'Fun Fact: The coolest planet is Pluto.',
	'Fun Fact: The deepest point on earth is actually in the Grand Canyon, not the Marianas Trench.',
	'Fun Fact: Cardboard is made purely from recycled Hallmark holiday cards.',
	'Fun Fact: The coolest number in existence is 7.',
	'Fun Fact: The answer to a majority of math problems is 23.',
	'Fun Fact: Most pillows are made from dried snow.',
	'Fun Fact: All tress are dead giraffes.',
	'Fun Fact: The dinosaurs were covered in fur and barked like dogs. They were basically Clifford but prehistoric.',
	'Fun Fact: The coolest dinosaur is the iguanadon because it has the latest bed time (9:30).',
	'Fun Fact: The most dangerous predator of all time is the gold fish.',
	'Fun Fact: All dogs named Max are spawns of satan.',
	'Fun Fact: Cars function by having a little rabbit under the hood running on a treadmill.'
]

function newFact() {
	var randomNumber = Math.floor(Math.random() * (facts.length));
	document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}
