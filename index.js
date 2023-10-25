const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');
const sidebarIcons = document.querySelectorAll('.sidebar > a');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

sidebarIcons.forEach(activeIcon => {
    activeIcon.addEventListener('click', () => {

        sidebarIcons.forEach(icon => {
            if(icon !== activeIcon) {
                icon.classList.remove('active');
            }
        })

        activeIcon.classList.toggle('active');
    });
})

orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>
            <span class="material-icons-round contentIcon">
                filter_none
            </span>
        </td>
        <td>${order.contentName}</td>
        <td class="${order.type === 'Unit' ? 
        'danger' : order.type === 'Assignment' ? 'warning'
        : 'primary'}">${order.type}</td>
        <td>
            <a class="material-icons-sharp downloadBtn downloadColor" target="_blank" href="https://drive.google.com/drive/folders/1GDy97eF5m1u6RhHD2V8i11LI-XWeq95X">
                download
            </a>
        </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

document.querySelectorAll('.downloadBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.remove('downloadColor');
        btn.classList.add('activeDownloadColor');
        btn.innerHTML = "download_done";
    });
});

window.open('https://drive.google.com/drive/folders/1GDy97eF5m1u6RhHD2V8i11LI-XWeq95X', '_blank');