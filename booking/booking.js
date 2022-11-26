

let text_warning = document.getElementsByClassName('text-warning');

const option_items = document.getElementsByClassName('option-items');

var ctm_name = document.getElementById('ctm-name');
var ctm_phone_numb = document.getElementById('ctm-phone-numb');
var text_warning_1 = document.querySelector('.text-warning-1')

var numb_of_ctms  = document.getElementById('numb-of-ctms')

var branches =document.querySelectorAll('.branch');
var temp_branch_map;
var temp_branch_css;
// var branch_map = 
//     [{ "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14900.15014858869!2d105.80847592772226!3d20.991132376298626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac927791110f%3A0xc61b61561083adf!2zMzkgUC4gQsO5aSBYxrDGoW5nIFRy4bqhY2gsIEtoxrDGoW5nIMSQw6xuaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1668046417376!5m2!1sen!2s"},
//     { "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.927611214644!2d106.68242712551577!3d10.755133477374653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0e4cfa2279%3A0xf9af685247ed6f2b!2zMzYwQiBC4bq_biBWw6JuIMSQ4buctm-infoiwgUGjGsOG7nW5nIDEsIFF14bqctm-infoiA0LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1668046537361!5m2!1sen!2s"},
//     { "url" : "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15678.266194232427!2d106.68823482551767!3d10.767850677236552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zUVXhuqxOIDE6IDc3IFllcnNpbiwgUXXhuq1uIDEsIFRQLiBIQ00gMQ!5e0!3m2!1sen!2s!4v1668046570381!5m2!1sen!2s"},
//     { "url" : "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15676.209998533173!2d106.69870747552349!3d10.807291126808373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zUVXhuqxOIELDjE5IIFRI4bqgTkg6IDEwMCBCw7lpIMSQw6xuaCBUdcO9LCBCw6xuaCBUaOG6oW5o!5e0!3m2!1sen!2s!4v1668046608945!5m2!1sen!2s"}
// ];

var time_options = document.getElementsByClassName('time-options');
var schedule_box = document.getElementById('schedule-box')
var temp_time_options;

var note = document.querySelector('.note');

option_items[0].addEventListener('click',function(){
    document.querySelector('.appointment').classList.remove('appointment-1');
    document.querySelector('.services-container').classList.add('services-container-1');
    option_items[0].classList.add('option-items-focus');
    option_items[1].classList.remove('option-items-focus');

})
option_items[1].addEventListener('click',function(){
    document.querySelector('.appointment').classList.add('appointment-1');
    document.querySelector('.services-container').classList.remove('services-container-1');
    option_items[1].classList.add('option-items-focus');
    option_items[0].classList.remove('option-items-focus');
})


// -----------khach-hang------------

