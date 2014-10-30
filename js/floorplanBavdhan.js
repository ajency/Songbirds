

//////////////////// To show houses in floor plan flash //////////////////////////////

//functions to open interactive tour in pop-up
	function showIntTour(comefrom, selectedWingBr, floorNameBr, flatNameBr){
		
		window.open ("iris_bavdhan_floor_i.html?comefrom="+comefrom+"&selectedWingBr="+selectedWingBr+"&floorNameBr="+floorNameBr+"&flatNameBr="+flatNameBr, "mywindow","status=1,toolbar=1");
	}
	function showIntTour1(){
		window.open ("iris_bavdhan_floor_i.html", "mywindow1","status=1,toolbar=1");
	}

	// QueryString() & QueryString_Parse courtesy of http://javascript.about.com/library/scripts/blquerystring.htm
	function QueryString(key)
	{
		var value = null;
		for (var i=0;i<QueryString.keys.length;i++)
		{
			if (QueryString.keys[i]==key)
			{
				value = QueryString.values[i];
				break;
			}
		}
		return value;
	}
	QueryString.keys = new Array();
	QueryString.values = new Array();
	
	function QueryString_Parse()
	{
		var query = window.location.search.substring(1);
		var pairs = query.split("&");
		
		for (var i=0;i<pairs.length;i++)
		{
			var pos = pairs[i].indexOf('=');
			if (pos >= 0)
			{
				var argname = pairs[i].substring(0,pos);
				var value = pairs[i].substring(pos+1);
				QueryString.keys[QueryString.keys.length] = argname;
				QueryString.values[QueryString.values.length] = value;		
			}
		}
	
	}
	QueryString_Parse();
	
	// write flash obj with query string
	function writeFlash() {
		// appearance vars, these can be customized to your liking
		var width = '900'
		var height = '600'
		var src = 'interactive-tools/iris-bavdhan-intractive/iris_bavdhan.swf'
		// queries -- type in the variables you want to send to flash here
		var queries = '?comefrom='+QueryString('comefrom')+'&selectedWingBr='+QueryString('selectedWingBr')+'&floorNameBr='+QueryString('floorNameBr')+'&flatNameBr='+QueryString('flatNameBr')
		// assemble flash obj
		/*
		var l1 = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'">;'
		var l2 = '<param name="movie" value="'+src+queries+'" />;'
		var l3 = '<param name="quality" value="high" />;'
		var l4 = '<embed src="'+src+queries+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"></embed>;'
		var l5 = '</object>'
		*/
		var l1 = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+' align="middle">'
		var l2 = '<param name="movie" value="'+src+queries+'" />'
		var l3 = '<param name="quality" value="high" />'
		var l4 = '<param name="salign" value="lt" />'
		var l5 = '<param name="bgcolor" value="#ffffff" />'
		var l6 = '<param name="wmode" value="transparent" />'
		var l7 = '<embed src="'+src+queries+'" quality="high" salign="lt" wmode="transparent" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="'+width+'" height="'+height+'"></embed>'
		var l8 = '</object>'
		
		// write all lines
		document.write(l1+l2+l3+l4+l5+l6+l7+l8)
	}
	
/////////////////////////////////////////////////////////////////////////////////////////////////