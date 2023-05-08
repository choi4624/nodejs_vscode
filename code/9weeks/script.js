async function getUsers(){
    const data = await fetch('/users');
    const users = await data.json(); // await 위한 async 
    console.log(users);

    // html 표시하는 방식 > 여러 방법으로 가능 

    const list = document.getElementById('list'); // 
    let html = '<ul>';
    
    // user에 키를 가져와서 해당 요소를 넣는 것 
    // ul 사이에 li 넣기 
    for (const id in users) {
        html += `<li>${users[id]} <button onclick = 'modifyUser(${id})'> 수정 </button><button onclick = 'deleteUser(${id})'> 삭제 </button></li>`;
        // 직접 html 코드를 넣기 
    }
    html += '</ul>';
    list.innerHTML = html;
}

async function modifyUser(id){
    const name = prompt('change name');
    await fetch('/user/' + id, {method: 'PUT', body: `name=${name}`});
    getUsers(); 
}

async function deleteUser(id){
    await fetch('/user/' + id , {method: 'DELETE'});
    getUsers();
}

window.onload = getUsers();