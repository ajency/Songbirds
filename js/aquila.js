which_image_loaded = 0;
NUM_AQUILA_IMAGES= 3;

irisImageNames = new Object();
irisImageNames.length = NUM_AQUILA_IMAGES - 1;
irisImageNames_large = new Object();
irisImageNames_large.length = NUM_AQUILA_IMAGES - 1;
irisImageTitles = new Object();
irisImageTitles.length = NUM_AQUILA_IMAGES - 1;
irisImageDescs = new Object();
irisImageDescs.length = NUM_AQUILA_IMAGES - 1;

/*irisImageDescs[0]='Seher: Landscapes';
irisImageDescs[1]='Seher: Landscapes';
irisImageDescs[2]='Seher: Landscapes';*/

for (counter = 0; counter < NUM_AQUILA_IMAGES; counter++){
    file_number = counter + 1;
    filename = ("images_dynamic/gallery/aquila/image" + file_number + ".jpg");
    irisImageNames[counter] = filename;
	filename = ("images_dynamic/gallery/aquila/image" + file_number + "_large.jpg");
    irisImageNames_large[counter] = filename;
}

function changeImage(direction) {
   which_image_loaded += direction;
    if (which_image_loaded < 0)
    	{
    		which_image_loaded = 0;
    		return;
    	}
    if (which_image_loaded == NUM_AQUILA_IMAGES)
        {
        	which_image_loaded = NUM_AQUILA_IMAGES - 1;
        	return;
        }
    boxId = 'imagebox' + (which_image_loaded - direction + 1);
    document.getElementById(boxId).src="images_static/gal_imagebutton.gif";

    if (document.images)
    {
        document.getElementById('galimage').src = irisImageNames[which_image_loaded];
		document.getElementById('galimagelarge').href = irisImageNames_large[which_image_loaded];
		document.getElementById('galimagelarge2').href = irisImageNames_large[which_image_loaded];
        boxId = 'imagebox' + (which_image_loaded + 1);
        document.getElementById(boxId).src="images_static/gal_currentbutton.gif";
	}
    ddequalcolumns.setHeights("reset");
}

function changeImageTo(imagenum) {
	for(counter=0; counter < NUM_AQUILA_IMAGES; counter ++){
		if(counter != imagenum)
		{
			boxId = 'imagebox' + (counter + 1);
			document.getElementById(boxId).src="images_static/gal_imagebutton.gif";
		}
	}
    if (document.images)
    {
        document.getElementById('galimage').src = irisImageNames[imagenum];
		document.getElementById('galimagelarge').href = irisImageNames_large[imagenum];
		document.getElementById('galimagelarge2').href = irisImageNames_large[imagenum];
        boxId = 'imagebox' + (imagenum + 1);
        document.getElementById(boxId).src="images_static/gal_currentbutton.gif";
        which_image_loaded = imagenum;
        document.getElementById('content').innerHTML = '<t1>'+irisImageDescs[imagenum]+'</t1>';
	}
    ddequalcolumns.setHeights("reset");
}

function loadAquilaLightbox(){
	//image_number = which_image_loaded + 1;
	//file_name = 'images_dynamic/gallery/aquila/image'+image_number+'_large.jpg';
	//image_desc = irisImageDescs[which_image_loaded];
	///Lightbox.show(file_name, image_desc);
}