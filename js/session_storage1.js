function session_save() {
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Store data
        let input_text = document.getElementById("js_userid");
        sessionStorage.setItem("Session_Storage_test", input_text.value);
 
    } else {
        alert("로컬 스토리지 지원 x");
    }
}
function session_get() {
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        alert("저장된 검색어는, " + sessionStorage.getItem("Session_Storage_test"));
    } else {
        alert("세션 스토리지 지원 x");
    }
}
 
//세션 삭제
function session_del() {
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}