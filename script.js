let students =[ 
    {
        id:1,
        name:'Yunis',
        surname: 'Nadirli',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    },
    {
        id:2,
        name:'Ikram',
        surname:'Abdullayev',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    },
    {
        id:3,
        name:'Murad',
        surname:'Abiyev',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    },
    {
        id:4,
        name:'Revan',
        surname:'Yunuszade',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    },
    {
        id:5,
        name:'Yaqub',
        surname:'Suleymanov',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    },
    {
        id:6,
        name:'Kenan',
        surname:'Memmedov',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    },
    {
        id:7,
        name:'Elcan',
        surname:'Haciyev',
        dates:[
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            },
            {
                value:'d/e',
                checked:false
            }
        ]
    }
]

let body = document.querySelector('table tbody');
let allCheckModal = document.querySelector('.all-check-modal');
let checkModal = document.querySelector('.check-modal');
let selected = '';
let modalType = '';
let i,j;

function data(){
    body.innerHTML = '';
    students.forEach((item,i)=> {
        let row =`<tr>
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.surname}</td>`;
        item.dates.forEach((date,j)=>{
            if(date.value == 'i/e'){
                row+=`<td class="border-none"><button class="ie">${date.value}</button></td>`;
            }
            else if(date.value == 'q/b'){
                row += `<td class="border-none"><button class="qb">${date.value}</button></td>`;
            }
            else{
                row += `<td class="border-none"><button onclick="openCheckModal(this,${i},${j})">${date.value}</button></td>`;
            }
        });
        row+='</tr>'; 
        body.innerHTML+=row;
    })
    
}
data();



function openAllCheckModal(x){
    allCheckModal.style.display = 'flex';
    if(x.innerText=='i/e'){
        modalType='i/e';
    }
    else if(x.innerText=='q/b'){
        modalType='q/b';
    }
    selected = x;
}

function closeAllCheckModal(){
    allCheckModal.style.display = 'none';
    selected = '';
    modalType = '';
}

function allBtnIE(col){
    students.forEach((item)=>{
        if(!item.dates[col-1].checked){
            item.dates[col-1].value='i/e';
            item.dates[col-1].checked=true;
        }
    });

    data();
}

function allBtnQB(col){
    students.forEach((item)=>{
        if(!item.dates[col-1].checked){
            item.dates[col-1].value='q/b';
            item.dates[col-1].checked=true;
        }
    });
    data();
}

function allCheck(){
    let col = +selected.id[selected.id.length-1];
    if(modalType == 'i/e'){
        allBtnIE(col);
        
    }
    else if(modalType == 'q/b'){
        allBtnQB(col);
    }
    
    let btns = selected.parentElement.children;
    btns[0].removeAttribute("onclick");
    btns[1].removeAttribute("onclick");
    closeAllCheckModal();
}

function openCheckModal(x,a,b){
    i=a;
    j=b;
    checkModal.style.display='flex';
    selected = x;
}

function closeCheckModal(){
    checkModal.style.display='none';
    selected = '';
}

function checkQB(){
    students[i].dates[j].value='q/b';
    students[i].dates[j].checked=true;
    closeCheckModal();
    data();
}

function checkIE(){
    students[i].dates[j].value='i/e';
    students[i].dates[j].checked=true;
    closeCheckModal();
    data();
}
