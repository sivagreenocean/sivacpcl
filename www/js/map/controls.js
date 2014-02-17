
// Set the confing properties appropriately
var config = {
  painter_name : 'painter',  // defined by the applet attribute name
  icon_dir     : './icons/', // relative to the client's HTML page
  icon_width   : 40,
  icon_height  : 40
}

// Defines the tool panel buttons
function ToolPanel(tools,tooltips) {
    this.tools = tools;
    this.tooltips = tooltips;
    this.rows = 1;
    this.cols = 0; // number of columns - auto
}

// Outputs control panel
ToolPanel.prototype.write = function() {

    var N = (this.rows * this.cols); // total number of cells
    var n = 0; // cell counter
    var c = 0; // current col number
    var self = this;
    document.write('<table border="0" background="#E0E0E0" cellpadding="0" cellspacing="0">');
    for(tool in this.tools) {
	if (c==0) document.write('<tr>');
        document.write('<td width="'+config.icon_width+'" height="'+config.icon_height+'" id="'+tool+'" class="toggle_normal" >\
			<img src="'+config.icon_dir+tool+'.gif" title="'+this.tooltips[tool]+'"></td>');
	document.getElementById(tool).onclick = function() { self.click(this.id); };
	c++;
	if (c==this.cols) {
	    document.write('</tr>');
	    c = 0;
	}
	n++;
    }
    while (n < N) {
	if (c==0) document.write('<tr>');
	document.write('</td>&nbsp;<td>');
	c++;
	if (c==this.cols) {
	    document.write('</tr>');
	    c = 0;
	}
	n++;
    }
    document.write('</table>');
}

// Handles clicks on the tool buttons
ToolPanel.prototype.click = function(id) {
    for(tool in this.tools) {
    	var element = document.getElementById(tool);
    	element.className = (tool==id) ? 'toggle_pressed' : 'toggle_normal';
    }
    document.applets[config.painter_name].setMode(this.tools[id]);
}


// Outputs the action buttons
function writeActions(actions,actiontips) {
    // 1 row; number of cols - auto
    writeActions(actions,actiontips,1,0);
}

function writeActions(actions,actiontips,rows,cols) {

    var N = (rows * cols); // total number of cells
    var n = 0; // cell counter
    var c = 0; // current col number

    document.write('<table border="0" background="#E0E0E0" cellpadding="0" cellspacing="0">');
    for(i=0; i < actions.length; i++) {
	if (c==0) document.write('<tr>');
        id = actions[i];
        mousedown = "this.className='toggle_pressed'";
        mouseup   = "this.className='toggle_normal'";
        document.write('<td width="'+config.icon_width+'" height="'+config.icon_height+'" id="'+id
		+'" class="toggle_normal" onmousedown="'+mousedown+'" onmouseup="'+mouseup+'" >'
        	+'<img src="'+config.icon_dir+id+'.gif" alt="'+actiontips[i]+'" title="'+actiontips[i]+'"></td>');
	document.getElementById(id).onclick =
		function() { document.applets[config.painter_name].doAction(this.id); };
	c++;
	if (c==cols) {
	    document.write('</tr>');
	    c = 0;
	}
	n++;
    }
    while (n < N) {
	if (c==0) document.write('<tr>');
	document.write('</td>&nbsp;<td>');
	c++;
	if (c==cols) {
	    document.write('</tr>');
	    c = 0;
	}
	n++;
    }
    document.write('</table>');
}
