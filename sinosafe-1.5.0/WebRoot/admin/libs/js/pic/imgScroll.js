function Marquee() {
    this.ID = document.getElementById(arguments[0]);
    if (!this.ID) {
        alert('您要设置的"' + arguments[0] + '"初始化错误\r\n请检查标签ID设置是否正确!');
        this.ID = -1;
        return
    }
    this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
    this.Step = 1;
    this.Timer = 30;
    this.DirectionArray = {
        top: 0,
        up: 0,
        bottom: 1,
        down: 1,
        left: 2,
        right: 3
    };
    if (typeof arguments[1] == "number" || typeof arguments[1] == "string") {
        this.Direction = arguments[1]
    }
    if (typeof arguments[2] == "number") {
        this.Step = arguments[2]
    }
    if (typeof arguments[3] == "number") {
        this.Width = arguments[3]
    }
    if (typeof arguments[4] == "number") {
        this.Height = arguments[4]
    }
    if (typeof arguments[5] == "number") {
        this.Timer = arguments[5]
    }
    if (typeof arguments[6] == "number") {
        this.DelayTime = arguments[6]
    }
    if (typeof arguments[7] == "number") {
        this.WaitTime = arguments[7]
    }
    if (typeof arguments[8] == "number") {
        this.ScrollStep = arguments[8]
    }
    this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
    this.ID.noWrap = true;
    this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
    if (arguments.length >= 7) {
        this.Start()
    }
}
Marquee.prototype.Start = function() {
    if (this.ID == -1) {
        return
    }
    if (this.WaitTime < 800) {
        this.WaitTime = 800
    }
    if (this.Timer < 20) {
        this.Timer = 20
    }
    if (this.Width == 0) {
        this.Width = parseInt(this.ID.style.width)
    }
    if (this.Height == 0) {
        this.Height = parseInt(this.ID.style.height)
    }
    if (typeof this.Direction == "string") {
        this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()]
    }
    this.HalfWidth = Math.round(this.Width / 2);
    this.HalfHeight = Math.round(this.Height / 2);
    this.BakStep = this.Step;
    this.ID.style.width = this.Width + "px";
    this.ID.style.height = this.Height + "px";
    if (typeof this.ScrollStep != "number") {
        this.ScrollStep = this.Direction > 1 ? this.Width: this.Height
    }
    var d = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
    var b = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
    var e = this;
    e.tempHTML = e.ID.innerHTML;
    if (e.Direction <= 1) {
        e.ID.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
    } else {
        if (e.ScrollStep == 0 && e.DelayTime == 0) {
            e.ID.innerHTML += e.ID.innerHTML
        } else {
            e.ID.innerHTML = d.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
        }
    }
    var f = this.Timer;
    var a = this.DelayTime;
    var c = this.WaitTime;
    e.StartID = function() {
        e.Scroll()
    };
    e.Continue = function() {
        if (e.MouseOver == 1) {
            setTimeout(e.Continue, a)
        } else {
            clearInterval(e.TimerID);
            e.CTL = e.Stop = 0;
            e.TimerID = setInterval(e.StartID, f)
        }
    };
    e.Pause = function() {
        e.Stop = 1;
        clearInterval(e.TimerID);
        setTimeout(e.Continue, a)
    };
    e.Begin = function() {
        e.ClientScroll = e.Direction > 1 ? e.ID.scrollWidth / 2 : e.ID.scrollHeight / 2;
        if ((e.Direction <= 1 && e.ClientScroll <= e.Height + e.Step) || (e.Direction > 1 && e.ClientScroll <= e.Width + e.Step)) {
            e.ID.innerHTML = e.tempHTML;
            delete(e.tempHTML);
            return
        }
        delete(e.tempHTML);
        e.TimerID = setInterval(e.StartID, f);
        if (e.ScrollStep < 0) {
            return
        }
        e.ID.onmousemove = function(g) {
            if (e.ScrollStep == 0 && e.Direction > 1) {
                var g = g || window.event;
                if (window.event) {
                    if (e.IsNotOpera) {
                        e.EventLeft = g.srcElement.id == e.ID.id ? g.offsetX - e.ID.scrollLeft: g.srcElement.offsetLeft - e.ID.scrollLeft + g.offsetX
                    } else {
                        e.ScrollStep = null;
                        return
                    }
                } else {
                    e.EventLeft = g.layerX - e.ID.scrollLeft
                }
                e.Direction = e.EventLeft > e.HalfWidth ? 3 : 2;
                e.AbsCenter = Math.abs(e.HalfWidth - e.EventLeft);
                e.Step = Math.round(e.AbsCenter * (e.BakStep * 2) / e.HalfWidth)
            }
        };
        e.ID.onmouseover = function() {
            if (e.ScrollStep == 0) {
                return
            }
            e.MouseOver = 1;
            clearInterval(e.TimerID)
        };
        e.ID.onmouseout = function() {
            if (e.ScrollStep == 0) {
                if (e.Step == 0) {
                    e.Step = 1
                }
                return
            }
            e.MouseOver = 0;
            if (e.Stop == 0) {
                clearInterval(e.TimerID);
                e.TimerID = setInterval(e.StartID, f)
            }
        }
    };
    setTimeout(e.Begin, c)
};
Marquee.prototype.Scroll = function() {
    switch (this.Direction) {
    case 0:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollTop >= this.ClientScroll) {
                this.ID.scrollTop -= this.ClientScroll
            }
            this.ID.scrollTop += this.Step
        }
        break;
    case 1:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollTop <= 0) {
                this.ID.scrollTop += this.ClientScroll
            }
            this.ID.scrollTop -= this.Step
        }
        break;
    case 2:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollLeft >= this.ClientScroll) {
                this.ID.scrollLeft -= this.ClientScroll
            }
            this.ID.scrollLeft += this.Step
        }
        break;
    case 3:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollLeft <= 0) {
                this.ID.scrollLeft += this.ClientScroll
            }
            this.ID.scrollLeft -= this.Step
        }
        break
    }
};