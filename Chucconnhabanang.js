h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "Frameworks/Patch.framework/Patch");

 if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);  
        return false;
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}
function hd3()
{
    Swal.fire({
        icon:'success',
        text: 'Gửi thành công!',
        
        confirmButtonText: 'OK',
        });
}
function hd2()
{
    Swal.fire({
        icon:'success',
        text: 'Vào trận đấu luyện -> Bấm đổi tướng -> Chọn tướng và skin muốn Test hiệu ứng',  
        confirmButtonText: 'OK',
        });
}
function aim2(input)//aim
{
    if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var aim2 = document.getElementById('cn2');
    if (aim2.checked == true)
    {
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x61B4CD8, "E3008052C0035FD6"); 
        ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x57AD068, "E303271EC0035FD6"); 

}
else{
      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x61B4CD8, "E3008052C0035FD6"); 	
      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x57AD068, "E303271EC0035FD6"); 	
}
}
}
function aim1(input){
    //aimv1
    if(!h5frida){
      //alert( "Tính Crack à?");
      console.log("loi");
      }
      else{
    if (input.value == 'on')
    {
        h5gg.searchNumber(2500, "U32","0x100000000","0x150000000");
        h5gg.searchNearby(0, "U32","0x50");
        h5gg.searchNearby(25000, "U32","0x50");
        h5gg.searchNumber(0, "U32","0x100000000","0x150000000");
        h5gg.editAll(25000, "U32");
    }
}
}
function aim3(input){
    //aimv3

    if(!h5frida){
      //alert( "Tính Crack à?");
      console.log("loi");
      }
      else{
        if (input.value == 'on')
    {
        ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x57AD068, "E303271EC0035FD6"); 
        h5gg.searchNumber(2500, "U32","0x100000000","0x150000000");
        h5gg.searchNearby(0, "U32","0x50");
        h5gg.searchNearby(25000, "U32","0x50");
        h5gg.searchNumber(0, "U32","0x100000000","0x155000000");
        h5gg.editAll(25000, "U32");
        // h5gg.clearResults();
    }
    }
  }    
function showlsd(input)//show lsd
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var lsd = document.getElementById('cn4');
    if (lsd.checked == true)
    {
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5A37524, "200080D2C0031FD6"); 

}
else {

      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5A37524, "200080D2C0031FD6"); 	
}
}
}
function hienten(input)//tenbanpick
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var ten = document.getElementById('cn5');
    if (ten.checked == true)
    {
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5C07904, "370080D2"); 

}
else{

DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5C07904, "370080D2"); 	
}
}
}
function showavt(input)//avatar
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var avt = document.getElementById('cn6');
    if (avt.checked == true)
    {
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5A122F0, "000080D2C0031FD6"); 

}
else{

      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5A122F0, "000080D2C0031FD6"); 	
}
}
}
function hienrank(input)//hienrank
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var rank = document.getElementById('cn7');
    if (rank.checked == true){
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5CC1B20, "E10301AA"); 

}
else{
      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5CC1B20, "E10301AA"); 	
}
}
}
function autowin(input)//autowin
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var auto = document.getElementById('cn8');
    if (auto.checked == true){
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x522AA90, "200080D2C0031FD6"); 

}
else {

      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x522AA90, "200080D2C0031FD6"); 	
}
}
}
function noskill(input)//noskill
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var skill = document.getElementById('cn9');
    if (skill.checked == true){
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x51FCF3C, "C0031FD6"); 
}
else {

      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x51FCF3C, "C0031FD6"); 	
}
}
}
function testskin(input)//skin
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var skin = document.getElementById('cn10');
    if (skin.checked == true){
		ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x595D110, "C0031FD6"); 
}
else{

      DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x595D110, "C0031FD6"); 	
}
}
}
function cheten(input)//cheten
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var name = document.getElementById('cn11');
    if(name.checked==true)
    {
        ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x57C6B10, "000080D2C0031FD6"); 
    }
    else{
    
          DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x57C6B10, "000080D2C0031FD6"); 	
    }
}
}
function tathack(input)//tathm
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var tat = document.getElementById('cn12');
    if(tat.checked==true)
    {
         // //hm
DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5179308, "E10301AA"); 

    }
    else{
    
          // //hm
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5179308, "E10301AA"); 


    }
}
}
function btut(input)//ulti
{
  if(!h5frida){
    //alert( "Tính Crack à?");
    console.log("loi");
    }
    else{
    var bt = document.getElementById('cn13');
    if(bt.checked==true)
    {
      //ulti
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5BFD824, "E10301AA"); 
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5BFD8C8, "330080D2"); 	
    }
    else{
    
 //ulti
DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5BFD824, "E10301AA"); 
DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5BFD8C8, "330080D2"); 

    }
}
}
window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    Swal.fire({
      icon:'success',
      text: 'Chờ 1 tí để video load',
      
      confirmButtonText: 'OK',
      });
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }
function cam1(input){
    //3dview
    var cx1 = document.getElementById('cn12');
    if (cx1.checked==true) {
        h5gg.searchNumber(1097285732, "I32","0x100000000","0x160000000");
        h5gg.editAll(1053609165, "I32");
        h5gg.clearResults();
    }
}
function cam2(input){
    //3dview
    var cx2 = document.getElementById('cn13');
    if (cx2.checked==true) {
        h5gg.searchNumber(-1048548773, "I32","0x100000000","0x160000000");
        h5gg.editAll(-1061158912, "I32");
        h5gg.clearResults();
       
    }
}
function cam3(input){
    //3dview
    var cx3 = document.getElementById('cn14');
    if (cx3.checked==true) {
        h5gg.searchNumber(1052212223, "I32","0x100000000","0x160000000");
        h5gg.editAll(1036831949, "I32");
        h5gg.clearResults();
       
    }
}
function cam4(input){
    //3dview
    var cx4 = document.getElementById('cn15');
    if (cx4.checked==true) {
        h5gg.searchNumber(1064238881, "I32","0x100000000","0x160000000");
        h5gg.editAll(1058642330, "I32");
        h5gg.clearResults();
    }
}


