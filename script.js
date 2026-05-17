const inputTugas = $('#inputTugas');
const btnTambah = $('#btnTambah');
const daftarTugas = $('#daftarTugas');
const inputTanggal = $('#inputTanggal');

btnTambah.on('click', function() {

    let teksTugas = inputTugas.val();
    let teksTanggal = inputTanggal.val();
    
    if (teksTugas === '' || teksTanggal === '') {
        alert('Nama tugas dan tanggalnya harus diisi!');
        return;
    }

    let listBaru = $('<li></li>');

    let checkbox = $('input')
    checkbox.type = "checkbox";
    listBaru.append(checkbox);

    const containerTeks = $("div");
    containerTeks.style.flex = "1";

    let spanTugas = $('span');
    spanTugas.innerHTML = teksTugas;

    let spanTanggal = $('small');
    spanTanggal.innerHTML =  ` (${teksTanggal}) `;
    spanTanggal.style.display = "block";

    containerTeks.appendChild(spanTugas);
    containerTeks.appendChild(spanTanggal);
    listBaru.appendChild(containerTeks);

    const labelStatus = $("span");
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

    const btnEdit = $("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.className = "btn-edit";

    btnEdit.onclick = function(){
        const newTask = prompt("Edit nama tugas:", spanTugas.innerHTML);
        if(newTask !== null && newTask.trim() !== ""){
            spanTugas.innerHTML = newTask;           
        }
    };
    listBaru.appendChild(btnEdit);

    const btnDelete = $("button");
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