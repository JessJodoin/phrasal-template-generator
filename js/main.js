var colour;
var creature;
var adj;
var pstvrb;
var storyType;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');

creature = prompt('A creature (dragon, moth, etc.)');

adj = prompt('An adjective (beautiful, super, etc.)');

pstvrb = prompt('A past tense verb (ran, burped, etc.)');

storyType = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\n\nEnter the letter below:');

document.documentElement.style.setProperty('--color', colour);

switch (storyType.toLowerCase()) {
  case 'a' :
    document.write(`After snacking on <span>${adj}</span> treats, the <span>${colour}</span> bellied <span>${creature}</span> <span>${pstvrb}</span> for hours.`);
    break;

  case 'b' :
    document.write(`Amelia <span>${pstvrb}</span> through the <span>${adj}</span> <span>${colour}</span> nebula escaping the space <span>${creature}</span>.`);
    break;

  case 'c' :
    document.write(`Jackson chose his <span>${adj}</span>, <span>${colour}</span> <span>${creature}</span> card and <span>${pstvrb}</span> it to the table knowing he won.`);
    break;
}
