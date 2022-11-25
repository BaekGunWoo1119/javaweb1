var search_submit = document.getElementById("search");
    
	// 가져온 객체에 EventListener 를 추가한다. keypress = 키입력 감지
	input.addEventListener('keypress', function(key){

	// key.key 의 값이 Enter 일 경우 코드 실행
        // key.keyCode == 13 도 동일한 기능을 한다.
        if(key.key == 'Enter'){
			var inputValue = input.value;
            console.log(inputValue);
            }
        })