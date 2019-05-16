<script type="text/javascript">
        window.onload = function () {
            var divid = "tabla";
            var url = "/Publico/sigmalogacertum";
            refreshdiv(divid, url);
        }

        function refreshdiv(divid, url) {
            var seconds = 30;
            $.ajax({
                type: 'POST',
                url: url,
                context: document.body,
                async: true,
                timeout: 15000,
                success: function (data) {

                    $("#" + divid).html(data);
                    $("#" + divid).find("script").each(function (i) {
                        eval($(this).text());
                    });
                }
            });
            setTimeout('refreshdiv("' + divid + '","' + url + '")', seconds * 1000);
        }

</script>