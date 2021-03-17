    //This is my first JavaScript code!
    console.log('Hello World');

    const intrestRate = 0.3;
    console.log(intrestRate);

    let person = {
        name: 'Orlando',
        age: 21
    };

    person['name'] = 'bruh';

    console.log(person.name);

    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 'green';
    selectedColors[3] = 10;

    console.log(selectedColors.length);

    function greet(name, lastName){
        console.log('Hello',name,lastName);
    }

    function square(number){
        return number * number;
    }

    let number = square(3);
    console.log(number);
    
    greet('Jeff','Monica');
    greet('Mary','Lewenski');