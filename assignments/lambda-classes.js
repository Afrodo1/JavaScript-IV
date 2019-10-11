// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, i am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(insAttr){
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    
    }
    demo(sub){
        return `Today we are learning about ${sub}.`;
    }
    grade(Student, subject){
        return `${Student.name} recieves a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(stuAttr){
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listSubjects(){
        return console.log(this.favSubjects);
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challnege on ${subject}`;
    }
}

class tL extends Instructor{
    constructor(tLAttr){
        super(tLAttr);
        this.gradClassName = tLAttr.gradClassName;
        this.favInstructor = tLAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel} standy times!`;
    }
    debugsCode(Student, subject){
        return `${this.name} dubugs ${Student.name}'s code on ${subject}`;
    }
}




const Pace = new Instructor({
    name: 'Pace Ellsworth',
    age: 28,
    location: 'Arizona',
    specialty: ['JavaScript' , 'CSS' , 'HTML'],
    favLanguage: 'JavaScript',
    catchPhrase: "I don't have one"
})


const Dominic = new Student({
    name: 'Dominic Bridgette',
    age: 25,
    location:'California',
    previousBackground: 'Dabbled in Java',
    className: 'WEBpt11',
    favSubjects: ['JavaScript' , 'CSS'],

})

const Samir = new tL({
    name: 'Samir Lilienfeld',
    age:27,
    location: 'North Carolina',
    gradClassName: 'WEB5',
    favInstructor: 'Pace'
})

console.log(Pace);
console.log(Pace.demo('CSS'));
console.log(Pace.grade(Dominic, 'JavaScript'));
Dominic.listSubjects();
console.log(Dominic.PRAssignment('JavaScript IV'));
console.log(Dominic.sprintChallenge('JavaScript IV'));
console.log(Samir.standUp('webpt11_samir'));
console.log(Samir.debugsCode(Dominic, 'JavaScript IV'));