const customer_class ={
    customer_name : "",
    customer_phone_number : "",
    info_checking:function(){
        if(ctm_phone_numb.value=="" || ctm_name.value==""){
            if(ctm_phone_numb.value == "" ){
                text_warning[0].classList.add('text-warning-show');
                ctm_phone_numb.placeholder='Vui lòng nhập số điện thoại';
                ctm_phone_numb.style.borderColor='red';
                ctm_phone_numb.style.backgroundColor='#fba0a0';
                ctm_phone_numb.focus();
                }
            if(ctm_name.value==""){
                text_warning[0].classList.add('text-warning-show');
                ctm_name.placeholder='Vui lòng nhập đầy đủ họ tên';
                ctm_name.placeholder.color = 'red';
                ctm_name.style.borderColor='red';
                ctm_name.style.backgroundColor='#fba0a0';
                ctm_name.focus();
            }
        }
        else if(isNaN(ctm_phone_numb.value)){
            text_warning[0].classList.add('text-warning-show');
            ctm_phone_numb.value="";
            ctm_phone_numb.placeholder='Số điện thoại không hợp lệ';
            ctm_phone_numb.style.borderColor='red';
            ctm_phone_numb.style.backgroundColor='#fba0a0';
            ctm_phone_numb.focus();
        }
        else{
            text_warning[0].classList.remove('text-warning-show');
            ctm_name.style.borderColor='rgb(202, 160, 105)';
            ctm_name.style.backgroundColor='white';
            this.customer_name = ctm_name.value;

            ctm_phone_numb.style.borderColor='rgb(202, 160, 105)';
            ctm_phone_numb.style.backgroundColor='white';
            this.customer_phone_number = ctm_phone_numb.value;

            return true;
        }
        return false
    },

    // kiem_tra_ctm_name:function(){
    //     if(ctm_name.value == ""){
    //         ctm_name.placeholder='Vui lòng nhập đầy đủ họ tên';
    //         ctm_name.placeholder.color = 'red';
    //         ctm_name.style.borderColor='red';
    //         ctm_name.style.backgroundColor='#fba0a0';
    //         ctm_name.focus();
    //     }
    // },

    phone_number_checking : function(){
        if(isNaN(ctm_phone_numb.value)){
            ctm_phone_numb.style.borderColor='red';
            ctm_phone_numb.style.backgroundColor='#fba0a0';
            ctm_phone_numb.focus()
            text_warning_1.style.visibility = 'visible';
            return false;
        }
        else{
            ctm_phone_numb.style.borderColor='rgb(202, 160, 105)';
            ctm_phone_numb.style.backgroundColor='white';
            text_warning_1.style.visibility = 'hidden';
            return true;
        }
    }
}
// -----------so-luong-khach------------

const number_of_customers = {

    number : numb_of_ctms.value,

    check_numb_of_ctms: function(){
        if(numb_of_ctms.value <= 0) numb_of_ctms.value = 1;
        if(numb_of_ctms.value > 10) numb_of_ctms.value = 10;
    },

    incr_number: function(){
        let num = Number(numb_of_ctms.value)
        if(numb_of_ctms.value < 10)
            num += 1
        numb_of_ctms.value = String(num)
        this.number = numb_of_ctms.value;
    },

    decr_number: function(){
        let num = Number(numb_of_ctms.value)
        if(numb_of_ctms.value > 1)
            num -= 1
        numb_of_ctms.value = String(num)
        this.number = numb_of_ctms.value;
    }
}


// -----------chi-nhanh------------


const branch_class={
    
    branch : "",

    branch_slide: function(branch_name,branch_map, branch_css){
            this.branch = branch_name;

            // branch_map.slideDown(500, function(){
            //     temp_branch_map.slideUp(500);
            // });
            // temp_branch_map = branch_map;

            branch_map.slideDown(500);
            if(typeof temp_branch_map != 'undefined'){
                temp_branch_map.slideUp(500);
                temp_branch_css.removeClass('branch-bgcolor')
            }
            temp_branch_map = branch_map;
            temp_branch_css = branch_css;
    },

    branch_selection: function(){
        $('.br-1').bind('click').click(function() {
            branch_class.branch_slide($('.branch-name-1').text(), $('.branch-map-1'),$('.br-1'));
            $('.br-1').addClass('branch-bgcolor')
        })
        $('.br-2').bind('click').click(function() {
            branch_class.branch_slide($('.branch-name-2').text(), $('.branch-map-2'),$('.br-2'));
            $('.br-2').addClass('branch-bgcolor')
        })
        $('.br-3').bind('click').click(function() {
            branch_class.branch_slide($('.branch-name-3').text(), $('.branch-map-3'),$('.br-3'));
            $('.br-3').addClass('branch-bgcolor')
        })
        $('.br-4').bind('click').click(function() {
            branch_class.branch_slide($('.branch-name-4').text(), $('.branch-map-4'),$('.br-4'));
            $('.br-4').addClass('branch-bgcolor')
        })
    },

    branch_checking:function(){
        let count =0;
        for(let br of branches){
            if(br.checked==false){
                count++;
            }
        }
        if(count != 4){
            text_warning[1].classList.remove('text-warning-show');
            return true;
        }
        else {
            text_warning[1].classList.add('text-warning-show');
            branches[0].focus();
            return false;
        }
    }
}

