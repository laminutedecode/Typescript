"use strict";
// Les énumérations (ou enums) sont un type de données dans TypeScript qui permettent de définir un ensemble de valeurs nommées. Les énumérations facilitent la gestion des constantes dans votre code en leur attribuant des noms significatifs plutôt que de simplement utiliser des valeurs numériques ou des chaînes de caractères. Voici une explication détaillée sur les énumérations :
// Déclaration d'une énumération :
// Vous pouvez déclarer une énumération en utilisant le mot-clé enum, suivi du nom de l'énumération et des valeurs entre accolades. Voici un exemple :
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
//   }
//   Utilisation d'une énumération :
// Vous pouvez utiliser les valeurs définies dans une énumération en utilisant la notation pointée (nomEnum.valeur). Voici quelques exemples :
// let direction: Direction = Direction.Up;
// console.log(direction); // Affiche 0 (valeur de l'énumération Direction.Up)
// Valeurs des énumérations :
// Par défaut, les valeurs d'une énumération sont des nombres entiers qui commencent à 0 et s'incrémentent automatiquement. Cependant, vous pouvez spécifier des valeurs personnalisées pour chaque élément de l'énumération. Voici un exemple :
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
console.log(Direction[1]); // Affiche "Up" (nom de l'énumération associé à la valeur 1)
//   Utilisation des énumérations avec des valeurs personnalisées :
// Les énumérations sont souvent utilisées pour définir des constantes avec des valeurs spécifiques. Voici un exemple :
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Green"] = "#00FF00";
    Color["Blue"] = "#0000FF";
})(Color || (Color = {}));
let backgroundColor = Color.Red;
//   Utilisation des énumérations avec des méthodes :
// Vous pouvez également ajouter des méthodes aux énumérations en utilisant des membres de fonction. Voici un exemple :
class Size {
    static getDescription() {
        return "This is a " + this.toString() + " size.";
    }
}
Size.Small = "S";
Size.Medium = "M";
Size.Large = "L";
Size.XLarge = "XL";
console.log(Size.Medium); // Affiche "M"
console.log(Size.getDescription()); // Affiche "This is a function getDescription() { return "This is a " + this.toString() + " size."; } size."
//   Les énumérations sont utiles pour représenter des jeux de valeurs prédéfinies dans votre code. Elles améliorent la lisibilité, facilitent la maintenance et aident à éviter les erreurs de saisie dans votre code en utilisant des noms significatifs plutôt que des valeurs arbitraires.
