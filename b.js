var s_no=0,c=0;
var x;
let i=0;

function change_desc(x)
{
 if(x.innerHTML == "<input id=\"i3\" placeholder=\"Enter Task Description \">") {}
 else {x.innerHTML="<input id=\"i3\" placeholder=\"Enter Task Description \">"; }
 window.onkeypress = function keys(event)
 {
  var k = event.which || event.keyCode;
  if(k==13) { document.getElementById("i3").value==""? alert("Please Enter new Description") : x.innerHTML=document.getElementById("i3").value + "." ;}
 }
 reset();
}

function change_stats(x)
{
 if(x.innerHTML == "DUE" && confirm("This Will Change status of the Task from DUE to COMPLETED")) 
 {
  x.innerHTML = "COMPLETED";
  c++;
  if(c==s_no && c!=0) alert("ALL TASK COMPLETED!!!");
 }
 else if(x.innerHTML == "COMPLETED" && confirm("This Will Change status of the Task from COMPLETED to DUE"))
 {
  x.innerHTML = "DUE";
  c--;
 }
 reset();
}

function del_task(x)
{
 for(i=0;i<=s_no;i++)
 {
  if(document.getElementById("table").rows[i].cells[4] == x && confirm("This Task will be deleted")) 
  {
   document.getElementById("table").rows[i].cells[3].innerHTML=="COMPLETED" ? c-- : c  ;
   document.getElementById("table").deleteRow(i);
   s_no--   
   reset();
   for(j=1;j<=s_no;j++)
   {
    if( document.getElementById("table").rows[j].cells[0].innerHTML > i)
    {
     document.getElementById("table").rows[j].cells[0].innerHTML--;
     document.getElementById("table").rows[j].cells[0].innerHTML += ".";
     document.getElementById("table").rows[j].id == "c1" ? document.getElementById("table").rows[j].id = "c2" : document.getElementById("table").rows[j].id = "c1"; 
    }
   }
   i=s_no+1;
  }
 }
}


function reset()
{
 document.getElementById("btn").style.visibility = "visible";
 document.getElementById("i1").value = "";
 document.getElementById("i2").value = "";
 document.getElementById("details").innerHTML = s_no+" task" +(s_no>1?"s":"") +"<br>" + c +" completed<br>" + (s_no-c) +" due" ;
}

function create_task()
{
 if(document.getElementById("i1").value=="" || document.getElementById("i2").value=="") alert("Please fill all detials");
 else
 {
  s_no++;
  document.getElementById("table").insertRow(s_no);
  document.getElementById("table").rows[s_no].innerHTML = "<td>"+ s_no+ ".</td><td>"+document.getElementById("i1").value+":</td><td style=\"cursor:text;\" onclick=\"change_desc(this)\">"+ document.getElementById("i2").value+".</td> <td onclick=\"change_stats(this)\" style=\"cursor:pointer;\">DUE</td><td onclick=\"del_task(this)\" style=\"cursor:pointer;\"><img id=\"img\" src=\"delete.png\"></td>";
  s_no%2==0 ? document.getElementById("table").rows[s_no].id="c1" : document.getElementById("table").rows[s_no].id="c2" ;
  reset();
 }
}
