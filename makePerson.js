
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var name; 
    this.getFullName = () => name.join(' ');
    this.getFirstName = ()=> name[0];
    this.getLastName = () => name[1];
    this.setFullName = (fullName) => {name = fullName.split(' ');};
    this.setFirstName = (firstName) => {name[0] = firstName;};
    this.setLastName = (lastName) => {name[1] = lastName;};
    this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();
