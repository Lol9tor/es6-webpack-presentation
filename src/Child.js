import App from './App';

export default class Child extends App {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.firstName = `Mr. ${firstName}`;
    }

    greet() {
        return `Hello ${super.getFullName()}`;
    }
}