export const obtnerDiferenciaYear = year =>{
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca){
    let incremento

    switch (marca) {
        case '1':
            incremento = 1.30;
            break;
        case '2':
            incremento = 1.15;
            break;
        case '3':
            incremento = 1.07;
            break;
        case '4':
            incremento = 1.03;
            break;
    
        default:
            break;
    }

    return incremento;
}

export function calcularPlan(plan){
    return plan === '1' ? 1.20 : 1.50;
}

export function formatoDinero(cantidad){
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency : 'USD',
    })
}