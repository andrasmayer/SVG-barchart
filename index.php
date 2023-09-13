<html>
<head>
    <title>SVG barchart</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="assets/SVG_barchart_master.js"></script>
</head>
<body>

    <svg style="width:900px;height:400px;" id="screen0"></svg>
    <svg style="width:900px;height:400px;" id="screen1"></svg>

    <script>
        feed = [
            {label:"Label 1",value:100,color:"#4287f5"},
            {label:"Lab 2",value:22,color:"#8654cc"},
            {label:"Cimke",value:18,color:"#4dbd53"},
            {label:"Blank Data #1",value:180,color:"#4dbd53"},
            {label:"Blank Data #2",value:200,color:"#4dbd53"},
            {label:"Blank Data #2",value:300,color:"#4dbd53"},
            {label:"Blank Data #4",value:311,color:"#4dbd53"},
            {label:"Blank Data #5",value:400,color:"#4dbd53"},
            {label:"Blank Data #6",value:18,color:"#4dbd53"},
            {label:"Blank Data #7",value:378,color:"#4dbd53"},
            {label:"Hosszú felirat",value:144,color:"#cc7716"},
        ];

        feed2 = [
            {label:"Label 1",value:100,color:"#4287f5"},
            {label:"Blank Data #4",value:311,color:"#4dbd53"},
            {label:"Blank Data #5",value:400,color:"#4dbd53"},
            {label:"Blank Data #6",value:18,color:"#4dbd53"},
            {label:"Blank Data #7",value:378,color:"#4dbd53"},
            {label:"Hosszú felirat",value:144,color:"#cc7716"},
        ];



        render({dataSet:feed,options:options,target:"screen0"});
        render({dataSet:feed2,options:options,target:"screen1"});
    </script>


</body>
</html>