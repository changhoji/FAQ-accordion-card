//싯발 nextSibling이라고만 하면 텍스트까지 포함해서 undefined되는걸로 1시간 날렸으니 텍스트 제외해야 할땐 꼭 next'Element'Sibling이라 쓰세요

var highlighted = null;
var viewing = false;


function toggle_accordion(self) {
    self.nextElementSibling.style.display = "block";

    if (viewing) {
        highlighted.nextElementSibling.style.display = "none";
        if (highlighted == self) viewing = false; //그냥 접음
    }
    else {
        viewing = true;
    }

    highlighted = self;
}