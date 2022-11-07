// Developed by:ANDREW MANDILLAH @ www.github.com/mandillahjr2
function doGet() {
    return HtmlService.createTemplateFromFile('Index').evaluate();
  }
   
  //GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
  function getData(){
    var spreadSheetId = "1SObyhR17LYTLFU-VF9_f03M2XQRieygllV8pggxthB4"; //CHANGE
    var dataRange     = "Sheet1!A2:F"; //CHANGE
   
    var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
    var values  = range.values;
   
    return values;
  }
   
  //INCLUDE JAVASCRIPT AND CSS FILES
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }