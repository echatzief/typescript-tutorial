const num1 = document.querySelector("#num1")! as HTMLInputElement
const num2 = document.querySelector("#num2")! as HTMLInputElement
const button = document.querySelector("#but")

function addNumbers(n1:number,n2:number){
	return n1+n2
}

button.addEventListener("click",()=>{
	console.log(addNumbers(Number(num1.value),Number(num2.value)))
})
