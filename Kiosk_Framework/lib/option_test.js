
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
<div class = "option_section_half_down_arrow" id = "button_left"><img src = "./img/arrow_left.png"></div>
<div class = "option_section_down_opts">
    <div class = "three_opts">
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
    <div class = "three_opts">
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
<div class = "option_section_half_down_arrow" id = "button_right"><img src = "./img/arrow_right.png"></div>
</div>`

const choice_cheese = `<div class = "option_section_full">
<div class = "option_section_full_down_arrow" id = "button_left"><img src = "./img/arrow_left.png"></div>
<div class = "option_section_full_opts">
    <div class = "four_opts">
    
        <div>
        <h2 style = "text-align:left"> 치즈 선택 </h2>
            <img src = "./img/img_recipe_c01.jpg"><br>
            <h3>아메리칸 치즈</h3>
            
        </div>
        <div>
            <img src = "./img/img_recipe_c03.jpg"><br>
            <h3>모차렐라 치즈</h3>
            
        </div>
        <hr style = "margin-top: 0px">
        <div>
        <h2 style = "text-align:left"> 치즈 추가 </h2>
            <img src = "./img/img_recipe_c01.jpg"><br>
            <h3>아메리칸 치즈 추가</h3>
           
        </div>
        <div>
            <img src = "./img/img_recipe_c03.jpg">
            <h3>모차렐라 치즈 추가</h3>
           
        </div>
        </div>
        
    <div class = "four_opts">
    
        <div>
        <h2>ㅤ</h2>
            <img src = "./img/img_recipe_c02.jpg"><br>
            <h3>슈레드 치즈</h3>
            
        </div>
        <div>
            <img src = "./img/X.png"><br>
            <h3>치즈 선택 안함</h3>
            
        </div>
        
        <hr style = "margin-top: 0px">
        <div>
        <h2>ㅤ</h2>
            <img src = "./img/img_recipe_c02.jpg"><br>
            <h3>슈레드 치즈 추가</h3>
            
        </div>
    </div>
</div>
<div class = "option_section_full_down_arrow" id = "button_right"><img src = "./img/arrow_right.png"></div>
</div>`

const choic_vege = `<div class = "option_section_full">
<div class = "option_section_full_down_arrow" id = "button_left"><img src = "./img/arrow_left.png"></div>
<div class = "option_section_full_opts">b</div>
<div class = "option_section_full_down_arrow" id = "button_right"><img src = "./img/arrow_right.png"></div>
</div>
</div>`


const pages = [choice_bread,choice_cheese,choic_vege];
const progress = [document.querySelector("#choice_bread"),document.querySelector("#choice_cheese"),document.querySelector("#choice_vege"),document.querySelector("#choice_sauce"),document.querySelector("#choice_additional"),document.querySelector("#choice_set")]
let cnt = 0;

function setupListeners() {
    let button_left = document.querySelector("#button_left");
    let button_right = document.querySelector("#button_right");

    if (button_right) {
        button_right.removeEventListener("click", to_right);
        button_right.addEventListener("click", to_right);
    }

    if (button_left) {
        button_left.removeEventListener("click", to_left);
        button_left.addEventListener("click", to_left);
    }


}


/* observer 함수 공부 */
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            setupListeners();
        }
    });
});


const option_section = document.querySelector(".option_section");
option_section.innerHTML = choice_bread;
setupListeners();  // Setup listeners after initial content setup

observer.observe(document.body, { childList: true, subtree: true });

function to_right() {
    console.log(progress[cnt]);
    progress[cnt].style = "color:black";
    progress[cnt+1].style = "color:white";
    cnt++;
    if(cnt<3 && cnt > -1){
    option_section.innerHTML = pages[cnt];
    console.log(progress[cnt]);

    setupListeners();  // Re-setup listeners after content change
    }
    else{
        alert('!');
        cnt--;
        console.log(cnt);

    }
}

function to_left() {
    progress[cnt].style = "color:black";
    progress[cnt-1].style = "color:white";
    cnt--;
    if(cnt < 3 && cnt > -1){
    option_section.innerHTML = pages[cnt];


    setupListeners();  // Re-setup listeners after content change
    }
    else{
        alert('!');
        cnt++;
        console.log(cnt);
    }
}