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
    containerTeks.css('flex', '1')

    let spanTugas = $('span');
    spanTugas.html = teksTugas;

    let spanTanggal = $('small');
    spanTanggal.html =  ` (${teksTanggal}) `;
    spanTanggal.style.display = "block";

    containerTeks.append(spanTugas);
    containerTeks.append(spanTanggal);
    listBaru.append(containerTeks);

    const labelStatus = $("span");
    labelStatus.html = "Progress";
    labelStatus.className = "status-label";
    listBaru.append(labelStatus);

    checkbox.on("change", function(){
        if(this.checked){
            labelStatus.html = "Done";
            labelStatus.className = "status-done";
            containerTeks.addClass("task-done");
        } else {
            labelStatus.html = "Progress";
            labelStatus.className = "status-progress";
            containerTeks.removeClass("task-done");
        }
    });

    const btnEdit = $("button");
    btnEdit.html = "Edit";
    btnEdit.className = "btn-edit";

    btnEdit.on("click", function(){
        const newTask = prompt("Edit nama tugas:", spanTugas.html);
        if(newTask !== null && newTask.trim() !== ""){
            spanTugas.html = newTask;           
        }
    });
    listBaru.append(btnEdit);

    const btnDelete = $("button");
    btnDelete.html = "Delete";
    btnDelete.className = "btn-delete";

    btnDelete.on("click", function(){
        if(confirm("Hapus tugas ini?")){
            listBaru.remove();
        }
    });
    listBaru.append(btnDelete);

    daftarTugas.append(listBaru);

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