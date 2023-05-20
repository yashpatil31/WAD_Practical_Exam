const reg = /[1-9]\#[1-9]\#[1-9]/

const form = document.getElementById("frm")

form.addEventListener("submit", (e) =>{

    let input1 = document.getElementById("t1")
    let input2 = document.getElementById("t2")

    if (!reg.test(input1.value)) {
        alert('Please provide a valid input');
        input1.focus;
    }

    if (!reg.test(input2.value)) {
        alert('Please provide a valid input');
        input2.focus;
    }

    e.preventDefault();

    const arr1 = input1.value.split("#")
    let r1 = Number(arr1[0])
    let c1 = Number(arr1[1])
    let start1 = Number(arr1[2])

    const arr2 = input2.value.split("#")
    let r2 = Number(arr2[0])
    let c2 = Number(arr2[1])
    let start2 = Number(arr2[2])

    let anstbl1 = "<table class='table'><tbody>";
    for (let i = 0; i < r1; i++) {
        anstbl1 += "<tr>";
        for (let j = 0; j < c1; j++) {
            anstbl1 += `<td>${(start1+j)*(i+1)}</td>`
        }
        anstbl1 += "</tr>"
    }
    anstbl1 += "</tbody></table>";
    document.getElementById("tableHolder1").innerHTML=anstbl1;


    let anstbl2 = "<table class='table'><tbody>";
    for (let i = 0; i < r2; i++) {
        anstbl1 += "<tr>";
        for (let j = 0; j < c2; j++) {
            anstbl2 += `<td>${(start2+j)*(i+1)}</td>`
        }
        anstbl2 += "</tr>"
    }
    anstbl2 += "</tbody></table>";
    document.getElementById("tableHolder2").innerHTML=anstbl2;

    if(start1 === start2)
    {
        document.getElementById("tableHolder3").innerHTML=anstbl1;
    }
    else{
        let anstbl3 = "<table class='table'><tbody>";
        for (let i = 0; i < r1; i++) {
            anstbl3 += "<tr>";
            for (let j = 0; j < c1; j++) {
                anstbl3 += `<td>${((start1+j)*(i+1))*((start2+j)*(i+1))}</td>`
            }
            anstbl3 += "</tr>"
        }
        anstbl3 += "</tbody></table>";
        document.getElementById("tableHolder3").innerHTML=anstbl3;
    }
})