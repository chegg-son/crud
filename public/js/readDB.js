/* eslint-disable no-undef */
/* eslint-disable indent */

window.addEventListener('load', () => {
    setTimeout(() => {
        axios.get('/getDatabase')
            .then((response) => {
                // console.log(response.data.datas)
                const dataKegiatan = response.data.datas
                dataKegiatan.forEach(kegiatan => {
                    const tr = document.createElement('tr')
                    console.log('makan')

                    // Create td elements for id, tasks, and status
                    const idTd = document.createElement('td')
                    const tasksTd = document.createElement('td')
                    const statusTd = document.createElement('td')

                    // Set the text content for each td
                    idTd.textContent = kegiatan.id
                    tasksTd.textContent = kegiatan.tasks

                    // membuat div untuk menampung button di kolom status
                    const divStatus = document.createElement('div')
                    divStatus.classList.add('container', 'd-flex', 'justify-content-around', 'px-4')

                    // Membuat elemen input untuk mengedit teks
                    const tasksInput = document.createElement('input')
                    tasksInput.type = 'text'
                    tasksInput.value = kegiatan.tasks

                    // membuat button mengubah/update
                    const updateBtn = document.createElement('button')
                    updateBtn.type = 'button'
                    updateBtn.classList.add('btn', 'btn-primary', 'fa-regular', 'fa-pen-to-square')

                    // membuat button mengubah/update
                    const deleteBtn = document.createElement('button')
                    deleteBtn.type = 'button'
                    deleteBtn.classList.add('btn', 'btn-danger', 'fa-regular', 'fa-trash-can')

                    // membuat saveBtn
                    const saveBtn = document.createElement('button')
                    saveBtn.type = 'button'
                    saveBtn.classList.add('btn', 'bg-success', 'fa-regular', 'fa-floppy-disk')
                    saveBtn.style.color = '#ffffff'
                    saveBtn.style.display = 'none'

                    // membuat cancelBtn
                    const cancelBtn = document.createElement('button')
                    cancelBtn.type = 'button'
                    cancelBtn.classList.add('btn', 'bg-secondary', 'fa-solid', 'fa-xmark')
                    cancelBtn.style.color = '#ffffff'
                    cancelBtn.style.display = 'none'

                    divStatus.appendChild(updateBtn)
                    divStatus.appendChild(deleteBtn)
                    divStatus.appendChild(saveBtn)
                    divStatus.appendChild(cancelBtn)

                    // membuat bagian checklist
                    const checkbox = document.createElement('input')
                    checkbox.type = 'checkbox'
                    checkbox.classList.add('form-check-input')
                    checkbox.checked = kegiatan.status === 1

                    statusTd.appendChild(divStatus)

                    updateBtn.addEventListener('click', () => {
                        // Sembunyikan tombol "Update" dan teks
                        tasksInput.style.display = 'block'
                        updateBtn.style.display = 'none'
                        deleteBtn.style.display = 'none'
                        saveBtn.style.display = 'block'
                        cancelBtn.style.display = 'block'
                        tasksTd.textContent = ''

                        // Tampilkan elemen input, tombol "Simpan", dan tombol "Batal"
                        tasksTd.appendChild(tasksInput)
                        // statusTd.appendChild(saveBtn)
                        // statusTd.appendChild(cancelBtn)

                        statusTd.appendChild(divStatus)

                        // Fokuskan elemen input agar pengguna dapat mengedit langsung
                        tasksInput.focus()
                    })

                    cancelBtn.addEventListener('click', () => {
                        updateBtn.style.display = 'block'
                        deleteBtn.style.display = 'block'
                        saveBtn.style.display = 'none'
                        cancelBtn.style.display = 'none'
                        tasksInput.style.display = 'none'
                        tasksTd.textContent = kegiatan.tasks
                    })

                    // Append td elements to the row
                    tr.appendChild(idTd)
                    tr.appendChild(tasksTd)
                    tr.appendChild(statusTd)

                    // Append the row to the table
                    document.getElementById('kegiatan').appendChild(tr)
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
