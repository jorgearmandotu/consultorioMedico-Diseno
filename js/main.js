document.addEventListener('DOMContentLoaded', function(){
    //sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    let collapsibleElem = document.querySelector('.collapsible');
    let collapsibleInstance = M.Collapsible.init(collapsibleElem);

    //selects
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    //datepicker
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});