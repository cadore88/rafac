let ListaAlunos = ["Marcos", "Juliana", "Bianca", "Rafael", "Tião"];
//console.log(ListaAlunos.length)

for (let index = 0; index < ListaAlunos.length; index++) {
   // const element = array[index];
   
     console.log(index);
   if (index == 0) {
      console.log ("Zero localizado: " + ListaAlunos [index]);
   }     else if (index % 2 != 0) {
      console.log ("Número ímpar localizado: " + ListaAlunos [index] );
   }     else {console.log ("Número par localizado: " + ListaAlunos [index])};

   }

