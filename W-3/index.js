const modal = document.getElementById("modal-container")
const closebtn = document.getElementById("close-modal")
const adduser = document.getElementById("add-user-btn")
const submitbtn = document.getElementById("btn-submit")

adduser.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.style.display = 'block'
})

closebtn.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.style.display = 'none'
})

submitbtn.addEventListener("click",(e) => {
    e.preventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const postobj = {
        name,
        email,
        password
    }

    let xhr = new XMLHttpRequest()
    xhr.open("POST","http://localhost:3000/requests")
    xhr.setRequestHeader("Content-type","application/json; charset=UTF-8")
    xhr.send(postobj)

    xhr.onload = () => {
        if(xhr.status == 201)
        {
            console.log("Hello inside ajax post")
            let storeduser = JSON.parse(localStorage.getItem("user"))
            storeduser.unshift(postobj)
            localStorage.setItem("user",JSON.stringify(storeduser))
            displayData()
        }
    }
    modal.style.display = "none"
});

    let fetchdata = () => {
        console.log("hi")
        let httpreq = new XMLHttpRequest()
        httpreq.open("GET","http://localhost:3000/requests")
        httpreq.send()

        httpreq.onload = () =>{
            if(httpreq.status == 201)
            {
                console.log("Hello")
                let res = JSON.parse(httpreq.responseText)
                console.log(res)
                localStorage.setItem("user",JSON.stringify(res))
                displayData();
            }
        }
    }

    let displayData = () => {
        console.log("HI")
        const tblbody = document.getElementById("table-body")

        let data = ""

        let users = JSON.parse(localStorage.getItem("user"))
        users.map((user) => {
            data += `<tr><td>${user.name}</td>`
            data += `<td>${user.email}</td>`
            data += `<td>${user.password}</td></tr>`
        })

        tblbody.innerHTML = data
    }

    fetchdata();