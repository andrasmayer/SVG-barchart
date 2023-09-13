
options = {    
    labelHeight : 120 ,
    labelFontSize :  20,
    labelRotation : -70,
    labelColor: "#343c42",
    space : 10,
    blockWidth : 60,
}



const render = (obj) => {
    document.getElementById(obj.target).innerHTML = "";
    screenWidth = parseInt(document.getElementById(obj.target).style.width),
    screenHeight = parseInt(document.getElementById(obj.target).style.height)
    
    data = obj.dataSet;
    options = obj.options;
    labelFix = Math.abs(options.labelRotation) /180;

    lowest = 0;
    highest = 0;
    data.forEach(e=>{ if(e.value > highest){  highest = e.value } })
    lowest = highest;
    data.forEach(e=>{ if(e.value < lowest){  lowest = e.value } })

    data.forEach(function(val,key){
        percentHeight = val.value / highest;
        elementHeight = Math.round( (screenHeight - options.labelHeight)*percentHeight)*0.9;
        y = screenHeight - elementHeight -options.labelHeight;
        x = options.blockWidth*key+(key * options.space);
        document.getElementById(obj.target).innerHTML 
        +=  '<rect y="' + y +'" x="' + x + '" width="' + options.blockWidth + '" height="' + (elementHeight)+ '" style="fill:' + val.color + ';stroke-width:3;" />'
        +   '<text transform="translate(' + (x+options.blockWidth*labelFix) + ','+screenHeight*0.99+') rotate(' + options.labelRotation +')"  font-size="' + options.labelFontSize + '" fill="' + options.labelColor + '">' + val.label + '</text>'
        +   '<text transform="translate(' + (x+options.blockWidth * 0.25) + ',' + (screenHeight - options.labelHeight)*0.95 + ')"  font-size="' + options.labelFontSize + '"  fill="' + options.labelColor + '">' + val.value + '</text>';
    })
}
