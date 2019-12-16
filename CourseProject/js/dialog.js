var dialogOn = false;

function addDialogModule(){
	document.body.innerHTML+="<div id='dialog' class='dialog' style='margin-left:-25px;'>"+
		"<div class='label' onclick='toggleDialog()'>Задайте вопрос</div>"+
		"<div class='header'>Ваши запросы:</div>"+
		"<div class='history' id='history'></div>"+
		"<div class='question'><input id='Qdialog' placeholder='Спрашивайте...'/><br>"+
			"<button onclick='ask(\"Qdialog\")'>Узнать ответ</button>"
		"</div>"+
	"</div>";
	document.body.innerHTML+="<div id='imgalert'  style='display:none'>"+
		"<div class='bg' onclick='hide(\"imgalert\")'>&nbsp;</div>"+
		"<img id='img_in_alert' src='' />"+
	"</div>";
	window.ya.speechkit.settings.apikey = '5c6d6536-b453-4589-9bc7-f16c7a795106';
	var textline = new ya.speechkit.Textline(
		'Qdialog', {
			onInputFinished: function(text) {
			ask("Qdialog");
		  }
		});
}

window.onload = function(){addDialogModule();};

function hide(elem_id){
	$("#"+elem_id).css({"display":"none"});
}

function toggleDialog(){
	if(dialogOn){
		$("#dialog").animate({"margin-left":"-25px"}, 350, function() {});
		dialogOn=false;
	}
	else{
		$("#dialog").animate({"margin-left":"-400px"}, 350, function() {});
		dialogOn=true;
	}
}

