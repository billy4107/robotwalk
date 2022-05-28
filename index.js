$(document).ready(function () {

    let walk = []

    $("#myBtn").on('click', function (e) {
        e.preventDefault();
        walk = $("#myInput").val().split('');

        for (let i = 0; i < walk.length; i++) {
            if (walk[i] === 'w') {
                $(function () {
                    var actualTD = $('td.mark'),
                        actualParentTD = actualTD.parent('tr'),
                        index = actualTD.index();

                    if (actualParentTD.prev('tr').length > 0) {
                        actualParentTD.prev('tr').find('td:eq(' + index + ')').addClass('mark');
                        actualTD.removeClass('mark');
                    }
                    // console.log(actualTD)
                });

            } else if (walk[i] === 'l') {

                $(function () {
                    var actualTD = $('td.mark');
                    if (actualTD.prev('td').length > 0) {
                        // actualTD.prev('td')

                        actualTD.prev('td').addClass('mark');
                        actualTD.removeClass('mark');
                    }
                    console.log(actualTD)
                });

            } else if (walk[i] === 'r') {
                $(function () {
                    var actualTD = $('td.mark');
                    if (actualTD.next('td').length > 0) {
                        actualTD.next('td').addClass('mark');
                        actualTD.removeClass('mark');
                    }
                    console.log(actualTD.length)
                });
            }

        }
    });

});
