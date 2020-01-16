export function translate (text, ul) {
    if(ln[text+"_"+ul])
        return ln[text+"_"+ul];
    else if (ln[text+"_en"])
        return ln[text+"_en"];
    else
        return text+"_"+ul;
}

let ln = [];

/******** EN ********/

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
ln["delete_en"] = "Delete";
ln["size_en"] = "Size";
ln["width_en"] = "Width";
ln["height_en"] = "Height";
ln["position_en"] = "Position";
ln["scale_en"] = "Scale";
ln["lock_en"] = "Lock";
ln["rotate_en"] = "Rotate";
ln["degrees_en"] = "Deg.";
ln["font_en"] = "Font";
ln["color_en"] = "Color";
ln["size2_en"] = "Size";

/******** IT ********/

// SIDE MENU
ln["save_it"] = "Salva";
ln["autosave_it"] = "Autosave";
ln["language_it"] = "Lingua";

// WORD IDEAS
ln["analogies_it"] = "Analogie";
ln["synonyms_it"] = "Sinonimi";
ln["rhymes_it"] = "Rime";
ln["path_it"] = "PERCORSO";
ln["fullLemma_it"] = "Parola";
ln["word_it"] = "Parola";
ln["score_it"] = "Punteggio";
ln["frequency_it"] = "Frequenza";
ln["syllables_it"] = "Sillabe";

// PROPERTIES
ln["component_it"] = "Componente";
ln["slide_it"] = "Scena";
ln["delete_it"] = "Elimina";
ln["size_it"] = "Dimensione";
ln["width_it"] = "Largh.";
ln["height_it"] = "Altezza";
ln["position_it"] = "Posizione";
ln["scale_it"] = "Scala";
ln["lock_it"] = "Blocca";
ln["rotate_it"] = "Ruota";
ln["degrees_it"] = "Gradi";
ln["font_it"] = "Carattere";
ln["color_it"] = "Colore";
ln["size2_it"] = "Dim.";






















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