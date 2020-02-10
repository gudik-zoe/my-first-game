Function textfunction () {
Document.getElementById("text").style.display="none"
Document.getElementById("firsDiv").style.display="block"

function firstyesfunction () {
    document.getElementById("firstDiv").style.display ="none"
    document.getElementById("secondDiv").style.display ="block"
    i1 = 1
}
function firstnofunction () {
    document.getElementById("firstDiv").style.display ="none"
    document.getElementById("secondDiv").style.display ="block"
    i1 = 0
}



function secondyesfunction () {
    document.getElementById("secondDiv").style.display ="none"
    document.getElementById("thirdDiv").style.display ="block"
    i2 = 2
}
function secondnofunction () {
    document.getElementById("secondDiv").style.display="none"
    document.getElementById("thirdDiv").style.display ="block"
    i2 = 0
}

function thirdyesfunction () {
    document.getElementById("thirdDiv").style.display ="none"
    document.getElementById("fourthDiv").style.display ="block"
    i3=4
}
function thirdnofunction () {
    document.getElementById("thirdDiv").style.display="none"
    document.getElementById("fourthDiv").style.display ="block"
    i3=0
}

function fourthyesfunction () {
    document.getElementById("fourthDiv").style.display ="none"
    document.getElementById("fifthDiv").style.display ="block"
    i4=8
}
function fourthnofunction () {
    document.getElementById("fourthDiv").style ="display:none"
    document.getElementById("fifthDiv").style ="display:block"
    i4=0
}

function fifthyesfunction () {
    document.getElementById("fifthDiv").style.display ="none"
    document.getElementById("tony").style.display="block"
    i5=16
}
function fifthnofunction () {
    document.getElementById("fifthDiv").style.display="none"
    document.getElementById("tony").style.display="block"
    i5= 0
}

function resultfunction () {
  let result =  i1 + i2 + i3 + i4 + i5  
  document.getElementById("result").innerHTML = 'your number is ' + result
  document.getElementById("tony").style="display:none;"
}




