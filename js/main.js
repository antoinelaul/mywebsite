var keysTab=new Array();
keysTab['en']=new Array();
keysTab['fr']=new Array();


//english keys
keysTab['en']['website_title']="Antoine's website";
keysTab['en']['language_txt']='Language: ';
keysTab['en']['welcome_title']='Welcome';
keysTab['en']['author']='Website maintained by Antoine Laulan.';
keysTab['en']['website_state_title']='Website processing...';
keysTab['en']['website_state_txt']="Welcome to my first personal website. His purpose is to extend and precise my resume. Enjoy your visit and please if you notice something wrong tell me about it at the following mail address: "

//french keys
keysTab['fr']['website_title']='Site web de Antoine';
keysTab['fr']['language_txt']='Langues: ';
keysTab['fr']['welcome_title']='Bienvenue';
keysTab['fr']['author']='Site web maintenu par Antoine Laulan.';
keysTab['fr']['website_state_title']='Site web en construction...';
keysTab['fr']['website_state_txt']="Bienvenue sur mon premier site web personnel. Son but est d'étendre et améliorer mon CV. Profitez de votre visite et si vous remarquez une quelconque erreur merci de me le notifier à l'adresse mail suivante: "


$(document).ready(function() {
    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.tr').each(function(i){
          $(this).text(keysTab[lang][ $(this).attr('key') ]);
        });
    });
});