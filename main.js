let asked_string = prompt("Veuillez insérer une phrase");
alert("Votre phrase a une longueur de caractères de : " + asked_string.length);
function first_letter_uppercase(phrase) {
  return phrase.slice(0, 1).toUpperCase();
}
function drop_last_letter(phrase) {
  return phrase.slice(0, asked_string.length - 1);
}
alert(
  "Votre phrase avec la premiere lettre en majuscule et la derniere lettre retiré est : " +
    drop_last_letter(
      first_letter_uppercase(asked_string).concat(
        asked_string.slice(1, asked_string.length - 1)
      )
    )
);
console.log(
  drop_last_letter(
    first_letter_uppercase(asked_string).concat(
      asked_string.slice(1, asked_string.length - 1)
    )
  )
);
