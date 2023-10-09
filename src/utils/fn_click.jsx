export default function fn_click (a, clase){

    let lugar = a.currentTarget;
    lugar.classList.toggle(clase);
alert(lugar.classList)
}
