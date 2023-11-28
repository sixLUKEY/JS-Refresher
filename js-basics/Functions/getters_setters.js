const person = {
    firstName: 'Luke',
    lastName: 'Evertson',
    get fullName(){
        return `${ person.firstName } ${ person.lastName }`
    },
    set fullName( value ){
        const parts = value.split( ' ' );
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Lukas Lucas'

// getters => acess properties
// setters => change ( mutate ) them

console.log( person);