// //hm
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5179308, "E10301AA"); 
//botro
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5D951C8, "1F2003D5"); 
//ulti
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5BFD824, "E10301AA"); 
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5BFD8C8, "330080D2"); 
//cam
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F0433C, "01102F1E"); 
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F04338, "00902F1E"); 
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F04348, "0110201E"); 
//botro
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5D951C8, "1F2003D5"); 
// //3nut
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5C39434, "200080D2C0031FD6"); 


// //fix fps
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5C456D8, "C0031FD6"); 
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5C455D8, "C0031FD6");



//antiban
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x508DF48, "C0035FD6");
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5076E40, "C0031FD6");
// ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x50964E8, "C0031FD6");

ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35DDB74, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5094C94, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5144300, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5145E84, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5E6BCD0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x523DCB4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x523DFB8, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x523E0DC, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x549DC64, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5578F80, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x557C57C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x557C740, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x557F44C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5584FC8, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x557F500, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5583948, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x558BD8C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5573410, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5ED4DC4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F1C900, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F28064, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5551528, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5551840, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5502220, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5505400, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x550B674, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x560DD80, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x561BAF0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x57929E0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x55A9674, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x557FC8C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x55802E4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5580974, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x58F82CC, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x58F8A24, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x58F8EB0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5D8E954, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x63E7834, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x63E79D4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x63E7D74, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x63E9D14, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F30DC4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5145CD4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35E9C54, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35E9CCC, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5076DE0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x4FA1FBC, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x4FA1624, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x4FA8AA0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5CBBA64, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F30E40, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5E584FC, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x596A6E4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5D8EC74, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x6699064, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5B1CC9C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5D8E988, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5B22308, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x519A8F8, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x51937D8, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5CBBC48, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x549C03C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F4FCD8, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x2ECB534, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x508DE44, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5146B88, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5146D88, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x51461C0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5146F08, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5077930, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x50B996C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x52B8C2C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x66B246C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x66B0164, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x66B2264, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x6699074, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x66990F0, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35D274C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35D2CEC, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35D3834, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35D6F1C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35E11E4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35E242C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35E24A4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35EC77C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x35ECE84, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5B9D3B8, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x59E2ACC, "C0035FD6");
//1911
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F7D6F4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5F7C694, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x55B8580, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x52A29B4, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x59A0F10, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x52DD83C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x52E441C, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5DCD050, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x5DCCE78, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x384B928, "C0035FD6");
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x384B9A8, "C0035FD6");
}
