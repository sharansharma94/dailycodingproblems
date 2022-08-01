function cons(a, b) {
    return (f) => {
        return f(a, b)
    }
}



function car(f) {
    f((a, b) => console.log(a))
}

function cdr(f) {

    f((a, b) => console.log(b))
}



car(cons(3, 4)) // 3

cdr(cons(3, 4)) // 4