var knowledge=[
["моментом инерции системы материальных точек относительно оси z", "называется", "физическая величина, равная сумме произведений масс материальных точек на квадраты расстояний их до оси вращения."],
["момент инерции в динамике вращательного движения", "является", "мерой инертности при вращательном движении."],
["инертность", "-это", "способность тел препятствовать изменению своей скорости относительно инерциальной системы отсчета при воздействии на него внешних сил."],
["момент инерции тела", "зависит", "от распределения масс относительно данной оси."],
["момент инерции тела", "выражают", "через массу тела."],
["момент инерции тела", "выражают", "через геометрические размеры тела."],
["момент инерции тела", "выражают", "через геометрические положение тела относительно оси вращения."],
["расчеты момента инерции", "упрощаются", "при использовании аддитивности момента инерции."],
["расчеты момента инерции", "упрощаются", "при использовании теоремы Штейнера."],
["формула момента инерции абсолютно твердого тела", "следует", "из <img src='pictures/form1.png'/> при рассмотрении тела как системы материальных точек с неизменным расстоянием между ними."],
["аддитивность момента инерции", "означает", "равенство момента инерции системы относительно некоторой оси сумме моментов инерции тел или всех частей системы относительно этой оси."],
["момент инерции системы относительно некоторой оси", "равен", "сумме моментов инерции тел или всех частей системы относительно этой оси."],
["сумма моментов инерции тел", "переходит", "в интеграл <img src='pictures/form3.png'/>  в случае непрерывно распределенной массы твердого тела."],
["теорема Штейнера", "говорит", "о равенстве момена инерции тела относительно произвольной оси сумме момента инерции относительно оси, параллельной данной и проходящей через центр масс тела, и произведения массы тела на квадрат расстояния между осями."],
["теорема Штейнера", "сводит", "вычисление момента инерции относительно произвольной оси к вычислению момента инерции относительно оси, проходящей через центр масс тела."],
["момент инерции элемента, расположенного на расстоянии x от оси", "определяется", "соотношением <img src='pictures/form5.png' />."],
["момент инерции стержня", "равняется: ", "<img src='pictures/form7.png' />"],
["момент инерции стержня относительно оси, проходящей через один из его концов", "находится", "c помощью теоремы Штейнера."],
["форма момента инерции однородного тонкого стержня", "следует", "из <img src='pictures/form8.png' />."],
["пластины параллелепипеда, параллельные одной из граней параллелепипеда", "имеют", "объем dV = aсdx."],
["пластины параллелепипеда, параллельные одной из граней параллелепипеда", "имеют", "массу dm = ρdV = ρaсdx."],
["пластину параллелепипеда", "можно считать", "совокупностью параллельных полосок длиной а"],
["момент инерции пластины параллелепипеда", "определяется", "соотношением <img src='pictures/form9.png' />."],
["момент инерции параллелепипеда", "находится", "по формуле <img src='pictures/form12.png'>"],
["закон Гука", "описывается", "формулой <img src='pictures/form13.png'>."],
["угловое ускорение рамки", "определяется", "основным уравнением динамики вращательного движения: <img src='pictures/form14.png'>"],
["дифференциальное уравнение колебаний рамки", "находится", "по формуле: <img src='pictures/form15.png'>."],
["решение уравнения колебаний рамки", "имеет", "вид гармонических колебаний: <img src='pictures/form16.png'>"],
["период колебаний рамки", "определяется", "соотношением <img src='pictures/form17.png'>"],
["момент инерции тела", "находится", "по формуле <img src='pictures/form19.png'>."],
["инерция", "-это", "способность тел сохранять состояние покоя или движения в отсутствие действия внешних сил."],
["масса", "-это", "мера инертности тела"],
["единицей измерения момента инерции в СИ", "является", "килограмм умноженный на метр в квадрате."],
["момент инерции тела относительно любой оси", "является", "величиной положительной и не равной нулю."],
["исследуемое тело","закрепляется", "с помощью подвижной балки."],
["подвижная балка", "находится", "на рамке."],
["рамка", "подвешена", "на стальной вертикальной проволоке."],
["проволока", "натянута", "между двумя кронштейнами."],
["кронштейны", "соединены", "со стойкой установки."],
["электромагнит", "находится", "за рамкой."],
["электромагнит", "фиксирует", "рамку в отклоненном на угол ϕ0 положении."],
["угол отклонения", "определяется", "по шкале"],
["фотоэлектрический датчик", "считает", "число колебаний рамки."],
["фотоэлектрический датчик", "соединен", "с секундомером."],
["рамка", "совершает", "крутильные колебания"],
["свободные колебания", "совершаются", "под действием внутренних сил системы после выведения системы из положения равновесия."],
["колебания крутильного маятника", "происходят", "в горизонтальной плоскости и обусловлены упругими силами, возникающими в нити при закручивании."],
["крутильный маятник", "-это", "механическая система, представляющая собой тело, подвешенное в поле тяжести на тонкой нити."],
["исследуемое тело", "вращается", "по гармоническому закону"],
["погрешность косвенного измерения момента инерции Iz", "определяется", "погрешностью момента инерции рамки ΔI1z."],
["погрешность косвенного измерения момента инерции Iz", "определяется", "погрешностями периодов колебаний ΔT1, ΔT2."],
["инерция", "соответствует", " всем материальным объектам в одинаковой степени."],
["ускорение", "вызывается", "воздействием на тело каких-либо других тел."],
["теорема Штейнера", "названа", "по имени швейцарского математика Якоба Штейнера"],
["метод крутильных колебаний", "является", "одним из методов экспериментального определения момента инерции тела."],
["гармоническое крутильное колебание тела", "является", "периодическим движением тела относительно оси, проходящей через центр тяжести этого тела, когда угол отклонения от положения равновесия изменяется по закону синуса или косинуса."],
["схема установки", "показана", "на рисунке: <img src='pictures/schema_ust.png' />"],
["период колебаний", "-это", "время одного полного колебания."],
["угловое ускорение", "-это", "величина, характеризующая изменение скорости с течением времени."],
["циклическая частота колебаний", "-это", "число колебаний за 2π секунд."],
["сила упругости", "-это", "сила, возникаюзая в результате деформации тела и пытающаяся вернуть его в исходное состояние"]
]

function ask(questionInput){
	var question=document.getElementById(questionInput).value.trim();
	$("#dialog").animate({"margin-left":"-400px"}, 1000, function() {});
	dialogOn=true;
	var newDiv=document.createElement("div");
	newDiv.className='question';
	newDiv.innerHTML=question;
	document.getElementById("history").appendChild(newDiv);
	newDiv=document.createElement("div");
	newDiv.className='answer';
	newDiv.innerHTML=getAnswer(question);
	var needSound=true;
	for(var i=0;i<newDiv.childNodes.length;i++){
		if(newDiv.childNodes[i].tagName=="EMBED"){
			needSound=false;
			break;
		}
	}
	if(needSound){
		newDiv.innerHTML+="<audio controls='true' autoplay='true' src='https://distrib.belstu.by/yandex-tts-bridge/?text="+(newDiv.innerText||newDiv.textContent)+"'></audio>";
	}
	document.getElementById("history").appendChild(newDiv);
	if(newDiv.lastChild.tagName=="AUDIO"){
		newDiv.lastChild.play();
	}
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	document.getElementById(questionInput).value="";
}

