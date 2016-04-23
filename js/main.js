var keysTab=new Array();
var alrTr = false;
var lang;
keysTab['en']=new Array();
keysTab['fr']=new Array();


//------------------- ENGLISH KEYS --------------------//
//index.html
keysTab['en']['website_title']="Antoine's website";
keysTab['en']['language_txt']='Language: ';
keysTab['en']['welcome_title']='Welcome';
keysTab['en']['author']='Website maintained by Antoine Laulan.';
keysTab['en']['website_p1_title']='Website processing...';
keysTab['en']['website_p1_txt']="Welcome to my first personal website. His purpose is to extend and precise my resume. Enjoy your visit and please if you notice something wrong tell me about it at the following mail address: "

//menu
keysTab['en']['about_menu']='About me';
keysTab['en']['resume_menu']='Resume';
keysTab['en']['skills_menu']='Skills';
keysTab['en']['pro_menu']='Profesional exp';
keysTab['en']['home_menu']='Home';

//about.html
keysTab['en']['about_title']='About me';
keysTab['en']['about_p1_title']='About';
keysTab['en']['about_p1_txt']='In a galaxy far far away..';

//pro_exp.html
keysTab['en']['pro_title']='Profesional experiences';
keysTab['en']['pro_p1_title']='Experiences list';
keysTab['en']['pro_p1_txt']='First';

//resume.html
keysTab['en']['resume_title']='Resume';
keysTab['en']['resume_p1_title']='My resume';
keysTab['en']['resume_p1_txt']='...';

//skills.html
keysTab['en']['skills_title']='Skills';
keysTab['en']['skills_p1_title']='My skills';
keysTab['en']['skills_p1_txt']='...';



//------------------- FRENCH KEYS ---------------------//
//index.html
keysTab['fr']['website_title']='Site web de Antoine';
keysTab['fr']['language_txt']='Langues: ';
keysTab['fr']['welcome_title']='Bienvenue';
keysTab['fr']['author']='Site web maintenu par Antoine Laulan.';
keysTab['fr']['website_p1_title']='Site web en construction...';
keysTab['fr']['website_p1_txt']="Bienvenue sur mon premier site web personnel. Son but est d'étendre et améliorer mon CV. Profitez de votre visite et si vous remarquez une quelconque erreur merci de me le notifier à l'adresse mail suivante: "

//menu
keysTab['fr']['about_menu']='A propos';
keysTab['fr']['resume_menu']='CV';
keysTab['fr']['skills_menu']='Compétences';
keysTab['fr']['pro_menu']='Expérience Pro';
keysTab['fr']['home_menu']='Accueil';

//about.html
keysTab['fr']['about_title']='A propos de moi';
keysTab['fr']['about_p1_title']='A propos';
keysTab['fr']['about_p1_txt']='Dans une galaxie lointaine, très lointaine..';

//pro_exp.html
keysTab['fr']['pro_title']='Expériences professionnelles';
keysTab['fr']['pro_p1_title']='List de mes expériences';
keysTab['fr']['pro_p1_txt']='Première';

//resume.html
keysTab['fr']['resume_title']='CV';
keysTab['fr']['resume_p1_title']='Mon CV';
keysTab['fr']['resume_p1_txt']='...';

//skills.html
keysTab['fr']['skills_title']='Compétences';
keysTab['fr']['skills_p1_title']='Mes compétences';
keysTab['fr']['skills_p1_txt']='...';

$(document).ready(function() {
	// onclick behavior
	$('.lang').click( function() {
       	lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.tr').each(function(i){
        	$(this).text(keysTab[lang][ $(this).attr('key') ]);
        });
    });

    $('.menu_btn').click( function(){
    	$('.tr').each(function(i){
        	$(this).text(keysTab[lang][ $(this).attr('key') ]);
        });
    });
});