$(function () {
    var amountObj = {},
        attachmentsCount = 0;

    $('#fileupload').fileupload({
        dataType: 'json',
        autoUpload: false,
        add: function (e, data) {
            //Add filenames near the field
            $.each(data.files, function (index, file) {
                $('<li>').text(file.name).appendTo('#fileList');
            });

            //Save pics to the server
            $.getJSON('server/', function (result) {
                data.formData = result;
                var jqXHR = data.submit()
                jqXHR.done(function( data, textStatus, jqXHR ) {
                    $.each(data.files, function (index, file) {
                        $('<input type="hidden" name="file_'+ attachmentsCount++ +'">').val(file.url).appendTo('#fileListHidden');
                    });
                });
            });

            $("#submitButton").off('click').on('click', function () {
                //Submit the form
                $.ajax({
                    type: 'POST',
                    url: 'server/sendmail.php',
                    data: $('#cctv-form').serialize(),
                    success: function (res) {
                        console.log('Successful.');
                        console.log(res);
                    },
                    error: function (err) {
                        console.log('An error occurred.');
                        console.log(err);
                    },
                });
              });
        }
    });

    function updateAmount() {
    
        var amount = 0;
        console.log('=======================');
        Object.keys(amountObj).forEach(function(key) {
            console.log(key, amountObj[key]);
            amount+=amountObj[key];
        });
        console.log('=======================');
        
        $("#calculatedAmount").html(amount);
    };

    $("#locationTypeField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });

    $("#inOutDoor").on("click", 'button', function (event) {
        $( "#inOutDoor" ).find('button').each(function( index ) {
            $( this ).removeClass('active')
        });
        $( this ).addClass('active')

        switch (this.id) {
            case 'indoorButton':
                amountObj['inOutDoor'] = 20;
                break;
            case 'outdoorButton':
                amountObj['inOutDoor'] = 10;
                break;
            case 'bothButton':
                amountObj['inOutDoor'] = 30;
                break;
            default:
                break;
        }
        updateAmount();
    });

    $("#camerasField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });

    $("#camerasQualityField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });

    $("#daysOfRecField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });


    $("#monitorSelected").on("click", 'input', function (event) {
        switch (this.value) {
            case 'yes':
                $("#monitorSizeBlock").show();
                $("#mountedBlock").show();
                break;
            case 'no':
                amountObj['monitorSizeField'] = 0;
                $("#monitorSizeField option[value='0']").prop('selected', 'true');
                amountObj['mountedField'] = 0;
                $("#mountedField option[value='0']").prop('selected', 'true');
                $("#monitorSizeBlock").hide();
                $("#mountedBlock").hide();
                updateAmount();
                break;
            default:
                break;
        }
    });

    $("#monitorSizeField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });

    $("#mountedField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });


    $("#inetConnection").on("click", 'input', function (event) {
        switch (this.value) {
            case 'no':
                $("#planToHaveConnectionBlock").show();
                $("#inetTypeBlock").hide();
                break;
            case 'yes':
                $("#planToHaveConnectionBlock").hide();
                $("#inetTypeBlock").show();
                break;
            default:
                break;
        }
    });

    $("#installDateField").on( "change", function() {
        amountObj[this.id] = +this.value;
        updateAmount();
    });

});