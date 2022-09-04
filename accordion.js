//싯발 nextSibling이라고만 하면 텍스트까지 포함해서 undefined되는걸로 1시간 날렸으니 텍스트 제외해야 할땐 꼭 next'Element'Sibling이라 쓰세요

var highlighted = null;
var viewing = false;


function toggle_accordion(self) {
    self.nextElementSibling.style.display = "block";
    self.firstElementChild.style.rotate = "180deg";
    self.firstElementChild.style.marginTop = "0.4rem";
    self.style.fontWeight = "bold";
    self.style.color = "hsl(238, 29%, 16%)";


    if (viewing) {
        highlighted.nextElementSibling.style.display = "";
        highlighted.firstElementChild.style.rotate = "";
        highlighted.firstElementChild.style.marginTop = "";
        highlighted.style.fontWeight = "";
        highlighted.style.color = "";

        if (highlighted == self) viewing = false; //그냥 접음
    }
    else {
        viewing = true;
    }

    highlighted = self;
}