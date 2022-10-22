var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("canvaslienzo2");
ctx=canvas.getContext("2d");
color="black"; width_of_line=4;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value
    width_of_line=document.getElementById("width_of_line");
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
function clearArea(e){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("canvaslienzo2");
ctx=canvas.getContext("2d");
color="black"; width_of_line=4;
canvas.addEventListener("touchdown", my_touchdown);
function my_touchdown(e)
{
    color = document.getElementById("color").value
    width_of_line=document.getElementById("width_of_line");
    mouseEvent="touchDown";
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent=="touchDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("touchup", my_touchup);
function my_touchup(e){
    mouseEvent="touchUp";
}
canvas.addEventListener("touchleave", my_touchleave);
function my_touchleave(e){
    mouseEvent="touchLeave";
}
function clearArea(e){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}