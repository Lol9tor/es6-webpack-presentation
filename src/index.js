import App from './App';
import Child from './Child';

let app = new App('John', 'Smith');
console.log(app);

let child = new Child('James', "Connor");
console.log(child.greet());

