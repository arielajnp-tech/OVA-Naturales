//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=18; attempts=0; attemptsMax=6;
var score=0; scoreMax=18; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#0000FF"; colorText="#000000"; colorSele="#8000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Buen trabajo!!!"; messageTime=""; messageError="Intentalo otra vez, tú puedes!!"; messageErrorG="Intentalo otra vez, tú puedes!!"; messageAttempts=""; isShowMessage=false;
var urlOk="https://www.superstickers.com/product/stamper-buen-trabajo-ss13832/"; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#FF0000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["UHVsbW9uZXMg","QnJvbnF1aW9z","VHJhcXVlYQ==","TGFyaW5nZQ==","RXN0b23DoWdv","SMOtZ2Fkbw==","UMOhbmNyZWE=","SGlwb3TDoWxhbW8=","R2zDoW5kdWxhcyBzdXByYXJlbmFsZXM=","T3Zhcmlvcw==","UHLDs3N0YXRh","VGVzdMOtY3Vsb3M=","Q3LDoW5lbw==","RsOpbXVy","UmFkaW8=","UmnDsW9uZXM=","VmVqaWdh","VXJldHJh"];
var img_G=["i_PULMO.jpg","i_BONQUIOS.jpg","i_TRAQUEA.jpg","i_LARINGE.jpg","i_ESTOMAGO.jpg","i_HIGADO.jpg","i_PANCREA.jpg","i_HIPOTALAMO.jpg","i_GLANDULA_SUPRARRENALES.jpg","i_OVARIOS.jpg","i_PROSTATA.jpg","i_TESTICULOS.jpg","i_CRANEO.jpg","i_F__EMU.jpg","i_RADIO.jpg","i_RI__ON.jpg","i_VEGINA.jpg","i_URETRA.jpg"];
var mp3_G=["","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mw==","Mw==","Mw==","NA==","NA==","NA==","NQ==","NQ==","NQ==","Ng==","Ng==","Ng=="];
var e_G=["","","","","","","","","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","",""];
var txtGr=["Sistema respiratorio","Sistema digestivo","Sistema endocrino","Aparatos reproductores","Sistema óseo","Aparato urinario"];
var imgGr=["0_descarga.jpg","0_DIGESTIVO.jpg","0_ENDOCRINO.png","0_REPRO.jpg","0_OSEO.jpg","0_URINARIO.jpg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Intentalo otra vez, tú puedes!!";
var dirMedia="Index_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="SW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["100","103","126","100","120","150","150","143","150","145","150","100","100","100","100","100","150","100"];
var imaH=["100","100","100","100","100","76","60","100","75","100","90","100","100","100","100","100","99","100"];
var info=["","","","","","","","","","","","","","","","","",""];
