// let a = 'sdfsdf'
// let b = 1235
// let c = false
// let d = 125n
// let e = null
// let f
// let g = '69' - '25'

// alert(typeof(Boolean(a)))
// alert(a)
// alert(typeof(String(b)))
// alert(b)
// alert(typeof(Number(c)))
// alert(c)
// alert(typeof(String(d)))
// alert(d)
// alert(typeof(Boolean(e)))
// alert(e)
// alert(typeof(String(f)))
// alert(f)
// alert(typeof(String(g)))
// alert(g)





// 15 

// let s = prompt('S круга=')
// let d = Math.sqrt(4 * s / 3.14)
// let l = 3.14 * d
// alert(`Диаметр круга=${d}, длина окружности=${l}.`)

// let r1 = prompt('r1=')
// let r2 = prompt('r2=')
// let distance = Math.abs(r2-r1)
// alert(`Расстояние между двумя точками на числовой оси=${distance}`)

// let A = prompt('A=')
// let B = prompt('B=')
// let C = prompt('C=')
// let distAC = Math.abs(C-A)
// let distBC = Math.abs(C-B)
// let sum = distAC + distBC
// alert(`Длина АС=${distAC}, длина ВС=${distBC}, сумма этих отрезков=${sum}`)

// let A = prompt('A=')
// let B = prompt('B=')
// let C = prompt('C=')
// let AC = Math.abs(C-A)
// let BC = Math.abs(C-B)
// let product = AC * BC
// alert(`Длина АС=${AC}, длина ВС=${BC}, произведение этих отрезков=${product}`)

// let x1 = prompt('Координата x1=')
// let y1 = prompt('Координата y1=')
// let x2 = prompt('Координата x2=')                            
// let y2 = prompt('Координата y2=')
// let dista = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
// let x3 = prompt('Координата x3=')
// let y3 = prompt('Координата y3=')
// let distb = Math.sqrt((x3 - x3)**2 + (y3 - y3)**2)
// let p = (dista + distb) * 2
// let s = distb * dista
// alert(`Периметр прямоугольника=${p}, площадь прямоугольника=${s}`)

// let x1 = prompt('Координата x1=')
// let y1 = prompt('Координата y1=')
// let x2 = prompt('Координата x2=')                          
// let y2 = prompt('Координата y2=')
// let dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
// alert(`Расстояние между двумя точками=${dist}`)

                                                                         //Integer
                                                                         //1
// let lsm = prompt('Введите расстояние в см')
// let lm = Math.floor(lsm / 100)
// alert(`Количество полных метров в этом расстоянии=${lm}`)

// let mkg = prompt(`Введите массу в кг`)
// let mt = Math.floor(mkg / 1000)
// alert(`Количество полных тонн в этой массе=${mt}`)

// let sizebyte = prompt(`Введите размер файла в байтах`)
// let sizekb = Math.floor(sizebyte / 1024)
// alert(`Количество полных килобайтов, которые занимает данный файл=${sizekb}`)

// let a = prompt('Введите число а(a>b)')
// let b = prompt('Введите число b(a>b)')
// let nume = Math.floor(a / b)
// alert(`Количество отрезков b, размещенных на отрезке а=${nume}`)

// let a = prompt('Введите число а(a>b)')
// let b = prompt('Введите число b(a>b)')
// let nume = a % b
// alert(`Длина незанятой части отрезка а=${nume}`)

// let a = prompt('Введите двузначное число:')
// let left = Math.floor(a/10)
// let right = a%10 
// alert(`Левая цифра числа:${left}, правая цифра числа:${right}`)

// let a = prompt('Введите двузначное число:')
// let left = Math.floor(a/10)
// let right = a%10 
// let sum = left + right
// let product = left * right
// alert(`Сумма цифр, составляющих это число=${sum}, их произведение=${product} `)

// let a = prompt('Введите двузначное число:')
// let left = Math.floor(a/10)
// let right = a % 10
// alert("Число, полученное при перестановке цифр данного числа=" + `${right}` + `${left}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// alert(`Сотни этого числа=${first}`)

                                                                                  //Integer10

// let a = prompt('Введите трёхзначное число:')
// let second = Math.floor(a/10%10)                                                               
// let last = a%100%10
// alert(`Последняя цифра данного числа (единицы)=${last}, средняя цифра данного числа(десятки)=${second}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// let second = Math.floor(a/10%10)
// let last = a%100%10
// let sum = first + second + last
// let product = first * second * last
// alert(`Сумма цифр данного числа=${sum}, их произвдение=${product}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// let second = Math.floor(a/10%10)
// let last = a%100%10
// alert("Число, полученное при прочтеннии данного справа налево=" + `${last}` + `${second}` + `${first}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// let second = Math.floor(a/10%10)
// let last = a%100%10
// alert("Результат, если в этом числе вычеркнуть первую слева цифру и приписать её в конец=" +  `${second}` + `${last}` + `${first}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// let second = Math.floor(a/10%10)
// let last = a%100%10
// alert("Результат, если в этом числе вычеркнуть первую справа цифру и приписать её слева=" +  `${last}` + `${first}` + `${second}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// let second = Math.floor(a/10%10)
// let last = a%100%10
// alert("Число, полученное при перестановке цифр сотен и десятков исходного числа=" + `${second}` + `${first}` + `${last}`)

// let a = prompt('Введите трёхзначное число:')
// let first = Math.floor(a/100)
// let second = Math.floor(a/10%10)
// let last = a%100%10
// alert("Число, полученное при перестановке цифр десятков и единиц исходного числа=" + `${first}` + `${last}` + `${second}`)

// let a = prompt('Введите число, большее 999:')
// let hubdred = Math.floor(a/100)%10
// alert(`Цифра, соответствующая разряду сотен в записи этого числа=${hubdred}`)

// let a = prompt('Введите число, большее 999:')
// let thousand = Math.floor(a/1000)%100
// alert(`Цифра, соответствующая разряду тысяч в записи этого числа=${thousand}`)

// let n = prompt('Введите количество секунд, прошедшее с начала суток:')
// let min = Math.floor(n/60)
// alert(`Количество полных минут, прошедших с начала суток=${min}`)
                    
                                                                                         //Integer20

// let n = prompt('Введите количество секунд, прошедшее с начала суток:')
// let hour = Math.floor(n/3600)
// alert(`Количество полных часов, прошедших с начала суток=${hour}`)

// let n = prompt('Введите количество секунд, прошедшее с начала суток:')
// let min = n%60
// alert(`Количество секунд, прошедших с начала последней минуты=${min}`)

// let n = prompt('Введите количество секунд, прошедшее с начала суток:')
// let hour = n%3600
// alert(`Количество секунд, прошедших с начала последнего часа=${hour}`)

// let n = prompt('Введите количество секунд, прошедшее с начала суток:')
// let min = Math.floor(n/60%3600)
// alert(`Количество полных минут, прошедших с начала последнего часа=${min}`)

// let k = prompt('Введите целое число К, лежащее в диапазоне 1-365')
// let daynum = k%7
// alert(`Номер дня недели:${daynum}`)
                                                 
//???25

let k = prompt('Введите целое число К, лежащее в диапазоне 1-365')
let daynum = k%7
alert(`Номер дня недели:${daynum}`)