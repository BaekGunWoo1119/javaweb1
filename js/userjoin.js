function form_check()
{
	let str_id = document.getElementById("js_userid"); 
	let str_pwd = document.getElementById("js_password");
	let str_repwd = document.getElementById("re_password");
	let str_fname = document.getElementById("family_name");
	let str_lname = document.getElementById("name");

	let pwd_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/; 
	let email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; 
	let blank_pattern = /[\s]/g; 

	let form = document.createElement('form'); 
	if(str_pwd /= str_repwd)
	{ 
		alert("비밀번호 확인이 제대로 되지 않았습니다. 다시 입력하세요.");
		str_repwd.focus();
		return false;
	}
	
	if(str_id.value=='' || str_id.value==null)
	{ 
		alert("아이디를 입력하세요!!");
		str_id.focus();
		return false;
	}
	
	if(!email_check.test(str_id.value))	
	{
		alert("이메일@주소 형식으로 아이디를 입력하세요.");
		str_id.focus();
		return false;
	}
	if(str_pwd.value=='')
	{ 
		alert("비밀번호를 입력하세요!!");
		str_pwd.focus();
		return false;
	}
 
	if(blank_pattern.test(str_id.value) == true)
	{ 
	    alert(' 공백만 입력되었습니다 ');
		return false;
	}

	/*if(!pwd_check.test(str_pwd.value))
	{ 
		alert("비밀번호는 영문자 + 숫자 + 특수문자 조합, 10글자 이상 입력!");   
		str_pwd.focus();
		return false;
	}*/
	
	if(str_fname.value=='' || str_fname.value==null)
	{ 
		alert("성을 입력하세요!!");
		str_id.focus();
		return false;
	}
	
	if(str_lname.value=='' || str_lname.value==null)
	{ 
		alert("이름을 입력하세요!!");
		str_id.focus();
		return false;
	}
	document.body.append(form); 
	form.action = 'index.html';
	form.method = 'POST'; 
	form.submit(); 
}