var endings = [ ["ет","(ет|ут|ют)"], ["ут","(ет|ут|ют)"], ["ют","(ет|ут|ют)"],
        ["ит","(ит|ат|ят)"], ["ат","(ит|ат|ят)"], ["ят","(ит|ат|ят)"],
        ["ется","(ет|ут|ют)ся"], ["утся","(ет|ут|ют)ся"], ["ются","(ет|ут|ют)ся"],
        ["ится","(ит|ат|ят)ся"], ["атся","(ит|ат|ят)ся"], ["ятся","(ит|ат|ят)ся"],
        ["ен","ен"], ["ена","ена"], ["ено","ено"], ["ены","ены"],
        ["ан","ан"], ["ана","ана"], ["ано","ано"], ["аны","аны"],
        ["жен","жен"], ["жна","жна"], ["жно","жно"], ["жны","жны"],
		["такое","- это"]];
var blacklist = [ "замена", "замены", "атрибут", "маршрут", "член", "нет" ];

function getEnding(word)
{
    if (blacklist.indexOf(word)!==-1) return -1;
    for (var j = 0; j < endings.length; j++)
    {
        if(word.substring(word.length-endings[j][0].length)==endings[j][0]){
            return j;   
        }
    }
    return -1;  
}

function small1(str)
{
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}

function big1(str)
{
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function getAnswer(question)
{
    var separators = "'\",.!?()[]\\/";
    var txt = small1(question);
    for (var i = 0; i < separators.length; i++)
       txt = txt.replace(separators[i], " " + separators[i]);
    var words = txt.split(' ');
    var result = false;
    var answer="";
    for (var i = 0; i < words.length; i++)
    {
        var ending = getEnding(words[i]);
		
        if (ending >= 0)
        {
			var subject_array = words.slice(i + 1);
			var subject_text = subject_array.join(" ");
			for (var j = 0; j < knowledge.length; j++) 
				if ((words[i]==knowledge[j][1] ||
					words[i].substring(0, words[i].length - endings[ending][0].length) + 
					endings[ending][1]==knowledge[j][1]) && 
					(subject_text==knowledge[j][0]) || (subject_text==knowledge[j][2])) {
					answer+=big1(knowledge[j][0] + " " +
						knowledge[j][1] + " " + knowledge[j][2] + ". ");
					result = true;
				}
			if (result == false) {
				words[i] = words[i].substring(0, words[i].length -
					endings[ending][0].length) + endings[ending][1];
				var predicate = new RegExp(words[i]);
				if (endings[ending][0] == endings[ending][1])
				{
					predicate = new RegExp(words[i] + " " + words[i + 1]);
					i++;
				}
				var subject_array = words.slice(i + 1);
				var subject_text = subject_array.join(" ");
				for (var j = 0; j < subject_array.length; j++){
					if(subject_array[j].length < 3){
						subject_array.splice(j);
						j--;
					}
				}
				var subject_string = subject_array.join(".*");
				if (subject_string.length>3)
				{
					var subject = new RegExp(".*" +
						subject_string +
						".*");
					for (var j = 0; j < knowledge.length; j++)
					{
						if (predicate.test(knowledge[j][1]) &&
							(subject.test(knowledge[j][0]) ||
								subject.test(knowledge[j][2])))
						{
							answer+=big1(knowledge[j][0] + " " +
								knowledge[j][1] + " " + knowledge[j][2] + ". ");
							result = true;
						}
					}
					if (result == false){
						for (var j = 0; j < knowledge.length; j++)
						{
							if ((subject.test(knowledge[j][0]) ||
									subject.test(knowledge[j][2])))
							{
								answer+=big1(knowledge[j][0] + " " +
									knowledge[j][1] + " " + knowledge[j][2] + ". ");
								result = true;
							}
						}
					}
				}
			}
        }
    }
    if(!result)
    	answer = "Ответ не найден. <br/>";
	else
		answer = answer.replace("<img ", "<img onclick='zoom(this.src)'");
    return answer;
}

function zoom(src){
	document.getElementById("img_in_alert").src=src;
	$("#imgalert").css({"display":"block"});
	clearInterval(timer);
}

