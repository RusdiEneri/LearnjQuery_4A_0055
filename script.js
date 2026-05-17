const inputTugas = document.getElementById('inputTugas');
const btnTambah = document.getElementById('btnTambah');
const daftarTugas = document.getElementById('daftarTugas');
const inputTanggal = document.getElementById('inputTanggal'); //baru

btnTambah.addEventListener('click', function() {

    let teksTugas = inputTugas.value;
    let teksTanggal = inputTanggal.value;
    
    if (teksTugas === '' || teksTanggal === '') {
        alert('Nama tugas dan tanggalnya harus diisi!');
        return;
    }

    let listBaru = document.createElement('li');

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listBaru.appendChild(checkbox);

    const containerTeks = document.createElement("div");
    containerTeks.style.flex = "1";

    let spanTugas = document.createElement('span');
    spanTugas.innerHTML = teksTugas;

    let spanTanggal = document.createElement('small');
    spanTanggal.innerHTML =  ` (${teksTanggal}) `;
    spanTanggal.style.display = "block";

    containerTeks.appendChild(spanTugas);
    containerTeks.appendChild(spanTanggal);
    listBaru.appendChild(containerTeks);

    const labelStatus = document.createElement("span");
    labelStatus.innerHTML = "Progress";
    labelStatus.className = "status-label";
    listBaru.appendChild(labelStatus);

    checkbox.addEventListener("change", function(){
        if(this.checked){
            labelStatus.innerHTML = "Done";
            labelStatus.className = "status-done";
            containerTeks.classList.add("task-done");
        } else {
            labelStatus.innerHTML = "Progress";
            labelStatus.className = "status-progress";
            containerTeks.classList.remove("task-done");
        }
    });

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.className = "btn-edit";

    btnEdit.onclick = function(){
        const newTask = prompt("Edit nama tugas:", spanTugas.innerHTML);
        if(newTask !== null && newTask.trim() !== ""){
            spanTugas.innerHTML = newTask;           
        }
    };
    listBaru.appendChild(btnEdit);

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    btnDelete.className = "btn-delete";

    btnDelete.onclick = function(){
        if(confirm("Hapus tugas ini?")){
            listBaru.remove();
        }
    };
    listBaru.appendChild(btnDelete);

    daftarTugas.appendChild(listBaru);

    const warnaBaru = document.querySelectorAll('li');
    warnaBaru.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.color = "blue";
        } else {
            item.style.color = "green";
        }
    })

    inputTugas.value = "";
    inputTanggal.value = "";

});