// -----------khung-gio------------

    const time_class={

        time:"",

        time_selection:function(){
            // chon-khung-gio
            let count = 1;
            for(let i=0;i< time_options.length;i++){
                time_options[i].addEventListener('mouseover',function(){
                    time_options[i].classList.add('time-options-hover')
                    time_options[i].addEventListener('mouseleave',function(){
                        time_options[i].classList.remove('time-options-hover')
                    })
                })
                time_options[i].addEventListener('click',function()
                {   
                    if(count>1){
                        if(typeof temp_time_options != 'undefined'){
                            temp_time_options.classList.remove('time-options-focus')
                        }
                        count=1;
                    }
                    time_options[i].classList.add('time-options-focus')
                    temp_time_options = time_options[i];
                    count++;
                }
            )}
        },

        time_checking: function(){
            if(typeof temp_time_options == 'undefined'){
                text_warning[3].classList.add('text-warning-show');
                time_options[0].focus();
                return false
            }
            else{
                text_warning[3].classList.remove('text-warning-show');
                return true;
            }
        },

        time_locking:function(){

            let date = new Date();
            let ngay = date.getDate();
            let thang = date.getMonth() + 1;
            let nam = date.getFullYear();
            let gio = date.getHours()

            if(ngay < 10) ngay = "0" + ngay;
            if(thang < 10) thang = "0" + thang;

            var ngay_1 = nam+"-"+thang+"-"+ngay;
            var ngay_2 = nam+"-"+thang+"-"+(ngay+1);
            var ngay_3 = nam+"-"+thang+"-"+(ngay+2);

            var arr= [ngay_1,ngay_2,ngay_3];
            arr = date_checking(arr, thang, nam);

            schedule_box.setAttribute('min' , arr[0]);
            schedule_box.setAttribute('max' , arr[2]);
            schedule_box.value = arr[0];

            //khoa khung gio
            schedule_box.addEventListener('change', function(){
                let schedule_box_value_temp = schedule_box.value;
                    for(let i=0;i< time_options.length;i++){
                        let time = Number(time_options[i].value);
                        if(String(schedule_box_value_temp) != arr[0] && String(schedule_box_value_temp) != arr[1] && String(schedule_box_value_temp) != arr[2]){
                            time_options[i].classList.add('time-options-locked');
                            if(time_options[i].classList.contains('time-options-locked')){
                                time_options[i].classList.remove('time-options-focus');
                            }
                        }
                        else if(time <= gio && String(schedule_box_value_temp) == arr[0]){
                            time_options[i].classList.add('time-options-locked');
                            if(time_options[i].classList.contains('time-options-locked')){
                                time_options[i].classList.remove('time-options-focus');
                            }
                        }
                        else{
                            time_options[i].classList.remove('time-options-locked');
                        }
                    }
                })
        },

        time_now: function(){
            let date = new Date();
            let gio = date.getHours()
            for(let i=0;i< time_options.length;i++){
                let time = Number(time_options[i].value);
                if(time <= gio){
                    time_options[i].classList.add('time-options-locked');
                    if(time_options[i].classList.contains('time-options-locked')){
                        time_options[i].classList.remove('time-options-focus');
                    }
                }
            }
        },

        selected_time: function(){
            for(let i=0;i< time_options.length;i++){
                if(time_options[i].classList.contains('time-options-focus'))  
                    this.time = time_options[i].textContent;
            }
        }
    }

    const schedule_class ={

        schedule : "",

        schedule_selected:function(){
            if(schedule_box.value==""){
                schedule_box.focus();
                text_warning[2].classList.add('text-warning-show');
                return false;
            }
            else{
                text_warning[2].classList.remove('text-warning-show');
                this.schedule = schedule_box.value;
                return true;
            }
        }

}

const note_class = {
    note:"",

    note_taken : function(){
        if(note.value == ""){
            this.note = 'Không'
        }
        else{
            this.note = note.value
        }
    }
}

