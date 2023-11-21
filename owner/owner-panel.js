let datePop = document.getElementById("date-pop");

function openDatePopup() {
    datePop.classList.add("date-div-popup")
}

// .....................add room.............................. 
let roomVal=0
function increaseRoom(){
    roomVal++;
    const roomDiv =document.createElement('div');
    const id =`room${roomVal}`;
    console.log(id);
    roomDiv.className ='roomElements';
    roomDiv.id="room"+roomVal;
    roomDiv.textContent = "Room"+roomVal;
    roomDiv.innerHTML=`Room${roomVal}<i class="fa-solid fa-delete-left" onclick="deleteDivs(${id})" ></i>`    

const roomDivContainer = document.getElementById('addRoom');
roomDivContainer.appendChild(roomDiv);
}

//................................delete room.................................


function deleteDivs(id) {
    console.log(id.innerText);
    if(`Room${roomVal}`== id.innerText){
    --roomVal;
    id.remove();}
  }
  