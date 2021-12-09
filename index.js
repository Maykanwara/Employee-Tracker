const inquier = require('inquier')
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'rootroot1',
    database : 'hw_demo'
});

function mainQs() {
    inquier.prompt([
        {
            name: 'command',
            type: 'list',
            choices: [
                'View Animals',
                'View Species',
                'Add Animal',
                'Add Species'
            ]
        }
    ]).then(fuction(answers) {
        console.log('answers', answers)

        switch(answers, command){
            case 'View Animals':
                viewAnimals()
                break;


            case 'View Species':
                viewSpecies()
                break;

            case 'View Animals':
                    viewAnimals()
                break;


            case 'View Animals':
                        viewAnimals()
                break;


mainQs();
            function viewAnimals() {
                console.log('view animals')

            
            function viewSpecies() {
                console.log('view spec time')

            function addAnmals() {
                connection.query(SELECT * FROM species' , function(err, results) {
                    var cleanArray = []
                    for (let i = 0; i < results.length; i++) { 
                        var obj = {
                            name: results[i].name,
                            value: results[i].id
                    }
                    cleanArray.push(obj);
                }   
                
                inquier.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is your name?'
                    },
                    {
                        type: 'input',
                        name: 'age',
                        message: 'What is your age'
                    },
                    {
                        type: 'input',
                        name: 'favColor',
                        message: 'What is your favColor'
                    },
                    {
                        type: 'list',
                        name: 'species',
                        message: 'What is your species!!!!!'
                        choices: cleanArray
                    },

                ]).then(function(answers) {
                    console.log('inside .then of add species!!!', answers);


                    connection.query(
                        'INSERT INTO animals (name, age, favColor, species_id) VALUES)
                        [answers.name, answers.ago, answers.favColor, answers.species]
                        fuction(err, result) {
                            console.log('WE DID IT', result)
                            mainQs()
                        }
                    )
                }




                })
            





        
}





