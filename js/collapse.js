var coll1 = document.querySelector("#block_open_1")
var coll2 = document.querySelector("#block_open_2")
var coll3 = document.querySelector("#block_open_3")
var coll4 = document.querySelector("#block_open_4")

document.getElementById("block_open_1").addEventListener('click', function(){ 
    if(coll1.classList.contains("open") == false)
    {
        document.getElementById("block_open_1").classList.add('open');
        document.getElementById("div_open_1").classList.add('open');
        document.getElementById("collapse_open_1").classList.add('open')
    }
    else{
        document.getElementById("block_open_1").classList.remove('open');
        document.getElementById("div_open_1").classList.remove('open');
        document.getElementById("collapse_open_1").classList.remove('open')
    }
    Collaps2();
    Collaps3();
    Collaps4();
})

document.getElementById("block_open_2").addEventListener('click', function(){ 
    if(coll2.classList.contains("open") == false)
    {
        document.getElementById("block_open_2").classList.add('open');
        document.getElementById("div_open_2").classList.add('open');
        document.getElementById("collapse_open_2").classList.add('open')
    }
    else{
        document.getElementById("block_open_2").classList.remove('open');
        document.getElementById("div_open_2").classList.remove('open');
        document.getElementById("collapse_open_2").classList.remove('open')
    }
    Collaps1();
    Collaps3();
    Collaps4();
})

document.getElementById("block_open_3").addEventListener('click', function(){ 
    if(coll3.classList.contains("open") == false)
    {
        document.getElementById("block_open_3").classList.add('open');
        document.getElementById("div_open_3").classList.add('open');
        document.getElementById("collapse_open_3").classList.add('open')
    }
    else{
        document.getElementById("block_open_3").classList.remove('open');
        document.getElementById("div_open_3").classList.remove('open');
        document.getElementById("collapse_open_3").classList.remove('open')
    }
    Collaps2();
    Collaps1();
    Collaps4();
})

document.getElementById("block_open_4").addEventListener('click', function(){ 
    if(coll4.classList.contains("open") == false)
    {
        document.getElementById("block_open_4").classList.add('open');
        document.getElementById("div_open_4").classList.add('open');
        document.getElementById("collapse_open_4").classList.add('open')
    }
    else{
        document.getElementById("block_open_4").classList.remove('open');
        document.getElementById("div_open_4").classList.remove('open');
        document.getElementById("collapse_open_4").classList.remove('open')
    }
    Collaps2();
    Collaps3();
    Collaps1();
})

function Collaps1(){
    document.getElementById("block_open_1").classList.remove('open');
    document.getElementById("div_open_1").classList.remove('open');
    document.getElementById("collapse_open_1").classList.remove('open')
}

function Collaps2(){
    document.getElementById("block_open_2").classList.remove('open');
    document.getElementById("div_open_2").classList.remove('open');
    document.getElementById("collapse_open_2").classList.remove('open')
}

function Collaps3(){
    document.getElementById("block_open_3").classList.remove('open');
    document.getElementById("div_open_3").classList.remove('open');
    document.getElementById("collapse_open_3").classList.remove('open')
}

function Collaps4(){
    document.getElementById("block_open_4").classList.remove('open');
    document.getElementById("div_open_4").classList.remove('open');
    document.getElementById("collapse_open_4").classList.remove('open')
}


var que1 = document.querySelector("#block_question_1")
var que2 = document.querySelector("#block_question_2")
var que3 = document.querySelector("#block_question_3")
var que4 = document.querySelector("#block_question_4")
var que5 = document.querySelector("#block_question_5")

document.getElementById("block_question_1").addEventListener('click', function(){ 
    if(que1.classList.contains("open") == false)
    {
        document.getElementById("block_question_1").classList.add('open');
        document.getElementById("div_question_1").classList.add('open');
        document.getElementById("collapse_question_1").classList.add('open')
    }
    else{
        document.getElementById("block_question_1").classList.remove('open');
        document.getElementById("div_question_1").classList.remove('open');
        document.getElementById("collapse_question_1").classList.remove('open')
    }
    Collapsque2();
    Collapsque3();
    Collapsque4();
    Collapsque5();
})

document.getElementById("block_question_2").addEventListener('click', function(){ 
    if(que2.classList.contains("open") == false)
    {
        document.getElementById("block_question_2").classList.add('open');
        document.getElementById("div_question_2").classList.add('open');
        document.getElementById("collapse_question_2").classList.add('open')
    }
    else{
        document.getElementById("block_question_2").classList.remove('open');
        document.getElementById("div_question_2").classList.remove('open');
        document.getElementById("collapse_question_2").classList.remove('open')
    }
    Collapsque1();
    Collapsque3();
    Collapsque4();
    Collapsque5();
})

document.getElementById("block_question_3").addEventListener('click', function(){ 
    if(que3.classList.contains("open") == false)
    {
        document.getElementById("block_question_3").classList.add('open');
        document.getElementById("div_question_3").classList.add('open');
        document.getElementById("collapse_question_3").classList.add('open')
    }
    else{
        document.getElementById("block_question_3").classList.remove('open');
        document.getElementById("div_question_3").classList.remove('open');
        document.getElementById("collapse_question_3").classList.remove('open')
    }
    Collapsque2();
    Collapsque1();
    Collapsque4();
    Collapsque5();
})

document.getElementById("block_question_4").addEventListener('click', function(){ 
    if(que4.classList.contains("open") == false)
    {
        document.getElementById("block_question_4").classList.add('open');
        document.getElementById("div_question_4").classList.add('open');
        document.getElementById("collapse_question_4").classList.add('open')
    }
    else{
        document.getElementById("block_question_4").classList.remove('open');
        document.getElementById("div_question_4").classList.remove('open');
        document.getElementById("collapse_question_4").classList.remove('open')
    }
    Collapsque2();
    Collapsque3();
    Collapsque1();
    Collapsque5();
})

document.getElementById("block_question_5").addEventListener('click', function(){ 
    if(que5.classList.contains("open") == false)
    {
        document.getElementById("block_question_5").classList.add('open');
        document.getElementById("div_question_5").classList.add('open');
        document.getElementById("collapse_question_5").classList.add('open')
    }
    else{
        document.getElementById("block_question_5").classList.remove('open');
        document.getElementById("div_question_5").classList.remove('open');
        document.getElementById("collapse_question_5").classList.remove('open')
    }
    Collapsque2();
    Collapsque3();
    Collapsque4();
    Collapsque1();
})

function Collapsque1(){
    document.getElementById("block_question_1").classList.remove('open');
    document.getElementById("div_question_1").classList.remove('open');
    document.getElementById("collapse_question_1").classList.remove('open')
}

function Collapsque2(){
    document.getElementById("block_question_2").classList.remove('open');
    document.getElementById("div_question_2").classList.remove('open');
    document.getElementById("collapse_question_2").classList.remove('open')
}

function Collapsque3(){
    document.getElementById("block_question_3").classList.remove('open');
    document.getElementById("div_question_3").classList.remove('open');
    document.getElementById("collapse_question_3").classList.remove('open')
}

function Collapsque4(){
    document.getElementById("block_question_4").classList.remove('open');
    document.getElementById("div_question_4").classList.remove('open');
    document.getElementById("collapse_question_4").classList.remove('open')
}

function Collapsque5(){
    document.getElementById("block_question_5").classList.remove('open');
    document.getElementById("div_question_5").classList.remove('open');
    document.getElementById("collapse_question_5").classList.remove('open')
}