function date_checking(ngay, thang, nam){
    if(thang == 2){
        if(nam % 4==0 || (nam % 100 == 0 && nam % 400 == 0 )){
            if(ngay[0]==nam+"-"+(thang)+"-"+29){
                ngay[1]=nam+"-"+(thang + 1)+"-"+01;
                ngay[2]=nam+"-"+(thang + 1)+"-"+02;
            }
            else if(ngay[1]==nam+"-"+(thang)+"-"+29){
                ngay[2]=nam+"-"+(thang + 1)+"-"+01;
            }
        }
        else{
            if(ngay[0]==nam+"-"+(thang)+"-"+28){
                ngay[1]=nam+"-"+(thang + 1)+"-"+01;
                ngay[2]=nam+"-"+(thang + 1)+"-"+02;
            }
            else if(ngay[1]==nam+"-"+(thang)+"-"+28){
                ngay[2]=nam+"-"+(thang + 1)+"-"+01;
            }
        }
    }
    else if(thang == 1 || thang == 6 ||thang == 9 ||thang == 11){
        if(ngay[0]==nam+"-"+(thang)+"-"+30){
            ngay[1]=nam+"-"+(thang + 1)+"-"+01;
            ngay[2]=nam+"-"+(thang + 1)+"-"+02;
        }
        else if(ngay[1]==nam+"-"+(thang)+"-"+30){
            ngay[2]=nam+"-"+(thang + 1)+"-"+01;
        }
    }
    else if(thang == 1 ||thang == 3 ||thang == 5 ||thang == 7 ||thang == 8 ||thang == 10 ||thang == 12){
        if(thang == 12){
            if(ngay[0]==nam+"-"+(thang)+"-"+31){
                ngay[1]=(nam + 1)+"-"+01+"-"+01;
                ngay[2]=(nam + 1)+"-"+01+"-"+02;
            }
            else if(ngay[1]==nam+"-"+(thang)+"-"+31){
                ngay[2]=(nam + 1)+"-"+01+"-"+01;
            }
        }
        else{
            if(ngay[0]==nam+"-"+(thang)+"-"+31){
                ngay[1]=nam+"-"+(thang + 1)+"-"+01;
                ngay[2]=nam+"-"+(thang + 1)+"-"+02;
            }
            else if(ngay[1]==nam+"-"+(thang)+"-"+31){
                ngay[2]=nam+"-"+(thang + 1)+"-"+01;
            }
        }
    }
    return ngay;
}

time_class.time_locking();
time_class.time_selection();
time_class.time_now();
branch_class.branch_selection();

function booking(){
    let a = time_class.time_checking();
    let b =schedule_class.schedule_selected();
    let c =branch_class.branch_checking();
    let d = customer_class.phone_number_checking();
    let e =customer_class.info_checking();
    if(a == true && b == true && c ==true && d == true && e == true){
        time_class.selected_time();
        note_class.note_taken();

        $('.ctm-info-container').show();
        $('.ctm-info-sub-container').slideDown(500);

        document.querySelector('.ctm-name-info').innerHTML = 'Họ tên: ' + customer_class.customer_name;
        document.querySelector('.ctm-phone-numb-info').innerHTML = 'Số điện thoại: ' + customer_class.customer_phone_number;
        document.querySelector('.numb-of-ctms-info').innerHTML = 'Số khách: ' + number_of_customers.number; 
        document.querySelector('.branch-select-info').innerHTML = 'Chi nhánh: ' + branch_class.branch;
        document.querySelector('.schedule-info').innerHTML = 'Ngày đặt lịch: ' + schedule_class.schedule;
        document.querySelector('.time-info').innerHTML = 'Thời gian: ' + time_class.time;
        document.querySelector('.note-content-info').innerHTML = 'Ghi chú: ' + note_class.note;
    }
}
function confirm(){
    $('.ctm-info-container').hide();
    $('.ctm-info-sub-container').slideUp();
    window.location.reload();
}
function edit(){
    $('.ctm-info-container').hide();
    $('.ctm-info-sub-container').slideUp();
}
