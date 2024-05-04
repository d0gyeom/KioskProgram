
const choice_bread = ` <div id = "option_section_upper">
<div>
    <div class = "option_upper_section_name">빵 길이 선택</div>
    <div class = "option_twobutton">
        <div id = "choice_15cm">15cm</div>
        <div id = "choice_30cm">30cm</div>
    </div>
</div>
<div>
    <div class = "option_upper_section_name">토스팅 선택</div>
    <div class = "option_twobutton">
        <div id = "choice_toast">토스팅</div>
        <div id = "choice_nontoast">토스팅 안함</div>
    </div>
</div>
</div>
<div id = "option_section_down">
<div class = "option_section_down_arrow" id = "button_left"><img src = "./img/arrow_left.png"></div>
<div class = "option_section_down_opts">
    <div class = "opts">
        <div>
            <img src = "./img/img_recipe_b01.jpg"><br>
            <h3>허니오트</h3>
            <p>고소한 위트빵에 오트밀 가루를 묻혀 고소함과 식감이 두배로</p>
        </div>
        <div>
            <img src = "./img/img_recipe_b02.jpg"><br>
            <h3>하티</h3>
            <p>부드러운 화이트빵에 옥수수가루를 묻혀 겉은 바삭하고 고소하며 속은 부드럽게</p>
        </div>
        <div>
            <img src = "./img/img_recipe_b03.jpg"><br>
            <h3>위트</h3>
            <p>여러 가지 곡물로 만들어 건강하고 <br>고소한 맛의 곡물빵</p>
        </div>
    </div>
    <div class = "opts">
        <div>
            <img src = "./img/img_recipe_b04.jpg"><br>
            <h3>파마산 오레가노</h3>
            <p>부드러운 화이트빵에 파마산 오레가노 시즈닝을 묻혀 허브향 가득</p>
        </div>
        <div>
            <img src = "./img/img_recipe_b05.jpg"><br>
            <h3>화이트</h3>
            <p>가장 클래식한 빵으로 부드러운 식감이 매력 포인트</p>
        </div>
        <div>
            <img src = "./img/img_recipe_b06.jpg"><br>
            <h3>플랫브레드</h3>
            <p>이름처럼 납작 모양에 피자도우처럼 쫀득한 맛이 일품</p>
        </div>
    </div>
</div>
<div class = "option_section_down_arrow" id = "button_right"><img src = "./img/arrow_right.png"></div>
</div>`

 const option_section = document.querySelector(".option_section")
 option_section.innerHTML = choice_bread; 

 const button_left = document.querySelector("#button_left");

 const button_right = document.querySelector("#button_right");
 
console.log(button_right);

 button_right.addEventListener("click",to_right);

 function to_right(){
    option_section.innerHTML = "";
 }
