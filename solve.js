"use-strict";
function inToPost(exp){
    var stack = [];
    var postix = [];
    stack.push('(');
    exp += ')';
    var index = 0;
    while(stack.length != 0){
        if(exp[index].match(/^[A-Za-z]$/)){
            console.log(exp[index]+" Match Alphabet");
            postix.push(exp[index]);
        }else if(exp[index].match(/\(/)){
            console.log(exp[index]+" Match (");
            stack.push(exp[index]);
        }else if(exp[index] == '^' || exp[index] == '+' || exp[index] == '-' 
                    || exp[index] == '*' || exp[index] == '/' ){
            console.log(exp[index] +" Match operator");
            while(findPrecedence(stack[stack.length-1]) >= findPrecedence(exp[index])){
                postix.push(stack.pop());
            }
            stack.push(exp[index]);
        }else if(exp[index].match(/\)/)){
            console.log(exp[index]+" Match )");
            while(stack[stack.length-1] != '('){
                postix.push(stack.pop());
            }
            stack.pop();
        }
        index += 1;
        console.log("Expression: "+exp);
        console.log("stack: "+stack);
        console.log("Postfix: "+postix);
        console.log("---------------");
    }

    
    return postix.join('');
}

function findPrecedence(operator){
    console.log("Operator: "+operator);
    if(operator == "^"){
        return 3;
    }else if(operator == "*" || operator == "/"){
        return 2;
    }else if(operator == "+" || operator == "-"){
        return 1;
    }else{
        return 0;
    }
}
function calculate(){
    var expression = document.getElementById("exp").value;
    var result = document.getElementById("result");
    result.innerHTML = inToPost(expression);
}