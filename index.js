function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = function () {
      
      return `${this.firstName} ${this.lastName}` 
    }
}

let named = new NamedOne("Mikołaj", "Walanus");

named.firstName = "miki";
named.fullName();
// named.firstName;


