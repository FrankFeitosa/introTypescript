function soma(num1:number, num2:number): number {
    return num1 + num2
}

function calcularNota(notas:number[]): number {
        const total: number = notas.reduce((acc: number, nota: number) => acc + nota,0)
        return total / notas.length
}

console.log(calcularNota([10,3,5,9]));
