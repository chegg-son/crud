/* eslint-disable no-undef */
/* eslint-disable indent */

window.addEventListener('load', () => {
    setTimeout(() => {
        axios.get('/getDatabase')
            .then((response) => {
                // console.log(response.data.datas)
                let dataKegiatan = response.data.datas
                dataKegiatan.forEach(kegiatan => {
                    let tr = document.createElement("tr");

                    // Create td elements for id, tasks, and status
                    let idTd = document.createElement("td");
                    let tasksTd = document.createElement("td");
                    let statusTd = document.createElement("td");
                    
                    // Set the text content for each td
                    idTd.textContent = kegiatan.id;
                    tasksTd.textContent = kegiatan.tasks;
                    // statusTd.textContent = kegiatan.status;

                    // membuat button mengubah/update 
                    let updateBtn = document.createElement('button')
                    updateBtn.type

                    // membuat bagian checklist
                    let checkbox = document.createElement('input')
                    checkbox.type = 'checkbox'
                    checkbox.classList.add('form-check-input')
                    checkbox.checked = kegiatan.status === 1

                    statusTd.appendChild(checkbox)
                    // Append td elements to the row
                    tr.appendChild(idTd);
                    tr.appendChild(tasksTd);
                    tr.appendChild(statusTd);

                    // Append the row to the table
                    document.getElementById('kegiatan').appendChild(tr);

                })
                // response.data.datas.forEach(element => {
                //     document.getElementById('kegiatan_tasks').textContent = 
                // });
            })
            .catch((e) => {
                console.log(e)
                document.getElementById('db').textContent = 'Gagal memuat database'
            })
    }, 1000)
})
