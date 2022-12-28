function insertHint(text,gap){
mainfunc();
var cursorPosition = main_func.selection.getCursor();
var cur_row = cursorPosition.row;
var cur_col = cursorPosition.column;

main_func.focus();
main_func.insert(text);
main_func.moveCursorToPosition({row: cur_row, column: cur_col + gap});
}



function insertHintGap(text,gap,row_gap){
mainfunc();
var cursorPosition = main_func.selection.getCursor();
var cur_row = cursorPosition.row;
var cur_col = cursorPosition.column;

main_func.focus();
main_func.insert(text);
main_func.moveCursorToPosition({row: cur_row + row_gap, column: cur_col + gap});
}









