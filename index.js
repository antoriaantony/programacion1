let usuarios = [] // array o lista de usuarios
let usuario={ // objeto usuario
    nombre: "Antony", // propiedad nombre 
    apellido: "Antoria", // propiedad apellido
    edad: 19, // propiedad edad
    ci: 463266890, // propiedad ci
    calificacion:3 // propiedad calificacion
 } //objeto
 let otroUsuario={
    nombre: "Ignacio",
    apellido: "Silva",
    edad: 18,
    ci: 463266670,
    calificacion:6
 }
let otroUsuario1={
    nombre: "Daniel",
    apellido: "Pereira",
    edad: 30,
    ci: 6763266670,
    calificacion:9
}
let otroUsuario2={
    nombre: "Tatiana",
    apellido: "Quintana",
    edad: 38,
    ci: 1233266670,
    calificacion:6
}
let otroUsuario3={
    nombre: "Nicolas",
    apellido: "Barone",
    edad: 35,
    ci: 863266670,
    calificacion:8
}
 console.log(usuario)

usuarios.push(usuario, otroUsuario1, otroUsuario2, otroUsuario3) // agregamos los objetos al array o lista
// let buscar_usuario = usuarios.find(a => a.edad >= 20) //busca 1 elemento
//let buscar_usuario = usuarios.find(a)
console.log(usuarios)
usuarios.find ((nombre)) //busca 1 elemento
usuario.filter () //busca todos
console.log(usuario)

arios.push(usuario,usuario2) // Agregamos los objetos
let buscar_usuario = usuarios.find(a => a.nombre ==="Antony")
let buscar_usuarios= usuarios.filter(a => a.nombre ==="Antony")

console.log(buscar_usuario) 
console.log(buscar_usuarios) 
/*
let nombre = "Antony" //variable
let apellido = "Antoria"
let edad =19
let ci=463266890
let calificacion=3
if(calificacion >=7) { console.log ("aprobado")
} 

else {
    console.log ("reprobado")
}
    
console.log(nombre,apellido,edad,ci,calificacion) // Mostrar la variable
*/
