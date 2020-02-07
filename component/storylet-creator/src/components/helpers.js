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
ln["keyword_it"] = "Parola chiave";

// tooltip
ln["addText_it"] = "Aggiungi testo";
ln["addBackground_it"] = "Aggiungi sfondo";
ln["addImage_it"] = "Aggiungi immagine";
ln["playStoryPreview_it"] = "Riproduci anteprima storia";
ln["fantasyHelper_it"] = "Aiuta la tua fantasia!";

ln["moveUpSlide_it"] = "Sposta su scena";
ln["moveDownSlide_it"] = "Sposta giù scena";
ln["removeSlide_it"] = "Rimuovi scena";
ln["duplicateSlide_it"] = "Duplica scena";
ln["addSlide_it"] = "Aggiungi scena";

// SIDE MENU
ln["save_it"] = "Salva";
ln["autosave_it"] = "Autosave";
ln["language_it"] = "Lingua";
ln["exit_it"] = "Esci";

ln["saveBeforeExit_it"] = "Salva prima di uscire?";
ln["yes_it"] = "Si";
ln["no_it"] = "No";
ln["saved_it"] = "Salvataggio riuscito!";
ln["hasBeenSuccessfullySaved_it"] = "La storia è stata salvata con successo!";

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
ln["flipH_it"] = "Specchia orizzontalmente";
ln["flipV_it"] = "Specchia verticalmente";
ln["bringsUp_it"] = "Porta in primo piano";
ln["keepRatio_it"] = "Mantenere il rapporto di aspetto";

/******** EN ********/

// MENU
ln["newText_en"] = "Nex Text";
ln["keyword_en"] = "Keyword";

// tooltip
ln["addText_en"] = "Add Text";
ln["addBackground_en"] = "Add Background";
ln["addImage_en"] = "Add Image";
ln["playStoryPreview_en"] = "Play Story Preview";
ln["fantasyHelper_en"] = "Help your Imagination!";

ln["moveUpSlide_en"] = "Move Up Slide";
ln["moveDownSlide_en"] = "Move Down Slide";
ln["removeSlide_en"] = "Remove Slide";
ln["duplicateSlide_en"] = "Duplicate Slide";
ln["addSlide_en"] = "Add Slide";

// SIDE MENU
ln["save_en"] = "Save";
ln["autosave_en"] = "Autosave";
ln["language_en"] = "Language";
ln["exit_en"] = "Exit";

ln["saveBeforeExit_en"] = "Save before exit?";
ln["yes_en"] = "Yes";
ln["no_en"] = "No";
ln["saved_en"] = "Saving successful!";
ln["hasBeenSuccessfullySaved_en"] = "The Story has been successfully saved!";

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