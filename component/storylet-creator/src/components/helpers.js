export function translate (text, ul) {
    if(ln[text+"_"+ul])
        return ln[text+"_"+ul];
    else if (ln[text+"_en"])
        return ln[text+"_en"];
    else
        return text+"_"+ul;
}

let ln = [];

/******** IT ********/
// MENU
ln["newText_it"] = "Nuovo testo";

// SIDE MENU
ln["save_it"] = "Salva";
ln["autosave_it"] = "Autosave";
ln["language_it"] = "Lingua";

// WORD IDEAS
ln["analogies_it"] = "Analogie";
ln["synonyms_it"] = "Sinonimi";
ln["rhymes_it"] = "Rime";
ln["path_it"] = "PERCORSO";
ln["fullLemma_it"] = "Lista sinonimi";
ln["word_it"] = "Parola";
ln["score_it"] = "Punteggio";
ln["frequency_it"] = "Frequenza";
ln["syllables_it"] = "Sillabe";

// PROPERTIES
ln["component_it"] = "Componente";
ln["slide_it"] = "Scena";

ln["title_it"] = "Titolo";
ln["description_it"] = "Descrizione";

ln["template_it"] = "Template";
ln["linear_it"] = "lineare";
ln["snail_it"] = "chiocciola";
ln["cube_it"] = "cubo";
ln["autoplay_it"] = "Autoplay";

ln["size_it"] = "Dimensione";
ln["width_it"] = "L";
ln["height_it"] = "H";
ln["position_it"] = "Posizione";
ln["scale_it"] = "Scala";
ln["lock_it"] = "Blocca";
ln["rotate_it"] = "Ruota";
ln["degrees_it"] = "gradi";
ln["font_it"] = "Carattere";
ln["color_it"] = "Colore";
ln["size2_it"] = "Dim.";
ln["delete_it"] = "Elimina";

// tooltip
ln["flipH_it"] = "Specchia orizzontalente";
ln["flipV_it"] = "Specchia verticalmente";
ln["bringsUp_it"] = "Porta in primo piano";
ln["keepRatio_it"] = "Mantenere il rapporto di aspetto";

/******** EN ********/

// MENU
ln["newText_en"] = "Nex Text";

// SIDE MENU
ln["save_en"] = "Save";
ln["autosave_en"] = "Autosave";
ln["language_en"] = "Language";

// WORD IDEAS
ln["analogies_en"] = "Analogies";
ln["synonyms_en"] = "Synonyms";
ln["rhymes_en"] = "Rhymes";
ln["path_en"] = "PATH";
ln["fullLemma_en"] = "Word";
ln["word_en"] = "Word";
ln["score_en"] = "Score";
ln["frequency_en"] = "Frequency";
ln["syllables_en"] = "Syllables";

// PROPERTIES
ln["component_en"] = "Component";
ln["slide_en"] = "Slide";

ln["title_en"] = "Title";
ln["description_en"] = "Description";

ln["template_en"] = "Template";
ln["linear_en"] = "linear";
ln["snail_en"] = "snail";
ln["cube_en"] = "cube";
ln["autoplay_en"] = "Autoplay";

ln["size_en"] = "Size";
ln["width_en"] = "W";
ln["height_en"] = "H";
ln["position_en"] = "Position";
ln["scale_en"] = "Scale";
ln["lock_en"] = "Lock";
ln["rotate_en"] = "Rotate";
ln["degrees_en"] = "degrees";
ln["font_en"] = "Font";
ln["color_en"] = "Color";
ln["size2_en"] = "Size";
ln["delete_en"] = "Delete";

// tooltip
ln["flipH_en"] = "Flip Horizontal";
ln["flipV_en"] = "Flip Vertical";
ln["bringsUp_en"] = "Brings Up";
ln["keepRatio_en"] = "Keep Aspect Ratio";




















/******** ES ********/

// SIDE MENU
ln["save_es"] = "Guardar";
ln["autosave_es"] = "Autosave";
ln["language_es"] = "Idioma";

// WORD IDEAS
ln["analogies_es"] = "Analogie";
ln["synonyms_es"] = "Sinonimi";
ln["rhymes_es"] = "Rime";
ln["path_es"] = "PERCORSO";
ln["fullLemma_es"] = "Parola";
ln["word_es"] = "Parola";
ln["score_es"] = "Punteggio";
ln["frequency_es"] = "Frequenza";
ln["syllables_es"] = "Sillabe";

/******** FR ********/

// SIDE MENU
ln["save_fr"] = "Sauver";
ln["autosave_fr"] = "Autosave";
ln["language_fr"] = "Langue";

// WORD IDEAS
ln["analogies_fr"] = "Analogie";
ln["synonyms_fr"] = "Sinonimi";
ln["rhymes_fr"] = "Rime";
ln["path_fr"] = "PERCORSO";
ln["fullLemma_fr"] = "Parola";
ln["word_fr"] = "Parola";
ln["score_fr"] = "Punteggio";
ln["frequency_fr"] = "Frequenza";
ln["syllables_fr"] = "Sillabe";

/******** DE ********/

// SIDE MENU
ln["save_de"] = "Speichern";
ln["autosave_de"] = "Autosave";
ln["language_de"] = "Sprache";

// WORD IDEAS
ln["analogies_de"] = "Analogie";
ln["synonyms_de"] = "Sinonimi";
ln["rhymes_de"] = "Rime";
ln["path_de"] = "PERCORSO";
ln["fullLemma_de"] = "Parola";
ln["word_de"] = "Parola";
ln["score_de"] = "Punteggio";
ln["frequency_de"] = "Frequenza";
ln["syllables_de"] = "Sillabe";