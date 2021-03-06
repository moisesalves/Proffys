const subjects = [
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "História",
    "Geografia",
    "Matemática",
    "Português", 
    "Química",
]

const weekdays = [    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Functions
function getSubject(subjectNumber){
const position = +subjectNumber -1
return subjects[position]
}

function convertHoursToMinute(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)

}

module.exports ={
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute
}